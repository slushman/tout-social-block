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
import Inspector from './inspector.js';
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
} = wp.blocks; // Import registerBlockType() from wp.blocks

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
registerBlockType(
	'tsb/tout-social-block',
	{
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
			colorClass: {
				type: 'string',
				default: 'content-color-white-on-brand'
			},
			textClass: {
				type: 'string',
				default: 'screen-reader-text'
			}
		},

		// The "edit" property must be a valid function.
		edit: props => {
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
			const toggleColorClass = () => {
				props.setAttributes( { colorClass: ! props.attributes.colorClass } );
			}
			const toggleTextClass = () => {
				props.setAttributes( { textClass: ! props.attributes.textClass } );
			}

			return [
				!! props.focus && (
					<Inspector
						{ ...{
							toggleEmail,
							toggleFacebook,
							toggleGoogle,
							toggleLinkedIn,
							togglePinterest,
							toggleStumbleupon,
							toggleTumblr,
							toggleTwitter,
							toggleColorClass,
							toggleTextClass,
							...props
						  } }
					/>
				),
				<div className={ props.className }>
					<ul className="tout-social-buttons">
						{ !! props.attributes.email && ( <Email { ...props }/> )}
						{ !! props.attributes.facebook && ( <Facebook { ...props }/> )}
						{ !! props.attributes.google && ( <Google { ...props }/> )}
						{ !! props.attributes.linkedin && ( <LinkedIn { ...props }/> )}
						{ !! props.attributes.pinterest && ( <Pinterest { ...props }/> )}
						{ !! props.attributes.stumbleupon && ( <Stumbleupon { ...props }/> )}
						{ !! props.attributes.tumblr && ( <Tumblr { ...props }/> )}
						{ !! props.attributes.twitter && ( <Twitter { ...props }/> )}
					</ul>
				</div>
			];
		},

		// The "save" property must be specified and must be a valid function.
		save: function( props ) {
			return (
				<div className={ props.className }>
					<ul className="tout-social-buttons">
						{ !! props.attributes.email && ( <Email { ...props } /> )}
						{ !! props.attributes.facebook && ( <Facebook { ...props }/> )}
						{ !! props.attributes.google && ( <Google { ...props }/> )}
						{ !! props.attributes.linkedin && ( <LinkedIn { ...props }/> )}
						{ !! props.attributes.pinterest && ( <Pinterest { ...props }/> )}
						{ !! props.attributes.stumbleupon && ( <Stumbleupon { ...props }/> )}
						{ !! props.attributes.tumblr && ( <Tumblr { ...props }/> )}
						{ !! props.attributes.twitter && ( <Twitter { ...props }/> )}
					</ul>
				</div>
			);
		},
	}
);
