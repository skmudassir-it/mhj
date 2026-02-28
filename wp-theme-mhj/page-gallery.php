<?php
/**
 * Template Name: Gallery Page
 *
 * @package MHJ
 */

get_header();

// Hardcoded images for the initial WordPress theme conversion
$gallery_images = array(
        array(
        'src' => get_template_directory_uri() . '/assets/images/hero_memphis_health.png',
        'title' => 'Community Activity',
        'size' => 'col-span-1 md:col-span-2 row-span-2'
    ),
        array(
        'src' => get_template_directory_uri() . '/assets/images/wellness_workshop.png',
        'title' => 'Wellness Workshop',
        'size' => 'col-span-1 md:col-span-2 row-span-1'
    ),
        array(
        'src' => get_template_directory_uri() . '/assets/images/gourmet_nutrition.png',
        'title' => 'Nutrition Education',
        'size' => 'col-span-1 md:col-span-2 row-span-1'
    ),
        array(
        'src' => get_template_directory_uri() . '/assets/images/hero_festival.png',
        'title' => 'Festival Kickoff',
        'size' => 'col-span-1 md:col-span-4 row-span-2'
    )
);
?>

<!-- Header Section -->
<section class="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
    <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl space-y-6">
            <h1 class="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-[0.9]">
                Visual <br /><span class="text-brand-primary">Impact</span>
            </h1>
            <p class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Capturing the joy, resilience, and community spirit of Memphis in motion.
            </p>
        </div>
    </div>
</section>

<!-- Gallery Grid -->
<section class="py-32 px-6">
    <div class="mx-auto max-w-7xl">
        <?php if (!empty($gallery_images)): ?>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                <?php foreach ($gallery_images as $img): ?>
                    <div class="group relative rounded-[32px] overflow-hidden shadow-2xl <?php echo esc_attr($img['size']); ?> bg-slate-200">
                        <img src="<?php echo esc_url($img['src']); ?>" alt="<?php echo esc_attr($img['title']); ?>" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <h3 class="text-white text-xl font-black uppercase tracking-tight"><?php echo esc_html($img['title']); ?></h3>
                        </div>
                    </div>
                <?php
    endforeach; ?>
            </div>
        <?php
else: ?>
            <div class="py-24 text-center text-slate-400 font-bold uppercase italic tracking-[0.2em] border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[48px]">
                Capturing moments of joy...
            </div>
        <?php
endif; ?>
    </div>
</section>

<?php get_footer(); ?>
