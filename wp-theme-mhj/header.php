<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-slate-50 dark:bg-slate-950 font-sans selection:bg-brand-primary selection:text-white'); ?>>
<?php wp_body_open(); ?>

<!-- TopBar -->
<div class="w-full bg-brand-primary py-2 px-6 text-center text-white text-[10px] md:text-sm font-black uppercase tracking-[0.2em] relative z-[60] overflow-hidden">
    <div class="flex flex-col items-center justify-center h-6">
        <div>
            <span class="animate-pulse">✨ Join us for the 2026 Activation Year! ✨</span>
        </div>
    </div>
</div>

<!-- Navbar -->
<nav class="glass sticky top-0 z-50 w-full px-6 py-4">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-4 group cursor-pointer">
            <div class="relative w-12 h-12">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="MHJ Logo" class="object-contain group-hover:scale-110 transition-transform w-full h-full" />
            </div>
            <div class="flex flex-col">
                <span class="text-xl font-black tracking-tight text-brand-primary leading-none uppercase">Memphis Health<br />Jamboree</span>
            </div>
        </a>

        <div class="hidden space-x-8 md:flex items-center">
            <?php
// Primary Navigation Menu
wp_nav_menu(array(
    'theme_location' => 'primary',
    'container' => false,
    'menu_class' => 'flex items-center space-x-8 text-sm font-semibold',
    'fallback_cb' => false,
    'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
));
?>
            <!-- This acts as a fallback or hardcoded button alongside dynamic menu -->
            <a href="<?php echo esc_url(home_url('/#get-involved')); ?>" class="bg-brand-accent px-6 py-2.5 text-white rounded-full text-sm font-bold shadow-lg shadow-brand-accent/30 hover:scale-105 active:scale-95 transition-all">Support Our Mission</a>
        </div>
    </div>
</nav>

<!-- Main Content Area Begins -->
<main id="primary" class="site-main">
