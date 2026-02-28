'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 px-6 border-t border-slate-100 dark:border-slate-900">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12">
                                <Image src="/logo.png" alt="MHJ Logo" fill className="object-contain" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-brand-primary leading-none uppercase">Memphis Health <br />Jamboree</span>
                        </div>
                        <p className="text-lg text-slate-500 max-w-md font-medium leading-relaxed">Dedicated to building a healthier, stronger, and more vibrant Memphis through the power of community, health equity, and ancestral wisdom.</p>
                        <div className="flex gap-4">
                            {[
                                { name: 'IG', url: 'https://www.instagram.com/Memphishealthjamboree' },
                                { name: 'YT', url: 'https://www.youtube.com/@MemphisHealthJamboree' },
                                { name: 'FB', url: 'https://www.facebook.com/MemphisHealthJamboree' }
                            ].map(s => (
                                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-sm cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-all">
                                    {s.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h5 className="font-bold text-lg uppercase tracking-widest">Navigation</h5>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                            <li><Link href="/events" className="hover:text-brand-primary transition-colors">Events</Link></li>
                            <li><Link href="/gallery" className="hover:text-brand-primary transition-colors">Gallery</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h5 className="font-bold text-lg uppercase tracking-widest">Get Involved</h5>
                        <ul className="space-y-4 text-slate-500 font-medium">
                            <li><Link href="/#get-involved" className="hover:text-brand-primary transition-colors">Donate</Link></li>
                            <li><Link href="/#get-involved" className="hover:text-brand-primary transition-colors">Volunteer</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-12 border-t border-slate-200 dark:border-slate-900 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    © 2026 Memphis Health Jamboree. A Registered 501(c)(3) Non-Profit Organization.
                </div>
            </div>
        </footer>
    );
}
