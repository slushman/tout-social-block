<?php

/**
 * Defines all code necessary to run during the plugin's deactivation.
 *
 * @link 			https://www.slushman.com
 * @since 			1.0.0
 * @package 		ToutSocialBlock\Classes
 * @author 			Slushman <chris@slushman.com>
 */

namespace ToutSocialBlock\Classes;

class Deactivator {

	/**
	 * Removes plugin options from the database.
	 *
	 * @since 		1.0.0
	 */
	public static function deactivate() {

		delete_option( 'tout-social-block-settings' );
		delete_option( 'tout-social-block-errors' );

	} // deactivate()

} // class
