'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Landmark, Utensils, Music, Users } from 'lucide-react';

export default function CulturalPage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/images/cultural-hero.png"
                    alt="Cultural Heritage of Sri Lanka"
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
                        <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">
                            Heritage & History
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                            CULTURAL
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light italic">
                            &quot;Immerse yourself in the timeless traditions and living history of the land.&quot;
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
                            Connect with the <span className="text-amber-600">Soul</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Travel is about more than just seeing; it is about understanding. Our Cultural experiences invite you to step back in time and connect with the soul of the destination. Walk through ancient temple ruins, participate in traditional ceremonies, and savor authentic local cuisine prepared by generations of masters. Discover the stories, art, and people that weave the unique tapestry of this region.
                        </p>

                        <Link href="/planner?theme=cultural">
                            <button className="px-8 py-4 bg-amber-700 text-white rounded-full font-bold text-lg hover:bg-amber-800 transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-2">
                                <Landmark className="w-5 h-5" />
                                Explore Culture
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
                            { icon: Landmark, label: "Temple Visits", desc: "Temple of the Tooth & Dambulla" },
                            { icon: Utensils, label: "Culinary Tours", desc: "Spice Gardens & Cooking Classes" },
                            { icon: Music, label: "Traditional Dance", desc: "Kandy Esala Perahera" },
                            { icon: Users, label: "Village Walks", desc: "Authentic Rural Life" }
                        ].map((activity, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-amber-500/50 transition-colors group">
                                <activity.icon className="w-10 h-10 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
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
