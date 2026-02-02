"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We start by listening. We dive deep into your business goals, audience, and challenges to build a strategy that works.",
    },
    {
        number: "02",
        title: "Design",
        description: "We craft visual directions that align with your brand. Iterative feedback loops ensure we land on the perfect look and feel.",
    },
    {
        number: "03",
        title: "Build",
        description: "We develop using modern tech stacks (Next.js, React). Clean code, fast load times, and responsive on all devices.",
    },
    {
        number: "04",
        title: "Launch",
        description: "Testing, optimization, and go-live. We hand over a polished product and provide the training you need to manage it.",
    },
];

export default function OurApproach() {
    return (
        <section id="approach" className="py-32 bg-gray-50">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="md:w-1/3">
                        <h2 className="mb-6 sticky top-24 text-4xl md:text-5xl font-bold tracking-tight">How we work</h2>
                        <p className="text-gray-600 text-lg sticky top-36">
                            A collaborative process focusing on transparency and speed. No black boxes, just clear communication.
                        </p>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-6 md:gap-10 border-b border-gray-200 pb-12 last:border-0"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <span className="text-4xl font-light text-gray-300 font-mono">
                                    {step.number}
                                </span>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
