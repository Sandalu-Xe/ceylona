'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/images/ceylona-logo.png"
                                    alt="Ceylona Camps"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-wide">CEYLONA</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Experience the Apple of Travel. Curated, immersive journeys through the heart of Sri Lanka.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">Explore</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/packages" className="hover:text-white transition-colors">Packages</Link></li>
                            <li><Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
                            <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                            <li><Link href="/planner" className="hover:text-white transition-colors">AI Planner</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">Company</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/about/story" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-bold mb-4 text-lg">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for exclusive offers.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/40 w-full"
                            />
                            <button className="bg-white text-black px-4 py-2 rounded-r-lg text-sm font-bold hover:bg-gray-200 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Ceylona Camps. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Designed by <span className="text-white font-medium">Sandalu</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
