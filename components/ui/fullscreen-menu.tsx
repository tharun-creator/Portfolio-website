"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#08080a]/95 backdrop-blur-2xl text-white p-6 sm:p-12 overflow-y-auto animate-in fade-in duration-300">
      
      {/* TOP BAR WITH CLOSE BUTTON */}
      <div className="flex items-center justify-between mx-auto w-full max-w-7xl pb-6 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            NAVIGATION MENU — THARUN KUMAR H
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex h-11 w-11 items-center justify-center rounded-full glass-panel hover:bg-zinc-800 text-white transition-transform hover:scale-110 border border-zinc-800"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* MAIN CONTENT GRID (MATCHING USER REFERENCE IMAGE) */}
      <div className="mx-auto w-full max-w-7xl my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: SITEMAP (OVERSIZED TYPOGRAPHY) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-orange-500 block mb-2">
            SITEMAP
          </span>
          <nav className="flex flex-col gap-4 text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight">
            <Link href="/#about" onClick={onClose} className="hover:text-orange-400 transition-colors">
              ABOUT
            </Link>
            <Link href="/#experience" onClick={onClose} className="hover:text-orange-400 transition-colors">
              EXPERIENCE
            </Link>
            <Link href="/#projects" onClick={onClose} className="hover:text-orange-400 transition-colors">
              PROJECTS
            </Link>
            <Link href="/#skyline" onClick={onClose} className="hover:text-orange-400 transition-colors">
              SKYLINE ACTIVITY
            </Link>
            <Link href="/#skills" onClick={onClose} className="hover:text-orange-400 transition-colors">
              SKILLS & STACK
            </Link>
            <Link href="/contact" onClick={onClose} className="text-orange-500 hover:text-white transition-colors">
              CONTACT
            </Link>
          </nav>
        </div>

        {/* RIGHT COLUMN: FEATURED APPS, LIVE PLATFORMS & SOCIALS */}
        <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-zinc-800/80 lg:pl-12">
          
          {/* FEATURED PROJECTS */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
              FEATURED PROJECTS
            </span>
            <div className="flex flex-col gap-2.5 text-sm font-semibold text-zinc-300">
              <a
                href="https://noetis-ob7vbq2he-tharun-creators-projects.vercel.app/about"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between hover:text-orange-400 transition-colors py-1"
              >
                <span>Noetis.ai (Portable AI Profile)</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://heart-mind-in.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between hover:text-orange-400 transition-colors py-1"
              >
                <span>Heart & Mind (Wellness Platform)</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* LIVE PLATFORMS */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
              LIVE PLATFORMS
            </span>
            <div className="flex flex-col gap-2.5 text-sm font-semibold text-zinc-300">
              <a href="https://lumi9.com" target="_blank" rel="noreferrer" className="flex items-center justify-between hover:text-orange-400 transition-colors py-1">
                <span>Lumi9.com</span>
                <ExternalLink className="h-4 w-4 text-zinc-500" />
              </a>
              <a href="https://femi9.in" target="_blank" rel="noreferrer" className="flex items-center justify-between hover:text-orange-400 transition-colors py-1">
                <span>Femi9.in</span>
                <ExternalLink className="h-4 w-4 text-zinc-500" />
              </a>
              <a href="https://launchtospace.in" target="_blank" rel="noreferrer" className="flex items-center justify-between hover:text-orange-400 transition-colors py-1">
                <span>LaunchToSpace.in</span>
                <ExternalLink className="h-4 w-4 text-zinc-500" />
              </a>
              <a href="https://nackl.in" target="_blank" rel="noreferrer" className="flex items-center justify-between hover:text-orange-400 transition-colors py-1">
                <span>Nackl.in</span>
                <ExternalLink className="h-4 w-4 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* SOCIALS & CONTACT */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-3">
              SOCIALS & REACH OUT
            </span>
            <div className="flex flex-col gap-2.5 text-sm font-semibold text-zinc-300">
              <a href="https://github.com/tharun-creator" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/htharun-kumar" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:tharunriot@gmail.com" className="hover:text-orange-400 transition-colors">
                tharunriot@gmail.com
              </a>
              <a href="https://cal.com/tharun-kumar-wx6kly/15min" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-orange-400 font-bold hover:underline">
                Book a 15-Min Call <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER BAR */}
      <div className="mx-auto w-full max-w-7xl pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 uppercase">
        <div>© {new Date().getFullYear()} THARUN KUMAR H — FULL STACK AI DEVELOPER</div>
        <div>CHENNAI, TAMIL NADU, INDIA</div>
      </div>

    </div>
  );
}
