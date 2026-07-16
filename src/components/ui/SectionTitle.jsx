import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${alignment} mb-14 md:mb-20`}
    >
      {eyebrow && (
        <span
          className={`mb-4 flex items-center gap-3 text-xs tracking-[0.35em] uppercase font-medium ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium text-balance leading-[1.1] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-ink-soft/70"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
