'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

type Tab = 'notifications' | 'hero' | 'events' | 'gallery' | 'responses';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState<Tab>('notifications');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    // Form States
    const [settings, setSettings] = useState({ top_bar_text: '', hero_title: '', hero_tagline: '' });
    const [events, setEvents] = useState<any[]>([]);
    const [gallery, setGallery] = useState<any[]>([]);
    const [responses, setResponses] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setLoading(true);
        try {
            const { data: sData } = await supabase.from('site_settings').select('*').single();
            if (sData) setSettings(sData);

            const { data: eData } = await supabase.from('events').select('*').order('created_at', { ascending: false });
            if (eData) setEvents(eData);

            const { data: gData } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
            if (gData) setGallery(gData);

            const { data: rData } = await supabase.from('responses').select('*').order('created_at', { ascending: false });
            if (rData) setResponses(rData);
        } catch (err) {
            console.error("Fetch error:", err);
        }
        setLoading(false);
    }

    async function initializeDatabase() {
        setLoading(true);
        // Direct SQL execution via RPC or raw query if enabled (Supabase client usually needs RPC for this)
        // Since we can't easily run raw DDL via the client without an RPC function, 
        // we'll advise the user to run the SQL in their Supabase SQL Editor if the tables are missing.
        setMessage({ text: 'Please ensure tables are created in the Supabase SQL Editor.', type: 'error' });
        setLoading(false);
        setTimeout(() => setMessage(null), 5000);
    }

    async function updateSettings() {
        setLoading(true);
        const { error } = await supabase.from('site_settings').update(settings).eq('id', (settings as any).id);
        if (error) setMessage({ text: 'Error updating settings', type: 'error' });
        else setMessage({ text: 'Settings updated successfully!', type: 'success' });
        setLoading(false);
        setTimeout(() => setMessage(null), 3000);
    }

    async function deleteItem(table: string, id: string) {
        if (!confirm('Are you sure?')) return;
        setLoading(true);
        const { error } = await supabase.from(table).delete().eq('id', id);
        if (error) setMessage({ text: 'Error deleting item', type: 'error' });
        else {
            setMessage({ text: 'Item deleted', type: 'success' });
            fetchData();
        }
        setLoading(false);
        setTimeout(() => setMessage(null), 3000);
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans flex text-slate-900 dark:text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 space-y-8 sticky top-0 h-screen">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center font-black text-white">MHJ</div>
                    <span className="font-black uppercase tracking-tighter">Admin Panel</span>
                </div>

                <nav className="space-y-2">
                    {[
                        { id: 'notifications', label: '📢 Notification', icon: '📢' },
                        { id: 'hero', label: '🖼️ Hero Section', icon: '🖼️' },
                        { id: 'events', label: '📅 Events', icon: '📅' },
                        { id: 'gallery', label: '📸 Gallery', icon: '📸' },
                        { id: 'responses', label: '📩 Responses', icon: '📩' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as Tab)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === tab.id
                                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500'
                                }`}
                        >
                            <span>{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-12 overflow-y-auto">
                {message && (
                    <div className={`fixed top-8 right-8 px-6 py-4 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top duration-300 font-bold ${message.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                        }`}>
                        {message.text}
                    </div>
                )}

                <header className="mb-12 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-black uppercase tracking-tight">{activeTab}</h1>
                        <p className="text-slate-500 font-medium lowercase">Manage your website {activeTab} content</p>
                    </div>
                    {loading && <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>}
                </header>

                <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-xl border border-slate-100 dark:border-slate-800">
                    {activeTab === 'notifications' && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Top Bar Text</label>
                                <input
                                    type="text"
                                    value={settings.top_bar_text}
                                    onChange={(e) => setSettings({ ...settings, top_bar_text: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none font-medium text-lg"
                                />
                            </div>
                            <button onClick={updateSettings} className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-black uppercase hover:scale-105 transition-all">Save Changes</button>
                        </div>
                    )}

                    {activeTab === 'hero' && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Hero Title</label>
                                <input
                                    type="text"
                                    value={settings.hero_title}
                                    onChange={(e) => setSettings({ ...settings, hero_title: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none font-medium text-lg"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Hero Tagline</label>
                                <input
                                    type="text"
                                    value={settings.hero_tagline}
                                    onChange={(e) => setSettings({ ...settings, hero_tagline: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none font-medium text-lg"
                                />
                            </div>
                            <button onClick={updateSettings} className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-black uppercase hover:scale-105 transition-all">Save Changes</button>
                        </div>
                    )}

                    {activeTab === 'events' && (
                        <div className="space-y-8">
                            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:scale-105 transition-all">Add New Event</button>
                            <div className="space-y-4">
                                {events.map((event) => (
                                    <div key={event.id} className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 group hover:shadow-md transition-all">
                                        <div>
                                            <h3 className="font-black uppercase">{event.title}</h3>
                                            <p className="text-sm text-slate-500">{event.date} • {event.location}</p>
                                        </div>
                                        <button onClick={() => deleteItem('events', event.id)} className="p-3 rounded-xl hover:bg-rose-100 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">🗑️</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'gallery' && (
                        <div className="space-y-8">
                            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:scale-105 transition-all">Add New Image</button>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {gallery.map((item) => (
                                    <div key={item.id} className="relative aspect-video rounded-2xl overflow-hidden group">
                                        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                                            <p className="text-white font-bold text-xs uppercase mb-2">{item.title}</p>
                                            <button onClick={() => deleteItem('gallery', item.id)} className="p-2 bg-rose-500 text-white rounded-lg">🗑️</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'responses' && (
                        <div className="space-y-4">
                            {responses.map((res) => (
                                <div key={res.id} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-4 shadow-sm border border-slate-100 dark:border-slate-800">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-black uppercase text-xl leading-none">{res.full_name}</h3>
                                            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mt-1">{res.subject}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{new Date(res.created_at).toLocaleDateString()}</span>
                                            <p className="text-sm text-slate-500 lowercase">{res.email}</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 italic">"{res.message}"</p>
                                    <div className="flex justify-end gap-3 pt-2">
                                        <a href={`mailto:${res.email}`} className="text-xs font-black uppercase text-brand-primary hover:underline">Reply via Email</a>
                                        <button onClick={() => deleteItem('responses', res.id)} className="text-xs font-black uppercase text-rose-500 hover:underline">Delete Reference</button>
                                    </div>
                                </div>
                            ))}
                            {responses.length === 0 && <p className="text-center py-12 text-slate-400 font-bold uppercase italic tracking-widest">No responses yet</p>}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
