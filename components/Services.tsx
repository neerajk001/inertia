"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BookCallButton from "./BookCallButton";

const services = [
    {
        id: "01",
        title: "Business Websites That Convert",
        description: "Landing pages, company sites, and marketing websites designed to bring leads—not just look good.",
        features: ["Fast load", "SEO-ready", "Mobile-first"],
    },
    {
        id: "02",
        title: "Custom Web & Mobile Apps",
        description: "Internal tools, dashboards, and customer apps built to solve real business problems.",
        features: ["Scalable", "Secure", "Built for growth"],
    },
    {
        id: "03",
        title: "Micro-Interactions & Motion",
        description: "Subtle animations and interactions that improve user experience and increase engagement—without hurting performance.",
        features: ["Smooth motion", "Intuitive UI", "Engaging details"],
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 bg-white/50">

            {/* Background Grid Pattern (Optional, strictly based on image it looks like a clean background or subtle grid) */}
            {/* Assuming the same global background or a clean one. The image shows a subtle grid. */}
            <div className="absolute inset-0 z-[-1] opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            ></div>

            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Our Services</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight mb-2">
                            What We Help You Build
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#FFB703] tracking-tight">
                            For Your Business
                        </h2>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 flex flex-col h-full transition-all duration-300 hover:border-[#FFB703]/40 hover:shadow-[0_0_0_1px_rgba(255,183,3,0.4),0_0_20px_rgba(255,183,3,0.15)]"
                        >
                            <span className="text-[#FFB703] font-bold text-lg mb-4 block">{service.id}</span>
                            <h3 className="text-2xl font-bold text-neutral-950 mb-4 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-auto space-y-3">
                                {service.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-[#FFB703]" strokeWidth={3} />
                                        <span className="text-neutral-800 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left"
                >
                    <p className="text-xl text-neutral-600 font-light hidden md:block">
                        Not sure what you need?
                    </p>
                    <p className="text-lg text-neutral-600 font-light md:hidden mb-2">
                        Not sure what you need?
                    </p>
                    <BookCallButton className="!px-10 !py-4 !text-lg shadow-xl shadow-amber-500/20">
                        Book a Free 15-min Call
                    </BookCallButton>
                </motion.div>

            </div>
        </section>
    );
}
