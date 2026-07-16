import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-ink text-center container-px">
      <span className="text-gold text-xs tracking-[0.35em] uppercase mb-4">404</span>
      <h1 className="font-display text-4xl md:text-5xl text-white mb-4">This Table Isn't Set</h1>
      <p className="text-white/50 max-w-sm mb-8">
        The page you're looking for has been moved or doesn't exist. Let's get you back to the menu.
      </p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </section>
  );
}
