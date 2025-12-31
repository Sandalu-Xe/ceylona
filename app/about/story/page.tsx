import Image from "next/image";

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hero-bg.png"
                    alt="Our Story"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="relative z-10 text-center space-y-4 px-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground">Our Story</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Redefining luxury travel in the heart of Sri Lanka.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-6 py-24 space-y-24">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">The Beginning</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Ceylona Camps was born from a simple yet profound realization: Sri Lanka&apos;s beauty deserves to be experienced with the same elegance and attention to detail as the world&apos;s finest products. We set out to bridge the gap between rugged adventure and refined luxury, creating a travel experience that feels seamless, intuitive, and deeply moving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/experiences/sigiriya.jpg"
                            alt="Cultural Heritage"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Our Philosophy</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We believe in the &quot;Apple of Travel&quot; – a philosophy where every touchpoint is curated, every interaction is smooth, and every moment is designed to delight. From the moment you plan your trip to the final sunset, we ensure a journey that is as effortless as it is unforgettable.
                        </p>
                    </div>
                </div>

                <div className="space-y-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Sustainability</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Our love for this island runs deep. That&apos;s why we are committed to sustainable tourism practices that protect our wildlife, preserve our heritage, and uplift local communities. Every Ceylona experience is designed to leave a positive footprint.
                    </p>
                </div>
            </section>
        </main>
    );
}
