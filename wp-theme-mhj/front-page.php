<?php
/**
 * The template for the front page
 *
 * @package MHJ
 */

get_header();
?>

<!-- Hero Section - Full Width Festival Style -->
<section class="relative h-[85vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 transition-opacity duration-1000 opacity-100">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero_festival.png" alt="Hero Background" class="object-cover w-full h-full brightness-[0.7] saturate-[1.2]" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6 text-center space-y-8">
        <h1 class="text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-white uppercase animate-in fade-in zoom-in duration-1000">
            JAMBOREE
        </h1>
        <p class="mx-auto max-w-2xl text-xl md:text-3xl font-black text-white uppercase tracking-[0.2em] opacity-90 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            Celebrating the magic of community wellness
        </p>
        <div class="pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <a href="#get-involved" class="inline-block bg-brand-primary text-white px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl hover:bg-brand-secondary transition-all hover:-translate-y-1">
                Join the Movement
            </a>
        </div>
    </div>
</section>

<!-- Why We Exist Section -->
<section id="why-we-exist" class="py-32 px-6 bg-white dark:bg-slate-950">
    <div class="mx-auto max-w-7xl">
        <div class="space-y-4 mb-20">
            <h2 class="text-5xl md:text-7xl font-black tracking-tight text-[#8A1538] uppercase">
                Why We <span class="italic">Exist</span>
            </h2>
            <div class="w-40 h-2 bg-[#8A1538] rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div class="space-y-8 text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                <p>
                    Memphis faces unique health challenges, but we believe the solution isn't found in clinics alone—it's found in the <span class="text-[#8A1538] font-black uppercase">relationships</span> we build and the <span class="text-[#8A1538] font-black uppercase">culture</span> we share.
                </p>
                <p>
                    The Jamboree exists to bridge the gap between healthcare and the community, transforming wellness into a celebratory experience that everyone can see, taste, and feel.
                </p>
            </div>
            <div class="grid grid-cols-2 gap-6">
                <div class="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative translate-y-12 bg-slate-200">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero_memphis_health.png" alt="Community Activity" class="object-cover w-full h-full" />
                </div>
                <div class="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative bg-slate-200">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/wellness_workshop.png" alt="Wellness Workshop" class="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Categories Section -->
<section id="mission" class="py-32 px-6">
    <div class="mx-auto max-w-7xl">
        <div class="text-center max-w-3xl mx-auto space-y-6 mb-20">
            <h2 class="text-4xl md:text-6xl font-black tracking-tight">Relational <span class="text-brand-primary">Health</span></h2>
            <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Public health is strongest when it grows alongside the people it serves. The Jamboree invites participation through food, movement, music, and art.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Item 1 -->
            <div class="group relative p-0 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-brand-primary/50 transition-all hover:-translate-y-2 flex flex-col">
                <div class="relative h-64 w-full bg-slate-200">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero_memphis_health.png" alt="Physical Equity" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="bg-emerald-500 absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                        💪
                    </div>
                </div>
                <div class="p-10">
                    <h3 class="text-2xl font-bold mb-4">Physical Equity</h3>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Providing free access to fitness coaches and safe outdoor spaces for all Memphians.</p>
                    <div class="mt-8 flex items-center gap-2 text-brand-primary font-bold group-hover:gap-4 transition-all cursor-pointer">
                        <span>Learn More</span>
                        <span>&rarr;</span>
                    </div>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="group relative p-0 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-brand-primary/50 transition-all hover:-translate-y-2 flex flex-col">
                <div class="relative h-64 w-full bg-slate-200">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/gourmet_nutrition.png" alt="Nutritional Justice" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="bg-orange-500 absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                        🍎
                    </div>
                </div>
                <div class="p-10">
                    <h3 class="text-2xl font-bold mb-4">Nutritional Justice</h3>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Educating families on healthy eating and providing fresh produce to underserved areas.</p>
                    <div class="mt-8 flex items-center gap-2 text-brand-primary font-bold group-hover:gap-4 transition-all cursor-pointer">
                        <span>Learn More</span>
                        <span>&rarr;</span>
                    </div>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="group relative p-0 rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-brand-primary/50 transition-all hover:-translate-y-2 flex flex-col">
                <div class="relative h-64 w-full bg-slate-200">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/wellness_workshop.png" alt="Mental Wellness" class="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="bg-blue-500 absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:rotate-6 transition-transform">
                        🧘
                    </div>
                </div>
                <div class="p-10">
                    <h3 class="text-2xl font-bold mb-4">Mental Wellness</h3>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">Reducing stigma and providing free counseling and mindfulness workshops.</p>
                    <div class="mt-8 flex items-center gap-2 text-brand-primary font-bold group-hover:gap-4 transition-all cursor-pointer">
                        <span>Learn More</span>
                        <span>&rarr;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Impact Section -->
<section id="impact" class="py-32 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
                <h2 class="text-4xl md:text-5xl font-black tracking-tight">Making a Tangible <span class="text-brand-primary">Difference</span></h2>
                <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                    Through our annual Jamboree and year-round programs, we've touched the lives of thousands of families across the Mid-South.
                </p>
                <div class="grid grid-cols-2 gap-8">
                    <div>
                        <div class="text-4xl font-black text-brand-primary">400+</div>
                        <div class="text-slate-500 font-bold">Planned Participants</div>
                    </div>
                    <div>
                        <div class="text-4xl font-black text-brand-primary">15</div>
                        <div class="text-slate-500 font-bold">Changemaker Nations</div>
                    </div>
                    <div>
                        <div class="text-4xl font-black text-brand-primary">2027</div>
                        <div class="text-slate-500 font-bold">Jamboree April</div>
                    </div>
                    <div>
                        <div class="text-4xl font-black text-brand-primary">2026</div>
                        <div class="text-slate-500 font-bold">Activation Year</div>
                    </div>
                </div>
            </div>
            <div class="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 bg-slate-200">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/wellness_workshop.png" alt="Community Impact" class="object-cover w-full h-full" />
            </div>
        </div>
    </div>
</section>

<!-- Ecosystem Section -->
<section id="ecosystem" class="py-32 px-6 bg-brand-primary text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.05)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"></div>
    <div class="mx-auto max-w-7xl relative z-10">
        <div class="text-center max-w-3xl mx-auto space-y-6 mb-24">
            <h2 class="text-4xl md:text-7xl font-black tracking-tight uppercase">A Year-Round <br /><span class="text-brand-secondary">Wellness</span> Ecosystem</h2>
            <p class="text-xl text-emerald-50 leading-relaxed font-medium">
                The Jamboree is more than a single day. We support residents in moving from awareness to action through practical, real-world engagement.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- OKRA -->
            <div class="p-12 rounded-[48px] bg-white text-slate-900 shadow-2xl space-y-8 relative group overflow-hidden border-b-8 border-brand-secondary">
                <div class="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div class="space-y-4">
                    <div class="text-xs font-black text-brand-primary uppercase tracking-[0.2em]">Ongoing Knowledge & Activation</div>
                    <h3 class="text-5xl font-black tracking-tighter italic">OKRA <br />Health Network</h3>
                    <p class="text-lg text-slate-500 leading-relaxed font-medium">
                        Ongoing, Knowledge, Resources, and Activation. Supporting residents moving from awareness to action without judgment or shame.
                    </p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <span class="px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest">Ongoing</span>
                    <span class="px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest">Knowledge</span>
                    <span class="px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest">Resources</span>
                    <span class="px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-black uppercase tracking-widest">Activation</span>
                </div>
            </div>

            <!-- CORNBREAD -->
            <div class="p-12 rounded-[48px] bg-slate-900 text-white shadow-2xl space-y-8 relative group overflow-hidden border-b-8 border-brand-primary">
                <div class="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div class="space-y-4">
                    <div class="text-xs font-black text-brand-secondary uppercase tracking-[0.2em]">Resilience Navigation</div>
                    <h3 class="text-5xl font-black tracking-tighter italic text-brand-secondary">CORNBREAD <br />Passport</h3>
                    <p class="text-lg text-slate-400 leading-relaxed font-medium">
                        Community Outreach & Resilience Navigation for Better Resources, Education, Activation & Disease-Prevention.
                    </p>
                </div>
                <div class="flex flex-wrap gap-2">
                    <span class="px-5 py-2 rounded-full bg-slate-800 text-slate-400 text-xs font-black uppercase tracking-widest">Education</span>
                    <span class="px-5 py-2 rounded-full bg-slate-800 text-slate-400 text-xs font-black uppercase tracking-widest">Prevention</span>
                    <span class="px-5 py-2 rounded-full bg-slate-800 text-slate-400 text-xs font-black uppercase tracking-widest">Incentives</span>
                    <span class="px-5 py-2 rounded-full bg-slate-800 text-slate-400 text-xs font-black uppercase tracking-widest">Joy</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Crumbs & Culture Tour Section -->
<section id="tour" class="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
    <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div class="space-y-8">
                <div class="inline-flex items-center gap-2 rounded-full bg-brand-secondary/10 px-4 py-2 text-sm font-bold text-brand-secondary uppercase tracking-widest">
                    Upcoming Activation Tour
                </div>
                <h2 class="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                    Crumbs & <br />
                    <span class="text-brand-secondary">Culture</span>
                </h2>
                <div class="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    <p>
                        The Crumbs & Culture Tour is the part of the Memphis Health Jamboree that goes out into the city and into the places where people already gather, make memories, and feel at home.
                    </p>
                    <p>
                        Through food, movement, music, and storytelling, the tour introduces the Jamboree slowly, the way things grow in community: through familiarity, through joy, and through belonging.
                    </p>
                </div>

                <div class="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[32px] border border-slate-100 dark:border-slate-800">
                    <h4 class="font-bold text-lg mb-4 uppercase tracking-wider text-slate-400">Why "Crumbs"?</h4>
                    <p class="text-lg text-slate-600 dark:text-slate-400">
                        Crumbs travel: in kitchens, in churches, and on porches. They tell stories about who we are and where we come from. Culture is how Memphis shares wisdom and resilience.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- What May Happen -->
                <div class="p-8 rounded-[40px] bg-brand-primary text-white shadow-2xl space-y-6">
                    <h3 class="text-2xl font-black uppercase tracking-tight">What May Happen</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>Cooking demos & tastings</li>
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>Zumba, yoga, pilates</li>
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>DJs & Storytelling</li>
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>Nutrition workshops</li>
                    </ul>
                </div>

                <!-- Where It Lives -->
                <div class="p-8 rounded-[40px] bg-slate-900 text-white shadow-2xl space-y-6">
                    <h3 class="text-2xl font-black uppercase tracking-tight">Where It Lives</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>Parks & Libraries</li>
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>Farmers markets</li>
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>Neighborhood centers</li>
                        <li class="flex items-center gap-2 opacity-90 font-bold"><span class="w-1.5 h-1.5 rounded-full bg-white/40"></span>Creative spaces</li>
                    </ul>
                </div>

                <div class="sm:col-span-2 p-8 rounded-[40px] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h3 class="text-2xl font-black uppercase tracking-tight mb-4">Our Hope</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        <div class="flex items-center gap-2">✔ Build trust & joy</div>
                        <div class="flex items-center gap-2">✔ Relational health</div>
                        <div class="flex items-center gap-2">✔ Gather stories</div>
                        <div class="flex items-center gap-2">✔ Learn from community</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Support/Get Involved Section -->
<section id="get-involved" class="py-32 px-6">
    <div class="mx-auto max-w-7xl">
        <div class="text-center space-y-4 mb-20">
            <h2 class="text-4xl md:text-5xl font-black tracking-tight uppercase">How You Can <span class="text-brand-primary">Help</span></h2>
            <p class="text-xl text-slate-500 max-w-2xl mx-auto tracking-tight font-medium">Join us in our mission to create a healthier future for all Memphians.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-12 rounded-[40px] bg-brand-primary text-white shadow-2xl shadow-brand-primary/20 relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
                <div class="relative z-10 space-y-6">
                    <h3 class="text-3xl font-black uppercase">Donate Now</h3>
                    <p class="text-emerald-50 text-lg leading-relaxed">Your financial contribution goes directly to funding free health programs and distributing fresh food.</p>
                    <button class="bg-white text-brand-primary px-10 py-5 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all">Support Now</button>
                </div>
            </div>
            <div class="p-12 rounded-[40px] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[60px] -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
                <div class="relative z-10 space-y-6">
                    <h3 class="text-3xl font-black uppercase">Volunteer</h3>
                    <p class="text-slate-400 text-lg leading-relaxed">Lend your skills and time to help us facilitate workshops and community events.</p>
                    <button class="bg-brand-primary text-white px-10 py-5 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all">Get Involved</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Partners & Supporters Section -->
<section class="py-24 px-6 border-y border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
    <div class="mx-auto max-w-7xl">
        <p class="text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Proudly Supported By</p>
        <div class="flex flex-wrap items-center justify-center gap-16 transition-all duration-700">
            <div class="text-xl font-black text-slate-500 max-w-xs text-center leading-tight">University of Memphis School of Public Health Changemakers Initiative</div>
            <div class="text-xl font-black text-slate-500 max-w-xs text-center leading-tight">GiveCamp Memphis 2026</div>
            <div class="text-xl font-black italic tracking-tighter text-slate-400 opacity-60">Memphis Health Dept</div>
            <div class="text-xl font-black italic tracking-tighter text-slate-400 opacity-60">Mid-South Food Bank</div>
            <div class="text-xl font-black italic tracking-tighter text-slate-400 opacity-60">Shelby County Schools</div>
            <div class="text-xl font-black italic tracking-tighter text-slate-400 opacity-60">Community Foundation</div>
            <div class="text-xl font-black italic tracking-tighter text-slate-400 opacity-60">St. Jude</div>
        </div>
    </div>
</section>

<!-- Final CTA -->
<section class="py-24 px-6">
    <div class="mx-auto max-w-7xl rounded-[48px] bg-brand-primary p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-primary/40">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div class="relative z-10 space-y-10">
            <h2 class="text-5xl md:text-7xl font-black leading-tight tracking-tight">A Healthier City <br />Starts With You.</h2>
            <p class="text-xl text-emerald-100 max-w-2xl mx-auto font-medium">Join over 5,000 Memphians in our journey towards wellness for everyone, regardless of zip code.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <button class="bg-white text-brand-primary px-12 py-6 rounded-2xl text-xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">Become a Member</button>
                <div class="flex items-center gap-3">
                    <div class="flex -space-x-4">
                        <div class="w-12 h-12 rounded-full border-4 border-brand-primary bg-slate-200"></div>
                        <div class="w-12 h-12 rounded-full border-4 border-brand-primary bg-slate-300"></div>
                        <div class="w-12 h-12 rounded-full border-4 border-brand-primary bg-slate-400"></div>
                    </div>
                    <p class="text-sm font-bold text-emerald-50">Join our community of volunteers</p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
