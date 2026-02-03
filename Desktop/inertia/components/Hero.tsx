"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BookCallButton from "./BookCallButton";

export default function Hero() {
    return (
        <section className="relative z-0 min-h-screen flex items-center justify-center text-neutral-950 overflow-hidden pt-20 pb-12 md:pb-0">


            {/* Background Ambience - Warm Glow */}
            {/* Background Ambience - Warm Glow - Removed for clean white look */}

            {/* Bottom fade for depth - Removed */}

            <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                <div className="max-w-5xl mx-auto">

                    <div className="relative">
                        {/* Background Image - Constrained to text area */}
                        <div className="absolute -inset-4 -z-10 rounded-3xl overflow-hidden">
                            <Image
                                src="/bg2.jpg"
                                alt="Background Pattern"
                                fill
                                priority
                                className="object-cover object-center opacity-10"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center text-center relative z-10"
                        >
                            {/* Label */}
                            <div className="mb-4 overflow-hidden">
                                <motion.span
                                    className="inline-block py-1.5 px-4 rounded-full border border-neutral-200 bg-white/50 text-xs font-bold tracking-widest uppercase text-neutral-900 backdrop-blur-sm shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    Inertia Studio
                                </motion.span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-5 text-neutral-950 max-w-5xl">
                                Apps & Web Apps
                                <br className="hidden md:block" /> That Help Small Businesses <span className="text-amber-500">Grow.</span>
                            </h1>

                            {/* Subtext */}
                            <motion.p
                                className="text-base md:text-lg text-neutral-600 max-w-2xl mb-5 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                We create modern, high-converting websites and scalable web applications for startups and small businesses—without big agency costs.
                            </motion.p>

                            {/* Tagline */}
                            <motion.div
                                className="mb-6 text-lg md:text-xl font-medium text-neutral-900"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.8 }}
                            >
                                Clarity in <span className="font-bold text-amber-600">design</span>. Motion <span className="font-bold text-amber-600">with purpose</span>. Built to <span className="font-bold text-amber-600">convert</span>.
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <BookCallButton variant="primary" />

                                <BookCallButton variant="secondary" calLink="#work">
                                    View Our Work
                                </BookCallButton>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
