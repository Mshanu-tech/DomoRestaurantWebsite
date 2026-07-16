import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Input, Select, Textarea } from "../ui/Input";
import Button from "../ui/Button";

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6+ Guests"];
const timeOptions = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: guestOptions[1],
    date: "",
    time: timeOptions[1],
    message: "",
  });

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/90" />
      </div>

      <div className="relative container-px mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase font-medium text-gold-light mb-4">
            <span className="h-px w-8 bg-gold-light" />
            Reservations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6 text-balance">
            Reserve Your Table
          </h2>
          <p className="text-white/60 leading-relaxed max-w-md mb-8">
            Tables are limited each evening to preserve the pace and quiet of the room. We recommend booking at least
            48 hours in advance, especially for weekends.
          </p>
          <ul className="space-y-4 text-white/70 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs font-semibold">1</span>
              Share your preferred date, time, and party size
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs font-semibold">2</span>
              Our host team confirms within a few hours
            </li>
            <li className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs font-semibold">3</span>
              Arrive, and let the evening take its course
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 glass"
        >
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10">
              <CheckCircle2 size={48} className="text-gold mb-4" />
              <h3 className="font-display text-2xl text-white mb-2">Request Received</h3>
              <p className="text-white/60 text-sm max-w-xs">
                Thank you, {form.name.split(" ")[0] || "guest"}. Our host team will confirm your table shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7">
              <Input
                id="name"
                label="Full Name"
                placeholder="Jane Doe"
                required
                value={form.name}
                onChange={handleChange("name")}
              />
              <Input
                id="phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                required
                value={form.phone}
                onChange={handleChange("phone")}
              />
              <Select
                id="guests"
                label="Guests"
                options={guestOptions}
                value={form.guests}
                onChange={handleChange("guests")}
              />
              <Input
                id="date"
                label="Date"
                type="date"
                required
                value={form.date}
                onChange={handleChange("date")}
              />
              <Select
                id="time"
                label="Time"
                options={timeOptions}
                value={form.time}
                onChange={handleChange("time")}
                className="sm:col-span-2"
              />
              <Textarea
                id="message"
                label="Special Requests"
                placeholder="Allergies, occasion, seating preference…"
                value={form.message}
                onChange={handleChange("message")}
                className="sm:col-span-2"
              />
              <Button type="submit" className="sm:col-span-2 mt-2 w-full">
                Reserve Table
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
