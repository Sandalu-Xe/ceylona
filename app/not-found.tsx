import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    const suggestions = [
        {
            title: "Ancient Wonders",
            image: "/images/experiences/sigiriya.jpg",
            href: "/experiences/cultural",
        },
        {
            title: "Wildlife Safaris",
            image: "/images/experiences/yala.jpg",
            href: "/experiences/wildlife",
        },
        {
            title: "Coastal Escapes",
            image: "/images/experiences/mirissa.jpg",
            href: "/experiences/beach",
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-12">
            <div className="text-center space-y-6 max-w-2xl mx-auto mt-20">
                <h1 className="text-8xl md:text-9xl font-bold text-neutral-800 dark:text-neutral-200">404</h1>
                <h2 className="text-2xl md:text-3xl font-light text-neutral-400">
                    Oops! You&apos;ve wandered off the beaten path.
                </h2>
                <p className="text-lg text-neutral-500">
                    Let&apos;s get you back on trail with some popular destinations.
                </p>
                <Link href="/">
                    <button className="mt-4 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
                        Return Home
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                {suggestions.map((card, index) => (
                    <Link key={index} href={card.href} className="group relative h-80 rounded-2xl overflow-hidden block">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                {card.title}
                            </h3>
                            <div className="h-1 w-12 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
