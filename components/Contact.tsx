"use client";

import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-white text-center">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl mb-8 tracking-tight">Ready to move forward?</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto">
                        Let's build something that sets you apart. No pressure, just a conversation about your goals.
                    </p>

                    <BookCallButton variant="secondary">
                        Start a Conversation
                    </BookCallButton>

                    <div className="mt-16 text-gray-500">
                        <p>Prefer to chat first? <a href="mailto:hello@inertiastudio.com" className="underline hover:text-black">hello@inertiastudio.com</a></p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
