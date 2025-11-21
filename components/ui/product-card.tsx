'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Search, Heart, GitCompare } from 'lucide-react';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    href: string;
    outOfStock?: boolean;
}

export default function ProductCard({

    name,
    price,
    originalPrice,
    image,
    href,
    outOfStock = false,
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Out of Stock Badge */}
            {outOfStock && (
                <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
                    OUT OF STOCK
                </div>
            )}

            {/* Image Container */}
            <Link href={href} className="block relative aspect-square overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Quick Action Icons */}
                <div
                    className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                >
                    <button
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 hover:text-white transition-colors"
                        aria-label="Quick View"
                    >
                        <Search className="w-5 h-5" />
                    </button>
                    <button
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition-colors"
                        aria-label="Add to Wishlist"
                    >
                        <Heart className="w-5 h-5" />
                    </button>
                    <button
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-500 hover:text-white transition-colors"
                        aria-label="Compare"
                    >
                        <GitCompare className="w-5 h-5" />
                    </button>
                </div>
            </Link>

            {/* Product Info */}
            <div className="p-4 text-center">
                <Link href={href}>
                    <h3 className="text-sm font-medium text-gray-800 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {name}
                    </h3>
                </Link>
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                        රු{price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                    {originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                            රු{originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
