"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BookCallButtonProps {
    variant?: "primary" | "secondary";
    className?: string;
    children?: React.ReactNode;
    calLink?: string;
}

export default function BookCallButton({
    variant = "primary",
    className = "",
    children,
    calLink = "https://cal.com/neeraj-kushwaha-juw62g/discovery-call"
}: BookCallButtonProps) {

    if (variant === "primary") {
        return (
            <Link
                href={calLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex items-center shadow-md justify-center gap-2 px-8 py-3.5 text-base  font-bold text-neutral-950 transition-all duration-300 bg-[#FFB703] rounded-full hover:bg-[#ffc94d] shadow-lg hover:shadow-xl hover:scale-105 ${className}`}
            >
                <span>{children || "Book a Call"}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        );
    }

    // Secondary variant (for View Our Work)
    return (
        <Link
            href={calLink}
            className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-base transition-all duration-300 bg-neutral-950 text-white border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 hover:shadow-lg hover:-translate-y-0.5 gap-2 ${className}`}
        >
            {children || "View Our Work"}
            <ArrowRight className="w-5 h-5" />
        </Link>
    );
}
