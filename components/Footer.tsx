"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function Footer() {
    return (
        <footer className="bg-neutral-50 pt-20 pb-10 border-t border-neutral-100">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* CTA Strip */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100 mb-20 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-2">
                            Ready to start your project?
                        </h2>
                        <p className="text-neutral-600">
                            Let's build something great together.
                        </p>
                    </div>
                    <BookCallButton className="shadow-lg shadow-amber-500/10" />
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">

                    {/* Left Column - Brand */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="mb-4 flex items-center gap-2" aria-label="vectorIO Home">
                            <span className="relative h-12 w-12 shrink-0 md:h-14 md:w-14">
                                <Image src="/logo.png" alt="" fill className="object-contain" sizes="56px" />
                            </span>
                            <span className="text-sm font-bold tracking-tight text-neutral-950"><span className="text-black">vector</span><span className="text-[#FFB703]">IO</span></span>
                        </Link>
                        <p className="text-neutral-600 leading-relaxed max-w-xs">
                            We help founders and growing teams build websites and applications that turn traffic into revenue.
                        </p>
                    </div>

                    {/* Middle Column - Navigation */}
                    <div className="flex flex-col md:items-center">
                        {/* Wrapper to align left on mobile but center visually on desktop if desired, 
                            or just simple left align consistent with others. 
                            Request says "well-spaced", usually columns align top-left.
                         */}
                        <div className="flex flex-col gap-4">
                            <Link href="#services" className="text-neutral-600 hover:text-neutral-950 font-medium transition-colors">
                                Services
                            </Link>
                            <Link href="#work" className="text-neutral-600 hover:text-neutral-950 font-medium transition-colors">
                                Work
                            </Link>
                            <Link href="#why-inertia" className="text-neutral-600 hover:text-neutral-950 font-medium transition-colors">
                                About
                            </Link>
                            <Link href="https://cal.com/neeraj-kushwaha-juw62g/discovery-call" className="text-neutral-600 hover:text-neutral-950 font-medium transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Contact & Call */}
                    <div className="flex flex-col items-start md:items-end">
                        <div className="flex flex-col gap-1 text-left md:text-right mb-6">
                            <a href="mailto:hello@inertiastudio.com" className="text-neutral-950 font-medium hover:text-neutral-600 transition-colors">
                                hello@inertiastudio.com
                            </a>
                            <span className="text-neutral-500">
                                Remote / India
                            </span>
                        </div>

                        <Link
                            href="https://cal.com/neeraj-kushwaha-juw62g/discovery-call"
                            target="_blank"
                            className="group inline-flex items-center gap-2 font-bold text-neutral-950 decoration-[#FFB703] decoration-2 underline underline-offset-4 hover:decoration-4 transition-all"
                        >
                            Book a free 15-min call
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
                    <p>© {new Date().getFullYear()} vector IO. All rights reserved.</p>
                    <div className="flex gap-6 items-center">
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-neutral-400 hover:text-[#FFB703] transition-colors">
                            <Twitter size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-neutral-400 hover:text-[#FFB703] transition-colors">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-neutral-400 hover:text-[#FFB703] transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="https://github.com" target="_blank" aria-label="GitHub" className="text-neutral-400 hover:text-[#FFB703] transition-colors">
                            <Github size={20} />
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
