
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-foreground overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Sri Lanka Landscape"
          fill
          className="object-cover blur-sm scale-105"
          priority
        />
        {/* Overlay for better text contrast - slightly blue/dark as requested */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          Sri Lanka, Reimagined.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
          Experience the pearl of the Indian Ocean with the elegance you deserve.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/packages">
            <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
              Explore Packages
            </button>
          </Link>
          <Link href="/planner">
            <button className="px-8 py-3 glass text-white rounded-full font-medium hover:bg-white/20 transition-all shadow-lg">
              Plan My Trip
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

