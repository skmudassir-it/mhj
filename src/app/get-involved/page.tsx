'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GetInvolvedPage() {
    const committeeMembers = [
        {
            name: "Jane Doe",
            role: "Event Logistics Chair",
            image: "/team/team1.jpg",
            bio: "Ensuring every detail of the Jamboree is flawlessly executed."
        },
        {
            name: "John Smith",
            role: "Community Engagement Chair",
            image: "/team/team2.jpg",
            bio: "Building bridges between the Jamboree and local neighborhoods."
        },
        {
            name: "Emily Davis",
            role: "Marketing & PR Chair",
            image: "/team/team3.jpg",
            bio: "Spreading the word and amplifying the impact of the Jamboree."
        },
        {
            name: "Michael Brown",
            role: "Volunteer Coordination Chair",
            image: "/team/team4.jpg",
            bio: "Organizing and empowering our dedicated volunteer base."
        }
    ];

    const partners = [
        "Memphis Health Dept", "Mid-South Food Bank", "Shelby County Schools",
        "Community Foundation", "St. Jude", "University of Memphis"
    ];

    const sponsors = [
        "Local Business A", "Corporate Sponsor B", "Community Donor C", "Foundation D"
    ];

    return (
        <div className="bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white">
            <main>
                {/* Header Section */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl space-y-6">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                                Get <br /><span className="text-brand-primary">Involved</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Join the movement. Whether you're a partner, sponsor, volunteer, or committee member, your contribution makes a healthier Memphis possible.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Partners & Sponsors Section */}
                <section className="py-32 px-6">
                    <div className="mx-auto max-w-7xl space-y-24">
                        {/* Partners */}
                        <div className="space-y-12">
                            <div className="text-center max-w-3xl mx-auto space-y-4">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Our <span className="text-brand-primary">Partners</span></h2>
                                <p className="text-xl text-slate-500 font-medium">Organizations working alongside us to build community resilience.</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                                {partners.map((partner, i) => (
                                    <div key={i} className="text-2xl md:text-3xl font-black text-slate-300 dark:text-slate-700 uppercase tracking-tighter hover:text-brand-primary dark:hover:text-brand-primary transition-colors cursor-pointer text-center">
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sponsors */}
                        <div className="space-y-12 pt-16 border-t border-slate-100 dark:border-slate-800">
                            <div className="text-center max-w-3xl mx-auto space-y-4">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Our <span className="text-brand-accent">Sponsors</span></h2>
                                <p className="text-xl text-slate-500 font-medium">Generous supporters who fund our sensory-rich health celebrations.</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {sponsors.map((sponsor, i) => (
                                    <div key={i} className="aspect-video bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center justify-center p-8 text-center shadow-lg hover:shadow-xl transition-shadow w-full">
                                        <span className="font-bold text-slate-400 dark:text-slate-500">{sponsor}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center pt-8">
                                <Link href="/contact" className="inline-block px-10 py-5 rounded-2xl bg-brand-accent text-white font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-brand-accent/20">
                                    Become a Sponsor
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Volunteers Section */}
                <section className="py-32 px-6 bg-brand-primary text-white relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                    <div className="mx-auto max-w-4xl relative z-10 space-y-10">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight uppercase">Volunteer <br />With Us</h2>
                        <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed font-medium">
                            We need passionate individuals to help us facilitate workshops, guide community events, and spread joy across Memphis. Your time is the most valuable gift you can give.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pb-8">
                            <div className="bg-black/10 p-8 rounded-[32px] backdrop-blur-sm border border-white/10">
                                <div className="text-3xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold mb-2">Event Support</h3>
                                <p className="text-emerald-100/80 text-sm">Help run our Jamborees and Crumbs & Culture tours.</p>
                            </div>
                            <div className="bg-black/10 p-8 rounded-[32px] backdrop-blur-sm border border-white/10">
                                <div className="text-3xl mb-4">📣</div>
                                <h3 className="text-xl font-bold mb-2">Outreach</h3>
                                <p className="text-emerald-100/80 text-sm">Connect with neighborhoods and spread the word.</p>
                            </div>
                            <div className="bg-black/10 p-8 rounded-[32px] backdrop-blur-sm border border-white/10">
                                <div className="text-3xl mb-4">🎨</div>
                                <h3 className="text-xl font-bold mb-2">Creative Skills</h3>
                                <p className="text-emerald-100/80 text-sm">Contribute photography, design, or performance art.</p>
                            </div>
                        </div>
                        <Link href="/contact" className="inline-block bg-white text-brand-primary px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl hover:bg-slate-50 transition-colors hover:-translate-y-1">
                            Sign Up to Volunteer
                        </Link>
                    </div>
                </section>

                {/* Planning Committee Section */}
                <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/30">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center space-y-4 mb-24">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Planning <span className="text-brand-primary">Committee</span></h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">The dedicated leaders who bring the Jamboree's vision to life.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {committeeMembers.map((member, i) => (
                                <div key={i} className="group space-y-6">
                                    <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 bg-slate-200">
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
            </main>
        </div>
    );
}
