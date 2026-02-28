"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Standard Link for internal navigation
import { ArrowRight } from "lucide-react";

// Using a mix of existing images and placeholders to simulate the design
const projects = [
    {
        id: 1,
        title: "Local Salon Website",
        stat: "Increased inquiries by 40%.",
        image: "/bg2.jpg", // Placeholder - replacing with closest available or abstract
        category: "Service Business",
        ctaVariant: "primary", // Yellow button
    },
    {
        id: 2,
        title: "Inventory Management App",
        stat: "Reduced manual work by 60%.",
        image: "/work-finance.png", // Using existing finance image which likely has charts
        category: "SaaS / Internal Tool",
        ctaVariant: "secondary", // White button
    },
    {
        id: 3,
        title: "Fitness Coaching Landing Page",
        stat: "Boosted sign-ups by 35%.",
        image: "/work-ecommerce.png", // Placeholder
        category: "Landing Page",
        ctaVariant: "secondary", // White button
    }
];

export default function SelectedWork() {
    return (
        <section id="work" className="py-24 bg-white relative">

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Selected Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight mb-2">
                            Recent Projects That Helped
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#FFB703] tracking-tight mb-6">
                            Businesses Grow
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            A few projects we’ve built for startups and small teams.
                        </p>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                top: `calc(120px + ${index * 60}px)`,
                                zIndex: index
                            }}
                            className="sticky md:static group bg-white rounded-3xl p-4 shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-2">
                                <h3 className="text-xl font-bold text-neutral-950 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-600 mb-6 font-medium">
                                    {project.stat}
                                </p>

                                {/* Button */}
                                <div>
                                    {project.ctaVariant === "primary" ? (
                                        <Link
                                            href="#"
                                            className="inline-flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm bg-[#FFB703] text-neutral-950 hover:bg-[#ffc94d] transition-colors gap-2"
                                        >
                                            View Case Study
                                            <ArrowRight size={18} />
                                        </Link>
                                    ) : (
                                        <Link
                                            href="#"
                                            className="inline-flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm bg-neutral-50 text-neutral-950 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100 transition-all gap-2"
                                        >
                                            View Case Study
                                            <ArrowRight size={18} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <span className="text-xl text-neutral-600 font-light">
                        Want to see more of our work?
                    </span>
                    <Link
                        href="/work"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base transition-all duration-300 bg-[#FFB703] text-neutral-950 hover:bg-[#ffc94d] shadow-lg hover:shadow-xl hover:scale-105 gap-2"
                    >
                        View All Projects
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
