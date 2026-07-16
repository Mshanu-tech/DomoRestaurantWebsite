export function Input({ label, id, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium">
        {label}
      </label>
      <input
        id={id}
        className="w-full bg-transparent border-b border-white/25 py-3 text-white placeholder:text-white/30 focus:border-gold outline-none transition-colors duration-300 font-body"
        {...props}
      />
    </div>
  );
}

export function Select({ label, id, options, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium">
        {label}
      </label>
      <select
        id={id}
        className="w-full bg-transparent border-b border-white/25 py-3 text-white focus:border-gold outline-none transition-colors duration-300 font-body [&>option]:text-ink"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Textarea({ label, id, className = "", ...props }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium">
        {label}
      </label>
      <textarea
        id={id}
        rows={3}
        className="w-full bg-transparent border-b border-white/25 py-3 text-white placeholder:text-white/30 focus:border-gold outline-none transition-colors duration-300 font-body resize-none"
        {...props}
      />
    </div>
  );
}
