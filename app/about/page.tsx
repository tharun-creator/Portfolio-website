import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Calendar,
  CheckCircle2,
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
import { CinematicFooter } from "@/components/ui/motion-footer";
import AboutClientView from "./about-client-view";

export const metadata: Metadata = {
  title: "About Tharun Kumar H | Full Stack AI Developer & FAQ",
  description:
    "Learn about Tharun Kumar H (Tharun) — Full Stack AI Developer at The Bot Company & SPI EDGE. Read career background, skills, and FAQs.",
  keywords: [
    "About Tharun Kumar H",
    "Tharun",
    "Tharunkumar",
    "Tharun experience",
    "Tharunkumar bio",
    "Full Stack AI Developer",
    "AI Engineer Chennai",
    "SPI EDGE Engineer",
    "The Bot Company",
  ],
  alternates: {
    canonical: "https://tharunkumar.in/about",
  },
  openGraph: {
    title: "About Tharun Kumar H | Full Stack AI Developer & FAQ",
    description:
      "Career background, engineering philosophy, technical skills, and FAQs for Tharun Kumar H (Tharun).",
    url: "https://tharunkumar.in/about",
    siteName: "Tharun Kumar H Portfolio",
    images: [
      {
        url: "https://tharunkumar.in/hero-sky.jpg",
        width: 1200,
        height: 630,
        alt: "Tharun Kumar H - About & FAQ",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tharun Kumar H | Full Stack AI Developer & FAQ",
    description:
      "Career background, engineering philosophy, technical skills, and FAQs for Tharun Kumar H (Tharun).",
    images: ["https://tharunkumar.in/hero-sky.jpg"],
  },
};

// JSON-LD Schemas for AEO & GEO
const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://tharunkumar.in/#person",
      "name": "Tharun Kumar H",
      "alternateName": ["Tharun", "Tharunkumar", "Tharun Creator"],
      "jobTitle": "Full Stack AI Developer",
      "description":
        "Full Stack AI Developer building production web applications, LLM workflows, and scalable cloud solutions.",
      "url": "https://tharunkumar.in",
      "image": "https://tharunkumar.in/hero-sky.jpg",
      "sameAs": [
        "https://github.com/tharun-creator",
        "https://linkedin.com/in/htharun-kumar",
        "https://cal.com/tharun-kumar-wx6kly/15min"
      ],
      "knowsAbout": [
        "Full Stack Development",
        "Generative AI",
        "Next.js",
        "React.js",
        "Python",
        "FastAPI",
        "Django",
        "AWS",
        "LLM Workflows"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "The Bot Company"
      },
      "almaMater": {
        "@type": "EducationalOrganization",
        "name": "RMK Engineering College"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://tharunkumar.in/about/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Tharun Kumar H?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tharun Kumar H (also known as Tharun or Tharunkumar) is a Full Stack AI Developer and Software Engineer based in Chennai, India. He specializes in Next.js, React, FastAPI, LLM workflows, and cloud architecture at The Bot Company and SPI EDGE."
          }
        },
        {
          "@type": "Question",
          "name": "What services does Tharun Kumar H provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tharun Kumar H provides end-to-end web application development, custom AI model integration, LLM workflow automation, RESTful API design in FastAPI/Django, and cloud deployment pipelines on AWS."
          }
        },
        {
          "@type": "Question",
          "name": "What is Tharun Kumar H's technical stack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tharun's tech stack includes React.js, Next.js, TypeScript, Tailwind CSS, Python, FastAPI, Django, PostgreSQL, Supabase, TensorFlow, XGBoost, Docker, and AWS Cloud."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact or hire Tharun Kumar H?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach Tharun Kumar H via email at tharunriot@gmail.com, book a 15-minute meeting at https://cal.com/tharun-kumar-wx6kly/15min, or submit the contact form at https://tharunkumar.in/contact."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tharunkumar.in/about/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tharunkumar.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About & FAQ",
          "item": "https://tharunkumar.in/about"
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutClientView />
    </>
  );
}
