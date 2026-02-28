'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Jayasri Botcha",
            role: "Technology & Operations Systems Lead",
            image: "/team/team1.jpg",
            bio: "Leading the vision for a healthier Memphis through community empowerment and relational health."
        },
        {
            name: "Jasmen Richmond",
            role: "Nutrition & Culinary Heritage Coordinator",
            image: "/team/team2.jpg",
            bio: "Bridging the gap between health services and marginalized communities with joy and empathy."
        },
        {
            name: "Dr. Debra Bartelli",
            role: "Outreach & Evaluation Lead",
            image: "/team/team3.jpg",
            bio: "Ensuring every event and workshop is a seamless, sensory-rich experience for all participants."
        },
        {
            name: "Shania Robinson",
            role: "Founder & Executive Director",
            image: "/team/team4.jpg",
            bio: "Empowering the next generation of Memphians to embrace wellness and cultural wisdom."
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white">

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
                            <div className="w-20 h-1 bg-black rounded-full"></div>
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

                {/* Our Story Section */}
                <section className="py-24 px-6 bg-white dark:bg-slate-950">
                    <div className="mx-auto max-w-4xl space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase text-slate-900 dark:text-white">
                                Our <span className="text-brand-primary">Story</span>
                            </h2>
                            <div className="w-20 h-1 bg-brand-primary rounded-full"></div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-400 font-medium space-y-6">
                            <p>
                                My name is Shania Robinson, and the Memphis Health Jamboree is the dream I didn’t know I was building until community, culture, and my public health journey pushed me toward it.
                            </p>
                            <p>
                                While I am not originally from Memphis, I have been connected to this city for as long as I can remember, through family, food, music, stories, and the spirit that makes Memphis feel like home even before you ever live here. Memphis has always been a place I felt spiritually and culturally tied to, a place that shaped how I see community, resilience, and joy.
                            </p>
                            <p>
                                This idea began to take shape when I became a grant recipient in the University of Memphis Public Health Changemakers Initiative. That program didn’t just teach me public health -- it challenged me to reimagine it. To ask who gets to shape health experiences. To ask why so much of health still feels cold, clinical, and disconnected from real life, and to ask what would happen if we centered culture, creativity, identity, and community wisdom in the work.
                            </p>
                            <p className="text-2xl font-black text-brand-primary italic my-10 py-6 border-l-4 border-brand-primary pl-6">
                                The answer became the Memphis Health Jamboree: a vibrant, sensory-rich health celebration created with the community, not just for it.
                            </p>
                            <p>
                                I’m building an experience where health feels familiar and joyful, where people can see it, taste it, feel it, move with it, and experience it in ways that honor who they are. This is an event where you can learn from a chef, dance with your family, talk to a mental health counselor, listen to live music, explore cultural traditions, and actually feel connected to the idea of wellness.
                            </p>
                            <p>
                                Along the way, I created the OKRA Health Network and the CORNBREAD Passport because our relationship to food, especially southern culinary heritage, is a story of identity, survival, celebration, and belonging. I wanted Memphis to have a health system that feels like home. Something warm. Something real. Something rooted in us.
                            </p>
                            <p>
                                This Jamboree is more than a single day. It’s a year-round movement designed to rebuild trust, celebrate community, and make wellness accessible without judgment, pressure, or shame.
                            </p>

                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl my-10 border border-slate-100 dark:border-slate-800">
                                <p className="mb-6 font-bold text-slate-900 dark:text-white">
                                    I am raising funds because I am committed to making the Jamboree accessible, especially for families and neighborhoods too often overlooked by traditional health programs. Your support helps cover:
                                </p>
                                <ul className="space-y-3 list-none p-0 text-slate-700 dark:text-slate-300">
                                    {[
                                        "Sensory health zones and cultural experiences",
                                        "Community performances and youth programming",
                                        "Giveaways and wellness incentives",
                                        "Local artists, chefs, and vendors",
                                        "The launch of the OKRA year-round wellness network",
                                        "The CORNBREAD Passport engagement system",
                                        "Safety, accessibility, and operational needs",
                                        "The Crumbs & Culture Tour: a series of activation workshops leading up to the Jamboree that engage the community and raise awareness."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-brand-primary mt-1 font-black shrink-0">→</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p>
                                This project is my way of honoring the spirit of a city that has given me so much, and it’s my way of helping shape a healthier, more joyful future, one where people feel seen, supported, and celebrated.
                            </p>
                            <p>
                                If you believe in community-led change, culturally rooted public health, and you believe Memphis deserves something beautiful and empowering, I invite you to be part of this movement.
                            </p>
                            <p className="font-bold text-slate-900 dark:text-white text-xl pt-4">
                                Thank you for supporting the Memphis Health Jamboree and for helping build a new, joyful vision of public health.
                            </p>
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
        </div>
    );
}
