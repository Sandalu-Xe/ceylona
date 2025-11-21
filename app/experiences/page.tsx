'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Landmark, PawPrint, Sun } from 'lucide-react';

const experiences = [
    {
        id: 'adventure',
        title: 'Adventure',
        description: 'Push your limits with heart-pounding activities.',
        image: '/images/adventure-hero.png',
        icon: Compass,
        color: 'text-orange-500',
        href: '/experiences/adventure'
    },
    {
        id: 'cultural',
        title: 'Cultural',
        description: 'Immerse yourself in heritage and history.',
        image: '/images/cultural-hero.png',
        icon: Landmark,
        color: 'text-amber-500',
        href: '/experiences/cultural'
    },
    {
        id: 'wildlife',
        title: 'Wildlife',
        description: 'Witness nature in its purest form.',
        image: '/images/wildlife-hero.png',
        icon: PawPrint,
        color: 'text-green-500',
        href: '/experiences/wildlife'
    },
    {
        id: 'beach',
        title: 'Beach & Relax',
        description: 'Surrender to serenity and luxury.',
        image: '/images/beach-hero.png',
        icon: Sun,
        color: 'text-cyan-500',
        href: '/experiences/beach'
    }
];

export default function ExperiencesPage() {
    return (
        <main className="bg-background min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Curated <span className="text-primary">Experiences</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover Sri Lanka through our carefully crafted journey themes. Whether you seek adrenaline, culture, nature, or peace, we have the perfect escape for you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, idx) => (
                        <Link key={exp.id} href={exp.href} className="group relative h-[400px] rounded-3xl overflow-hidden block">
                            <Image
                                src={exp.image}
                                alt={exp.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <exp.icon className={`w-6 h-6 ${exp.color}`} />
                                        <span className={`font-bold tracking-widest uppercase text-sm ${exp.color}`}>
                                            {exp.title}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{exp.title}</h2>
                                    <p className="text-white/80 group-hover:text-white transition-colors">
                                        {exp.description}
                                    </p>
                                </motion.div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
