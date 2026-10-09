"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Code,
  ExternalLink,
  Globe,
  HelpCircle,
  Layers,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { SideOrangeLines, OrangeSectionDivider } from "@/components/ui/orange-accent-lines";
import { FullscreenMenu } from "@/components/ui/fullscreen-menu";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function AboutClientView() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is Tharun Kumar H?",
      a: "Tharun Kumar H (also known as Tharun or Tharunkumar) is a Full Stack AI Developer and Software Engineer based in Chennai, India. He specializes in building production web applications, LLM workflows, RESTful API services, and automated cloud deployments on AWS.",
    },
    {
      q: "What experience does Tharun Kumar H have?",
      a: "Tharun works as a Full Stack AI Developer at The Bot Company (building production client sites like lumi9.com, femi9.in, launchtospace.in, nackl.in) and previously served as a Full Stack Engineer Intern at SPI EDGE (engineering client booking systems & OCR finance automation) and YBI Foundation.",
    },
    {
      q: "What is Tharun's technical stack?",
      a: "Tharun's core stack encompasses Frontend (React.js, Next.js, TypeScript, Tailwind CSS), Backend (Python, FastAPI, Django, PostgreSQL, Supabase), AI/ML (TensorFlow, XGBoost, ANN, Knowledge Distillation, Prompt Engineering), and Cloud Infrastructure (AWS, Docker, CI/CD pipelines).",
    },
    {
      q: "What products and open-source projects has Tharun built?",
      a: "Key projects include Noetis (Portable AI Profile & Recovery Engine), SPI EDGE Client Booking System, Heart & Mind Emotional Wellness Platform, and high-accuracy Machine Learning prediction models.",
    },
    {
      q: "How can I hire or schedule a meeting with Tharun Kumar H?",
      a: "You can book a 1-on-1 15-minute discovery meeting directly at https://cal.com/tharun-kumar-wx6kly/15min, email tharunriot@gmail.com, or submit a message on the contact page.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#070708] text-[#f4f4f5] font-sans selection:bg-orange-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <SideOrangeLines />

      {/* NAVIGATION HEADER */}
      <header className="relative z-30 flex items-center justify-between mx-auto w-full max-w-7xl px-4 sm:px-8 pt-6 pb-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="glass-panel flex items-center gap-3.5 rounded-full px-5 py-2.5 shadow-xl border border-zinc-800/80">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-white uppercase">
              THARUNKUMAR.H
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-xs uppercase font-medium tracking-widest text-zinc-400 font-mono">
          <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <Link href="/about" className="text-orange-400 transition-colors font-bold">About &amp; FAQ</Link>
          <Link href="/#experience" className="hover:text-orange-400 transition-colors">Experience</Link>
          <Link href="/#projects" className="hover:text-orange-400 transition-colors">Projects</Link>
          <Link href="/#skyline" className="hover:text-orange-400 transition-colors">Skyline</Link>
          <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="hidden sm:flex items-center gap-2 rounded-full glass-panel px-5 py-2.5 text-xs font-semibold text-white hover:bg-zinc-800 transition-all border border-zinc-800"
        >
          Contact Me <ArrowUpRight className="h-3.5 w-3.5 text-orange-400" />
        </Link>
      </header>

      {/* Fullscreen Navigation Modal */}
      <FullscreenMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* HERO BANNER SECTION */}
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 pt-8 pb-16">
        <div className="border-b border-zinc-800 pb-8 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
            /// ABOUT &amp; ENTITY PROFILE
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mt-2 font-display uppercase leading-[1.02]">
            Tharun Kumar H <br />
            <span className="text-zinc-400">Full Stack AI Developer</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Engineering scalable web applications, large language model (LLM) workflows, and automated cloud infrastructure from Chennai, India.
          </p>
        </div>

        {/* CAREER TIMELINE SUMMARY */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            <Layers className="h-4 w-4" /> CAREER &amp; EXPERIENCE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-7 rounded-3xl border border-zinc-800/80 space-y-3 bg-zinc-900/40">
              <span className="text-xs font-mono text-orange-400 uppercase font-bold">
                JUL 2026 – PRESENT
              </span>
              <h3 className="text-xl font-bold text-white">Full Stack AI Developer</h3>
              <p className="text-xs text-zinc-400 font-mono">The Bot Company — Chennai, India</p>
              <p className="text-xs text-zinc-300 leading-relaxed pt-2">
                Leading full-stack engineering and AWS deployment pipelines for production web platforms including lumi9.com, femi9.in, launchtospace.in, and nackl.in.
              </p>
            </div>

            <div className="glass-panel p-7 rounded-3xl border border-zinc-800/80 space-y-3 bg-zinc-900/40">
              <span className="text-xs font-mono text-zinc-400 uppercase font-bold">
                APR 2026 – JUL 2026
              </span>
              <h3 className="text-xl font-bold text-white">Full Stack Engineer (Intern)</h3>
              <p className="text-xs text-zinc-400 font-mono">SPI EDGE — Tamil Nadu, India</p>
              <p className="text-xs text-zinc-300 leading-relaxed pt-2">
                Engineered full-stack client booking engine and OCR document expense tracking service using React.js, FastAPI, and Django.
              </p>
            </div>
          </div>
        </section>

        <OrangeSectionDivider />

        {/* FAQ ACCORDION SECTION (OPTIMIZED FOR AEO & VOICE SEARCH) */}
        <section id="faq" className="py-12">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
              <HelpCircle className="h-4 w-4" /> FREQUENTLY ASKED QUESTIONS (AEO &amp; GEO)
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display mt-2">
              Entity Information &amp; FAQ
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              Verified answers structured for search engines, voice assistants, and Generative AI search systems (ChatGPT, Perplexity, Gemini, Claude).
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-panel border border-zinc-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-orange-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-orange-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/50 pt-4 font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mt-16 rounded-3xl glass-panel p-8 sm:p-10 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              DIRECT 1-ON-1 DISCOVERY CALL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Have a custom project or technical inquiry?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg">
              Book a 15-minute call directly on Cal.com or reach out via email.
            </p>
          </div>
          <a
            href="https://cal.com/tharun-kumar-wx6kly/15min"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 flex items-center gap-2.5 rounded-full bg-orange-500 hover:bg-orange-400 px-7 py-3.5 text-xs font-bold text-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/20 active:scale-95"
          >
            Book 15-Min Meeting <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      {/* CINEMATIC FOOTER */}
      <CinematicFooter />
    </div>
  );
}
