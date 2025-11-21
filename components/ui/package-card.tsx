"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface PackageCardProps {
    title: string;
    description: string;
    price: string;
    image: string;
    slug: string;
    className?: string;
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export function PackageCard({ title, description, price, image, slug, className }: PackageCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link href={`/packages/${slug}`}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className={cn(
                    "relative h-[400px] md:h-[500px] w-full rounded-xl bg-white dark:bg-white/5 cursor-pointer",
                    className
                )}
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl shadow-lg"
                >
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="relative z-10 p-6 flex flex-col h-full justify-end text-white">
                        <h3 className="text-2xl md:text-3xl font-bold drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {title}
                        </h3>
                        <p className="mt-2 text-white/90 drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {description}
                        </p>
                        <div className="mt-4 font-semibold text-xl text-accent drop-shadow-md">
                            {price}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
