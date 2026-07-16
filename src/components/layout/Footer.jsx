import { Flame, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "../ui/BrandIcons";
import { useState } from "react";

const columns = [
  {
    title: "Explore",
    links: ["Home", "Menu", "Our Story", "Chef", "Gallery"],
  },
  {
    title: "Visit",
    links: ["Reservations", "Private Events", "Gift Cards", "Careers"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-px mx-auto py-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-14">
        <div>
          <div className="flex items-center gap-2 font-display text-3xl text-white mb-5">
            <Flame size={22} className="text-gold" strokeWidth={1.5} />
            Lumière
          </div>
          <p className="max-w-xs leading-relaxed text-sm">
            Contemporary fine dining crafted from seasonal ingredients, served in a room designed for unhurried evenings.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-display text-lg mb-5">{col.title}</h4>
            <ul className="space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-gold transition-colors duration-300">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-white font-display text-lg mb-5">Stay in the Loop</h4>
          <p className="text-sm mb-4">Seasonal menus, chef's specials, and private events — straight to your inbox.</p>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-b border-white/25 pb-2 focus-within:border-gold transition-colors">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              aria-label="Email address"
              className="bg-transparent outline-none text-sm placeholder:text-white/30 flex-1"
            />
            <button type="submit" aria-label="Subscribe" className="text-gold hover:translate-x-1 transition-transform">
              <Send size={16} />
            </button>
          </form>
          {submitted && <p className="text-xs text-gold mt-2">Thank you — you're on the list.</p>}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Lumière Restaurant. All rights reserved.</p>
          <p>Crafted with care for those who savor the details.</p>
        </div>
      </div>
    </footer>
  );
}
