import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gold text-white hover:bg-gold-dark shadow-[0_8px_30px_-8px_rgba(184,134,11,0.6)]",
  outline:
    "border border-white/70 text-white hover:bg-white hover:text-ink backdrop-blur-sm",
  dark:
    "bg-ink text-white hover:bg-ink-soft",
  ghost:
    "text-ink-soft hover:text-gold",
};

const sizes = {
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
  sm: "px-5 py-2.5 text-xs",
};

const Button = forwardRef(
  ({ children, variant = "primary", size = "md", className = "", as = "button", ...props }, ref) => {
    const Comp = motion[as] || motion.button;
    return (
      <Comp
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide uppercase transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
export default Button;
