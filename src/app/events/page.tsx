'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function EventsPage() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        async function fetchEvents() {
            const { data } = await supabase.from('events').select('*').order('created_at', { ascending: false });
            if (data) setEvents(data);
            setLoading(false);
        }
        fetchEvents();
    }, []);

    const handleRegisterClick = (event: any) => {
        setSelectedEvent(event);
        setShowModal(true);
        setFormStatus({ type: null, message: '' });
    };

    const handleRegistrationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        const formData = new FormData(e.currentTarget);

        const registrationData = {
            full_name: formData.get('full_name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: `Registration for ${selectedEvent?.title}`,
            message: formData.get('message') || 'No message provided',
            event_title: selectedEvent?.title
        };

        const { error } = await supabase.from('responses').insert([registrationData]);

        if (error) {
            setFormStatus({ type: 'error', message: `Registration failed: ${error.message}` });
        } else {
            setFormStatus({ type: 'success', message: 'You have successfully registered for the event!' });
            setTimeout(() => {
                setShowModal(false);
                setSelectedEvent(null);
            }, 2000);
        }
        setSubmitting(false);
    };

    return (
        <div className="bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white min-h-screen">
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
                        {loading ? (
                            <div className="flex flex-col gap-12">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="animate-pulse flex flex-col lg:flex-row gap-8 items-center p-8 md:p-12 rounded-[48px] bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-64">
                                        <div className="lg:col-span-3 w-40 h-8 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        <div className="lg:col-span-6 flex-grow space-y-4">
                                            <div className="w-full h-12 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                            <div className="w-3/4 h-6 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : events.length > 0 ? (
                            events.map((event, i) => (
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
                                        {event.cta_link ? (
                                            <a
                                                href={event.cta_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full lg:w-auto px-10 py-5 rounded-2xl bg-brand-primary text-white text-center font-black hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20"
                                            >
                                                Join Event
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => handleRegisterClick(event)}
                                                className="w-full lg:w-auto px-10 py-5 rounded-2xl bg-brand-primary text-white font-black hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20"
                                            >
                                                Register Free
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-24 text-center">
                                <h3 className="text-2xl font-bold text-slate-400 uppercase italic tracking-widest">Preparing our next community activation...</h3>
                                <p className="text-slate-500 mt-4">Check back soon for more exciting updates!</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Registration Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
                        <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden relative animate-in zoom-in duration-300">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                ✕
                            </button>

                            <div className="p-10 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white italic">Register</h2>
                                    <p className="text-lg text-brand-primary font-bold uppercase tracking-widest">{selectedEvent?.title}</p>
                                </div>

                                {formStatus.type ? (
                                    <div className={`p-6 rounded-2xl text-center font-bold uppercase tracking-widest ${formStatus.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                                        }`}>
                                        {formStatus.message}
                                    </div>
                                ) : (
                                    <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">Full Name</label>
                                                <input required name="full_name" type="text" className="w-full px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-bold" placeholder="Your Name" />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">Email</label>
                                                    <input required name="email" type="email" className="w-full px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-bold" placeholder="your@email.com" />
                                                </div>
                                                <div>
                                                    <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">Phone</label>
                                                    <input required name="phone" type="tel" className="w-full px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-bold" placeholder="(123) 456-7890" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-4 mb-2 block">Optional Message</label>
                                                <textarea name="message" className="w-full px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-bold min-h-[100px]" placeholder="Any questions or special notes?"></textarea>
                                            </div>
                                        </div>

                                        <button
                                            disabled={submitting}
                                            type="submit"
                                            className="w-full bg-brand-primary text-white py-6 rounded-2xl text-lg font-black uppercase tracking-[0.2em] shadow-xl hover:bg-brand-secondary transition-all disabled:opacity-50"
                                        >
                                            {submitting ? 'Processing...' : 'Complete Registration'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
