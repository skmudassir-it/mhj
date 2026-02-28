'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Alaina",
            role: "Executive Director",
            image: "/team/team1.jpg",
            bio: "Leading the vision for a healthier Memphis through community empowerment and relational health."
        },
        {
            name: "Team Lead",
            role: "Community Outreach",
            image: "/team/team2.jpg",
            bio: "Bridging the gap between health services and marginalized communities with joy and empathy."
        },
        {
            name: "Project Manager",
            role: "Operations & Logistics",
            image: "/team/team3.jpg",
            bio: "Ensuring every event and workshop is a seamless, sensory-rich experience for all participants."
        },
        {
            name: "Youth Advocate",
            role: "Program Coordinator",
            image: "/team/team4.jpg",
            bio: "Empowering the next generation of Memphians to embrace wellness and cultural wisdom."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white">
            {/* Simple Nav for Subpages */}
            <nav className="glass sticky top-0 z-50 w-full px-6 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <Link href="/" className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative w-12 h-12">
                            <Image src="/logo.png" alt="MHJ Logo" fill className="object-contain group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-xl font-black tracking-tight text-brand-primary leading-none uppercase">Memphis Health<br />Jamboree</span>
                    </Link>
                    <Link href="/" className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-brand-primary transition-colors">Back to Home</Link>
                </div>
            </nav>

            <main>
                {/* Header Section */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl space-y-6">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                                About <br /><span className="text-brand-primary">The Jamboree</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                The Memphis Health Jamboree is a culturally rooted, community-co-created public health experience designed to strengthen trust, connection, and wellness across Memphis.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-32 px-6">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div className="space-y-8 p-12 rounded-[48px] bg-brand-primary text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            <h2 className="text-5xl font-black tracking-tight uppercase italic">Our Mission</h2>
                            <p className="text-xl text-emerald-50 leading-relaxed font-medium">
                                To transform wellness into joy, empowerment, healing, and shared belonging. We believe public health is strongest when it grows alongside the people it serves—reflecting the culture, creativity, and everyday lives of Memphis residents.
                            </p>
                            <div className="w-20 h-1 bg-brand-secondary rounded-full"></div>
                        </div>

                        <div className="space-y-8 p-12 rounded-[48px] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            <h2 className="text-5xl font-black tracking-tight uppercase italic text-brand-secondary">Our Vision</h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                A city where health isn't just about services, but about relationships. We envision a Memphis where every individual, regardless of their zip code, has access to sensory-rich celebrations of wellness and ancestral wisdom.
                            </p>
                            <div className="w-20 h-1 bg-brand-primary rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/30">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center space-y-4 mb-24">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Meet Our <span className="text-brand-primary">Core Team</span></h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">The passionate individuals working year-round to build a healthier Memphis.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {teamMembers.map((member, i) => (
                                <div key={i} className="group space-y-6">
                                    <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                            <p className="text-white text-sm font-medium leading-relaxed italic">"{member.bio}"</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{member.name}</h3>
                                        <p className="text-brand-primary font-bold uppercase tracking-widest text-xs">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing Quote */}
                <section className="py-32 px-6 text-center">
                    <div className="mx-auto max-w-4xl space-y-8">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-10">
                            <span className="text-4xl font-serif text-brand-primary">"</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase italic text-slate-800 dark:text-slate-200">
                            Health becomes something you can see, taste, feel, move through, and carry with you.
                        </h2>
                    </div>
                </section>
            </main>

            {/* Footer (Simplified) */}
            <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800">
                <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="relative w-10 h-10">
                            <Image src="/logo.png" alt="MHJ Logo" fill className="object-contain" />
                        </div>
                        <span className="text-lg font-black tracking-tight text-brand-primary leading-none uppercase">Memphis Health<br />Jamboree</span>
                    </div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">© 2026 A 501(c)(3) Organization</p>
                </div>
            </footer>
        </div>
    );
}
