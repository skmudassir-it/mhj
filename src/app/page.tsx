import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-6 pt-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -mr-64 -mt-64 anim-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>
          </div>

          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-bold text-brand-primary uppercase tracking-wider animate-in fade-in slide-in-from-left duration-700">
                <div className="relative w-32 h-32 mb-4 animate-in fade-in zoom-in duration-1000">
                  <Image src="/logo.png" alt="MHJ Logo" fill className="object-contain" />
                </div>
                Non-Profit Foundation
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                A Healthier <br />
                <span className="text-gradient">Memphis</span> <br />
                <span className="text-slate-400 italic">Co-Created</span>
              </h1>
              <p className="max-w-xl text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400 font-medium">
                A culturally rooted, community-co-created public health experience designed to strengthen trust, connection, and wellness across Memphis.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <a href="#get-involved" className="flex items-center justify-center rounded-2xl bg-brand-primary px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-brand-primary/40 hover:bg-brand-secondary transition-all hover:-translate-y-1 hover:shadow-brand-primary/60">
                  Join the Movement
                </a>
                <a href="#mission" className="flex items-center justify-center rounded-2xl border-2 border-slate-200 dark:border-slate-800 px-10 py-5 text-xl font-bold hover:bg-white dark:hover:bg-slate-900 shadow-sm transition-all hover:-translate-y-1">
                  Our Impact
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-[40px] blur-2xl -z-10"></div>
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <Image
                  src="/hero_memphis_health.png"
                  alt="Memphis Health Jamboree Community Activity"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 glass p-8 m-4 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-xs font-black text-brand-primary uppercase tracking-widest mb-1">Our Commitment</div>
                    <div className="text-lg font-bold">100% of donations fuel community wellness</div>
                  </div>
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

        {/* Schedule/Programs Section */}
        <section id="programs" className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.1)_0,transparent_100%)]"></div>
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">Community <span className="text-brand-primary">Workshops</span></h2>
                <p className="text-xl text-slate-400 max-w-xl">Free accessible programs designed for every Memphian.</p>
              </div>
              <div className="flex gap-4">
                {['Weekly', 'Monthly', 'Annual'].map((freq, i) => (
                  <button key={i} className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${i === 0 ? 'bg-brand-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                { time: "Saturdays", event: "Community Yoga in the Park", trainer: "Volunteer led", category: "Physical" },
                { time: "Tuesdays", event: "Neighborhood Nutrition Class", trainer: "Community Health Workers", category: "Nutrition" },
                { time: "Wednesdays", event: "Mental Health Support Group", trainer: "Certified Facilitators", category: "Mental" },
                { time: "Bi-Weekly", event: "Youth Sports Clinic", trainer: "Local Coaches", category: "Physical" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-brand-primary/50 transition-colors group">
                  <div className="text-2xl font-black text-brand-primary w-40">{item.time}</div>
                  <div className="flex-grow text-center md:text-left">
                    <h4 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{item.event}</h4>
                    <p className="text-slate-400">{item.trainer}</p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-slate-600 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {item.category}
                  </div>
                </div>
              ))}
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
