<?php
/**
 * Template Name: Events Page
 *
 * @package MHJ
 */

get_header();

// Hardcoded events for the initial WordPress theme conversion.
// In a full dynamic setup, these would be Custom Post Types queried via WP_Query.
$events = array(
        array(
        'date' => 'APR 15',
        'category' => 'Community',
        'title' => 'Spring Wellness Kickoff',
        'description' => 'Join us at the park for a day of free fitness classes, healthy food trucks, and music to celebrate the start of our 2026 activation year.',
        'location' => 'Shelby Farms Park',
        'time' => '10:00 AM - 2:00 PM',
        'cta_link' => ''
    ),
        array(
        'date' => 'MAY 02',
        'category' => 'Nutrition',
        'title' => 'Crumbs & Culture: Local Roots',
        'description' => 'A hands-on cooking demonstration featuring local chefs teaching how to prepare traditional southern meals with a healthy, plant-based twist.',
        'location' => 'Crosstown Concourse',
        'time' => '6:00 PM - 8:00 PM',
        'cta_link' => 'https://example.com/register'
    )
);
?>

<!-- Hero Section -->
<section class="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl space-y-6">
            <h1 class="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                Gather <br /><span class="text-brand-primary">With Us</span>
            </h1>
            <p class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Join our 2026 Activation Year events. From neighborhood tours to wellness workshops, there's always a place for you.
            </p>
        </div>
    </div>
</section>

<!-- Events List -->
<section class="py-32 px-6">
    <div class="mx-auto max-w-7xl space-y-12">
        <?php if (!empty($events)): ?>
            <?php foreach ($events as $event): ?>
                <div class="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-[48px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div class="lg:col-span-3">
                        <div class="text-brand-primary font-black text-2xl uppercase tracking-tighter mb-1"><?php echo esc_html($event['date']); ?></div>
                        <div class="text-slate-400 font-bold uppercase tracking-widest text-xs"><?php echo esc_html($event['category']); ?></div>
                    </div>
                    <div class="lg:col-span-6 space-y-4">
                        <h3 class="text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white"><?php echo esc_html($event['title']); ?></h3>
                        <p class="text-lg text-slate-500 dark:text-slate-400 font-medium"><?php echo esc_html($event['description']); ?></p>
                        <div class="flex flex-wrap gap-4 pt-2">
                            <span class="flex items-center gap-2 text-sm font-bold text-slate-400">📍 <?php echo esc_html($event['location']); ?></span>
                            <span class="flex items-center gap-2 text-sm font-bold text-slate-400">🕒 <?php echo esc_html($event['time']); ?></span>
                        </div>
                    </div>
                    <div class="lg:col-span-3 flex justify-end">
                        <?php if (!empty($event['cta_link'])): ?>
                            <a href="<?php echo esc_url($event['cta_link']); ?>" target="_blank" rel="noopener noreferrer" class="w-full lg:w-auto px-10 py-5 rounded-2xl bg-brand-primary text-white text-center font-black hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20">
                                Join Event
                            </a>
                        <?php
        else: ?>
                            <!-- In a full WordPress theme, this would link to a dedicated contact/registration page or trigger a JS modal (like Contact Form 7) -->
                            <a href="<?php echo esc_url(home_url('/contact')); ?>?event=<?php echo urlencode($event['title']); ?>" class="w-full lg:w-auto px-10 py-5 rounded-2xl text-center bg-brand-primary text-white font-black hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20">
                                Register Free
                            </a>
                        <?php
        endif; ?>
                    </div>
                </div>
            <?php
    endforeach; ?>
        <?php
else: ?>
            <div class="py-24 text-center">
                <h3 class="text-2xl font-bold text-slate-400 uppercase italic tracking-widest">Preparing our next community activation...</h3>
                <p class="text-slate-500 mt-4">Check back soon for more exciting updates!</p>
            </div>
        <?php
endif; ?>
    </div>
</section>

<?php get_footer(); ?>
