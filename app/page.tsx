
import Image from "next/image";
import Link from "next/link";
import ProductCarousel from "@/components/ui/product-carousel";
import ProductCard from "@/components/ui/product-card";

// Sample product data - replace with your actual data
const campingTents = [
  {
    id: '1',
    name: '4 Person Automatic Double Layer Tent',
    price: 12490.00,
    originalPrice: 13000.00,
    image: '/images/products/tent-1.jpg',
    href: '/products/tent-1',
    outOfStock: true,
  },
  {
    id: '2',
    name: '4 Person Double Layer Automatic Tent - Camouflaged Teal tree',
    price: 16990.00,
    originalPrice: 18000.00,
    image: '/images/products/tent-2.jpg',
    href: '/products/tent-2',
    outOfStock: true,
  },
  {
    id: '3',
    name: 'Cabin Tent',
    price: 85000.00,
    originalPrice: 90000.00,
    image: '/images/products/tent-3.jpg',
    href: '/products/tent-3',
    outOfStock: true,
  },
  {
    id: '4',
    name: '6 Person Double Layer Automatic Tent',
    price: 22990.00,
    originalPrice: 25000.00,
    image: '/images/products/tent-4.jpg',
    href: '/products/tent-4',
    outOfStock: true,
  },
];

const campingBackpacks = [
  {
    id: '5',
    name: 'Professional Hiking Backpack 60L',
    price: 8500.00,
    originalPrice: 9500.00,
    image: '/images/products/backpack-1.jpg',
    href: '/products/backpack-1',
  },
  {
    id: '6',
    name: 'Waterproof Camping Backpack 45L',
    price: 6990.00,
    originalPrice: 7500.00,
    image: '/images/products/backpack-2.jpg',
    href: '/products/backpack-2',
  },
  {
    id: '7',
    name: 'Ultra-Light Travel Backpack 35L',
    price: 5490.00,
    image: '/images/products/backpack-3.jpg',
    href: '/products/backpack-3',
  },
  {
    id: '8',
    name: 'Adventure Backpack with Rain Cover 50L',
    price: 7990.00,
    originalPrice: 8500.00,
    image: '/images/products/backpack-4.jpg',
    href: '/products/backpack-4',
  },
];

const travelExperiences = [
  {
    id: '9',
    name: 'Ella Rock Sunrise Trek',
    price: 15000.00,
    image: '/images/experiences/ella.jpg',
    href: '/experiences/ella-trek',
  },
  {
    id: '10',
    name: 'Yala Safari Adventure',
    price: 25000.00,
    image: '/images/experiences/yala.jpg',
    href: '/experiences/yala-safari',
  },
  {
    id: '11',
    name: 'Sigiriya Cultural Experience',
    price: 18000.00,
    image: '/images/experiences/sigiriya.jpg',
    href: '/experiences/sigiriya',
  },
  {
    id: '12',
    name: 'Mirissa Whale Watching',
    price: 12000.00,
    image: '/images/experiences/mirissa.jpg',
    href: '/experiences/mirissa',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Sri Lanka Landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
            Sri Lanka, Reimagined.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Experience the pearl of the Indian Ocean with the elegance you deserve.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/packages">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Packages
              </button>
            </Link>
            <Link href="/planner">
              <button className="px-8 py-3 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-all shadow-lg">
                Plan My Trip
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Camping Tents Section */}
      <ProductCarousel title="TENTS" subtitle="CAMPING">
        {campingTents.map((product) => (
          <div key={product.id} className="min-w-[280px] max-w-[280px]">
            <ProductCard {...product} />
          </div>
        ))}
      </ProductCarousel>

      {/* Camping Backpacks Section */}
      <ProductCarousel title="BACKPACKS" subtitle="CAMPING">
        {campingBackpacks.map((product) => (
          <div key={product.id} className="min-w-[280px] max-w-[280px]">
            <ProductCard {...product} />
          </div>
        ))}
      </ProductCarousel>

      {/* Travel Experiences Section */}
      <ProductCarousel title="EXPERIENCES" subtitle="CURATED">
        {travelExperiences.map((product) => (
          <div key={product.id} className="min-w-[280px] max-w-[280px]">
            <ProductCard {...product} />
          </div>
        ))}
      </ProductCarousel>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us create a personalized journey through Sri Lanka's most breathtaking destinations.
          </p>
          <Link href="/planner">
            <button className="px-10 py-4 bg-white text-green-800 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
              Start Planning Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

