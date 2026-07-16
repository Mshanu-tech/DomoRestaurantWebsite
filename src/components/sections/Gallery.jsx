import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { galleryImages } from "../../data/menu";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface">
      <div className="container-px mx-auto">
        <SectionTitle
          eyebrow="Gallery"
          title="Moments Worth the Table"
          description="A glimpse into the plates, the room, and the details in between."
        />
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 space-y-5">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden rounded-xl break-inside-avoid cursor-pointer ${
                img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 w-11 h-11 rounded-full border border-white/70 flex items-center justify-center text-white">
                  <Expand size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
