<?php

function twentyfouteen_child_scripts() {
    wp_enqueue_script( 'extra js', get_stylesheet_directory_uri() . '/js/extra.js');
}
// add_action( 'wp_enqueue_scripts', 'twentyfouteen_child_scripts' );

function twentyfouteen_child_widgets_init() {

    register_sidebar( array(
        'name' => 'Level Up New Widget Area',
        'id' => 'level_up_new_widget_area',
        'before_widget' => '<aside>',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title>',
        'after_title' => '</h3>'
    ));
}

add_action( 'widgets_init', 'twentyfouteen_child_widgets_init');

function twentyfouteen_child_register_menu() {
    register_nav_menu('new-menu', __('Our New Menu'));
}
add_action('init', 'twentyfouteen_child_register_menu');