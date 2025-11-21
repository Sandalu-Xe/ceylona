import { PackageCard } from "@/components/ui/package-card";

const packages = [
    {
        title: "The Wild Camp",
        description: "Immerse yourself in the heart of Yala. Luxury tents, private safaris, and the call of the wild.",
        price: "From $1,200",
        image: "/images/safari.png",
        slug: "wild-camp",
    },
    {
        title: "The Surf Escape",
        description: "Ride the waves in Mirissa. Private villas, surf lessons, and sunset cocktails.",
        price: "From $950",
        image: "/images/beach.png",
        slug: "surf-escape",
    },
    {
        title: "The Heritage Tour",
        description: "Walk through history in Sigiriya and Polonnaruwa. Ancient ruins, cultural shows, and royal treatment.",
        price: "From $1,500",
        image: "/images/heritage.png",
        slug: "heritage-tour",
    },
    {
        title: "Hill Country Retreat",
        description: "Sip world-class tea in Nuwara Eliya. Misty mountains, colonial bungalows, and serene train rides.",
        price: "From $1,100",
        image: "/images/tea.png",
        slug: "hill-country",
    },
    {
        title: "Deep Sea Expedition",
        description: "Witness the giants of the ocean. Private whale watching charters and luxury coastal cruising.",
        price: "From $1,800",
        image: "/images/whales.png",
        slug: "deep-sea",
    },
    {
        title: "Urban Luxury",
        description: "Experience the vibrant nightlife and culture of Colombo. Rooftop bars, fine dining, and shopping.",
        price: "From $800",
        image: "/images/colombo.png",
        slug: "urban-luxury",
    },
];

export default function PackagesPage() {
    return (
        <main className="min-h-screen bg-background py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">
                        Curated Journeys
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Select your perfect escape. Each package is crafted for immersion, comfort, and wonder.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="group perspective-1000">
                            <PackageCard {...pkg} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
