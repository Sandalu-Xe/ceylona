import Image from "next/image";

const galleryImages = [
    // Column 1
    [
        { src: "/images/experiences/sigiriya.jpg", alt: "Sigiriya Rock Fortress" },
        { src: "/images/products/tent-1.jpg", alt: "Camping in Style" },
        { src: "/images/tea.png", alt: "Tea Plantations" },
    ],
    // Column 2
    [
        { src: "/images/safari.png", alt: "Safari Adventure" },
        { src: "/images/experiences/ella.jpg", alt: "Ella Views" },
        { src: "/images/experiences/mirissa.jpg", alt: "Coastal Beauty" },
    ],
    // Column 3
    [
        { src: "/images/hero-bg.png", alt: "Sri Lankan Landscapes" },
        { src: "/images/experiences/yala.jpg", alt: "Yala Wildlife" },
        { src: "/images/products/backpack-1.jpg", alt: "Adventure Gear" },
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
                                <div key={imgIndex} className="relative group overflow-hidden rounded-2xl">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={600}
                                        height={800} // Aspect ratio approximation, actual display is handled by css class
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
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
