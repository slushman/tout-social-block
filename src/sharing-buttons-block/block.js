/**
 * BLOCK: tout-social-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import Sortable from 'react-sortablejs';
import SharingButton from './sharing-button.js';
import Email from './email.js';
import Facebook from './facebook.js';
import Google from './google.js';
import LinkedIn from './linkedin.js';
import Pinterest from './pinterest.js';
import Stumbleupon from './stumbleupon.js';
import Tumblr from './tumblr.js';
import Twitter from './twitter.js';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
	Editable,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
	InspectorControls,
	BlockDescription
} = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	Toolbar,
	Button,
	Tooltip,
	PanelBody,
	PanelRow,
	FormToggle,
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'tsb/tout-social-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Tout.Social', 'tout-social-block' ), // Block title.
	icon: 'share', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Sharing' ),
		__( 'Social' ),
		__( 'Buttons' ),
	],
	attributes: {
		email: {
			type: 'boolean',
			default: true,
		},
		facebook: {
			type: 'boolean',
			default: true,
		},
		google: {
			type: 'boolean',
			default: true,
		},
		linkedin: {
			type: 'boolean',
			default: true,
		},
		pinterest: {
			type: 'boolean',
			default: true,
		},
		stumbleupon: {
			type: 'boolean',
			default: true,
		},
		tumblr: {
			type: 'boolean',
			default: true,
		},
		twitter: {
			type: 'boolean',
			default: true,
		},
	},

	// The "edit" property must be a valid function.
	edit: function( props ) {
		const toggleEmail = () => {
			props.setAttributes( { email: ! props.attributes.email } );
		}
		const toggleFacebook = () => {
			props.setAttributes( { facebook: ! props.attributes.facebook } );
		}
		const toggleGoogle = () => {
			props.setAttributes( { google: ! props.attributes.google } );
		}
		const toggleLinkedIn = () => {
			props.setAttributes( { linkedin: ! props.attributes.linkedin } );
		}
		const togglePinterest = () => {
			props.setAttributes( { pinterest: ! props.attributes.pinterest } );
		}
		const toggleStumbleupon = () => {
			props.setAttributes( { stumbleupon: ! props.attributes.stumbleupon } );
		}
		const toggleTumblr = () => {
			props.setAttributes( { tumblr: ! props.attributes.tumblr } );
		}
		const toggleTwitter = () => {
			props.setAttributes( { twitter: ! props.attributes.twitter } );
		}
		// Creates a <p class='wp-block-cgb-block-tout-social-block'></p>.
		return [
			!! props.focus && (
			  <InspectorControls key="inspector">

				<BlockDescription>
				  <p>{ __( 'Let others tout your content! Select icons below.' ) }</p>
				</BlockDescription>

				<PanelBody
					title={ __( 'Icons' ) }
				>
					<PanelRow>
						<label
							htmlFor="email-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'Email' ) }
						</label>
						<FormToggle
							id="email-form-toggle"
							label={ __( 'Email' ) }
							checked={ !! props.attributes.email }
							onChange={ toggleEmail }
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor="facebook-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'Facebook' ) }
						</label>
						<FormToggle
							id="facebook-form-toggle"
							label={ __( 'Facebook' ) }
							checked={ !! props.attributes.facebook }
							onChange={ toggleFacebook }
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor="google-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'Google' ) }
						</label>
						<FormToggle
							id="google-form-toggle"
							label={ __( 'Google' ) }
							checked={ !! props.attributes.google }
							onChange={ toggleGoogle }
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor="linkedin-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'LinkedIn' ) }
						</label>
						<FormToggle
							id="linkedin-form-toggle"
							label={ __( 'LinkedIn' ) }
							checked={ !! props.attributes.linkedin }
							onChange={ toggleLinkedIn }
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor="pinterest-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'Pinterest' ) }
						</label>
						<FormToggle
							id="pinterest-form-toggle"
							label={ __( 'Pinterest' ) }
							checked={ !! props.attributes.pinterest }
							onChange={ togglePinterest }
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor="stumbleupon-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'Stumbleupon' ) }
						</label>
						<FormToggle
							id="stumbleupon-form-toggle"
							label={ __( 'Stumbleupon' ) }
							checked={ !! props.attributes.stumbleupon }
							onChange={ toggleStumbleupon }
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor="tumblr-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'tumblr' ) }
						</label>
						<FormToggle
							id="tumblr-form-toggle"
							label={ __( 'tumblr' ) }
							checked={ !! props.attributes.tumblr }
							onChange={ toggleTumblr }
						/>
					</PanelRow>
					<PanelRow>
						<label
							htmlFor="twitter-form-toggle"
							className="blocks-base-control__label"
						>
							{ __( 'Twitter' ) }
						</label>
						<FormToggle
							id="twitter-form-toggle"
							label={ __( 'Twitter' ) }
							checked={ !! props.attributes.twitter }
							onChange={ toggleTwitter }
						/>
					</PanelRow>
				</PanelBody>
			  </InspectorControls>
			),
			<div className={ props.className }>
				<ul className="tout-social-buttons">
					{ !! props.attributes.email && ( <Email /> )}
					{ !! props.attributes.facebook && ( <Facebook /> )}
					{ !! props.attributes.google && ( <Google /> )}
					{ !! props.attributes.linkedin && ( <LinkedIn /> )}
					{ !! props.attributes.pinterest && ( <Pinterest /> )}
					{ !! props.attributes.stumbleupon && ( <Stumbleupon /> )}
					{ !! props.attributes.tumblr && ( <Tumblr /> )}
					{ !! props.attributes.twitter && ( <Twitter /> )}
				</ul>
			</div>
		];
	},

	// The "save" property must be specified and must be a valid function.
	save: function( props ) {
		return (
			<div className={ props.className }>
				<ul className="active-buttons">
					<li>
						<a href="https://www.facebook.com">Facebook</a>
					</li>
					<li>
						<a href="https://www.twitter.com">Twitter</a>
					</li>
					<li>
						<a href="mailto:test@test.com">Email</a>
					</li>
				</ul>
			</div>
		);
	},
} );
