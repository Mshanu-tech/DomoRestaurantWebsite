import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const links = [
  { label: "Home", id: "hero" },
  { label: "Menu", id: "menu" },
  { label: "Story", id: "story" },
  { label: "Chef", id: "chef" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3" : "bg-transparent py-6"
        }`}
      >
        <nav className="container-px mx-auto flex items-center justify-between" aria-label="Main navigation">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-2xl tracking-wide"
            onClick={() => setOpen(false)}
          >
            <Flame size={20} className="text-gold" strokeWidth={1.5} />
            <span className={scrolled ? "text-ink" : "text-white"}>Lumière</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => goTo(l.id)}
                  className={`relative text-sm tracking-wide font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? "text-ink-soft hover:text-gold" : "text-white/90 hover:text-white"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button size="sm" onClick={() => goTo("reserve")}>
              Reserve Table
            </Button>
          </div>

          <button
            className={`lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
          >
            <div className="flex items-center justify-between container-px pt-6">
              <span className="font-display text-2xl text-white">Lumière</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white">
                <X size={28} />
              </button>
            </div>
            <motion.ul
              className="flex flex-col items-center justify-center gap-8 h-[70vh]"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }}
            >
              {links.map((l) => (
                <motion.li
                  key={l.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => goTo(l.id)}
                    className="font-display text-3xl text-white/90 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Button onClick={() => goTo("reserve")}>Reserve Table</Button>
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
