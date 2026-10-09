"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Calendar,
  Code2,
  ExternalLink,
  Heart,
  Mail,
  Sparkles,
} from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

// Register ScrollTrigger safely for React
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES
// -------------------------------------------------------------------------
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  
  /* Dynamic Variables using dark theme tokens */
  --pill-bg-1: rgba(255, 255, 255, 0.04);
  --pill-bg-2: rgba(255, 255, 255, 0.01);
  --pill-shadow: rgba(0, 0, 0, 0.6);
  --pill-highlight: rgba(255, 255, 255, 0.12);
  --pill-inset-shadow: rgba(0, 0, 0, 0.8);
  --pill-border: rgba(255, 255, 255, 0.08);
  
  --pill-bg-1-hover: rgba(249, 78, 27, 0.15);
  --pill-bg-2-hover: rgba(249, 78, 27, 0.05);
  --pill-border-hover: rgba(249, 78, 27, 0.4);
  --pill-shadow-hover: rgba(249, 78, 27, 0.2);
  --pill-highlight-hover: rgba(255, 255, 255, 0.25);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px rgba(249, 78, 27, 0.5)); }
  15%, 45% { transform: scale(1.25); filter: drop-shadow(0 0 10px rgba(249, 78, 27, 0.8)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 35s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

/* Dark Grid Background */
.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

/* Orange Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(249, 78, 27, 0.18) 0%, 
    rgba(234, 88, 12, 0.1) 40%, 
    transparent 70%
  );
}

/* Glass Pill Theming */
.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: #ffffff;
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: 20vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.06);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
}

/* Metallic Text Glow */
.footer-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 25px rgba(249, 78, 27, 0.25));
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer select-none", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>FULL STACK AI DEVELOPER</span> <span className="text-orange-500 font-bold">✦</span>
    <span>LLM WORKFLOWS &amp; GENAI</span> <span className="text-amber-400 font-bold">✦</span>
    <span>FASTAPI &amp; DJANGO BACKENDS</span> <span className="text-orange-500 font-bold">✦</span>
    <span>PRODUCTION AWS DEPLOYMENTS</span> <span className="text-amber-400 font-bold">✦</span>
    <span>NEXT.JS &amp; REACT ENGINEERING</span> <span className="text-orange-500 font-bold">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Staggered Content Reveal
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      {/* 
        The "Curtain Reveal" Wrapper:
        It sits in standard flow. Because it has clip-path, its contents
        are ONLY visible within its bounding box. 
      */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        {/* The actual footer stays fixed to the viewport underneath everything */}
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#070708] text-white cinematic-footer-wrapper border-t border-zinc-800/80">
          
          {/* Ambient Light & Grid Background */}
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[100px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[4vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            THARUN.H
          </div>

          {/* 1. Diagonal Sleek Marquee (Top of footer) */}
          <div className="absolute top-10 left-0 w-full overflow-hidden border-y border-zinc-800/80 bg-black/60 backdrop-blur-md py-4 z-10 -rotate-1 scale-105 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-extrabold tracking-[0.3em] text-zinc-400 uppercase font-mono">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* 2. Main Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-4xl md:text-7xl font-black footer-text-glow tracking-tighter mb-10 text-center uppercase font-display"
            >
              Ready to build something <br />
              <span className="text-orange-500">extraordinary?</span>
            </h2>

            {/* Interactive Magnetic Pills Layout */}
            <div ref={linksRef} className="flex flex-col items-center gap-6 w-full">
              {/* Primary Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <MagneticButton
                  as="a"
                  href="https://cal.com/tharun-kumar-wx6kly/15min"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-glass-pill px-8 py-4.5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3 group border-orange-500/40 bg-orange-500/10"
                >
                  <Calendar className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                  <span>Book 15-Min Meeting</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </MagneticButton>
                
                <MagneticButton
                  as="a"
                  href="mailto:tharunriot@gmail.com"
                  className="footer-glass-pill px-8 py-4.5 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-orange-400 transition-colors" />
                  <span>tharunriot@gmail.com</span>
                </MagneticButton>
              </div>

              {/* Secondary Navigation Links */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-5 w-full mt-2">
                <MagneticButton
                  as="a"
                  href="https://github.com/tharun-creator"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-glass-pill px-6 py-3 rounded-full text-zinc-300 font-medium text-xs md:text-sm hover:text-white flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-orange-400" />
                  <span>GitHub</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="https://linkedin.com/in/htharun-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-glass-pill px-6 py-3 rounded-full text-zinc-300 font-medium text-xs md:text-sm hover:text-white flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#projects"
                  className="footer-glass-pill px-6 py-3 rounded-full text-zinc-300 font-medium text-xs md:text-sm hover:text-white"
                >
                  Projects
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="/contact"
                  className="footer-glass-pill px-6 py-3 rounded-full text-zinc-300 font-medium text-xs md:text-sm hover:text-white"
                >
                  Contact Page
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar / Credits */}
          <div className="relative z-20 w-full pb-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-zinc-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase font-mono order-2 md:order-1">
              © {new Date().getFullYear()} THARUN KUMAR H. ALL RIGHTS RESERVED.
            </div>

            {/* "Crafted with Love" Badge */}
            <div className="footer-glass-pill px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-zinc-800">
              <span className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Crafted with</span>
              <span className="animate-footer-heartbeat text-sm md:text-base text-orange-500">❤</span>
              <span className="text-zinc-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">by</span>
              <span className="text-white font-black text-xs md:text-sm tracking-normal ml-1">Tharun Kumar H</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full footer-glass-pill flex items-center justify-center text-zinc-400 hover:text-white group order-3"
              aria-label="Back to top"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>

          </div>
        </footer>
      </div>
    </>
  );
}
