'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function EventsPage() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            const { data } = await supabase.from('events').select('*').order('created_at', { ascending: false });
            if (data) setEvents(data);
            setLoading(false);
        }
        fetchEvents();
    }, []);

    return (
        <div className="bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white">
            <main>
                {/* Hero Section */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl space-y-6">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                                Gather <br /><span className="text-brand-primary">With Us</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Join our 2026 Activation Year events. From neighborhood tours to wellness workshops, there's always a place for you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Events List */}
                <section className="py-32 px-6">
                    <div className="mx-auto max-w-7xl space-y-12">
                        {events.map((event, i) => (
                            <div key={i} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-[48px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                <div className="lg:col-span-3">
                                    <div className="text-brand-primary font-black text-2xl uppercase tracking-tighter mb-1">{event.date}</div>
                                    <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">{event.category}</div>
                                </div>
                                <div className="lg:col-span-6 space-y-4">
                                    <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white">{event.title}</h3>
                                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{event.description}</p>
                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <span className="flex items-center gap-2 text-sm font-bold text-slate-400">📍 {event.location}</span>
                                        <span className="flex items-center gap-2 text-sm font-bold text-slate-400">🕒 {event.time}</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 flex justify-end">
                                    <button className="w-full lg:w-auto px-10 py-5 rounded-2xl bg-brand-primary text-white font-black hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20">Register Free</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
