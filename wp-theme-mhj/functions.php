<?php
/**
 * Memphis Health Jamboree Theme Functions
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Theme Setup
 */
function mhj_theme_setup()
{
	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	// Let WordPress manage the document title.
	add_theme_support('title-tag');

	// Enable support for Post Thumbnails on posts and pages.
	add_theme_support('post-thumbnails');

	// Register Navigation Menus
	register_nav_menus(array(
		'primary' => esc_html__('Primary Menu', 'mhj'),
		'footer' => esc_html__('Footer Menu', 'mhj'),
	));

	// Switch default core markup for search form, comment form, and comments
	add_theme_support('html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
		'style',
		'script',
	));
}
add_action('after_setup_theme', 'mhj_theme_setup');

/**
 * Enqueue scripts and styles.
 */
function mhj_enqueue_scripts()
{
	// The main Tailwind compiled CSS
	wp_enqueue_style('mhj-style', get_template_directory_uri() . '/assets/css/style.css', array(), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'mhj_enqueue_scripts');

/**
 * Auto-create default pages upon theme activation
 */
function mhj_auto_create_pages()
{
	$pages = array(
		'Home' => 'front-page.php',
		'About Us' => 'page-about.php',
		'Events' => 'page-events.php',
		'Gallery' => 'page-gallery.php',
		'Contact Us' => 'page-contact.php'
	);

	foreach ($pages as $page_title => $page_template) {
		$page_check = get_page_by_title($page_title);

		if (!isset($page_check->ID)) {
			// Create the new page
			$new_page_id = wp_insert_post(array(
				'post_type' => 'page',
				'post_title' => $page_title,
				'post_content' => '',
				'post_status' => 'publish',
				'post_author' => 1,
			));

			// Assign the custom template if and set Home as front page
			if (!is_wp_error($new_page_id)) {
				if ($page_template !== 'front-page.php' && !empty($page_template)) {
					update_post_meta($new_page_id, '_wp_page_template', $page_template);
				}

				if ($page_title === 'Home') {
					update_option('show_on_front', 'page');
					update_option('page_on_front', $new_page_id);
				}
			}
		}
		else {
			// If Home page exists, just ensure it is set as the static front page
			if ($page_title === 'Home') {
				update_option('show_on_front', 'page');
				update_option('page_on_front', $page_check->ID);
			}
			if ($page_template !== 'front-page.php' && !empty($page_template)) {
				update_post_meta($page_check->ID, '_wp_page_template', $page_template);
			}
		}
	}
}
add_action('after_switch_theme', 'mhj_auto_create_pages');
