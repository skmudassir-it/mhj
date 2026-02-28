'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

export default function GalleryPage() {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            const { data } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
            if (data) setImages(data);
            setLoading(false);
        }
        fetchImages();
    }, []);

    return (
        <div className="bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white">
            <main>
                {/* Header Section */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl space-y-6">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                                Visual <br /><span className="text-brand-primary">Impact</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Capturing the joy, resilience, and community spirit of Memphis in motion.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-32 px-6">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                            {images.map((img, i) => (
                                <div key={i} className={`group relative rounded-[32px] overflow-hidden shadow-2xl ${img.size}`}>
                                    <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <h3 className="text-white text-xl font-black uppercase tracking-tight">{img.title}</h3>
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
