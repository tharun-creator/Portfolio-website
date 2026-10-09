"use client";

import React, { useEffect } from "react";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export function CalBookingSection() {
  useEffect(() => {
    // Initialize Cal.com SDK
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if ((window as any).Cal) {
      (window as any).Cal("init", "15min", { origin: "https://app.cal.com" });
      
      // Cal.com Official Inline Embed Initialization
      (window as any).Cal.ns["15min"]("inline", {
        elementOrSelector: "#cal-inline-embed",
        calLink: "tharun-kumar-wx6kly/15min",
        config: { layout: "month_view" },
      });

      // Floating button configuration
      (window as any).Cal.ns["15min"]("floatingButton", {
        calLink: "tharun-kumar-wx6kly/15min",
        buttonColor: "#f94e1b",
        buttonTextColor: "#ffffff",
        buttonText: "Book a 15-Min Call",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      });

      (window as any).Cal.ns["15min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });
    }
  }, []);

  return (
    <section id="book-call" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-zinc-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest">
            <Calendar className="h-4 w-4" /> SCHEDULE A MEETING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-display mt-1">
            Book a 15-Minute Call
          </h2>
        </div>
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 text-orange-400 font-semibold">
            <Clock className="h-3.5 w-3.5" /> 15 Min Discovery Call
          </span>
          <a
            href="https://cal.com/tharun-kumar-wx6kly/15min"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full glass-panel px-4 py-1.5 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors border border-zinc-800"
          >
            Direct Cal.com Link <ArrowUpRight className="h-3.5 w-3.5 text-orange-400" />
          </a>
        </div>
      </div>

      {/* Cal.com Official Inline Container */}
      <div className="relative overflow-hidden rounded-3xl glass-panel border border-zinc-800 shadow-2xl p-2 sm:p-6 bg-[#09090b] min-h-[720px] w-full">
        <div
          id="cal-inline-embed"
          className="w-full h-full min-h-[720px] rounded-2xl overflow-hidden bg-transparent"
        >
          {/* Fallback iframe */}
          <iframe
            src="https://cal.com/tharun-kumar-wx6kly/15min?embed=true&theme=dark&layout=month_view"
            title="Book a meeting with Tharun Kumar H"
            className="w-full h-[760px] min-h-[720px] border-0 rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
