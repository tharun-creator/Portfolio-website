"use client";

import { useEffect } from "react";

export function CalFloatingButton() {
  useEffect(() => {
    // Initialize Cal.com floating popup embed
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
      (window as any).Cal.config = (window as any).Cal.config || {};
      (window as any).Cal.config.forwardQueryParams = true;

      // Orange Floating Button Modal Embed
      (window as any).Cal.ns["15min"]("floatingButton", {
        calLink: "tharun-kumar-wx6kly/15min",
        buttonColor: "#f94e1b",
        buttonTextColor: "#ffffff",
        buttonText: "Book 15-Min Meeting",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      });

      (window as any).Cal.ns["15min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });
    }
  }, []);

  return null;
}
