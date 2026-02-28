'use client';

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white">
            <main>
                {/* Header Section */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl space-y-6">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                                Let's <br /><span className="text-brand-primary">Connect</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                Have questions about our programs, or want to partner with us? Reach out and join the movement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Info */}
                <section className="py-32 px-6">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-black uppercase tracking-tight">Our <span className="text-brand-primary">Location</span></h2>
                                <div className="space-y-2 text-xl text-slate-500 font-medium">
                                    <p>Memphis Health Jamboree HQ</p>
                                    <p>123 Community Way</p>
                                    <p>Memphis, TN 38103</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl font-black uppercase tracking-tight">Email <span className="text-brand-primary">Us</span></h2>
                                <div className="space-y-2 text-xl text-slate-500 font-medium">
                                    <p>hello@memphishealthjamboree.org</p>
                                    <p>partners@memphishealthjamboree.org</p>
                                </div>
                            </div>

                            <div className="p-12 rounded-[48px] bg-slate-900 text-white shadow-2xl space-y-6 border-b-8 border-brand-primary relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-3xl font-black uppercase italic tracking-tight">Join our <br />Volunteer Network</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">Weekly updates on new opportunities across the city.</p>
                                <button className="px-8 py-4 rounded-xl bg-brand-primary text-white font-bold hover:scale-105 transition-all">Sign Up Today</button>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-12 rounded-[48px] shadow-2xl border border-slate-100 dark:border-slate-800 space-y-8">
                            <h2 className="text-4xl font-black uppercase tracking-tight">Send a <span className="text-brand-primary">Message</span></h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium" placeholder="Jane Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                        <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium" placeholder="jane@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Subject</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Partnership Proposal</option>
                                        <option>Volunteer Interest</option>
                                        <option>Press & Media</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                                    <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button className="w-full py-5 rounded-2xl bg-brand-primary text-white font-black text-xl hover:bg-brand-secondary transition-colors shadow-xl shadow-brand-primary/20">Send Message</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
