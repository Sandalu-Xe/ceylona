'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PawPrint, Binoculars, Anchor, TreePine } from 'lucide-react';

export default function WildlifePage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/images/wildlife-hero.png"
                    alt="Wildlife of Sri Lanka"
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
                        <span className="text-green-500 font-bold tracking-widest uppercase mb-4 block">
                            Nature & Conservation
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                            WILDLIFE
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light italic">
                            &quot;Witness nature’s grandest theater in its purest, wildest form.&quot;
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
                            Into the <span className="text-green-600">Wild</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Step into the wild and witness nature in its natural habitat. Our Wildlife expeditions offer front-row seats to the animal kingdom, from the majestic elephants gathering at waterholes to the elusive leopards stalking through the brush. Guided by expert naturalists, you will explore biodiversity hotspots and protected reserves, ensuring a respectful and awe-inspiring encounter with the wild.
                        </p>

                        <Link href="/planner?theme=wildlife">
                            <button className="px-8 py-4 bg-green-700 text-white rounded-full font-bold text-lg hover:bg-green-800 transition-all shadow-lg hover:shadow-green-500/30 flex items-center gap-2">
                                <PawPrint className="w-5 h-5" />
                                Discover Wildlife
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
                            { icon: PawPrint, label: "Jeep Safaris", desc: "Yala, Wilpattu & Minneriya" },
                            { icon: Binoculars, label: "Bird Watching", desc: "Kumana & Sinharaja" },
                            { icon: Anchor, label: "Whale Watching", desc: "Mirissa & Trincomalee" },
                            { icon: TreePine, label: "Eco-lodges", desc: "Sustainable Stays in Nature" }
                        ].map((activity, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-green-500/50 transition-colors group">
                                <activity.icon className="w-10 h-10 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
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
