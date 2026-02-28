"use client";

import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const plans = [
    {
        id: "essential",
        title: "Essential Setup",
        description: "Ideal for businesses starting their digital journey with a clean and professional foundation.",
        time: "1–2 weeks",
        price: "$200+",
        features: [
            "Professional online presence",
            "Service & offering showcase",
            "Inquiry management system",
            "Mobile-optimized design",
            "Basic performance setup"
        ],
        iconBg: "bg-neutral-800",
        iconColor: "text-white"
    },
    {
        id: "professional",
        title: "Professional System",
        description: "Ideal for businesses that want structured operations and organized daily management.",
        time: "2–4 weeks",
        price: "$450+",
        features: [
            "Secure admin access",
            "Centralized data management",
            "Booking or activity tracking",
            "Calendar-based scheduling",
            "Performance overview dashboard"
        ],
        iconBg: "bg-yellow-500", // 🟡 Yellow
        iconColor: "text-white"
    },
    {
        id: "advanced",
        title: "Advanced Automation",
        description: "Ideal for growing businesses seeking smoother workflows and financial clarity.",
        time: "4–6 weeks",
        price: "$650+",
        features: [
            "Integrated payment handling",
            "Automated confirmations",
            "Digital documentation",
            "Revenue tracking system",
            "Multi-user access",
            "Enhanced system performance"
        ],
        iconBg: "bg-orange-500", // 🟠 Orange
        iconColor: "text-white"
    },
    {
        id: "complete",
        title: "Complete Management Suite",
        description: "Ideal for established businesses managing larger operations or multiple units.",
        time: "6–8 weeks",
        price: "$1,000+",
        features: [
            "Role-based access control",
            "Multi-location support",
            "Advanced reporting & insights",
            "Expense & profit tracking",
            "Priority optimization support",
            "Scalable system structure"
        ],
        iconBg: "bg-red-500", // 🔴 Red
        iconColor: "text-white"
    }
];

export default function Plans() {
    return (
        <section id="plans" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Pricing & Plans</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight mb-4">
                            Transparent configurations for <br className="hidden md:block" />
                            <span className="text-[#FFB703]">every stage of growth.</span>
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Choose the plan that fits your business needs, with clear pricing and delivery timelines.
                        </p>
                    </motion.div>
                </div>

                {/* Plans List */}
                <div className="flex flex-col gap-6 pb-24">
                    {plans.map((plan, index) => {
                        const isPopular = plan.id === "professional";

                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                style={{
                                    top: `calc(80px + ${index * 20}px)`,
                                    zIndex: index + 1
                                }}
                                className={`sticky rounded-[32px] p-6 lg:p-8 shadow-sm border flex flex-col lg:flex-row gap-8 lg:gap-16 transition-all duration-500
                                    ${isPopular
                                        ? 'bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#042f2e] border-neutral-800 text-white shadow-2xl lg:scale-[1.02]'
                                        : 'bg-[#F8F9FA] border-neutral-100 text-neutral-950'}
                                `}
                            >
                                {/* Left Column */}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${plan.iconBg}`}>
                                            <Sparkles className={`w-5 h-5 ${plan.iconColor}`} />
                                        </div>
                                        {isPopular && (
                                            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                                                Most Popular
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={`text-2xl lg:text-3xl font-bold mb-3 ${isPopular ? 'text-white' : 'text-neutral-950'}`}>{plan.title}</h3>

                                    <p className={`text-sm lg:text-base leading-relaxed mb-auto pb-6 ${isPopular ? 'text-neutral-400' : 'text-neutral-600'}`}>
                                        {plan.description}
                                    </p>

                                    <div className="mt-6">
                                        <div className={`flex items-center justify-between text-sm mb-2 ${isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                            <span>Delivery Time</span>
                                            <span className={`font-medium ${isPopular ? 'text-neutral-200' : 'text-neutral-900'}`}>{plan.time}</span>
                                        </div>
                                        <div className={`w-full h-px ${isPopular ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex-1 flex flex-col">
                                    <div className="mb-4 flex flex-col items-start lg:items-end">
                                        {isPopular && <div className="text-neutral-400 font-medium text-sm lg:text-base mb-1">Starting at</div>}
                                        <div className={`text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${isPopular ? 'text-[#10b981]' : 'text-neutral-950'}`}>
                                            {plan.price}
                                        </div>
                                        <div className={`w-full h-px ${isPopular ? 'bg-neutral-800' : 'bg-neutral-200'}`} />
                                    </div>

                                    <ul className="flex flex-col gap-3 mb-6 flex-1">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${isPopular ? 'bg-neutral-800' : 'bg-neutral-200'}`}>
                                                    <Check className={`w-2.5 h-2.5 ${isPopular ? 'text-[#10b981]' : 'text-neutral-600'}`} strokeWidth={3} />
                                                </div>
                                                <span className={`text-sm lg:text-base ${isPopular ? 'text-neutral-300' : 'text-neutral-700'}`}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="https://cal.com/neeraj-kushwaha-juw62g/discovery-call"
                                        target="_blank"
                                        className={`w-full lg:max-w-xs flex items-center justify-center gap-2 py-3 lg:py-4 rounded-full font-medium transition-colors lg:ml-auto focus:ring-4 focus:outline-none text-sm lg:text-base
                                            ${isPopular ? 'bg-white text-neutral-950 hover:bg-neutral-200 hover:scale-105 active:scale-95 duration-300' : 'bg-[#4A4A4A] hover:bg-neutral-800 text-white'}
                                        `}
                                    >
                                        Book a call
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
