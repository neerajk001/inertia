"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code, Layout, Smartphone, Database, PenTool, BarChart3 } from "lucide-react";

// Placeholder data for projects
const works = [
    {
        id: 1,
        title: "E-Commerce Replatforming",
        category: "Web Development",
        description: "A complete overhaul of a legacy e-commerce platform, resulting in a 45% increase in conversion rate and blazing fast page loads.",
        image: "/work-ecommerce.png", // Or a placeholder if not exists
        color: "from-amber-100 to-yellow-50",
        accent: "text-amber-600",
        icon: <Layout className="w-6 h-6" />,
        link: "#"
    },
    {
        id: 2,
        title: "FinTech Dashboard",
        category: "SaaS Application",
        description: "Designing and building a secure, intuitive dashboard for a growing modern FinTech startup to manage daily transactions.",
        image: "/work-finance.png",
        color: "from-blue-50 to-indigo-50",
        accent: "text-blue-600",
        icon: <BarChart3 className="w-6 h-6" />,
        link: "#"
    },
    {
        id: 3,
        title: "Healthcare Wellness App",
        category: "App Development",
        description: "A patient-centric mobile application bridging the gap between doctors and patients with real-time health updates.",
        image: "/bg2.jpg",
        color: "from-emerald-50 to-teal-50",
        accent: "text-emerald-600",
        icon: <Smartphone className="w-6 h-6" />,
        link: "#"
    },
    {
        id: 4,
        title: "AI Content Platform",
        category: "Custom Software",
        description: "An AI-driven platform for content creators to generate and optimize articles, saving them 80% on writing time.",
        image: "/bg2.jpg",
        color: "from-purple-50 to-fuchsia-50",
        accent: "text-purple-600",
        icon: <Code className="w-6 h-6" />,
        link: "#"
    },
    {
        id: 5,
        title: "Real Estate Portal",
        category: "UI/UX Design",
        description: "A premium real estate listing portal with advanced filtering, mapping, and immersive 3D virtual property tours.",
        image: "/work-finance.png",
        color: "from-orange-50 to-red-50",
        accent: "text-orange-600",
        icon: <PenTool className="w-6 h-6" />,
        link: "#"
    },
    {
        id: 6,
        title: "Logistics Admin Panel",
        category: "Enterprise System",
        description: "A robust internal system for managing fleet operations, tracking deliveries, and optimizing regional routes.",
        image: "/work-ecommerce.png",
        color: "from-slate-100 to-gray-50",
        accent: "text-slate-600",
        icon: <Database className="w-6 h-6" />,
        link: "#"
    }
];

export default function WorkPage() {
    return (
        <main className="min-h-screen selection:bg-[#FFB703] selection:text-white flex flex-col pt-24 bg-neutral-50 relative overflow-hidden">
            <Navbar />

            <section className="flex-1 py-16 md:py-24 relative z-10">
                {/* Background accents */}
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#FFB703]/5 to-transparent -z-10" />
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl -z-10" />

                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl mb-16 md:mb-24">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold text-neutral-950 mb-6 tracking-tight"
                        >
                            Our <span className="text-[#FFB703]">Work</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-neutral-600"
                        >
                            Explore a selection of our recent projects. We craft digital experiences that drive growth, efficiency, and scale for modern businesses.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {works.map((work, index) => (
                            <motion.div
                                key={work.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-neutral-300 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Dotted Background overlay */}
                                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-0"></div>

                                {/* Top Image Area */}
                                <div className={`relative h-64 w-full p-6 flex flex-col justify-between bg-gradient-to-br ${work.color} z-10 overflow-hidden`}>
                                    <div className="flex justify-between items-start relative z-20">
                                        <div className={`p-3 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm ${work.accent}`}>
                                            {work.icon}
                                        </div>
                                        <Link href={work.link} className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-neutral-900 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:scale-110 shadow-sm">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Link>
                                    </div>

                                    {/* Mockup decoration */}
                                    <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/20 rounded-full blur-2xl z-10 transition-transform duration-700 group-hover:scale-150"></div>
                                    <div className="absolute -bottom-4 right-4 w-3/4 h-3/4 bg-white/40 rounded-t-2xl shadow-lg border-t border-l border-white/60 z-20 translate-y-8 group-hover:translate-y-4 transition-transform duration-500 overflow-hidden">
                                        <Image src={work.image || "/bg2.jpg"} alt={work.title} fill className="object-cover opacity-80 mix-blend-multiply" />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex flex-col flex-1 z-10 bg-white">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${work.accent} bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100`}>
                                            {work.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#FFB703] transition-colors">
                                        {work.title}
                                    </h3>
                                    <p className="text-neutral-600 mb-6 flex-1 line-clamp-3">
                                        {work.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-neutral-100">
                                        <Link href={work.link} className="inline-flex items-center text-sm font-semibold text-neutral-900 group-hover:text-[#FFB703] transition-colors gap-2">
                                            View Details
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
