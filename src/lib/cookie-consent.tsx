import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface CookiePreferences {
  necessary: true;
  externalMedia: boolean;
  decidedAt: string;
}

interface CookieConsentContextValue {
  hasResolved: boolean;
  preferences: CookiePreferences | null;
  allowExternalMedia: boolean;
  isPreferencesOpen: boolean;
  acceptAll: () => void;
  acceptEssential: () => void;
  savePreferences: (next: { externalMedia: boolean }) => void;
  enableExternalMedia: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const STORAGE_KEY = "buttermarkt-cookie-preferences-v1";

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const createPreferences = (externalMedia: boolean): CookiePreferences => ({
  necessary: true,
  externalMedia,
  decidedAt: new Date().toISOString(),
});

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasResolved, setHasResolved] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CookiePreferences>;

        if (typeof parsed.externalMedia === "boolean") {
          setPreferences({
            necessary: true,
            externalMedia: parsed.externalMedia,
            decidedAt: parsed.decidedAt || new Date().toISOString(),
          });
        }
      }
    } catch {
      // Ignore malformed persisted preferences and fall back to showing the banner.
    } finally {
      setHasResolved(true);
    }
  }, []);

  const persist = (next: CookiePreferences) => {
    setPreferences(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage write failures and keep the in-memory preference for the current session.
    }
  };

  const acceptAll = () => {
    persist(createPreferences(true));
    setIsPreferencesOpen(false);
  };

  const acceptEssential = () => {
    persist(createPreferences(false));
    setIsPreferencesOpen(false);
  };

  const savePreferences = (next: { externalMedia: boolean }) => {
    persist(createPreferences(next.externalMedia));
    setIsPreferencesOpen(false);
  };

  const enableExternalMedia = () => {
    persist(createPreferences(true));
  };

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      hasResolved,
      preferences,
      allowExternalMedia: Boolean(preferences?.externalMedia),
      isPreferencesOpen,
      acceptAll,
      acceptEssential,
      savePreferences,
      enableExternalMedia,
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => setIsPreferencesOpen(false),
    }),
    [hasResolved, isPreferencesOpen, preferences],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }

  return context;
}
