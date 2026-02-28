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
                            {/* Headline */}
                            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-5 text-neutral-950 max-w-5xl">
                                Apps and webapps
                                <br className="hidden md:block" /> built for <span className="text-amber-500">scale.</span>
                            </h1>

                            {/* Subtext */}
                            <motion.p
                                className="text-base md:text-lg text-neutral-600 max-w-2xl mb-5 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                We help founders and growing teams build websites and applications that turn traffic into revenue.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <BookCallButton variant="primary" />

                                <BookCallButton variant="secondary" calLink="#plans">
                                    View Plans
                                </BookCallButton>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
