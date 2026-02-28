import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 w-full px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">M</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-brand-primary leading-none">MHJ</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Memphis</span>
            </div>
          </div>
          <div className="hidden space-x-8 md:flex items-center">
            <a href="#about" className="text-sm font-semibold hover:text-brand-primary transition-colors">About</a>
            <a href="#schedule" className="text-sm font-semibold hover:text-brand-primary transition-colors">Schedule</a>
            <a href="#speakers" className="text-sm font-semibold hover:text-brand-primary transition-colors">Speakers</a>
            <a href="#pricing" className="text-sm font-semibold hover:text-brand-primary transition-colors">Tickets</a>
            <a href="#register" className="glass bg-brand-primary !bg-opacity-100 px-6 py-2.5 !text-white rounded-full text-sm font-bold shadow-lg shadow-brand-primary/30 hover:scale-105 active:scale-95 transition-all">Register Now</a>
          </div>
        </div>
      </nav>

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
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-primary"></span>
                </span>
                Returning Summer 2026
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                Celebrate <br />
                <span className="text-gradient">Vitality</span> <br />
                <span className="text-slate-400">In Memphis</span>
              </h1>
              <p className="max-w-xl text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                The city&apos;s premier health and wellness festival. Experience outdoor fitness, local nutrition, and mindful workshops on the iconic Mississippi riverfront.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <a href="#register" className="flex items-center justify-center rounded-2xl bg-brand-primary px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-brand-primary/40 hover:bg-brand-secondary transition-all hover:-translate-y-1 hover:shadow-brand-primary/60">
                  Book Your Experience
                </a>
                <a href="#about" className="flex items-center justify-center rounded-2xl border-2 border-slate-200 dark:border-slate-800 px-10 py-5 text-xl font-bold hover:bg-white dark:hover:bg-slate-900 shadow-sm transition-all hover:-translate-y-1">
                  Our Mission
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-[40px] blur-2xl -z-10"></div>
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <Image
                  src="/hero_memphis_health.png"
                  alt="Memphis Health Jamboree Activity"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 glass p-8 m-4 rounded-2xl shadow-xl">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-black text-brand-primary uppercase tracking-widest mb-1">Venue</div>
                      <div className="text-lg font-bold leading-tight">Tom Lee Park, <br />Memphis TN</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-brand-primary uppercase tracking-widest mb-1">Save The Date</div>
                      <div className="text-lg font-bold">June 12-14, 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="about" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Three Pillars of Wellness</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400">
                We believe health is a holistic journey. Our curated experiences are built on three core foundations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Physical Power", desc: "Push your limits with world-class trainers in Yoga, HIIT, and urban obstacle courses.", icon: "💪", color: "bg-emerald-500", img: "/hero_memphis_health.png" },
                { title: "Authentic Fuel", desc: "Discover the science of nutrition through live demos from Memphis's culinary innovators.", icon: "🍎", color: "bg-orange-500", img: "/gourmet_nutrition.png" },
                { title: "Mental Clarity", desc: "Unlock peak performance and peace of mind with expert-led meditation and workshops.", icon: "🧘", color: "bg-blue-500", img: "/wellness_workshop.png" }
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
                      <span>Explore Tracks</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Preview */}
        <section id="schedule" className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.1)_0,transparent_100%)]"></div>
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">The Festival <span className="text-brand-primary">Lineup</span></h2>
                <p className="text-xl text-slate-400 max-w-xl">From sunrise sun salutations to evening riverfront celebrations.</p>
              </div>
              <div className="flex gap-4">
                {['Day 1', 'Day 2', 'Day 3'].map((day, i) => (
                  <button key={i} className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${i === 1 ? 'bg-brand-primary text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {[
                { time: "07:00 AM", event: "Riverfront Sunrise Yoga", trainer: "Sarah Jenkins", category: "Physical" },
                { time: "09:30 AM", event: "Plant-Based Breakfast Workshop", trainer: "Chef Marcus", category: "Nutrition" },
                { time: "11:30 AM", event: "HIIT Intensity Zone", trainer: "Coach Rick", category: "Physical" },
                { time: "02:00 PM", event: "Biohacking & Longevity Seminar", trainer: "Dr. Elena Vance", category: "Mental" },
                { time: "04:30 PM", event: "Sunset Sound Bath", trainer: "Luna Ray", category: "Mental" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-brand-primary/50 transition-colors group">
                  <div className="text-2xl font-black text-brand-primary w-32">{item.time}</div>
                  <div className="flex-grow text-center md:text-left">
                    <h4 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{item.event}</h4>
                    <p className="text-slate-400">Led by {item.trainer}</p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-slate-600 text-xs font-bold uppercase tracking-widest text-slate-400">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-24">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">World Class <span className="text-brand-primary">Instructors</span></h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto tracking-tight font-medium">Learn from the brightest minds in sports science and nutrition.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sarah Jenkins", role: "Yoga Master", img: "/instructor_1.png" },
                { name: "Chef Marcus", role: "Nutritionist", img: "/instructor_2.png" },
                { name: "Coach Rick", role: "HIIT Specialist", img: "/instructor_3.png" },
                { name: "Dr. Elena Vance", role: "Biohacker", img: "/instructor_4.png" }
              ].map((instructor, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                    {/* Placeholder for real instructor images, but I'll use a gradient and overlay for now */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/40 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm shadow-xl">View Bio</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-black uppercase mb-1">{instructor.name}</h4>
                  <p className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4">{instructor.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 px-6 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
          <div className="mx-auto max-w-7xl relative z-10">
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Choose Your <span className="text-brand-primary">Journey</span></h2>
              <div className="flex items-center justify-center gap-4">
                <span className="font-bold text-slate-400">Personal</span>
                <div className="w-14 h-8 rounded-full bg-brand-primary/20 p-1 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-brand-primary"></div>
                </div>
                <span className="font-bold">Team Support</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Discovery", price: "49", features: ["1 Day Access", "All Workshops", "Basic Gift Bag", "Community Hub"] },
                { name: "Vitality", price: "129", features: ["3 Day Full Access", "Priority Booking", "Premium Gift Bag", "Post-Event Content"], popular: true },
                { name: "Legacy", price: "299", features: ["VIP Lounge Access", "Trainer Meet & Greets", "Exclusive Apparel", "Luxury Biohacking Lounge"] }
              ].map((tier, i) => (
                <div key={i} className={`relative p-12 rounded-[40px] bg-white dark:bg-slate-900 shadow-2xl ${tier.popular ? 'border-4 border-brand-primary -translate-y-4' : 'border border-slate-100 dark:border-slate-800'}`}>
                  {tier.popular && <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-primary text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Most Popular</div>}
                  <h3 className="text-2xl font-black mb-2 uppercase">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-4xl font-black">$</span>
                    <span className="text-6xl font-black">{tier.price}</span>
                    <span className="text-slate-400 font-bold">/pass</span>
                  </div>
                  <ul className="space-y-6 mb-12">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-medium">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-xs">✓</div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-5 rounded-2xl font-black transition-all ${tier.popular ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/30 hover:bg-brand-secondary' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200'}`}>
                    Select Tier
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-24 px-6 border-y border-slate-100 dark:border-slate-800">
          <div className="mx-auto max-w-7xl">
            <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Empowered By Local Partners</p>
            <div className="flex flex-wrap items-center justify-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['Memphis Health', 'River City Yoga', 'Bluff City Fuel', 'Delta Dental', 'St. Jude'].map((name, i) => (
                <div key={i} className="text-2xl font-black italic tracking-tighter text-slate-500">{name}</div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl font-black tracking-tight">Need Some <span className="text-brand-primary">Clarity?</span></h2>
              <p className="text-lg text-slate-500">Everything you need to know about the Memphis Health Jamboree.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: "What should I bring to the festival?", a: "We recommend bringing a yoga mat, reusable water bottle, comfortable athletic wear, and sun protection. Some workshops may require specific gear, which will be listed in your app schedule." },
                { q: "Is there parking available near Tom Lee Park?", a: "Yes, there is plenty of street parking and public garages in Downtown Memphis. We also encourage using rideshare services or biking using the riverfront paths." },
                { q: "Are kids allowed to attend?", a: "Absolutely! The Jamboree is a family-friendly event. We have a dedicated 'Mini-Jamboree' zone for children ages 5-12." },
                { q: "What happens if it rains?", a: "The festival is rain or shine! Many of our physical workshop zones are covered, and we have indoor backup venues within walking distance for extreme weather." }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-brand-primary/30 transition-all bg-white dark:bg-slate-900">
                  <div className="flex items-center justify-between cursor-pointer">
                    <h4 className="text-xl font-bold transition-colors group-hover:text-brand-primary">{item.q}</h4>
                    <span className="text-2xl text-slate-300 transition-transform group-hover:rotate-45">+</span>
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                    <p className="pt-6 text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="register" className="py-24 px-6">
          <div className="mx-auto max-w-7xl rounded-[48px] bg-brand-primary p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/40">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">Your Healthier <br />Future Starts Here.</h2>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-medium">Limited early bird tickets available. Join over 2,000 Memphians for the weekend of a lifetime.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <button className="bg-white text-brand-primary px-12 py-6 rounded-2xl text-xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">Get Your Passes</button>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-primary bg-slate-200"></div>)}
                  </div>
                  <p className="text-sm font-bold text-emerald-50">Already 200+ Registered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold text-xl">M</div>
                <span className="text-2xl font-black tracking-tight text-brand-primary leading-none uppercase">Memphis Health <br />Jamboree</span>
              </div>
              <p className="text-lg text-slate-500 max-w-md font-medium leading-relaxed">Dedicated to building a healthier, stronger, and more vibrant Memphis through the power of community, physical movement, and ancestral wisdom.</p>
              <div className="flex gap-4">
                {['TW', 'IG', 'LI', 'FB'].map(s => <div key={s} className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-sm cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-all">{s}</div>)}
              </div>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-lg uppercase tracking-widest">Navigation</h5>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-brand-primary transition-colors">Our Mission</a></li>
                <li><a href="#schedule" className="hover:text-brand-primary transition-colors">Schedule</a></li>
                <li><a href="#speakers" className="hover:text-brand-primary transition-colors">Speakers</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-bold text-lg uppercase tracking-widest">Legal</h5>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Ticket Refund Policy</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Media Kit</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-12 border-t border-slate-200 dark:border-slate-900 text-sm font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Memphis Health Jamboree. Powered by Memphis Wellness Coalition.
          </div>
        </div>
      </footer>
    </div>
  );
}
