"use client";

// SEO Keywords: essay writers, assignment writing service, reviews, testimonials, contact, privacy, service agreement

import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 pt-20 pb-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/20">
                <FaPencilAlt className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Essayproficiency</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Essayproficiency offers writing, editing, and rewriting help for academic assignments. Work with verified experts who deliver top-quality, original work.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span>🌍 Remote-first academic solutions</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-indigo-400 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/writers", label: "Writers" },
                { href: "/gethelp", label: "Order Assignment" },
                { href: "/blog", label: "Blog" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact" }
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-200 inline-block group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-indigo-400 after:rounded-full">
              Payment Methods
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                "PayPal", "TapTap", "Remitly", "Western Union", "CashApp", "Bank Transfer"
              ].map(method => (
                <span
                  key={method}
                  className="bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="text-white/60 text-xs">100% satisfaction guarantee as per our refund terms</p>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-indigo-400 after:rounded-full">
              Legal & Social
            </h3>
            <ul className="space-y-3 mb-6">
              {[
                { href: "/serviceagreement", label: "Service Agreement" },
                { href: "/privacynotice", label: "Privacy Notice" },
                { href: "/moneyback", label: "Money-Back" },
                { href: "/ethics", label: "Ethics Code" }
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-200 inline-block group"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="https://twitter.com/" target="_blank" className="group" aria-label="Twitter">
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-indigo-500/80 transition-all duration-300 hover:scale-110">
                  <FaTwitter className="w-4 h-4 text-white" />
                </div>
              </Link>
              <Link href="https://instagram.com/" target="_blank" className="group" aria-label="Instagram">
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-pink-500/80 transition-all duration-300 hover:scale-110">
                  <FaInstagram className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright & Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>
            &copy; {currentYear} <span className="font-semibold text-white">Essayproficiency.com</span> — All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <span>Designed by</span>
            <Image
              src="/youvilab.png"
              width={32}
              height={32}
              alt="youvilab"
              className="w-6 h-6 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
            />
            <span>| Remote-first academic solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}