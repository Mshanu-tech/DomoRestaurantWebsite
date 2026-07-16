import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

const PHONE = "+15551234567";
const WHATSAPP = "15551234567";

export default function FloatingActions() {
  const scrollToReserve = () => {
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop floating stack */}
      <div className="hidden md:flex fixed right-6 bottom-8 z-40 flex-col items-end gap-3">
        <motion.button
          onClick={scrollToReserve}
          aria-label="Reserve a table"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-14 h-14 rounded-full bg-gold text-white flex items-center justify-center shadow-lg shadow-black/20"
        >
          <CalendarCheck size={20} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs text-white opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            Reserve Table
          </span>
        </motion.button>

        <motion.a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order via WhatsApp"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20"
        >
          <MessageCircle size={24} fill="white" className="text-[#25D366]" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs text-white opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            WhatsApp
          </span>
        </motion.a>

        <motion.a
          href={`tel:${PHONE}`}
          aria-label="Call the restaurant"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.15, duration: 0.5 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative w-14 h-14 rounded-full bg-ink text-white flex items-center justify-center shadow-lg shadow-black/20"
        >
          <Phone size={20} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-3 py-1.5 text-xs text-white opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            Call Us
          </span>
        </motion.a>
      </div>

      {/* Mobile bottom action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/95 glass border-t border-white/10 grid grid-cols-3 pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${PHONE}`}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 active:bg-white/5"
          aria-label="Call"
        >
          <Phone size={18} />
          <span className="text-[10px] tracking-wide uppercase">Call</span>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white/80 active:bg-white/5 border-x border-white/10"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="text-[10px] tracking-wide uppercase">WhatsApp</span>
        </a>
        <button
          onClick={scrollToReserve}
          className="flex flex-col items-center justify-center gap-1 py-3 text-gold active:bg-white/5"
          aria-label="Reserve a table"
        >
          <CalendarCheck size={18} />
          <span className="text-[10px] tracking-wide uppercase font-semibold">Reserve</span>
        </button>
      </div>
    </>
  );
}
