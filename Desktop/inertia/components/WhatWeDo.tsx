"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        title: "High-End Websites",
        description: "Immersive marketing sites that convert. We blend editorial design with technical performance to create digital flagships that set you apart.",
    },
    {
        title: "Web & Mobile Apps",
        description: "Functional product design that feels natural. We solve complex business problems with intuitive, clean, and scalable interfaces.",
    },
    {
        title: "Motion & Interaction",
        description: "Animation with purpose. We use subtle motion to guide attention, clarify context, and create moments of delight without distraction.",
    }
];

export default function WhatWeDo() {
    const [activeService, setActiveService] = useState<number | null>(null);

    return (
        <section id="services" className="py-32 bg-neutral-950 text-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px]">

                {/* Section Header */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-900 pb-8">
                    <motion.h2
                        className="text-sm font-medium tracking-widest text-neutral-500 uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        className="text-neutral-400 max-w-sm text-right hidden md:block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Focused on three core pillars of digital excellence.
                    </motion.p>
                </div>

                {/* Interactive List */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            onMouseEnter={() => setActiveService(index)}
                            onMouseLeave={() => setActiveService(null)}
                            className="group relative border-b border-neutral-800 py-12 md:py-16 transition-colors duration-500 hover:border-neutral-600 cursor-default"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 relative z-10">

                                {/* Number */}
                                <span className={`font-mono text-sm transition-colors duration-500 ${activeService === index ? "text-white" : "text-neutral-600"
                                    }`}>
                                    0{index + 1}
                                </span>

                                {/* Title */}
                                <h3 className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-500 ${activeService !== null && activeService !== index
                                        ? "text-neutral-700 blur-[2px]"
                                        : "text-neutral-100"
                                    }`}>
                                    {service.title}
                                </h3>

                                {/* Description - Desktop (Visible on Hover) */}
                                <div className="hidden md:block w-96 h-20 relative">
                                    <AnimatePresence mode="wait">
                                        {activeService === index && (
                                            <motion.p
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                className="absolute top-0 left-0 text-lg text-neutral-400 leading-relaxed"
                                            >
                                                {service.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Description - Mobile (Always visible) */}
                                <p className="md:hidden text-neutral-400 text-lg leading-relaxed max-w-md">
                                    {service.description}
                                </p>

                            </div>

                            {/* Hover Glow Effect */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r from-neutral-900/0 via-neutral-900/40 to-neutral-900/0 opacity-0 transition-opacity duration-500 pointer-events-none ${activeService === index ? "opacity-100" : ""
                                    }`}
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
