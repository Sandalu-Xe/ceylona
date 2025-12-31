"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

// Dynamically import Leaflet map to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/map/leaflet-map"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full flex items-center justify-center bg-neutral-900 text-white">
            Loading Map...
        </div>
    ),
});

export default function PlannerPage() {
    const [step, setStep] = useState(1);
    const [viewState, setViewState] = useState({
        center: [7.8731, 80.7718] as [number, number], // Sri Lanka center
        zoom: 7.5,
    });

    const [preferences, setPreferences] = useState({
        duration: "",
        interests: [] as string[],
        travelers: "",
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PlannerContent
                step={step}
                setStep={setStep}
                viewState={viewState}
                setViewState={setViewState}
                preferences={preferences}
                setPreferences={setPreferences}
            />
        </Suspense>
    );
}

interface ViewState {
    center: [number, number];
    zoom: number;
}

interface Preferences {
    duration: string;
    interests: string[];
    travelers: string;
}

interface PlannerContentProps {
    step: number;
    setStep: (step: number) => void;
    viewState: ViewState;
    setViewState: (viewState: ViewState) => void;
    preferences: Preferences;
    setPreferences: React.Dispatch<React.SetStateAction<Preferences>>;
}

function PlannerContent({ step, setStep, viewState, setViewState, preferences, setPreferences }: PlannerContentProps) {
    const searchParams = useSearchParams();

    useEffect(() => {
        const theme = searchParams.get("theme");
        if (theme) {
            const interestMap: Record<string, string> = {
                adventure: "Hiking",
                cultural: "Culture",
                wildlife: "Wildlife",
                beach: "Beaches",
            };
            const interest = interestMap[theme];
            if (interest && !preferences.interests.includes(interest)) {
                setPreferences((prev) => ({
                    ...prev,
                    interests: [...prev.interests, interest]
                }));
                // Auto-advance to step 2 if theme is present
                setStep(2);
            }
        }
    }, [searchParams, preferences.interests, setPreferences, setStep]);

    const handleNext = () => {
        setStep(step + 1);
        // Simulate map movement for "Traveller Plane" concept
        if (step === 1) {
            // Fly to Colombo
            setViewState({ center: [6.9271, 79.8612], zoom: 12 });
        } else if (step === 2) {
            // Fly to Kandy
            setViewState({ center: [7.2906, 80.6337], zoom: 13 });
        } else if (step === 3) {
            // Fly to Yala
            setViewState({ center: [6.3716, 81.5244], zoom: 11 });
        }
    };

    return (
        <main className="flex flex-col md:flex-row h-screen w-full bg-background overflow-hidden">
            {/* Left Panel - AI Planner Wizard */}
            <div className="w-full md:w-1/3 h-1/2 md:h-full z-10 bg-background/80 backdrop-blur-xl border-b md:border-r border-black/10 dark:border-white/10 p-6 md:p-8 flex flex-col justify-center relative shadow-2xl overflow-y-auto">
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
                                    className="w-full p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
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
                                                    ? preferences.interests.filter((i: string) => i !== interest)
                                                    : [...preferences.interests, interest];
                                                setPreferences({ ...preferences, interests: newInterests });
                                            }}
                                            className={`px-4 py-2 rounded-full text-sm transition-all ${preferences.interests.includes(interest) ? 'bg-primary text-white' : 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10'}`}
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

            {/* Right Panel - Leaflet Map */}
            <div className="relative w-full md:w-2/3 h-1/2 md:h-full bg-neutral-900">
                <LeafletMap center={viewState.center} zoom={viewState.zoom} />

                {/* Map Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-transparent z-10" />
            </div>
        </main>
    );
}
