'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Footprints, Mountain, Waves, Compass } from 'lucide-react';

export default function AdventurePage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/images/adventure-hero.png"
                    alt="Adventure in Sri Lanka"
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
                        <span className="text-orange-500 font-bold tracking-widest uppercase mb-4 block">
                            Adrenaline & Exploration
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                            ADVENTURE
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light italic">
                            &quot;Push your limits and embrace the thrill of the unknown.&quot;
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
                            Unleash Your Inner <span className="text-orange-600">Explorer</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Unleash your inner explorer with our heart-pounding Adventure packages. Whether you crave the rush of white-water rafting, the challenge of a rugged mountain trek, or the freedom of surfing untouched waves, these experiences are designed for those who refuse to sit still. We take you off the beaten path to discover landscapes that are as demanding as they are breathtaking.
                        </p>

                        <Link href="/planner?theme=adventure">
                            <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2">
                                <Compass className="w-5 h-5" />
                                Start Your Adventure
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
                            { icon: Footprints, label: "Trekking", desc: "Knuckles Range & Ella Rock" },
                            { icon: Mountain, label: "Rock Climbing", desc: "Bambarakanda & Sigiriya" },
                            { icon: Waves, label: "Water Sports", desc: "Kitulgala Rafting & Arugam Bay" },
                            { icon: Compass, label: "Off-roading", desc: "4x4 Jungle Safaris" }
                        ].map((activity, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-orange-500/50 transition-colors group">
                                <activity.icon className="w-10 h-10 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
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
