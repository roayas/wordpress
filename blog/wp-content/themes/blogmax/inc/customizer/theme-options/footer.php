<?php
/**
 * Footer options
 *
 * @package Theme Palace
 * @subpackage  Blogmax
 * @since  Blogmax 1.0.0
 */

// Footer Section
$wp_customize->add_section( 'blogmax_section_footer',
	array(
		'title'      			=> esc_html__( 'Footer Options', 'blogmax' ),
		'priority'   			=> 900,
		'panel'      			=> 'blogmax_theme_options_panel',
	)
);

// footer text
$wp_customize->add_setting( 'blogmax_theme_options[copyright_text]',
	array(
		'default'       		=> $options['copyright_text'],
		'sanitize_callback'		=> 'blogmax_santize_allow_tag',
		'transport'				=> 'postMessage',
	)
);

$wp_customize->add_control( 'blogmax_theme_options[copyright_text]',
    array(
		'label'      			=> esc_html__( 'Copyright Text', 'blogmax' ),
		'section'    			=> 'blogmax_section_footer',
		'type'		 			=> 'textarea',
    )
);

// Abort if selective refresh is not available.
if ( isset( $wp_customize->selective_refresh ) ) {
    $wp_customize->selective_refresh->add_partial( 'blogmax_theme_options[copyright_text]',
		array(
			'selector'            => '.site-info .wrapper',
			'settings'            => 'blogmax_theme_options[copyright_text]',
			'container_inclusive' => false,
			'fallback_refresh'    => true,
			'render_callback'     => 'blogmax_copyright_text_partial',
		)
	);
}

// scroll top visible
$wp_customize->add_setting( 'blogmax_theme_options[scroll_top_visible]',
	array(
		'default'       	=> $options['scroll_top_visible'],
		'sanitize_callback' => 'blogmax_sanitize_switch_control',
	)
);

$wp_customize->add_control( new  Blogmax_Switch_Control( $wp_customize,
	'blogmax_theme_options[scroll_top_visible]',
		array(
			'label'      		=> esc_html__( 'Display Scroll Top Button', 'blogmax' ),
			'section'    		=> 'blogmax_section_footer',
			'on_off_label' 		=> blogmax_switch_options(),
		)
	)
);
