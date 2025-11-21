
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
      {/* Adventure Section */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              READY FOR YOUR NEXT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ADVENTURE?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md">
              Browse our store and gear up for your next journey. Your adventure begins here.
            </p>
            <Link href="/products">
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                SHOP NOW
              </button>
            </Link>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/safari.png"
              alt="Adventure"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="relative bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/images/tea.png"
              alt="Explore"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-8 order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Explore the<br />
              Great Outdoors<br />
              in Style
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-lg text-gray-600">Discover our premium collection</p>
              <Link href="/experiences">
                <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

