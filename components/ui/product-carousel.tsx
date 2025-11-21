'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function ProductCarousel({
    title,
    subtitle,
    children,
}: ProductCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft =
                scrollContainerRef.current.scrollLeft +
                (direction === 'left' ? -scrollAmount : scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-background">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    {subtitle && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                            {subtitle}
                        </p>
                    )}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-800 dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Products Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto scrollbar-hide gap-6 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {children}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-800 dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
