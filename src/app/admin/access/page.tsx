'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

type Tab = 'notifications' | 'hero' | 'hero_images' | 'events' | 'gallery' | 'responses';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState<Tab>('notifications');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    // Form States
    const [settings, setSettings] = useState({ hero_title: '', hero_tagline: '' });
    const [notifications, setNotifications] = useState<any[]>([]);
    const [heroImages, setHeroImages] = useState<any[]>([]);
    const [events, setEvents] = useState<any[]>([]);
    const [gallery, setGallery] = useState<any[]>([]);
    const [responses, setResponses] = useState<any[]>([]);

    // Modern Form States
    const [showForm, setShowForm] = useState<Tab | null>(null);
    const [eventForm, setEventForm] = useState({ title: '', description: '', date: '', location: '', category: 'Workshop', cta_link: '' });
    const [notificationForm, setNotificationForm] = useState({ content: '' });
    const [heroImageForm, setHeroImageForm] = useState({ src: '' });
    const [galleryForm, setGalleryForm] = useState({ src: '', title: '' });
    const [responseFilter, setResponseFilter] = useState('All');

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setLoading(true);
        try {
            console.log("Fetching admin data...");
            const { data: sData, error: sErr } = await supabase.from('site_settings').select('*').single();
            if (sErr) console.error("Settings error:", sErr);
            if (sData) setSettings(sData);

            const { data: nData, error: nErr } = await supabase.from('notifications').select('*').order('display_order', { ascending: true });
            if (nErr) console.error("Notifications error:", nErr);
            console.log("Notifications received:", nData);
            if (nData) setNotifications(nData);

            const { data: hiData, error: hiErr } = await supabase.from('hero_images').select('*').order('display_order', { ascending: true });
            if (hiErr) console.error("Hero images error:", hiErr);
            if (hiData) setHeroImages(hiData);

            const { data: eData, error: eErr } = await supabase.from('events').select('*').order('created_at', { ascending: false });
            if (eErr) console.error("Events error:", eErr);
            if (eData) setEvents(eData);

            const { data: gData, error: gErr } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
            if (gErr) console.error("Gallery error:", gErr);
            if (gData) setGallery(gData);

            const { data: rData, error: rErr } = await supabase.from('responses').select('*').order('created_at', { ascending: false });
            if (rErr) console.error("Responses error:", rErr);
            if (rData) setResponses(rData);
        } catch (err) {
            console.error("Fetch error:", err);
        }
        setLoading(false);
    }

    function downloadCSV() {
        if (responses.length === 0) return;

        const headers = ['ID', 'Full Name', 'Email', 'Phone', 'Subject', 'Message', 'Event Title', 'Created At'];
        const csvRows = [
            headers.join(','),
            ...responses.map(res => [
                res.id,
                `"${res.full_name?.replace(/"/g, '""') || ''}"`,
                `"${res.email || ''}"`,
                `"${res.phone || ''}"`,
                `"${res.subject?.replace(/"/g, '""') || ''}"`,
                `"${res.message?.replace(/"/g, '""') || ''}"`,
                `"${res.event_title?.replace(/"/g, '""') || ''}"`,
                res.created_at
            ].join(','))
        ];

        const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `responses_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
        // If we have an ID, update. If not, we might need to insert (though should have been seeded)
        const payload = { ...settings };
        const query = (settings as any).id
            ? supabase.from('site_settings').update(payload).eq('id', (settings as any).id)
            : supabase.from('site_settings').upsert([payload]);

        const { error } = await query;
        if (error) {
            console.error("Save error:", error);
            setMessage({ text: `Error: ${error.message}`, type: 'error' });
        } else {
            setMessage({ text: 'Settings updated successfully!', type: 'success' });
            fetchData();
        }
        setLoading(false);
        setTimeout(() => setMessage(null), 5000);
    }

    const addEvent = () => setShowForm('events');

    const addNotification = () => setShowForm('notifications');

    const addHeroImage = () => setShowForm('hero_images');

    const addGallery = () => setShowForm('gallery');

    async function handleAddEvent(e: React.FormEvent) {
        e.preventDefault();
        if (!eventForm.title) return;

        setLoading(true);
        const { error } = await supabase.from('events').insert([{
            ...eventForm,
            time: 'TBD',
            cta_link: eventForm.cta_link ? eventForm.cta_link.trim().replace(/^['"]|['"]$/g, '') : null
        }]);

        if (error) setMessage({ text: error.message, type: 'error' });
        else {
            setMessage({ text: 'Event added!', type: 'success' });
            setShowForm(null);
            setEventForm({ title: '', description: '', date: '', location: '', category: 'Workshop', cta_link: '' });
            fetchData();
        }
        setLoading(false);
        setTimeout(() => setMessage(null), 3000);
    }

    async function handleAddNotification(e: React.FormEvent) {
        e.preventDefault();
        if (!notificationForm.content) return;
        if (notifications.length >= 5) {
            setMessage({ text: 'Maximum 5 notifications allowed', type: 'error' });
            return;
        }

        setLoading(true);
        const { error } = await supabase.from('notifications').insert([{
            content: notificationForm.content,
            display_order: notifications.length + 1
        }]);

        if (error) setMessage({ text: `Error: ${error.message}`, type: 'error' });
        else {
            setMessage({ text: 'Notification added!', type: 'success' });
            setShowForm(null);
            setNotificationForm({ content: '' });
            fetchData();
        }
        setLoading(false);
        setTimeout(() => setMessage(null), 3000);
    }

    async function handleAddHeroImage(e: React.FormEvent) {
        e.preventDefault();
        if (!heroImageForm.src) return;
        if (heroImages.length >= 5) {
            setMessage({ text: 'Maximum 5 images allowed', type: 'error' });
            return;
        }

        const src = heroImageForm.src.trim().replace(/^['"]|['"]$/g, '');

        setLoading(true);
        const { error } = await supabase.from('hero_images').insert([{
            src,
            alt: 'Hero Background',
            display_order: heroImages.length + 1
        }]);

        if (error) setMessage({ text: error.message, type: 'error' });
        else {
            setMessage({ text: 'Hero image added!', type: 'success' });
            setShowForm(null);
            setHeroImageForm({ src: '' });
            fetchData();
        }
        setLoading(false);
        setTimeout(() => setMessage(null), 3000);
    }

    async function handleAddGallery(e: React.FormEvent) {
        e.preventDefault();
        if (!galleryForm.src) return;

        const src = galleryForm.src.trim().replace(/^['"]|['"]$/g, '');

        setLoading(true);
        const { error } = await supabase.from('gallery').insert([{
            src,
            title: galleryForm.title || 'Gallery Image',
            size: 'col-span-1 row-span-1'
        }]);

        if (error) setMessage({ text: error.message, type: 'error' });
        else {
            setMessage({ text: 'Image added to gallery!', type: 'success' });
            setShowForm(null);
            setGalleryForm({ src: '', title: '' });
            fetchData();
        }
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
                        { id: 'notifications', label: 'Notifications', icon: '📢' },
                        { id: 'hero', label: 'Hero Section', icon: '✨' },
                        { id: 'events', label: 'Events', icon: '📅' },
                        { id: 'gallery', label: 'Gallery', icon: '📸' },
                        { id: 'responses', label: 'Responses', icon: '📩' },
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

                    <button
                        onClick={async () => {
                            await fetch('/api/admin/logout', { method: 'POST' });
                            window.location.href = '/admin/login';
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-rose-500 hover:bg-rose-50 transition-all mt-auto"
                    >
                        <span>🚪</span>
                        <span>Logout</span>
                    </button>
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
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-black uppercase tracking-tight">Active Notifications (Max 5)</h2>
                                {!showForm && notifications.length < 5 && (
                                    <button onClick={addNotification} className="px-6 py-3 rounded-xl bg-brand-primary text-white font-bold hover:scale-105 transition-all">Add Notification</button>
                                )}
                            </div>

                            {showForm === 'notifications' && (
                                <form onSubmit={handleAddNotification} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-brand-primary/20 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Notification Content</label>
                                        <input
                                            type="text"
                                            required
                                            autoFocus
                                            value={notificationForm.content}
                                            onChange={(e) => setNotificationForm({ content: e.target.value })}
                                            placeholder="Enter notification message..."
                                            className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="flex gap-3">
                                        <button type="submit" disabled={loading} className="flex-grow py-4 rounded-2xl bg-brand-primary text-white font-black uppercase shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all disabled:opacity-50">
                                            {loading ? 'Saving...' : 'Save Notification'}
                                        </button>
                                        <button type="button" onClick={() => setShowForm(null)} className="px-8 py-4 rounded-2xl bg-slate-200 dark:bg-slate-700 font-black uppercase hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">Cancel</button>
                                    </div>
                                </form>
                            )}

                            <div className="space-y-4">
                                {notifications.map((note) => (
                                    <div key={note.id} className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 group hover:shadow-md transition-all">
                                        <div className="flex-grow pr-8">
                                            <p className="font-bold text-lg">"{note.content}"</p>
                                        </div>
                                        <button onClick={() => deleteItem('notifications', note.id)} className="p-3 rounded-xl hover:bg-rose-100 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">🗑️</button>
                                    </div>
                                ))}
                                {notifications.length === 0 && <p className="text-center py-12 text-slate-400 font-bold uppercase italic tracking-widest">No notifications added</p>}
                            </div>
                        </div>
                    )}

                    {activeTab === 'hero' && (
                        <div className="space-y-12">
                            {/* Text Settings */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-black uppercase tracking-tight border-b-2 border-brand-primary pb-2 w-fit">Text Content</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Hero Title</label>
                                        <input
                                            type="text"
                                            value={settings.hero_title}
                                            onChange={(e) => setSettings({ ...settings, hero_title: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Hero Tagline</label>
                                        <input
                                            type="text"
                                            value={settings.hero_tagline}
                                            onChange={(e) => setSettings({ ...settings, hero_tagline: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all"
                                        />
                                    </div>
                                </div>
                                <button onClick={updateSettings} className="px-8 py-4 rounded-2xl bg-brand-primary text-white font-black uppercase hover:scale-105 transition-all shadow-lg shadow-brand-primary/20">Save Text Changes</button>
                            </div>

                            {/* Image Management */}
                            <div className="space-y-6 pt-12 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-black uppercase tracking-tight border-b-2 border-brand-primary pb-2 w-fit">Background Slider (Max 5)</h2>
                                    {!showForm && heroImages.length < 5 && (
                                        <button onClick={addHeroImage} className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold hover:scale-105 transition-all">Add Background Image</button>
                                    )}
                                </div>

                                {showForm === 'hero_images' && (
                                    <form onSubmit={handleAddHeroImage} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-brand-primary/20 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Hero Image URL</label>
                                            <input
                                                type="url"
                                                required
                                                autoFocus
                                                value={heroImageForm.src}
                                                onChange={(e) => setHeroImageForm({ src: e.target.value })}
                                                placeholder="Paste image URL here (e.g. https://...)"
                                                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm"
                                            />
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest px-2">Tip: You can paste a full URL. Any quotes or spaces will be cleaned automatically.</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button type="submit" disabled={loading} className="flex-grow py-4 rounded-2xl bg-brand-primary text-white font-black uppercase shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all disabled:opacity-50">
                                                {loading ? 'Adding...' : 'Add Background Image'}
                                            </button>
                                            <button type="button" onClick={() => setShowForm(null)} className="px-8 py-4 rounded-2xl bg-slate-200 dark:bg-slate-700 font-black uppercase hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">Cancel</button>
                                        </div>
                                    </form>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {heroImages.map((img) => (
                                        <div key={img.id} className="relative aspect-video rounded-3xl overflow-hidden group border-2 border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
                                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                                                <button onClick={() => deleteItem('hero_images', img.id)} className="px-6 py-2 bg-rose-500 text-white rounded-xl font-black uppercase text-xs hover:scale-110 transition-transform">Remove Image</button>
                                            </div>
                                        </div>
                                    ))}
                                    {heroImages.length === 0 && (
                                        <div className="col-span-full py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center text-slate-400 italic font-bold uppercase tracking-widest">
                                            <span className="text-4xl mb-2">🖼️</span>
                                            No hero images added
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'events' && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-black uppercase tracking-tight">Upcoming Events</h2>
                                {!showForm && (
                                    <button onClick={addEvent} className="px-6 py-3 rounded-xl bg-brand-primary text-white font-bold hover:scale-105 transition-all">Add New Event</button>
                                )}
                            </div>

                            {showForm === 'events' && (
                                <form onSubmit={handleAddEvent} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-brand-primary/20 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Event Title</label>
                                            <input type="text" required value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Category</label>
                                            <select value={eventForm.category} onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm">
                                                <option>Workshop</option>
                                                <option>Summit</option>
                                                <option>Tour</option>
                                                <option>Community</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Date (e.g. March 15, 2026)</label>
                                            <input type="text" required value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Location</label>
                                            <input type="text" required value={eventForm.location} onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Description</label>
                                            <textarea rows={3} value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm resize-none"></textarea>
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">CTA/Join Link (Optional)</label>
                                            <input type="url" value={eventForm.cta_link} onChange={(e) => setEventForm({ ...eventForm, cta_link: e.target.value })} placeholder="https://..." className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium text-lg focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button type="submit" disabled={loading} className="flex-grow py-4 rounded-2xl bg-brand-primary text-white font-black uppercase shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all disabled:opacity-50">Save Event</button>
                                        <button type="button" onClick={() => setShowForm(null)} className="px-8 py-4 rounded-2xl bg-slate-200 dark:bg-slate-700 font-black uppercase hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">Cancel</button>
                                    </div>
                                </form>
                            )}

                            <div className="space-y-4">
                                {events.map((event) => (
                                    <div key={event.id} className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 group hover:shadow-md transition-all">
                                        <div className="space-y-1">
                                            <h3 className="font-black uppercase text-lg leading-tight">{event.title}</h3>
                                            <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">{event.date} • {event.location}</p>
                                            {event.description && <p className="text-sm text-slate-500 italic line-clamp-1 max-w-md">"{event.description}"</p>}
                                            {event.cta_link && <p className="text-[10px] font-black uppercase text-brand-primary tracking-widest flex items-center gap-1">🔗 CTA: {event.cta_link}</p>}
                                        </div>
                                        <button onClick={() => deleteItem('events', event.id)} className="p-3 rounded-xl hover:bg-rose-100 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100 shadow-sm">🗑️</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'gallery' && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-black uppercase tracking-tight">Photo Gallery</h2>
                                {!showForm && (
                                    <button onClick={addGallery} className="px-6 py-3 rounded-xl bg-brand-primary text-white font-bold hover:scale-105 transition-all">Add Image</button>
                                )}
                            </div>

                            {showForm === 'gallery' && (
                                <form onSubmit={handleAddGallery} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-brand-primary/20 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Image URL</label>
                                            <input type="url" required autoFocus value={galleryForm.src} onChange={(e) => setGalleryForm({ ...galleryForm, src: e.target.value })} placeholder="https://..." className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Image Title (Optional)</label>
                                            <input type="text" value={galleryForm.title} onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })} placeholder="Event/Action title" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border-none outline-none font-medium focus:ring-2 focus:ring-brand-primary/20 transition-all shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button type="submit" disabled={loading} className="flex-grow py-4 rounded-2xl bg-brand-primary text-white font-black uppercase shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary transition-all disabled:opacity-50">Add to Gallery</button>
                                        <button type="button" onClick={() => setShowForm(null)} className="px-8 py-4 rounded-2xl bg-slate-200 dark:bg-slate-700 font-black uppercase hover:bg-slate-300 dark:hover:bg-slate-600 transition-all">Cancel</button>
                                    </div>
                                </form>
                            )}

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
                        <div className="space-y-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-black uppercase tracking-tight">User Responses & Registrations</h2>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={downloadCSV}
                                        className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-all flex items-center gap-2"
                                    >
                                        <span>📥</span>
                                        Download CSV
                                    </button>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Filter by Event:</span>
                                    <select
                                        value={responseFilter}
                                        onChange={(e) => setResponseFilter(e.target.value)}
                                        className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none font-bold text-sm focus:ring-2 focus:ring-brand-primary/20"
                                    >
                                        <option>All</option>
                                        <option>Contact Form</option>
                                        {Array.from(new Set(events.map(e => e.title))).map(title => (
                                            <option key={title}>{title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {responses
                                .filter(res => {
                                    if (responseFilter === 'All') return true;
                                    if (responseFilter === 'Contact Form') return !res.event_title;
                                    return res.event_title === responseFilter;
                                })
                                .map((res) => (
                                    <div key={res.id} className="p-6 rounded-2xl bg-white dark:bg-slate-800 space-y-4 shadow-sm border border-slate-100 dark:border-slate-800 group hover:border-brand-primary/30 transition-all">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-black uppercase text-xl capitalize">{res.full_name}</h3>
                                                    {res.event_title && (
                                                        <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest">Event Reg</span>
                                                    )}
                                                </div>
                                                <p className="text-sm font-bold text-brand-primary uppercase tracking-widest">{res.subject}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{new Date(res.created_at).toLocaleDateString()}</span>
                                                <p className="text-sm text-slate-500 font-medium">{res.email}</p>
                                                {res.phone && <p className="text-xs text-slate-400 font-bold">{res.phone}</p>}
                                            </div>
                                        </div>
                                        {res.event_title && (
                                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Registered For:</p>
                                                <p className="font-bold text-slate-900 dark:text-white uppercase">{res.event_title}</p>
                                            </div>
                                        )}
                                        <p className="text-slate-600 dark:text-slate-300 italic bg-slate-50/50 dark:bg-slate-900/30 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">"{res.message}"</p>
                                        <div className="flex justify-between items-center pt-2">
                                            <div className="flex gap-4">
                                                <a href={`mailto:${res.email}`} className="text-[10px] font-black uppercase text-brand-primary hover:underline flex items-center gap-1">✉️ Reply Email</a>
                                                {res.phone && (
                                                    <a href={`tel:${res.phone}`} className="text-[10px] font-black uppercase text-emerald-500 hover:underline flex items-center gap-1">📞 Call Member</a>
                                                )}
                                            </div>
                                            <button onClick={() => deleteItem('responses', res.id)} className="text-[10px] font-black uppercase text-rose-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity">Delete Reference</button>
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
