'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TopBar() {
    const [announcement, setAnnouncement] = useState('Join us for the 2026 Activation Year!');

    useEffect(() => {
        async function fetchSettings() {
            const { data } = await supabase.from('site_settings').select('top_bar_text').single();
            if (data?.top_bar_text) setAnnouncement(data.top_bar_text);
        }
        fetchSettings();
    }, []);

    return (
        <div className="w-full bg-brand-primary py-2 px-6 text-center text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em] relative z-[60]">
            <span className="animate-pulse">✨ {announcement} ✨</span>
            <span className="hidden md:inline ml-4 opacity-80">|</span>
            <span className="hidden md:inline ml-4 opacity-80">Building wellness through belonging</span>
        </div>
    );
}
