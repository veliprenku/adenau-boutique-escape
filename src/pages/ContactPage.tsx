import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const { lang, t } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === "de" ? "Vielen Dank für Ihre Nachricht!" : "Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 section-padding bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            {lang === "de" ? "Schreiben Sie uns" : "Get in touch"}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-5">
            {t("contact", "heroTitle")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("contact", "heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="section-padding section-spacing">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-8">
                {t("contact", "info")}
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("contact", "address")}</p>
                    <p className="text-muted-foreground text-sm">Buttermarkt 3<br />53518 Adenau, Deutschland</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("contact", "phone")}</p>
                    <p className="text-muted-foreground text-sm">+49 2691 123456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{t("contact", "email")}</p>
                    <p className="text-muted-foreground text-sm">info@buttermarkt-adenau.de</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.8!2d6.9345!3d50.3825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bfb0b0b0b0b0b0%3A0x0!2sAdenau!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Map"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="bg-card border border-border/50 rounded-xl p-8 md:p-10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact", "name")}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact", "email")}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact", "message")}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:shadow-md"
                >
                  <Send size={16} />
                  {t("contact", "send")}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
