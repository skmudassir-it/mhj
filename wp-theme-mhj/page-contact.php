<?php
/**
 * Template Name: Contact Page
 *
 * @package MHJ
 */

get_header();

// Note: In a real WordPress theme, the form submission would likely be handled by a plugin
// like Contact Form 7, WPForms, or a custom AJAX endpoint.
// For this static conversion, we are providing the HTML structure.
?>

<!-- Header Section -->
<section class="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl space-y-6">
            <h1 class="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                Let's <br /><span class="text-brand-primary">Connect</span>
            </h1>
            <p class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Have questions about our programs, or want to partner with us? Reach out and join the movement.
            </p>
        </div>
    </div>
</section>

<!-- Contact Form & Info -->
<section class="py-32 px-6">
    <div class="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">
        <!-- Contact Info -->
        <div class="space-y-12">
            <div class="space-y-6">
                <h2 class="text-4xl font-black uppercase tracking-tight">Our <span class="text-brand-primary">Location</span></h2>
                <div class="space-y-2 text-xl text-slate-500 font-medium">
                    <p>Memphis Health Jamboree HQ</p>
                    <p>123 Community Way</p>
                    <p>Memphis, TN 38103</p>
                </div>
            </div>

            <div class="space-y-6">
                <h2 class="text-4xl font-black uppercase tracking-tight">Email <span class="text-brand-primary">Us</span></h2>
                <div class="space-y-2 text-xl text-slate-500 font-medium">
                    <p><a href="mailto:hello@memphishealthjamboree.org" class="hover:text-brand-primary transition-colors">hello@memphishealthjamboree.org</a></p>
                    <p><a href="mailto:partners@memphishealthjamboree.org" class="hover:text-brand-primary transition-colors">partners@memphishealthjamboree.org</a></p>
                </div>
            </div>

            <div class="p-12 rounded-[48px] bg-slate-900 text-white shadow-2xl space-y-6 border-b-8 border-brand-primary relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 class="text-3xl font-black uppercase italic tracking-tight">Join our <br />Volunteer Network</h3>
                <p class="text-slate-400 text-lg leading-relaxed">Weekly updates on new opportunities across the city.</p>
                <!-- This would link to a volunteer signup form/page -->
                <a href="<?php echo esc_url(home_url('/#get-involved')); ?>" class="inline-block px-8 py-4 rounded-xl bg-brand-primary text-white font-bold hover:scale-105 transition-all">Sign Up Today</a>
            </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white dark:bg-slate-900 p-12 rounded-[48px] shadow-2xl border border-slate-100 dark:border-slate-800 space-y-8">
            <h2 class="text-4xl font-black uppercase tracking-tight">Send a <span class="text-brand-primary">Message</span></h2>

            <!-- Note: The action attribute should point to your form handler (e.g., admin-post.php or a third-party service endpoint) -->
            <form action="#" method="POST" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <label for="full_name" class="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                        <input
                            required
                            type="text"
                            id="full_name"
                            name="full_name"
                            class="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium text-slate-900 dark:text-white"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div class="space-y-2">
                        <label for="email" class="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            class="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium text-slate-900 dark:text-white"
                            placeholder="jane@example.com"
                        />
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="subject" class="text-xs font-black uppercase tracking-widest text-slate-400">Subject</label>
                    <select
                        id="subject"
                        name="subject"
                        class="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium appearance-none text-slate-900 dark:text-white"
                    >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership Proposal">Partnership Proposal</option>
                        <option value="Volunteer Interest">Volunteer Interest</option>
                        <option value="Press & Media">Press & Media</option>
                    </select>
                </div>
                <div class="space-y-2">
                    <label for="message" class="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                    <textarea
                        required
                        id="message"
                        name="message"
                        rows="5"
                        class="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-brand-primary outline-none font-medium resize-none text-slate-900 dark:text-white"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="w-full py-5 rounded-2xl bg-brand-primary text-white font-black text-xl hover:bg-brand-secondary transition-colors shadow-xl shadow-brand-primary/20"
                >
                    Send Message
                </button>
            </form>
            <p class="text-sm text-slate-500 italic mt-4">Note: This form is a static template. To enable submissions, please integrate a WordPress form plugin like Contact Form 7.</p>
        </div>
    </div>
</section>

<?php get_footer(); ?>
