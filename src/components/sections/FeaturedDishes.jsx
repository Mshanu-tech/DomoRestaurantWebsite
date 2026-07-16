import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import RatingStars from "../ui/RatingStars";
import { featuredDishes } from "../../data/menu";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

function DishCard({ dish, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      className="group bg-surface rounded-2xl overflow-hidden shadow-[0_2px_24px_rgba(17,24,39,0.06)] hover:shadow-[0_24px_48px_-16px_rgba(17,24,39,0.18)] transition-shadow duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-ink text-sm font-display font-semibold px-3 py-1 rounded-full shadow-sm">
          ${dish.price}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-xl text-ink font-medium">{dish.name}</h3>
          <button
            aria-label={`Add ${dish.name} to order`}
            className="shrink-0 w-8 h-8 rounded-full border border-ink/10 flex items-center justify-center text-ink/50 group-hover:border-gold group-hover:text-gold group-hover:rotate-90 transition-all duration-500"
          >
            <Plus size={14} />
          </button>
        </div>
        <p className="text-sm text-ink-soft/60 leading-relaxed mb-4">{dish.description}</p>
        <RatingStars rating={dish.rating} />
      </div>
    </motion.article>
  );
}

export default function FeaturedDishes() {
  return (
    <section id="dishes" className="py-24 md:py-32 bg-bg">
      <div className="container-px mx-auto">
        <SectionTitle
          eyebrow="From the Kitchen"
          title="Featured Signature Dishes"
          description="A curated selection of our most celebrated plates, each shaped by seasonal ingredients and quiet precision."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
