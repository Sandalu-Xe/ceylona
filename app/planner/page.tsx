"use client";

import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion } from "framer-motion";

// Note: You should replace this with your actual Mapbox access token in a .env.local file
// NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1Ij...
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

export default function PlannerPage() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [step, setStep] = useState(1);
    const [preferences, setPreferences] = useState({
        duration: "",
        interests: [] as string[],
        travelers: "",
    });

    useEffect(() => {
        if (map.current) return; // initialize map only once
        if (!mapContainer.current) return;

        // Default to a public token if not provided, but this will likely fail without a real one.
        // We'll handle the error gracefully or show a placeholder.
        mapboxgl.accessToken = MAPBOX_TOKEN;

        try {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/satellite-streets-v12", // 3D satellite view
                center: [80.7718, 7.8731], // Sri Lanka center
                zoom: 7.5,
                pitch: 45, // 3D pitch
                bearing: 0,
                projection: 'globe'
            });

            map.current.on('style.load', () => {
                map.current?.setFog({
                    color: 'rgb(186, 210, 235)', // Lower atmosphere
                    'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
                    'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
                    'space-color': 'rgb(11, 11, 25)', // Background color
                    'star-intensity': 0.6 // Background star brightness (default 0.35 at low zooms )
                });
            });
        } catch (e) {
            console.error("Mapbox initialization failed. Check your API token.", e);
        }
    }, []);

    const handleNext = () => {
        setStep(step + 1);
        // Simulate map movement for "Traveller Plane" concept
        if (map.current) {
            if (step === 1) {
                map.current.flyTo({ center: [79.8612, 6.9271], zoom: 12, speed: 0.8, curve: 1 }); // Colombo
            } else if (step === 2) {
                map.current.flyTo({ center: [80.6337, 7.2906], zoom: 12, speed: 0.8, curve: 1 }); // Kandy
            } else if (step === 3) {
                map.current.flyTo({ center: [81.5244, 6.3716], zoom: 11, speed: 0.8, curve: 1 }); // Yala
            }
        }
    };

    return (
        <main className="flex h-screen w-full bg-background overflow-hidden">
            {/* Left Panel - AI Planner Wizard */}
            <div className="w-full md:w-1/3 z-10 bg-background/80 backdrop-blur-xl border-r border-white/10 p-8 flex flex-col justify-center relative shadow-2xl">
                <div className="max-w-md mx-auto w-full space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                    >
                        <h1 className="text-4xl font-bold text-primary">Plan Your Journey</h1>
                        <p className="text-muted-foreground">Let our AI craft your perfect Sri Lankan escape.</p>
                    </motion.div>

                    <div className="space-y-6">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                                <label className="block text-sm font-medium">How many days?</label>
                                <input
                                    type="number"
                                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="e.g., 7"
                                    value={preferences.duration}
                                    onChange={(e) => setPreferences({ ...preferences, duration: e.target.value })}
                                />
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                                <label className="block text-sm font-medium">What interests you?</label>
                                <div className="flex flex-wrap gap-2">
                                    {["Beaches", "Wildlife", "Culture", "Hiking", "Food"].map((interest) => (
                                        <button
                                            key={interest}
                                            onClick={() => {
                                                const newInterests = preferences.interests.includes(interest)
                                                    ? preferences.interests.filter(i => i !== interest)
                                                    : [...preferences.interests, interest];
                                                setPreferences({ ...preferences, interests: newInterests });
                                            }}
                                            className={`px-4 py-2 rounded-full text-sm transition-all ${preferences.interests.includes(interest) ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'}`}
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                                    <h3 className="font-semibold text-primary mb-2">Generating Itinerary...</h3>
                                    <p className="text-sm text-muted-foreground">Our AI is analyzing 50+ locations to build your route.</p>
                                </div>
                            </motion.div>
                        )}

                        <button
                            onClick={handleNext}
                            className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-opacity-90 transition-all shadow-lg"
                        >
                            {step === 3 ? "Finalize Plan" : "Continue"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Panel - 3D Map */}
            <div className="absolute inset-0 md:relative md:w-2/3 h-full bg-neutral-900">
                <div ref={mapContainer} className="h-full w-full" />

                {/* Map Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-transparent z-0" />
            </div>
        </main>
    );
}
