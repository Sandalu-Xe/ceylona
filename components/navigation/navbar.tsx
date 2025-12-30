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
    dropdownImage?: string;
    dropdownItems?: { label: string; href: string; description: string }[];
}

const navItems: NavItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'PACKAGES', href: '/packages' },
    {
        label: 'EXPERIENCES',
        href: '/experiences',
        hasDropdown: true,
        dropdownImage: '/images/experiences/yala.jpg',
        dropdownItems: [
            { label: 'Adventure', href: '/experiences/adventure', description: 'Thrilling treks and expeditions.' },
            { label: 'Cultural', href: '/experiences/cultural', description: 'Immerse in ancient heritage.' },
            { label: 'Wildlife', href: '/experiences/wildlife', description: 'Safaris in the heart of nature.' },
            { label: 'Beach & Relax', href: '/experiences/beach', description: 'Unwind on pristine coastlines.' },
        ],
    },
    { label: 'GALLERY', href: '/gallery' },
    {
        label: 'ABOUT',
        href: '/about',
        hasDropdown: true,
        dropdownImage: '/images/tea.png',
        dropdownItems: [
            { label: 'Our Story', href: '/about/story', description: 'Redefining luxury travel in Sri Lanka.' },
            { label: 'Team', href: '/about/team', description: 'Meet the curators behind your journey.' },
            { label: 'Contact', href: '/about/contact', description: "Let's start planning your dream trip." },
        ],
    },
];

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                                    className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors flex items-center space-x-1 group py-4"
                                >
                                    <span>{item.label}</span>
                                    {item.hasDropdown && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    )}
                                    <span className="absolute bottom-3 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                </Link>

                                {/* Dropdown Menu */}
                                {item.hasDropdown && activeDropdown === item.label && (
                                    <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">

                                        {/* Links */}
                                        <div className="p-4 space-y-1">
                                            {item.dropdownItems?.map((dropdownItem) => (
                                                <Link
                                                    key={dropdownItem.label}
                                                    href={dropdownItem.href}
                                                    className="block p-3 rounded-lg hover:bg-white/10 transition-colors group/item"
                                                >
                                                    <div className="font-semibold text-white group-hover/item:text-primary transition-colors text-sm">
                                                        {dropdownItem.label}
                                                    </div>
                                                    <div className="text-xs text-zinc-400 group-hover/item:text-zinc-300 mt-0.5 leading-snug">
                                                        {dropdownItem.description}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
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
                                ${cartTotal.toFixed(2)}
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
                        <button
                            className="lg:hidden text-white/90 hover:text-white z-50 relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
                    {navItems.map((item) => (
                        <div key={item.label} className="flex flex-col items-center space-y-4">
                            <Link
                                href={item.href}
                                className="text-2xl font-bold text-white hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                            {item.hasDropdown && (
                                <div className="flex flex-col items-center space-y-2">
                                    {item.dropdownItems?.map((subItem) => (
                                        <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className="text-lg text-white/60 hover:text-white transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link href="/planner" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="px-8 py-3 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all">
                            Plan My Trip
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
