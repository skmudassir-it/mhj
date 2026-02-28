'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Events', href: '/events' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav className="glass sticky top-0 z-50 w-full px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative w-12 h-12">
                        <Image src="/logo.png" alt="MHJ Logo" fill className="object-contain group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tight text-brand-primary leading-none uppercase">Memphis Health<br />Jamboree</span>
                    </div>
                </Link>

                <div className="hidden space-x-8 md:flex items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors ${pathname === link.href ? 'text-brand-primary underline underline-offset-8 decoration-2' : 'hover:text-brand-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/#get-involved" className="glass bg-brand-primary !bg-opacity-100 px-6 py-2.5 !text-white rounded-full text-sm font-bold shadow-lg shadow-brand-primary/30 hover:scale-105 active:scale-95 transition-all">Support Our Mission</Link>
                </div>
            </div>
        </nav>
    );
}
