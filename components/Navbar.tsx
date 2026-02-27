"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#why-inertia" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scrolled
      setScrolled(currentScrollY > 20);

      // Determine visibility direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down & passed threshold -> hide
      } else {
        setIsVisible(true);  // Scrolling up or at top -> show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-0 right-0 z-50 flex justify-center px-4 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-[150%]"
        }`}
    >
      <div
        className={`w-full max-w-5xl flex items-center justify-between transition-all duration-300 bg-white/50 backdrop-blur-xl border border-neutral-200 pl-5 pr-2 py-1.5 shadow-sm ${scrolled ? "bg-white/80 border-neutral-300" : ""
          }`}
      >
        <Link href="/" className="z-50 flex items-center gap-2" aria-label="vectorIO Home">
          <span className="relative h-9 w-9 shrink-0 md:h-10 md:w-10">
            <Image src="/logo.png" alt="" fill className="object-contain" sizes="56px" priority />
          </span>
          <span className="text-base md:text-lg font-bold tracking-tight text-neutral-950"><span className="text-black">vector</span><span className="text-[#FFB703]">IO</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors duration-2000 z-[1]
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
                before:border-t-2 before:border-b-2 before:border-neutral-950 
                before:scale-y-[2] before:opacity-0 before:transition-all before:duration-300
                hover:before:scale-y-100 hover:before:opacity-100
                after:content-[''] after:absolute after:top-[2px] after:left-0 after:w-full after:h-full 
                after:bg-neutral-950 after:scale-0 after:opacity-0 after:transition-all after:duration-300 after:-z-[1]
                hover:after:scale-100 hover:after:opacity-0"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Link
            href="https://cal.com/neeraj-kushwaha-juw62g/discovery-call"
            target="_blank"
            className="hidden md:block relative group"
          >
            {/* Fixed-width wrapper (this prevents navbar shifting) */}
            <div className="relative flex items-center w-[182px] h-[36px]">

              {/* Main button */}
              <span
                className="
        absolute left-0 top-0
        flex items-center
        h-full   
        px-3
        bg-[#FFB703]
        text-neutral-950
        font-medium text-sm
        whitespace-nowrap
        transition-all duration-300 ease-out

        group-hover:pr-14
      "
              >
                Start Your Journey
              </span>

              {/* Arrow (always absolute, never changes positioning mode) */}
              <span
                className="
        absolute right-0 top-1/2 -translate-y-1/2
        w-[36px] h-[36px]
        flex items-center justify-center
        rounded-full
        bg-neutral-950 text-white
        border border-neutral-800
        transition-all duration-300 ease-out

        group-hover:rounded-sm
      "
              >
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-neutral-950 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 bg-white border border-neutral-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-neutral-600 hover:text-neutral-950"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://cal.com/neeraj-kushwaha-juw62g/discovery-call"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 font-medium text-base transition-all duration-300 bg-[#FFB703] text-neutral-950 hover:bg-[#ffc94d] w-full justify-between shadow-[0_0_10px_rgba(255,183,3,0.3)]"
                onClick={() => setIsOpen(false)}
              >
                Start Your Journey <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
