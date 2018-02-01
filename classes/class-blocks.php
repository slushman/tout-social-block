<?php

/**
 * Defines all code necessary to enqueue styles and scripts for blocks.
 *
 * @link 		https://www.slushman.com
 * @since 		1.0.0
 * @package 	ToutSocialBlock\Classes
 * @author 		Slushman <chris@slushman.com>
 */

namespace ToutSocialBlock\Classes;

class Blocks {

	/**
	 * Class constructor.
	 *
	 * @since 		1.0.0
	 */
	public function __construct() {}

	/**
	 * Registers all the WordPress hooks and filters related to this class.
	 *
	 * @hooked 		init
	 * @since 		1.0.0
	 */
	public function hooks() {

		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );

	} // hooks()

	/**
	 * Enqueues blocks assets for frontend and backend.
	 *
	 * @hooked		enqueue_block_assets
	 * @since 		1.0.0
	 */
	public function block_assets() {

		wp_enqueue_style(
			'tout_social_block-style-css', // Handle.
			plugin_dir_url( dirname( __FILE__ ) ) . 'dist/blocks.style.build.css', // Block style CSS.
			array( 'wp-blocks' ) // Dependency to include the CSS after it.
			// filemtime( plugin_dir_path( dirname( __FILE__ ) ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
		);

	} // block_assets()

	/**
	 * Enqueues blocks assets for the backend only.
	 *
	 * @hooked		enqueue_block_editor_assets
	 * @since 		1.0.0
	 */
	public function editor_assets() {

		wp_enqueue_script(
			'tout_social_block-block-js', // Handle.
			plugin_dir_url( dirname( __FILE__ ) ) . 'dist/blocks.build.js', // Block.build.js: We register the block here. Built with Webpack.
			array( 'wp-blocks', 'wp-i18n', 'wp-element' ) // Dependencies, defined above.
			// filemtime( plugin_dir_path( dirname( __FILE__ ) ) . 'block.js' ) // Version: filemtime — Gets file modification time.
		);

		// Styles.
		wp_enqueue_style(
			'tout_social_block-block-editor-css', // Handle.
			plugin_dir_url( dirname( __FILE__ ) ) . 'dist/blocks.editor.build.css', // Block editor CSS.
			array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
			// filemtime( plugin_dir_path( dirname( __FILE__ ) ) . 'editor.css' ) // Version: filemtime — Gets file modification time.
		);

	} // editor_assets()

} // class
