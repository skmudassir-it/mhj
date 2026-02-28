<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 *
 * @package MHJ
 */

get_header();
?>

	<section class="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 min-h-screen">
		<div class="mx-auto max-w-7xl">
			<?php
if (have_posts()):
    while (have_posts()):
        the_post();
?>
					<article id="post-<?php the_ID(); ?>" <?php post_class('space-y-8'); ?>>
						<header class="entry-header mb-12">
							<?php
        if (is_singular()):
            the_title('<h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white uppercase leading-tight">', '</h1>');
        else:
            the_title('<h2 class="text-4xl md:text-5xl font-black tracking-tight"><a href="' . esc_url(get_permalink()) . '" rel="bookmark" class="hover:text-brand-primary transition-colors">', '</a></h2>');
        endif;
?>
						</header><!-- .entry-header -->                     

						<div class="prose prose-lg dark:prose-invert prose-slate max-w-none">
							<?php
        the_content();

        wp_link_pages(array(
            'before' => '<div class="page-links">' . esc_html__('Pages:', 'mhj'),
            'after' => '</div>',
        ));
?>
						</div><!-- .entry-content -->
					</article><!-- #post-<?php the_ID(); ?> -->
			<?php
    endwhile;

    the_posts_navigation();

else:
?>
				<div class="text-center py-20">
					<h2 class="text-3xl font-bold mb-4">Nothing Found</h2>
					<p class="text-slate-500">It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.</p>
					<div class="mt-8 max-w-md mx-auto">
						<?php get_search_form(); ?>
					</div>
				</div>
			<?php
endif;
?>
		</div>
	</section>

<?php get_footer(); ?>
