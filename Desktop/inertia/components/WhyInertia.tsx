"use client";

import { motion } from "framer-motion";
import { Store, CircleDollarSign, Target, MessageSquareText } from "lucide-react";

const reasons = [
    {
        id: "01",
        title: "Built for Small Businesses",
        description: "We understand real constraints—time, budget, and speed.",
        icon: Store,
    },
    {
        id: "02",
        title: "No Agency Overhead",
        description: "You get senior-level work without big-agency pricing.",
        icon: CircleDollarSign,
    },
    {
        id: "03",
        title: "Conversion First",
        description: "Design decisions backed by usability and business goals.",
        icon: Target,
    },
    {
        id: "04",
        title: "Clear Communication",
        description: "No jargon. No surprises. You always know what’s happening.",
        icon: MessageSquareText,
    },
];

export default function WhyInertia() {
    return (
        <section id="why-inertia" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight mb-6">
                            Why Inertia Studio
                        </h2>
                        <p className="text-lg text-neutral-600">
                            We focus on what actually matters for small businesses.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 relative z-10">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col h-full bg-white rounded-2xl p-6 pt-12 shadow-md border border-neutral-100 relative group hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFB703] text-white flex items-center justify-center font-bold shadow-md z-20">
                                {reason.id}
                            </div>

                            <div className="flex flex-col items-center text-center flex-grow">
                                <h3 className="text-xl font-bold text-neutral-950 mb-4 h-[56px] flex items-center justify-center">
                                    {reason.title}
                                </h3>

                                {/* Icon Circle */}
                                <div className="w-12 h-12 mb-6 text-neutral-800">
                                    <reason.icon strokeWidth={1.5} className="w-full h-full" />
                                </div>

                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    {reason.description}
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
