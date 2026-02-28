'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [settings, setSettings] = useState({
    hero_title: 'JAMBOREE',
    hero_tagline: 'Celebrating the magic of community wellness'
  });

  const [heroImages, setHeroImages] = useState<any[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { data: sData } = await supabase.from('site_settings').select('*').single();
      if (sData) setSettings(sData);

      const { data: hData } = await supabase.from('hero_images').select('*').order('display_order', { ascending: true });
      if (hData && hData.length > 0) setHeroImages(hData);
      else setHeroImages([{ src: '/hero_festival.png', alt: 'Hero Background' }]);

      const { data: gData } = await supabase.from('gallery').select('*').limit(6).order('created_at', { ascending: false });
      if (gData) setGallery(gData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages]);
  return (
    <div className="flex flex-col font-sans">

      <main className="flex-grow">
        {/* Hero Section - Full Width Festival Style */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, idx) => (
              <div
                key={img.id || idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt || "Hero Background"}
                  fill
                  className="object-cover brightness-[0.7] saturate-[1.2]"
                  priority={idx === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

            {/* Slider Indicators */}
            {heroImages.length > 1 && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${idx === currentImgIndex ? 'bg-brand-primary w-8' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center space-y-8">
            <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-white uppercase animate-in fade-in zoom-in duration-1000">
              {settings.hero_title}
            </h1>
            <p className="mx-auto max-w-2xl text-xl md:text-3xl font-black text-white uppercase tracking-[0.2em] opacity-90 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              {settings.hero_tagline}
            </p>
            <div className="pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Link href="#get-involved" className="inline-block bg-brand-primary text-white px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl hover:bg-brand-secondary transition-all hover:-translate-y-1">
                Join the Movement
              </Link>
            </div>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section id="why-we-exist" className="py-32 px-6 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="space-y-4 mb-20">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#8A1538] uppercase">
                Why We <span className="italic">Exist</span>
              </h2>
              <div className="w-40 h-2 bg-[#8A1538] rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                <p>
                  Memphis faces unique health challenges, but we believe the solution isn't found in clinics alone—it's found in the <span className="text-[#8A1538] font-black uppercase">relationships</span> we build and the <span className="text-[#8A1538] font-black uppercase">culture</span> we share.
                </p>
                <p>
                  The Jamboree exists to bridge the gap between healthcare and the community, transforming wellness into a celebratory experience that everyone can see, taste, and feel.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative translate-y-12">
                  <Image src="/hero_memphis_health.png" alt="Community Activity" fill className="object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
                  <Image src="/wellness_workshop.png" alt="Wellness Workshop" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="mission" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Relational <span className="text-brand-primary">Health</span></h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Public health is strongest when it grows alongside the people it serves. The Jamboree invites participation through food, movement, music, and art.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Physical Equity", desc: "Providing free access to fitness coaches and safe outdoor spaces for all Memphians.", icon: "💪", color: "bg-emerald-500", img: "/hero_memphis_health.png" },
                { title: "Nutritional Justice", desc: "Educating families on healthy eating and providing fresh produce to underserved areas.", icon: "🍎", color: "bg-orange-500", img: "/gourmet_nutrition.png" },
                { title: "Mental Wellness", desc: "Reducing stigma and providing free counseling and mindfulness workshops.", icon: "🧘", color: "bg-blue-500", img: "/wellness_workshop.png" }
              ].map((item, i) => (
                <div key={i} className="group relative p-0 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-brand-primary/50 transition-all hover:-translate-y-2 flex flex-col">
                  <div className="relative h-64 w-full">
                    <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`${item.color} absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:rotate-6 transition-transform`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{item.desc}</p>
                    <div className="mt-8 flex items-center gap-2 text-brand-primary font-bold group-hover:gap-4 transition-all cursor-pointer">
                      <span>Learn More</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-32 px-6 bg-slate-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">Making a Tangible <span className="text-brand-primary">Difference</span></h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  Through our annual Jamboree and year-round programs, we've touched the lives of thousands of families across the Mid-South.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-black text-brand-primary">400+</div>
                    <div className="text-slate-500 font-bold">Planned Participants</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-brand-primary">15</div>
                    <div className="text-slate-500 font-bold">Changemaker Nations</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-brand-primary">2027</div>
                    <div className="text-slate-500 font-bold">Jamboree April</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-brand-primary">2026</div>
                    <div className="text-slate-500 font-bold">Activation Year</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <Image src="/wellness_workshop.png" alt="Community Impact" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section id="ecosystem" className="py-32 px-6 bg-brand-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"></div>
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6 mb-24">
              <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase">A Year-Round <br /><span className="text-brand-secondary">Wellness</span> Ecosystem</h2>
              <p className="text-xl text-emerald-50 leading-relaxed font-medium">
                The Jamboree is more than a single day. We support residents in moving from awareness to action through practical, real-world engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 rounded-[48px] bg-white text-slate-900 shadow-2xl space-y-8 relative group overflow-hidden border-b-8 border-brand-secondary">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="space-y-4">
                  <div className="text-xs font-black text-brand-primary uppercase tracking-[0.2em]">Ongoing Knowledge & Activation</div>
                  <h3 className="text-5xl font-black tracking-tighter italic">OKRA <br />Health Network</h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    Ongoing, Knowledge, Resources, and Activation. Supporting residents moving from awareness to action without judgment or shame.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Ongoing', 'Knowledge', 'Resources', 'Activation'].map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="p-12 rounded-[48px] bg-slate-900 text-white shadow-2xl space-y-8 relative group overflow-hidden border-b-8 border-brand-primary">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="space-y-4">
                  <div className="text-xs font-black text-brand-secondary uppercase tracking-[0.2em]">Resilience Navigation</div>
                  <h3 className="text-5xl font-black tracking-tighter italic text-brand-secondary">CORNBREAD <br />Passport</h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-medium">
                    Community Outreach & Resilience Navigation for Better Resources, Education, Activation & Disease-Prevention.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Education', 'Prevention', 'Incentives', 'Joy'].map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full bg-slate-800 text-slate-400 text-xs font-black uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Crumbs & Culture Tour Section */}
        <section id="tour" className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-secondary/10 px-4 py-2 text-sm font-bold text-brand-secondary uppercase tracking-widest">
                  Upcoming Activation Tour
                </div>
                <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                  Crumbs & <br />
                  <span className="text-brand-secondary">Culture</span>
                </h2>
                <div className="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  <p>
                    The Crumbs & Culture Tour is the part of the Memphis Health Jamboree that goes out into the city and into the places where people already gather, make memories, and feel at home.
                  </p>
                  <p>
                    Through food, movement, music, and storytelling, the tour introduces the Jamboree slowly, the way things grow in community: through familiarity, through joy, and through belonging.
                  </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-lg mb-4 uppercase tracking-wider text-slate-400">Why "Crumbs"?</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Crumbs travel: in kitchens, in churches, and on porches. They tell stories about who we are and where we come from. Culture is how Memphis shares wisdom and resilience.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "What May Happen", items: ["Cooking demos & tastings", "Zumba, yoga, pilates", "DJs & Storytelling", "Nutrition workshops"] },
                  { title: "Where It Lives", items: ["Parks & Libraries", "Farmers markets", "Neighborhood centers", "Creative spaces"] }
                ].map((box, i) => (
                  <div key={i} className={`p-8 rounded-[40px] ${i === 0 ? 'bg-brand-primary text-white' : 'bg-slate-900 text-white'} shadow-2xl space-y-6`}>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{box.title}</h3>
                    <ul className="space-y-3">
                      {box.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 opacity-90 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="sm:col-span-2 p-8 rounded-[40px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Our Hope</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    <div className="flex items-center gap-2">✔ Build trust & joy</div>
                    <div className="flex items-center gap-2">✔ Relational health</div>
                    <div className="flex items-center gap-2">✔ Gather stories</div>
                    <div className="flex items-center gap-2">✔ Learn from community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support/Get Involved Section */}
        <section id="get-involved" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">How You Can <span className="text-brand-primary">Help</span></h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto tracking-tight font-medium">Join us in our mission to create a healthier future for all Memphians.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 rounded-[40px] bg-brand-primary text-white shadow-2xl shadow-brand-primary/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-black uppercase">Donate Now</h3>
                  <p className="text-emerald-50 text-lg leading-relaxed">Your financial contribution goes directly to funding free health programs and distributing fresh food.</p>
                  <button className="bg-white text-brand-primary px-10 py-5 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all">Support Now</button>
                </div>
              </div>
              <div className="p-12 rounded-[40px] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[60px] -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-black uppercase">Volunteer</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">Lend your skills and time to help us facilitate workshops and community events.</p>
                  <button className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all">Get Involved</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Supporters Section */}
        <section className="py-24 px-6 border-y border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Proudly Supported By</p>
            <div className="flex flex-wrap items-center justify-center gap-16 transition-all duration-700">
              <div className="text-xl font-black text-slate-500 max-w-xs text-center leading-tight">University of Memphis School of Public Health Changemakers Initiative</div>
              <div className="text-xl font-black text-slate-500 max-w-xs text-center leading-tight">GiveCamp Memphis 2026</div>
              {['Memphis Health Dept', 'Mid-South Food Bank', 'Shelby County Schools', 'Community Foundation', 'St. Jude'].map((name, i) => (
                <div key={i} className="text-xl font-black italic tracking-tighter text-slate-400 opacity-60">{name}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-32 px-6 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="flex justify-between items-end mb-16 px-4">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white uppercase">Community <span className="text-brand-primary">Gallery</span></h2>
                <div className="w-40 h-2 bg-brand-primary rounded-full"></div>
              </div>
              <Link href="/gallery" className="hidden md:inline-flex items-center gap-2 text-brand-primary font-black uppercase tracking-widest hover:gap-4 transition-all">
                View All Images <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((item, i) => (
                <div key={item.id || i} className="group relative aspect-video rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <Image
                    src={item.src}
                    alt={item.title || "Gallery Image"}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            {gallery.length === 0 && (
              <div className="py-24 text-center text-slate-400 font-bold uppercase italic tracking-[0.2em] border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[48px]">
                Capturing moments of joy...
              </div>
            )}
          </div>
        </section>

        {/* Newsletter/Stay Updated */}
        <section className="py-32 px-6">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Stay Connected with <span className="text-brand-primary">Our Mission</span></h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Receive updates on upcoming free workshops, community health news, and ways to get involved.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-grow px-8 py-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium" />
              <button className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-black shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all">Subscribe</button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-7xl rounded-[48px] bg-brand-primary p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">A Healthier City <br />Starts With You.</h2>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-medium">Join over 5,000 Memphians in our journey towards wellness for everyone, regardless of zip code.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <button className="bg-white text-brand-primary px-12 py-6 rounded-2xl text-xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">Become a Member</button>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-primary bg-slate-200"></div>)}
                  </div>
                  <p className="text-sm font-bold text-emerald-50">Join our community of volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
