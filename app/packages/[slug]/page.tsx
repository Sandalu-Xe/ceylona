"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

// Mock data - in a real app this would come from a CMS or API
const packages = {
    "wild-camp": {
        title: "The Wild Camp",
        subtitle: "Yala National Park",
        description: "Immerse yourself in the heart of Yala. Luxury tents, private safaris, and the call of the wild. Experience the thrill of tracking leopards and the serenity of the jungle under the stars.",
        price: "$1,200",
        duration: "3 Days / 2 Nights",
        image: "/images/safari.png",
        gallery: ["/images/safari.png", "/images/tea.png", "/images/heritage.png"], // Using available images as placeholders
        features: [
            "Luxury Glamping Tent",
            "Private Jeep Safari",
            "Bonfire Dinner",
            "Expert Naturalist Guide",
            "All Meals Included"
        ]
    },
    "surf-escape": {
        title: "The Surf Escape",
        subtitle: "Mirissa Beach",
        description: "Ride the waves in Mirissa. Private villas, surf lessons, and sunset cocktails.",
        price: "$950",
        duration: "4 Days / 3 Nights",
        image: "/images/beach.png",
        gallery: ["/images/beach.png"],
        features: ["Private Villa", "Surf Lessons", "Breakfast Included"]
    },
    "heritage-tour": {
        title: "The Heritage Tour",
        subtitle: "Sigiriya & Polonnaruwa",
        description: "Step back in time and explore the ancient wonders of Sri Lanka. Climb the majestic Sigiriya Rock Fortress, wander through the ruins of Polonnaruwa, and experience the rich cultural tapestry of the island. This tour combines history, culture, and luxury.",
        price: "$1,500",
        duration: "5 Days / 4 Nights",
        image: "/images/heritage.png",
        gallery: ["/images/heritage.png", "/images/tea.png"],
        features: [
            "Sigiriya Rock Fortress Tour",
            "Polonnaruwa Ancient City",
            "Luxury Boutique Hotel",
            "Cultural Dance Show",
            "Private Guide & Transport"
        ]
    },
    "hill-country": {
        title: "Hill Country Retreat",
        subtitle: "Nuwara Eliya & Ella",
        description: "Escape to the cool, misty mountains of Sri Lanka's tea country. Visit historic tea factories, take a scenic train ride through the clouds, and relax in colonial-era bungalows surrounded by rolling green hills.",
        price: "$1,100",
        duration: "3 Days / 2 Nights",
        image: "/images/tea.png",
        gallery: ["/images/tea.png", "/images/heritage.png"],
        features: [
            "Tea Factory Visit & Tasting",
            "Scenic Train Journey",
            "Colonial Bungalow Stay",
            "Horton Plains Trek",
            "High Tea Experience"
        ]
    },
    "deep-sea": {
        title: "Deep Sea Expedition",
        subtitle: "Mirissa & Trincomalee",
        description: "Embark on a marine adventure to witness the giants of the ocean. From blue whales to playful dolphins, experience the best of Sri Lanka's marine life on a private luxury charter.",
        price: "$1,800",
        duration: "4 Days / 3 Nights",
        image: "/images/whales.png",
        gallery: ["/images/whales.png", "/images/beach.png"],
        features: [
            "Private Whale Watching Charter",
            "Snorkeling with Turtles",
            "Luxury Beachfront Resort",
            "Seafood BBQ Dinner",
            "Sunset Cruise"
        ]
    },
    "urban-luxury": {
        title: "Urban Luxury",
        subtitle: "Colombo City",
        description: "Discover the cosmopolitan charm of Colombo. Experience a blend of modern luxury and colonial heritage with rooftop dining, high-end shopping, and vibrant city tours.",
        price: "$800",
        duration: "2 Days / 1 Night",
        image: "/images/colombo.png",
        gallery: ["/images/colombo.png", "/images/heritage.png"],
        features: [
            "5-Star City Hotel",
            "Rooftop Bar Experience",
            "Guided City Tour",
            "Shopping at Odel & Arcade",
            "Fine Dining Dinner"
        ]
    },
};

export default function PackageDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const pkg = packages[slug as keyof typeof packages];

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
                    <Link href="/packages" className="text-primary hover:underline">Back to Packages</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-2"
                        >
                            {pkg.title}
                        </motion.h1>
                        <p className="text-xl text-white/90">{pkg.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {pkg.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">What's Included</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <span className="text-primary">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {pkg.gallery.map((img, idx) => (
                                <div key={idx} className="relative h-48 rounded-xl overflow-hidden">
                                    <Image src={img} alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Booking Sidebar */}
                <div className="relative">
                    <div className="sticky top-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <p className="text-sm text-muted-foreground">Starting from</p>
                                <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Travel Dates</label>
                                <input type="date" className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:border-primary outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Guests</label>
                                <select className="w-full p-3 rounded-lg bg-white/10 border border-white/10 focus:border-primary outline-none">
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3 Guests</option>
                                    <option>4+ Guests</option>
                                </select>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
                            Book Now
                        </button>
                        <p className="text-xs text-center text-muted-foreground mt-4">
                            No payment required today. We'll contact you to finalize details.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
