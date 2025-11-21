'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, ChevronDown, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'PACKAGES', href: '/packages' },
    {
        label: 'EXPERIENCES',
        href: '/experiences',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Adventure', href: '/experiences/adventure' },
            { label: 'Cultural', href: '/experiences/cultural' },
            { label: 'Wildlife', href: '/experiences/wildlife' },
            { label: 'Beach & Relax', href: '/experiences/beach' },
        ],
    },
    { label: 'DESTINATIONS', href: '/destinations' },
    {
        label: 'ABOUT',
        href: '/about',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Our Story', href: '/about/story' },
            { label: 'Team', href: '/about/team' },
            { label: 'Contact', href: '/about/contact' },
        ],
    },
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [cartTotal] = useState(0);
    const [cartCount] = useState(0);
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
                            <Image
                                src="/images/ceylona-logo.png"
                                alt="Ceylona Camps"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-white font-semibold text-lg hidden sm:block">
                            CEYLONA
                        </span>
                    </Link>

                    {/* Center Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() =>
                                    item.hasDropdown && setActiveDropdown(item.label)
                                }
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors flex items-center space-x-1 group"
                                >
                                    <span>{item.label}</span>
                                    {item.hasDropdown && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    )}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                </Link>

                                {/* Dropdown Menu */}
                                {item.hasDropdown && activeDropdown === item.label && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden">
                                        {item.dropdownItems?.map((dropdownItem) => (
                                            <Link
                                                key={dropdownItem.label}
                                                href={dropdownItem.href}
                                                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 text-sm transition-colors"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Search, Cart */}
                    <div className="flex items-center space-x-6">
                        {/* Search */}
                        <div className="relative">
                            {isSearchOpen ? (
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 w-48 transition-all"
                                        autoFocus
                                        onBlur={() => setIsSearchOpen(false)}
                                    />
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="text-white/90 hover:text-white transition-colors"
                                    aria-label="Search"
                                >
                                    <Search className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors group"
                        >
                            <span className="text-sm font-medium">
                                රු{cartTotal.toFixed(2)}
                            </span>
                            <div className="relative">
                                <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {mounted && (resolvedTheme === 'dark' ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            ))}
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden text-white/90 hover:text-white">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
