"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContributionSkyline from "@/components/ui/contribution-skyline";
import { tharunRealContributions } from "@/lib/tharun-contributions-data";
import Skiper39 from "@/components/ui/skiper39";
import { OrangeSectionDivider, SideOrangeLines } from "@/components/ui/orange-accent-lines";
import { FullscreenMenu } from "@/components/ui/fullscreen-menu";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Code,
  ExternalLink,
  GitBranch,
  Globe,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";

const GithubIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "web" | "live">("all");
  const [contributions, setContributions] = useState(tharunRealContributions);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/tharun-creator?y=last")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.contributions) && data.contributions.length > 0) {
          setContributions(data.contributions.map((d: { date: string; count: number }) => ({ date: d.date, count: d.count })));
        }
      })
      .catch((err) => console.log("GitHub API live fetch fallback to snapshot:", err));
  }, []);

  const projects = [
    {
      id: "sisu-booking",
      title: "SPI EDGE — Client Booking System",
      category: "web",
      tech: ["Python", "FastAPI", "React.js", "PostgreSQL"],
      description:
        "Built full-stack client booking engine with automated scheduling, RESTful APIs in FastAPI, and seamless finance/OCR document workflow integration.",
      link: "https://github.com/tharun-creator/sisu-booking-system",
      githubRepo: "https://github.com/tharun-creator/sisu-booking-system",
      featured: true,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
      badge: "Open Source Booking Repo",
    },
    {
      id: "noetis",
      title: "Noetis — Portable AI Profile & Recovery Engine",
      category: "ai",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      description:
        "Turns a 10-question interview into a portable AI profile compatible with ChatGPT, Claude, and Gemini. Features Persona Library and local-first Conversation Recovery Engine.",
      link: "https://noetis-ob7vbq2he-tharun-creators-projects.vercel.app/about",
      githubRepo: "https://github.com/tharun-creator/Tharunkumar.H-portfolio",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
      badge: "Flagship AI Project",
    },
    {
      id: "heart-mind",
      title: "Heart & Mind — Therapy Wellness Platform",
      category: "web",
      tech: ["React.js", "Tailwind CSS", "Vercel", "UI/UX"],
      description:
        "Responsive web experience for a therapy-informed emotional wellness practice presenting its structured 3R Method (Recognise, Reframe, Recreate) with calm, intuitive interactions.",
      link: "https://heart-mind-in.vercel.app",
      featured: true,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80",
      badge: "Healthcare Web",
    },
    {
      id: "heart-disease",
      title: "Heart Disease Prediction (XGBoost + ANN)",
      category: "ai",
      tech: ["Python", "TensorFlow", "XGBoost", "Scikit-Learn", "GridSearchCV"],
      description:
        "Hybrid XGBoost and Artificial Neural Network model with Knowledge Distillation and GridSearchCV tuning. Reached 98.5% accuracy and 0.98 AUC score.",
      link: "#",
      featured: false,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      badge: "98.5% Accuracy ML Model",
    },
    {
      id: "lumi9",
      title: "Lumi9 — Production AI Web Platform",
      category: "live",
      tech: ["React", "FastAPI", "AWS", "SEO/GEO"],
      description:
        "End-to-end design, full-stack development, CI/CD automation, and cloud deployment on AWS with AI Search Optimization (GEO/AEO).",
      link: "https://lumi9.com",
      featured: false,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      badge: "Live Client Site",
    },
    {
      id: "femi9",
      title: "Femi9 — Production Digital Experience",
      category: "live",
      tech: ["React", "Django", "Tailwind CSS", "Analytics"],
      description:
        "Responsive, performance-driven web application with automated build pipelines, Microsoft Clarity, and Search Console integrations.",
      link: "https://femi9.in",
      featured: false,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      badge: "Live Client Site",
    },
    {
      id: "launchtospace",
      title: "LaunchToSpace — Tech & Exploration Hub",
      category: "live",
      tech: ["React.js", "AWS", "CI/CD", "Generative AI"],
      description:
        "Production website with generative AI integrations, responsive modern layouts, and automated cloud deployments.",
      link: "https://launchtospace.in",
      featured: false,
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1000&q=80",
      badge: "Live Client Site",
    },
    {
      id: "nackl",
      title: "Nackl — Web App & Digital Product",
      category: "live",
      tech: ["React", "Python", "SEO/AEO", "AWS"],
      description:
        "Live web application engineered from concept to launch with interactive UI/UX components and Google Tag Manager analytics.",
      link: "https://nackl.in",
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      badge: "Live Client Site",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="relative min-h-screen bg-[#070708] text-[#f4f4f5] font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* GLOWING ORANGE MARGIN ACCENT LINES */}
      <SideOrangeLines />
      
      {/* ========================================== */}
      {/* ========================================== */}
      {/* HERO SECTION MATCHING "DOMINIC" / MODERN MINIMALIST ARCHITECTURE */}
      {/* ========================================== */}
      <section className="relative min-h-[85vh] w-full flex flex-col justify-between bg-[#08080a] text-white px-4 sm:px-8 pt-6 pb-2 overflow-hidden">
        
        {/* TOP FLOATING PILL NAVIGATION */}
        <header className="relative z-30 flex items-center justify-between mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="glass-panel flex items-center gap-3 rounded-full px-5 py-2.5 shadow-2xl border border-zinc-800/80">
              <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 ring-2 ring-orange-500/40" />
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
                Tharunkumar H
              </span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="ml-2 text-zinc-400 hover:text-white focus:outline-none"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Status / Links */}
          <div className="hidden md:flex items-center gap-6 text-xs uppercase font-medium tracking-widest text-zinc-400">
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-orange-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a>
            <a href="#skyline" className="hover:text-orange-400 transition-colors">Skyline</a>
            <a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a>
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

        {/* HERO CONTENT OVERLAYS (PERFECT 2-COLUMN ALIGNMENT) */}
        <div className="relative z-20 mx-auto w-full max-w-7xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-10 pb-12">
          
          {/* LEFT OVERLAY: STATUS PILL + HEADLINE + TECH TAGS */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900/90 border border-zinc-800 px-3.5 py-1.5 text-xs text-zinc-300 font-medium backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Available for Work</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-display leading-[1.04] uppercase">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                AI Developer
              </span>
            </h1>

            <div className="flex flex-wrap gap-2 pt-2">
              {["React & Next.js", "Python & FastAPI", "LLMs & GenAI", "AWS Cloud"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-900/80 border border-zinc-800 px-3 py-1 text-[11px] font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT OVERLAY: BIO GLASS CARD + ORANGE CTA BUTTON */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-zinc-800/80 shadow-2xl backdrop-blur-xl bg-zinc-900/50 max-w-md">
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                Hi, I'm <strong className="text-white font-bold">Tharun Kumar H</strong> — a Full Stack AI Developer passionate about building intelligent web applications, LLM workflows, and seamless digital experiences that scale.
              </p>
            </div>

            {/* ORANGE CTA BUTTON WITH CIRCULAR ARROW ICON */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 hover:bg-orange-400 p-2 pr-7 text-xs font-bold text-black uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-500/25 active:scale-95"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span>See my works</span>
            </a>
          </div>

        </div>

        {/* HUGE BOTTOM BACKDROP TYPOGRAPHY: "THARUNKUMAR.H" */}
        <div className="relative z-10 w-full text-center pointer-events-none select-none overflow-hidden pt-4 pb-4 sm:pb-6">
          <h1 className="text-[7.8vw] sm:text-[9vw] lg:text-[9.5vw] font-black tracking-tighter leading-none text-white uppercase opacity-90 font-display drop-shadow-2xl whitespace-nowrap">
            THARUNKUMAR.H
          </h1>
        </div>

      </section>

      {/* MARQUEE SITES TICKER BAR */}
      <section className="relative z-20 border-y border-zinc-800/80 bg-zinc-950/90 py-4 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-around flex-wrap gap-4 sm:gap-8 text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
          <span className="text-zinc-600">LIVE CLIENT SITES:</span>
          <a href="https://lumi9.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            LUMI9.COM <ExternalLink className="h-3 w-3 text-zinc-600" />
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://femi9.in" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            FEMI9.IN <ExternalLink className="h-3 w-3 text-zinc-600" />
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://launchtospace.in" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            LAUNCHTOSPACE.IN <ExternalLink className="h-3 w-3 text-zinc-600" />
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://nackl.in" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            NACKL.IN <ExternalLink className="h-3 w-3 text-zinc-600" />
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://noetis-ob7vbq2he-tharun-creators-projects.vercel.app/about" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            NOETIS.AI <ExternalLink className="h-3 w-3 text-zinc-600" />
          </a>
        </div>
      </section>

      {/* CORE MANIFESTO SECTION */}
      <section id="about" className="relative z-10 py-16 md:py-24 bg-[#08080a]">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-500">
            ENGINEERING PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-snug text-zinc-100">
            I believe the strongest digital applications are built through{" "}
            <span className="font-extrabold text-white underline decoration-orange-500 decoration-4 underline-offset-8">
              intelligence & strategy
            </span>
            , not just code. Every feature is designed to capture attention, automate workflows, and create lasting real-world impact.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-light">
            Performance-driven full-stack & AI engineering — from raw LLM prompts to production AWS deployment. Built for fast, reliable web platforms.
          </p>
        </div>
      </section>

      <OrangeSectionDivider />

      {/* INTEGRATED COMPONENT 1: CONTRIBUTION SKYLINE SECTION */}
      <section id="skyline" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-zinc-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
              <Layers className="h-4 w-4" /> COMPONENT INTEGRATION #1
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase font-display mt-1">
              Activity & Contribution Skyline
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-md">
            Interactive 3D isometric skyline built with Canvas + React. Orbit, inspect daily activity levels, and morph between 2D heatmaps and 3D terrain.
          </p>
        </div>

        <div className="rounded-2xl glass-panel p-2 sm:p-4 border border-zinc-800 shadow-2xl">
          <ContributionSkyline
            data={contributions}
            palette="ember"
            defaultView="3d"
            title={
              <span className="text-white font-medium">
                Tharun's Real GitHub Activity — Interactive 3D Skyline
              </span>
            }
          />
        </div>

        {/* WORKING GITHUB REPOSITORIES SHOWCASE IN SECTION #1 */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://github.com/tharun-creator/sisu-booking-system"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl glass-panel p-5 border border-zinc-800 hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between hover:bg-zinc-900/60"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold">
                  <GithubIcon className="h-4 w-4 text-white" />
                  <span>tharun-creator / sisu-booking-system</span>
                </div>
                <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-orange-400">
                  Working Repo
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Full-stack client booking engine with scheduling, RESTful APIs in FastAPI, and seamless finance/OCR document workflow integration.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="h-2 w-2 rounded-full bg-amber-400" /> Python / FastAPI
              </span>
              <span className="group-hover:text-orange-400 transition-colors flex items-center gap-1 font-bold">
                View Repository <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>

          <a
            href="https://github.com/tharun-creator/Tharunkumar.H-portfolio"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl glass-panel p-5 border border-zinc-800 hover:border-orange-500/60 transition-all duration-300 flex flex-col justify-between hover:bg-zinc-900/60"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-bold">
                  <GithubIcon className="h-4 w-4 text-white" />
                  <span>tharun-creator / Tharunkumar.H-portfolio</span>
                </div>
                <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-2.5 py-0.5 text-[10px] font-semibold text-orange-400">
                  Portfolio Repo
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Production portfolio site featuring 3D interactive contribution skyline, crowd canvas components, and full project showcase.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-blue-400">
                <span className="h-2 w-2 rounded-full bg-blue-400" /> TypeScript / Next.js
              </span>
              <span className="group-hover:text-orange-400 transition-colors flex items-center gap-1 font-bold">
                View Repository <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        </div>
      </section>

      <OrangeSectionDivider />

      {/* PROJECTS SHOWCASE SECTION (ALL RESUME PROJECTS) */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              FEATURED PORTFOLIO WORK
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase font-display mt-1">
              Projects & Live Deployments
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-full glass-panel p-1.5 text-xs font-medium">
            {(["all", "ai", "web", "live"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-1.5 uppercase transition-all ${
                  activeTab === tab
                    ? "bg-orange-500 text-black font-bold shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab === "all" ? "All Work" : tab === "ai" ? "AI & ML" : tab === "web" ? "Web Apps" : "Live Client Sites"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isHighlight = index === 1 || index === 4;
            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  isHighlight
                    ? "bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-black shadow-orange-500/20"
                    : "bg-[#f4f1ea] text-zinc-950 shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <span
                      className={`text-[11px] font-extrabold tracking-wider uppercase rounded-full px-3 py-1 ${
                        isHighlight ? "bg-black/15 text-black" : "bg-black/10 text-zinc-800"
                      }`}
                    >
                      {project.badge}
                    </span>
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                        isHighlight ? "bg-black text-white" : "bg-black text-white"
                      }`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug font-display">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed opacity-85">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-black/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3 py-1 text-[10px] font-bold font-mono ${
                          isHighlight ? "bg-black/15 text-black" : "bg-black/10 text-zinc-900"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:opacity-75"
                      >
                        {project.githubRepo && project.link.includes("github.com") ? "View GitHub Repo" : "View Live Site"} <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.githubRepo && !project.link.includes("github.com") && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:opacity-75"
                      >
                        <GithubIcon className="h-3.5 w-3.5" /> GitHub Repo
                      </a>
                    )}
                    {project.link === "#" && !project.githubRepo && (
                      <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                        Proprietary ML Model
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <OrangeSectionDivider />

      {/* WORK EXPERIENCE SECTION */}
      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 border-b border-zinc-800 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
            CAREER PATH & ROLES
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase font-display mt-1">
            Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          <div className="relative rounded-2xl glass-panel p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wide">
                  Jul 2026 – Present • Full-time (Hybrid)
                </span>
                <h3 className="text-xl font-bold text-white">
                  Full Stack AI Developer
                </h3>
                <p className="text-sm text-zinc-400">
                  The Bot Company — Chennai, India
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400 border border-orange-500/30">
                  AWS & CI/CD
                </span>
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                  LLMs & GenAI
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 list-disc list-inside leading-relaxed">
              <li>
                Designed and developed live production websites end to end, including{" "}
                <strong className="text-white">lumi9.com</strong>,{" "}
                <strong className="text-white">femi9.in</strong>,{" "}
                <strong className="text-white">launchtospace.in</strong>, and{" "}
                <strong className="text-white">nackl.in</strong>.
              </li>
              <li>Created responsive UI/UX designs taking sites from concept to launch.</li>
              <li>Built & maintained automated CI/CD deployment pipelines on AWS.</li>
              <li>Built products using Large Language Models and Generative AI.</li>
              <li>Optimized sites for SEO, GEO, AEO with Google Analytics & Tag Manager integrations.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl glass-panel p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">
                  Apr 2026 – Jul 2026 • On-site
                </span>
                <h3 className="text-xl font-bold text-white">
                  Full Stack Engineer (Intern)
                </h3>
                <p className="text-sm text-zinc-400">SPI EDGE — Tamil Nadu, India</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                  React.js & Django
                </span>
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                  FastAPI
                </span>
                <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-xs font-semibold text-orange-400">
                  OCR & Finance Automation
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 list-disc list-inside leading-relaxed">
              <li>Built full-stack features using React.js and Django backend services; developed RESTful APIs in FastAPI.</li>
              <li>Engineered a full-featured client booking system with scheduling and seamless workflow integration.</li>
              <li>Worked on finance automation and expense tracking by parsing OCR documents extracted from emails.</li>
              <li>Tested and debugged features with the engineering team prior to delivery.</li>
            </ul>
          </div>

          <div className="relative rounded-2xl glass-panel p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-4 mb-4">
              <div>
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">
                  Jun 2025 – May 2026 • Remote
                </span>
                <h3 className="text-xl font-bold text-white">
                  AI and Generative AI Intern
                </h3>
                <p className="text-sm text-zinc-400">YBI Foundation</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                  LLM Workflows
                </span>
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                  Automation
                </span>
              </div>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300 list-disc list-inside leading-relaxed">
              <li>Built prototype applications exploring language model workflows and automation.</li>
              <li>Studied GenAI use cases, model behavior, and ethical considerations.</li>
            </ul>
          </div>
        </div>
      </section>

      <OrangeSectionDivider />

      {/* SKILLS & BENTO GRID SECTION */}
      <section id="skills" className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 border-b border-zinc-800 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase font-display mt-1">
            Skills, Tools & Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 rounded-2xl glass-panel p-6 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase mb-2">
                <Brain className="h-4 w-4" /> AI & Machine Learning
              </div>
              <h3 className="text-xl font-bold text-white">Generative AI & Data Science</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Machine Learning, LLMs, TensorFlow, Scikit-learn, XGBoost, ANN, Power BI, Prompt Engineering, Knowledge Distillation.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "TensorFlow", "Scikit-Learn", "LLMs", "Generative AI", "XGBoost", "Power BI"].map((skill) => (
                <span key={skill} className="rounded-full bg-orange-500/10 border border-orange-500/30 px-3 py-1 text-xs font-semibold text-orange-400">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase mb-2">
                <Code className="h-4 w-4" /> Web Engineering
              </div>
              <h3 className="text-xl font-bold text-white">Frontend & Backend</h3>
              <p className="text-xs text-zinc-400 mt-1">
                React.js, Next.js, TypeScript, Tailwind CSS, FastAPI, Django, Flask.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["React", "Next.js", "TypeScript", "Tailwind", "FastAPI", "Django"].map((skill) => (
                <span key={skill} className="rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-mono text-zinc-300 border border-zinc-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl glass-panel p-6 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-2">
                <Globe className="h-4 w-4" /> Cloud & Infrastructure
              </div>
              <h3 className="text-xl font-bold text-white">AWS & DevOps</h3>
              <p className="text-xs text-zinc-400 mt-1">
                AWS Cloud, CI/CD Pipelines, Docker, Git, Vercel, Render, MySQL, MongoDB.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {["AWS", "CI/CD", "Docker", "Git", "Supabase", "MongoDB"].map((skill) => (
                <span key={skill} className="rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-mono text-zinc-300 border border-zinc-800">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 rounded-2xl glass-panel p-6 border border-zinc-800">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-2">
              <Terminal className="h-4 w-4" /> Education & Credentials
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div>
                <h4 className="text-sm font-bold text-white">B.Tech in AI & Data Science</h4>
                <p className="text-xs text-zinc-400">RMK Engineering College (2026)</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Infosys Certifications</h4>
                <p className="text-xs text-zinc-400">AI, Computer Vision, NLP, Deep Learning & Data Science</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-2xl glass-panel p-6 border border-zinc-800">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase mb-2">
              <Zap className="h-4 w-4" /> SEO, GEO & Analytics
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed mt-1">
              Expertise in Search Engine Optimization (SEO), Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), Google Analytics 4, Tag Manager, Microsoft Clarity, and Search Console setup.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK SCHEDULE CTA BANNER */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              1-ON-1 DISCOVERY CALL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Want to discuss a project or role?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg">
              Schedule a 15-minute meeting on Cal.com to talk about web development, AI integration, or technical opportunities.
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
        </div>
      </section>

      {/* INTEGRATED COMPONENT 2: SKIPER39 CROWD CANVAS FOOTER */}
      <section className="relative h-[450px] w-full overflow-hidden border-t border-zinc-800">
        <div className="absolute inset-0 z-0">
          <Skiper39 />
        </div>

        <div className="relative z-20 mx-auto max-w-4xl h-full flex flex-col items-center justify-center text-center px-4">
          <div className="glass-panel p-8 rounded-3xl border border-zinc-800/90 shadow-2xl max-w-xl backdrop-blur-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
              LET'S BUILD SOMETHING GREAT
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Ready to elevate your project?
            </h2>
            <p className="text-xs text-zinc-400 mt-2">
              Reach out for full-stack AI development, custom web applications, or cloud architecture.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:tharunriot@gmail.com"
                className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-xs font-bold text-black uppercase tracking-wider hover:bg-orange-400 transition-all shadow-lg"
              >
                <Mail className="h-4 w-4" /> tharunriot@gmail.com
              </a>
              <a
                href="https://cal.com/tharun-kumar-wx6kly/15min"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full glass-panel px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-zinc-800 transition-all border border-zinc-800"
              >
                Book 15-Min Meeting <ArrowUpRight className="h-4 w-4 text-orange-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-900 bg-black py-8 px-4 text-center text-xs text-zinc-600 font-mono">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} THARUN KUMAR H. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/tharun-creator" target="_blank" rel="noreferrer" className="hover:text-orange-400">
              GITHUB
            </a>
            <span>•</span>
            <a href="https://linkedin.com/in/htharun-kumar" target="_blank" rel="noreferrer" className="hover:text-orange-400">
              LINKEDIN
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
