"use client";

import { motion } from "framer-motion";

export default function MotionPhilosophy() {
    return (
        <section className="py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1400px] text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tight">Motion with Meaning</h2>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                        "We believe motion shouldn't distract—it should define. We use subtle interactions to <span className="text-black font-medium">guide</span> attention, <span className="text-black font-medium">clarify</span> context, and <span className="text-black font-medium">elevate</span> the overall experience."
                    </p>
                </motion.div>

                {/* Abstract Animation */}
                <div className="mt-16 flex justify-center gap-4">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-black rounded-full"
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
