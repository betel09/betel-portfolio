"use client";

import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-[#f5a623]">Contact Me</h2>
        <div className="w-16 h-1 bg-[#f5a623] rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12">

          {/* Info */}
          <div>
            <p className="text-[#8a9ab5] mb-8 leading-relaxed">
              I&apos;m open to any opportunities, collaborative projects, and full-time roles.
              Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: <HiMail size={20} />, text: "yemanebetel@gmail.com" },
                { icon: <HiPhone size={20} />, text: "+251 90 664 4386" },
                { icon: <HiLocationMarker size={20} />, text: "Addis Ababa, Ethiopia" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[#8a9ab5]">
                  <span className="text-[#f5a623]">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-[#161d2b] border border-[#2a3a52] rounded-xl px-4 py-3 text-sm text-[#f0f4f8] placeholder-[#8a9ab5] outline-none focus:ring-2 focus:ring-[#f5a623]/40 focus:border-[#f5a623]/40"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-[#161d2b] border border-[#2a3a52] rounded-xl px-4 py-3 text-sm text-[#f0f4f8] placeholder-[#8a9ab5] outline-none focus:ring-2 focus:ring-[#f5a623]/40 focus:border-[#f5a623]/40"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full bg-[#161d2b] border border-[#2a3a52] rounded-xl px-4 py-3 text-sm text-[#f0f4f8] placeholder-[#8a9ab5] outline-none focus:ring-2 focus:ring-[#f5a623]/40 focus:border-[#f5a623]/40 resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full py-3 rounded-xl font-bold transition-colors disabled:cursor-not-allowed bg-[#f5a623] text-[#0d1117] hover:bg-[#d4880a] disabled:opacity-70"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✅ Message Sent!"}
              {status === "error" && "Try Again"}
            </button>

            {/* Feedback */}
            {status === "sent" && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 text-green-400 text-sm text-center">
                Thank you! Your message has been sent!
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm text-center">
                Something went wrong. Please email me at yemanebetel@gmail.com
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}