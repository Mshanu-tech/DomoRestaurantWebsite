import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";

const heading = "An Evening Worth Savoring";

export default function Hero() {
  const words = heading.split(" ");

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop"
          alt="Elegant candlelit dining room at Lumière"
          className="w-full h-full object-cover scale-[1.08]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
      </div>

      <div className="relative z-10 container-px mx-auto w-full pb-24 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-center gap-3 text-gold-light text-xs md:text-sm tracking-[0.35em] uppercase font-medium mb-6"
        >
          <span className="h-px w-10 bg-gold-light" />
          Fine Dining &middot; Est. 2009
        </motion.span>

        <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.03] max-w-4xl text-balance mb-8">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-4">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + i * 0.09, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-white/75 text-base md:text-lg max-w-md leading-relaxed mb-10"
        >
          Contemporary cuisine built on seasonal ingredients, quiet craftsmanship, and a room made for lingering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button size="lg" onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}>
            Reserve Table
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Menu
          </Button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        onClick={() => document.getElementById("dishes")?.scrollIntoView({ behavior: "smooth" })}
        className="hidden sm:flex absolute right-10 bottom-10 z-10 flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
}
