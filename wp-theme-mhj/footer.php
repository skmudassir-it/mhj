</main><!-- #primary -->

<footer class="bg-white dark:bg-slate-950 pt-24 pb-12 px-6 border-t border-slate-100 dark:border-slate-900 mt-24">
    <div class="mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div class="col-span-1 md:col-span-2 space-y-8">
                <div class="flex items-center gap-4">
                    <div class="relative w-12 h-12">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png" alt="MHJ Logo" class="object-contain w-full h-full" />
                    </div>
                    <span class="text-2xl font-black tracking-tight text-brand-primary leading-none uppercase">Memphis Health <br />Jamboree</span>
                </div>
                <p class="text-lg text-slate-500 max-w-md font-medium leading-relaxed">Dedicated to building a healthier, stronger, and more vibrant Memphis through the power of community, health equity, and ancestral wisdom.</p>
                <div class="flex gap-4">
                    <a href="https://www.instagram.com/Memphishealthjamboree" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-sm cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-all">IG</a>
                    <a href="https://www.youtube.com/@MemphisHealthJamboree" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-sm cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-all">YT</a>
                    <a href="https://www.facebook.com/MemphisHealthJamboree" target="_blank" rel="noopener noreferrer" class="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-bold text-sm cursor-pointer hover:border-brand-primary hover:text-brand-primary transition-all">FB</a>
                </div>
            </div>
            <div class="space-y-6">
                <h5 class="font-bold text-lg uppercase tracking-widest">Navigation</h5>
                <?php
if (has_nav_menu('footer')) {
    wp_nav_menu(array(
        'theme_location' => 'footer',
        'container' => false,
        'menu_class' => 'space-y-4 text-slate-500 font-medium',
        'fallback_cb' => false,
    ));
}
else {
?>
                <ul class="space-y-4 text-slate-500 font-medium">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-brand-primary transition-colors">Home</a></li>
                    <li><a href="<?php echo esc_url(home_url('/about')); ?>" class="hover:text-brand-primary transition-colors">About Us</a></li>
                    <li><a href="<?php echo esc_url(home_url('/events')); ?>" class="hover:text-brand-primary transition-colors">Events</a></li>
                    <li><a href="<?php echo esc_url(home_url('/get-involved')); ?>" class="hover:text-brand-primary transition-colors">Get Involved</a></li>
                    <li><a href="<?php echo esc_url(home_url('/gallery')); ?>" class="hover:text-brand-primary transition-colors">Gallery</a></li>
                </ul>
                <?php
}?>
            </div>
            <div class="space-y-6">
                <h5 class="font-bold text-lg uppercase tracking-widest">Get Involved</h5>
                <ul class="space-y-4 text-slate-500 font-medium">
                    <li><a href="<?php echo esc_url(home_url('/#get-involved')); ?>" class="hover:text-brand-primary transition-colors">Donate</a></li>
                    <li><a href="<?php echo esc_url(home_url('/#get-involved')); ?>" class="hover:text-brand-primary transition-colors">Volunteer</a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact')); ?>" class="hover:text-brand-primary transition-colors">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div class="text-center pt-12 border-t border-slate-200 dark:border-slate-900 text-sm font-bold text-slate-400 uppercase tracking-widest">
            &copy; <?php echo date('Y'); ?> Memphis Health Jamboree. A Registered 501(c)(3) Non-Profit Organization.
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
