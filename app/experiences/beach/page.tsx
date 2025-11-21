'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sun, Waves, Ship, Flower2 } from 'lucide-react';

export default function BeachPage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/images/beach-hero.png"
                    alt="Beach and Relaxation in Sri Lanka"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cyan-400 font-bold tracking-widest uppercase mb-4 block">
                            Serenity & Luxury
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                            BEACH & RELAX
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light italic">
                            &quot;Escape the ordinary and surrender to the rhythm of the waves.&quot;
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-foreground">
                            Surrender to <span className="text-cyan-500">Serenity</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Sometimes, the best adventure is doing absolutely nothing. Our Beach & Relax experiences are curated for pure tranquility. Picture yourself sinking your toes into powdery white sands, swimming in crystal-clear turquoise waters, or unwinding with a sunset spa treatment. Whether you seek a luxury resort or a secluded private cove, this is your time to recharge, rejuvenate, and breathe.
                        </p>

                        <Link href="/planner?theme=beach">
                            <button className="px-8 py-4 bg-cyan-600 text-white rounded-full font-bold text-lg hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center gap-2">
                                <Sun className="w-5 h-5" />
                                Relax Now
                            </button>
                        </Link>
                    </motion.div>

                    {/* Key Activities */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {[
                            { icon: Sun, label: "Sunbathing", desc: "Unawatuna & Mirissa" },
                            { icon: Flower2, label: "Spa Treatments", desc: "Ayurveda & Wellness" },
                            { icon: Ship, label: "Sunset Cruises", desc: "Indian Ocean Luxury" },
                            { icon: Waves, label: "Yoga Retreats", desc: "Mindfulness by the Sea" }
                        ].map((activity, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-cyan-500/50 transition-colors group">
                                <activity.icon className="w-10 h-10 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2">{activity.label}</h3>
                                <p className="text-sm text-muted-foreground">{activity.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
