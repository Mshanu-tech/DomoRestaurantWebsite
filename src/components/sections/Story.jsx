import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="container-px mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop"
              alt="Interior of the Lumière dining room"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-surface">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop"
              alt="Chef preparing a dish"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <span className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase font-medium text-gold mb-4">
            <span className="h-px w-8 bg-gold" />
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink leading-[1.1] mb-6 text-balance">
            Fifteen Years of Quiet Craftsmanship
          </h2>
          <p className="text-ink-soft/70 leading-relaxed mb-5">
            Lumière began as a single room and a simple conviction: that food, served without pretense, could still be
            extraordinary. Since 2009, our kitchen has built its reputation one season at a time — sourcing from the
            same family farms, refining recipes by hand, and treating every table as the only one in the house.
          </p>
          <p className="text-ink-soft/70 leading-relaxed mb-8">
            Our philosophy is simple: ingredients first, technique in service of flavor, and hospitality that never
            hurries a moment. It's an experience meant to be lingered over, course by course.
          </p>
          <div className="flex flex-wrap gap-10 mb-10">
            <div>
              <p className="font-display text-4xl text-gold mb-1">15+</p>
              <p className="text-xs tracking-wide uppercase text-ink-soft/50">Years of Excellence</p>
            </div>
            <div>
              <p className="font-display text-4xl text-gold mb-1">12</p>
              <p className="text-xs tracking-wide uppercase text-ink-soft/50">Culinary Awards</p>
            </div>
            <div>
              <p className="font-display text-4xl text-gold mb-1">40k+</p>
              <p className="text-xs tracking-wide uppercase text-ink-soft/50">Guests Served</p>
            </div>
          </div>
          <Button variant="dark">Read Our Full Story</Button>
        </motion.div>
      </div>
    </section>
  );
}
