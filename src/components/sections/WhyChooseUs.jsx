import { motion } from "framer-motion";
import { Leaf, Trophy, Clock, Sparkles } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { whyChooseUs } from "../../data/menu";

const icons = {
  w1: Leaf,
  w2: Trophy,
  w3: Clock,
  w4: Sparkles,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-ink relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-px mx-auto relative">
        <SectionTitle
          eyebrow="Why Lumière"
          title="A Standard, Not a Slogan"
          description="Every plate rests on four commitments we've never compromised on."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-2xl border border-white/10 hover:border-gold/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-ink transition-colors duration-500">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
