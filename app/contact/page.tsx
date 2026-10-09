"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SideOrangeLines } from "@/components/ui/orange-accent-lines";
import { FullscreenMenu } from "@/components/ui/fullscreen-menu";
import { CalBookingSection } from "@/components/ui/cal-booking";

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="relative min-h-screen bg-[#070708] text-[#f4f4f5] font-sans selection:bg-orange-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <SideOrangeLines />
      
      {/* NAVIGATION HEADER */}
      <header className="relative z-30 flex items-center justify-between mx-auto w-full max-w-7xl px-4 sm:px-8 pt-6 pb-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="glass-panel flex items-center gap-3 rounded-full px-5 py-2.5 shadow-2xl border border-zinc-800/80">
            <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 ring-2 ring-orange-500/40" />
            <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
              Tharun
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-xs uppercase font-medium tracking-widest text-zinc-400">
          <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-orange-400 transition-colors">About</Link>
          <Link href="/#experience" className="hover:text-orange-400 transition-colors">Experience</Link>
          <Link href="/#projects" className="hover:text-orange-400 transition-colors">Projects</Link>
          <Link href="/#skyline" className="hover:text-orange-400 transition-colors">Skyline</Link>
          <Link href="/#skills" className="hover:text-orange-400 transition-colors">Skills</Link>
        </div>

        <Link
          href="/contact"
          className="hidden sm:flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-xs font-bold text-black hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/20"
        >
          Contact <ArrowUpRight className="h-3.5 w-3.5 text-black" />
        </Link>
      </header>

      {/* Fullscreen Navigation Modal (Matching Reference Image) */}
      <FullscreenMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* MAIN CONTENT SECTION (MATCHING IMAGE 2 LAYOUT) */}
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 pt-8 pb-16">
        <div className="border-b border-zinc-800 pb-8 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-500">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2 font-display">
            Let's connect & discuss <br className="hidden sm:block" />
            your project or role
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT FORM (MATCHING IMAGE 2 MINIMAL FORM) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-emerald-500/30 bg-emerald-950/20 text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name || "friend"}. Tharun will get back to you shortly at {formData.email || "your email address"}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-2.5 text-xs font-bold text-white hover:bg-zinc-700 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-base text-white placeholder-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. hello@john.doe"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-base text-white placeholder-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
                    Subject / Project Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full Stack AI Application / Role Opportunity"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-base text-white placeholder-zinc-600 focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, engineering requirement, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-base text-white placeholder-zinc-600 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* HUGE SEND BUTTON WITH ARROW (MATCHING IMAGE 2 'SEND ↗') */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 text-4xl sm:text-5xl font-black text-white hover:text-orange-400 transition-colors tracking-tight font-display"
                  >
                    <span>Send</span>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black group-hover:bg-orange-500 group-hover:text-black transition-all">
                      <ArrowUpRight className="h-7 w-7" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN DETAILS (MATCHING IMAGE 2 RIGHT COLUMN) */}
          <div className="lg:col-span-5 space-y-10 lg:border-l lg:border-zinc-800/80 lg:pl-12">
            <div className="border-b border-zinc-800/80 pb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-4">
                Contact Details
              </span>

              <div className="space-y-6">
                <div>
                  <div className="text-xs text-zinc-400">General Inquiries:</div>
                  <a
                    href="mailto:tharunriot@gmail.com"
                    className="text-base font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    tharunriot@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-xs text-zinc-400">Schedule Call:</div>
                  <a
                    href="https://cal.com/tharun-kumar-wx6kly/15min"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-orange-400 hover:underline flex items-center gap-1"
                  >
                    Book a 15-Min Meeting <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div>
                  <div className="text-xs text-zinc-400 font-mono">Location:</div>
                  <div className="text-base font-semibold text-white">
                    Chennai, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-3">
                Social Profiles
              </span>
              <div className="flex flex-col gap-2.5 text-sm font-semibold text-zinc-300">
                <a
                  href="https://github.com/tharun-creator"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/htharun-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                  LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* CAL.COM SCHEDULING SECTION */}
      <CalBookingSection />

      {/* ==================================================== */}
      {/* VIBRANT ORANGE CONTACT US BANNER (MATCHING IMAGE 1) */}
      {/* ==================================================== */}
      <section className="w-full bg-[#f94e1b] text-black pt-12 pb-10 px-6 sm:px-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          
          {/* TOP ARROW */}
          <div className="flex justify-end mb-4">
            <ArrowUpRight className="h-10 w-10 text-black stroke-[2.5]" />
          </div>

          <div className="border-t border-b border-black/20 py-8 mb-10">
            <h2 className="text-[12vw] sm:text-[10vw] font-black tracking-tighter leading-none uppercase text-black font-display">
              CONTACT US
            </h2>
          </div>

          {/* BOTTOM 3 COLUMNS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-black/20 pb-8 text-black">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                Schedule Meeting
              </div>
              <a href="https://cal.com/tharun-kumar-wx6kly/15min" target="_blank" rel="noreferrer" className="text-base sm:text-lg font-bold hover:underline">
                Cal.com 15-Min Call ↗
              </a>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                Email
              </div>
              <a href="mailto:tharunriot@gmail.com" className="text-base sm:text-lg font-bold hover:underline">
                tharunriot@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                Location & Web
              </div>
              <div className="text-base sm:text-lg font-bold">
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-black/80">
            <div>© {new Date().getFullYear()} THARUN KUMAR H</div>
            <div>FULL STACK AI DEVELOPER</div>
          </div>

        </div>
      </section>

    </div>
  );
}
