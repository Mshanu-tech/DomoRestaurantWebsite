import { motion } from "framer-motion";
import { Award, ChefHat, Quote } from "lucide-react";

const signatureDishes = ["Wagyu Tenderloin", "Lobster Risotto", "Truffle Egg Brioche"];
const awards = [
  "James Beard Foundation Nominee, 2023",
  "Michelin Guide Recommended, 2019–Present",
  "Best New Restaurant, City Gourmet Awards",
];

export default function Chef() {
  return (
    <section id="chef" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="container-px mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=900&auto=format&fit=crop"
              alt="Executive Chef Antoine Rousseau"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 bg-surface rounded-xl shadow-xl p-5 flex items-center gap-3">
            <Quote size={22} className="text-gold shrink-0" />
            <p className="text-sm text-ink-soft/70 italic leading-snug">
              "Cooking is memory, made edible."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase font-medium text-gold mb-4">
            <span className="h-px w-8 bg-gold" />
            Executive Chef
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink mb-6 text-balance">
            Antoine Rousseau
          </h2>
          <p className="text-ink-soft/70 leading-relaxed mb-6 max-w-xl">
            Trained in Lyon and seasoned across three Michelin-starred kitchens, Chef Antoine brings two decades of
            classical French technique to a menu shaped by local, seasonal ingredients. His approach favors restraint
            over spectacle — letting a handful of components speak clearly on the plate.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="flex items-center gap-2 text-ink font-display text-lg mb-3">
                <Award size={18} className="text-gold" /> Awards
              </h4>
              <ul className="space-y-2 text-sm text-ink-soft/60">
                {awards.map((a) => (
                  <li key={a} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold/50">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-ink font-display text-lg mb-3">
                <ChefHat size={18} className="text-gold" /> Signature Dishes
              </h4>
              <ul className="space-y-2 text-sm text-ink-soft/60">
                {signatureDishes.map((d) => (
                  <li key={d} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold/50">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-6 border-t border-ink/10">
            <div>
              <p className="font-display text-3xl text-gold">20+</p>
              <p className="text-xs tracking-wide uppercase text-ink-soft/50">Years Experience</p>
            </div>
            <div className="h-10 w-px bg-ink/10" />
            <div>
              <p className="font-display text-3xl text-gold">3</p>
              <p className="text-xs tracking-wide uppercase text-ink-soft/50">Michelin Kitchens</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
