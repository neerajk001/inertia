"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Wrench, Rocket } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Understand Your Business",
        description: "We start by understanding your goals, users, and constraints.",
        icon: Lightbulb,
    },
    {
        id: "02",
        title: "Design With Purpose",
        description: "Wireframes and designs focused on clarity, usability, and conversion.",
        icon: PenTool,
    },
    {
        id: "03",
        title: "Build & Iterate",
        description: "Clean, scalable development with regular updates and feedback.",
        icon: Wrench, // Combined with settings idea via Lucide
    },
    {
        id: "04",
        title: "Launch & Support",
        description: "We launch, monitor, and support you as your product grows.",
        icon: Rocket,
    },
];

export default function HowWeWork() {
    return (
        <section className="py-24 bg-neutral-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">How We Work</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-neutral-950 tracking-tight leading-tight">
                            A simple, transparent process—<br />
                            so you <span className="text-[#FFB703]">always know what’s next.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Timeline Connector Line */}
                {/* Hidden on mobile, visible on md+ */}
                <div className="hidden md:block absolute top-[308px] left-0 right-0 w-full h-[2px] bg-[#FFB703]/30 z-0 max-w-6xl mx-auto" />

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col h-full bg-white rounded-2xl p-6 pt-12 shadow-sm border border-neutral-100 relative group hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFB703] text-white flex items-center justify-center font-bold shadow-md z-20">
                                {step.id}
                            </div>

                            <div className="flex flex-col items-center text-center flex-grow">
                                <h3 className="text-xl font-bold text-neutral-950 mb-4 h-[56px] flex items-center justify-center">
                                    {step.title}
                                </h3>

                                {/* Icon Circle */}
                                <div className="w-12 h-12 mb-6 text-neutral-800">
                                    <step.icon strokeWidth={1.5} className="w-full h-full" />
                                </div>

                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <p className="text-lg text-neutral-700 font-medium">
                        No long-term contracts. No hidden costs. Just clear communication.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
