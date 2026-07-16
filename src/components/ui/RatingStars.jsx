import { Star } from "lucide-react";

export default function RatingStars({ rating = 5, size = 14, className = "" }) {
  const stars = Array.from({ length: 5 });
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`Rated ${rating} out of 5`}>
      {stars.map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? "fill-gold text-gold" : "fill-transparent text-ink/20"}
        />
      ))}
    </div>
  );
}
