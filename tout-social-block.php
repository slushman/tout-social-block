<?php
/**
 * Plugin Name: 			Tout.Social Block
 * Plugin URI: 				https://www.tout.social
 * Description: 			Adds a social sharing button block.
 * Author: 					slushman
 * Author URI: 				https://www.slushman.com/
 * GitHub Theme URI: 		https://github.com/slushman/tout-social-buttons
 * Github Branch: 			master
 * Version: 				1.0.0
 * License: 				GPL2+
 * License URI: 			http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @since 					1.0.0
 * @package 				ToutSocialBlock
 *
 * @todo 		Change button menu item class by props & Select Inspector element
 * @todo 		Change button text class by props & Selector Inspector element
 * @todo 		Change button icon visibility by props & Selector Inspector element
 */

use ToutSocialBlock\Classes as Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Include the autoloader.
 */
require_once plugin_dir_path( __FILE__ ) . 'classes/class-autoloader.php';

/**
 * Activation and Deactivation Hooks.
 */
register_activation_hook( __FILE__, array( 'ToutSocialBlock\Classes\Activator', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'ToutSocialBlock\Classes\Deactivator', 'deactivate' ) );

/**
 * Initializes each class and hooks each class's 'hooks' method to init.
 */
function tout_social_block_init_classes() {

	$classes = array();

	$classes[] = new Classes\Blocks();

	if ( empty( $classes ) ) { return; }

	foreach ( $classes as $class ) {

		add_action( 'init', array( $class, 'hooks' ) );

	}

} // tout_social_block_init_classes()

add_action( 'plugins_loaded', 'tout_social_block_init_classes' );
