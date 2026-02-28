'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TopBar() {
    const [notifications, setNotifications] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function fetchNotifications() {
            const { data, error } = await supabase
                .from('notifications')
                .select('content')
                .eq('is_active', true)
                .order('display_order', { ascending: true });

            if (data && data.length > 0) {
                setNotifications(data);
            } else {
                setNotifications([{ content: 'Join us for the 2026 Activation Year!' }]);
            }
        }
        fetchNotifications();
    }, []);

    useEffect(() => {
        if (notifications.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % notifications.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [notifications]);

    return (
        <div className="w-full bg-brand-primary py-2 px-6 text-center text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em] relative z-[60] overflow-hidden">
            <div className="flex flex-col items-center justify-center h-6">
                {notifications.map((note, idx) => (
                    <div
                        key={idx}
                        className={`transition-all duration-1000 absolute ${idx === currentIndex
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4 pointer-events-none'
                            }`}
                    >
                        <span className="animate-pulse">✨ {note.content} ✨</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
