import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    const sections = [
        {
            title: "Our Story",
            description: "The journey that started it all.",
            image: "/images/experiences/sigiriya.jpg",
            href: "/about/story",
        },
        {
            title: "Meet the Team",
            description: "The experts behind your experience.",
            image: "/images/tea.png",
            href: "/about/team",
        },
        {
            title: "Get in Touch",
            description: "Start planning your adventure.",
            image: "/images/hero-bg.png",
            href: "/about/contact",
        },
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hero-bg.png"
                    alt="About Ceylona"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center space-y-6 px-6 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                        The Spirit of Ceylon
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light">
                        We are more than a travel company. We are curators of unforgettable moments.
                    </p>
                </div>
            </section>

            {/* Navigation Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24 -mt-32 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <Link
                            key={index}
                            href={section.href}
                            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl block"
                        >
                            <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:opacity-90 transition-opacity duration-500" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="h-1 w-12 bg-primary mb-6" />
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {section.title}
                                </h2>
                                <p className="text-white/80 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {section.description}
                                </p>
                                <div className="flex items-center text-white font-medium group-hover:text-primary transition-colors">
                                    <span>Explore</span>
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 text-center max-w-4xl mx-auto">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Why Ceylona?</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We believe that luxury isn't just about five-star hotels—it's about access, authenticity, and attention to detail. Our team works tirelessly to open doors to experiences that few travelers get to see, ensuring your journey through Sri Lanka is as unique as you are.
                    </p>
                </div>
            </section>
        </main>
    );
}
