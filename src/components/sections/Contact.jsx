import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { InstagramIcon } from "../ui/BrandIcons";
import SectionTitle from "../ui/SectionTitle";

const details = [
  { icon: MapPin, label: "Address", value: "128 Rue Lumière, Downtown District, NY 10012" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: Mail, label: "Email", value: "reservations@lumiere.com", href: "mailto:reservations@lumiere.com" },
  { icon: Clock, label: "Hours", value: "Tue – Sun, 5:00 PM – 11:00 PM · Closed Mondays" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg">
      <div className="container-px mx-auto">
        <SectionTitle eyebrow="Visit Us" title="Find Your Way to Lumière" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden shadow-[0_4px_28px_rgba(17,24,39,0.08)] min-h-[360px]"
          >
            <iframe
              title="Lumière location map"
              src="https://www.google.com/maps?q=New+York&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface rounded-2xl p-8 md:p-10 shadow-[0_4px_28px_rgba(17,24,39,0.06)] flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <d.icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs tracking-wide uppercase text-ink-soft/40 mb-1">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-ink font-medium hover:text-gold transition-colors">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-ink font-medium leading-snug">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-10 pt-8 border-t border-ink/10">
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 text-[#1c9e4d] text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/10 text-gold text-sm font-medium hover:bg-gold/20 transition-colors"
              >
                <InstagramIcon size={16} /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
