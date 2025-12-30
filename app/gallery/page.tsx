import Image from "next/image";

const galleryImages = [
    // Column 1
    [
        { src: "/images/whales.png", alt: "Whale Watching at Mirissa" },
        { src: "/images/experiences/elephant.png", alt: "Gentle Giants" },
        { src: "/images/tea.png", alt: "Emerald Tea Estates" },
        { src: "/images/adventure-hero.png", alt: "Mountain Trekking" },
    ],
    // Column 2
    [
        { src: "/images/safari.png", alt: "Leopard Safari" },
        { src: "/images/heritage.png", alt: "Ancient Ruins" },
        { src: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=800&auto=format&fit=crop", alt: "Sigiriya Rock Fortress" },
        { src: "/images/wildlife-hero.png", alt: "Into the Wild" },
    ],
    // Column 3
    [
        { src: "/images/beach.png", alt: "Golden Coastlines" },
        { src: "/images/colombo.png", alt: "Vibrant Colombo" },
        { src: "/images/experiences/train.png", alt: "Iconic Train Journeys" },
        { src: "/images/cultural-hero.png", alt: "Traditional Dance" },
    ],
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                        Our Gallery
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A visual journey through the breathtaking landscapes and unforgettable experiences of Sri Lanka.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-6">
                            {column.map((image, imgIndex) => (
                                <div key={imgIndex} className="relative group overflow-hidden rounded-2xl aspect-square">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white text-lg font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                                            {image.alt}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
