import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { menuCategories, menuItems } from "../../data/menu";

export default function MenuCategories() {
  const [active, setActive] = useState(menuCategories[2]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-bg">
      <div className="container-px mx-auto">
        <SectionTitle
          eyebrow="The Menu"
          title="Crafted Through the Day"
          description="Explore our offerings across every part of the day, each built around what's freshest that morning."
        />

        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 sm:px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
                active === cat ? "text-white" : "text-ink-soft/60 hover:text-ink"
              }`}
            >
              {active === cat && (
                <motion.span
                  layoutId="menu-tab-bg"
                  className="absolute inset-0 bg-ink rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {menuItems[active].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 items-start bg-surface rounded-xl p-4 hover:shadow-[0_12px_32px_-12px_rgba(17,24,39,0.15)] transition-shadow duration-500"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-24 h-24 rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg text-ink truncate">{item.name}</h3>
                    <span className="text-gold font-display font-semibold shrink-0">${item.price}</span>
                  </div>
                  <p className="text-sm text-ink-soft/60 leading-snug">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
