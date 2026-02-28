'use client';

import { useState } from 'react';

// We'll define the server action in a separate file or same if using 'use server' at top level of a function
// But best practice is a separate file or inline with 'use server'

export default function LoginPage() {
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pin }),
            });

            if (response.ok) {
                window.location.href = '/admin/access';
            } else {
                const data = await response.json();
                setError(data.error || 'Invalid PIN');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 font-sans selection:bg-brand-primary/30">
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="w-full max-w-md space-y-8 relative z-10">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 backdrop-blur-xl rounded-[24px] border border-white/10 shadow-2xl mb-4 group transition-all hover:scale-110 hover:rotate-3">
                        <span className="text-4xl group-hover:animate-bounce">🔐</span>
                    </div>
                    <h1 className="text-5xl font-black text-white uppercase tracking-tighter leading-none">
                        Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">Access</span>
                    </h1>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Protected Content Module</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl p-10 rounded-[40px] border border-white/10 shadow-2xl space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 px-4">Secure Entry PIN</label>
                            <input
                                type="password"
                                required
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                placeholder="••••••"
                                className="w-full px-8 py-6 rounded-3xl bg-black/40 border-2 border-white/5 outline-none font-black text-2xl text-center tracking-[0.5em] text-white focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-slate-800 placeholder:tracking-normal"
                                maxLength={6}
                                autoFocus
                            />
                        </div>
                        {error && (
                            <p className="text-rose-500 text-xs font-black uppercase tracking-widest text-center animate-shake bg-rose-500/10 py-3 rounded-xl border border-rose-500/20">
                                ⚠️ {error}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-6 rounded-3xl bg-brand-primary text-white font-black uppercase tracking-widest shadow-2xl shadow-brand-primary/30 hover:bg-brand-secondary active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden relative"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>Verify & Authenticate <span className="translate-x-0 group-hover:translate-x-2 transition-transform">→</span></>
                            )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    </button>
                </form>

                <p className="text-center text-slate-600 font-bold uppercase text-[10px] tracking-widest leading-loose">
                    This area is restricted to authorized personnel.<br />
                    All attempts are logged via secure node.
                </p>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    100% { transform: translateX(200%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.2s ease-in-out 0s 2;
                }
            `}</style>
        </div>
    );
}
