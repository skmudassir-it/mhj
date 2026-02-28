'use client';

export default function TopBar() {
    return (
        <div className="w-full bg-brand-primary py-2 px-6 text-center text-white text-xs font-black uppercase tracking-[0.2em] relative z-[60]">
            <span className="animate-pulse">✨ Join us for the 2026 Activation Year! ✨</span>
            <span className="hidden md:inline ml-4 opacity-80">|</span>
            <span className="hidden md:inline ml-4 opacity-80">Building wellness through belonging</span>
        </div>
    );
}
