/**
 * The Twitter component.
 *
 * Creates the Twitter list item with a link.
 *
 * @param 		obj 		props 		The properties for this component.
 * 											colorClass: the class determining the button color.
 */

import classnames from 'classnames';
const { __ } = wp.i18n;

function Twitter( props ) {

	const colorClass = props.colorClass || 'content-color-white-on-brand';

	return (
		<li
			className={ colorClass }
		>
			<a
				className="tout-social-link tout-social-link-twitter"
				href="https://twitter.com/intent/tweet?url="
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="tout-social-icon tout-social-icon-twitter">
					<path d="M18.94 4.46q-.75 1.12-1.83 1.9.01.15.01.47 0 1.47-.43 2.945T15.38 12.6t-2.1 2.39-2.93 1.66-3.66.62q-3.04 0-5.63-1.65.48.05.88.05 2.55 0 4.55-1.57-1.19-.02-2.125-.73T3.07 11.55q.39.07.69.07.47 0 .96-.13-1.27-.26-2.105-1.27T1.78 7.89v-.04q.8.43 1.66.46-.75-.51-1.19-1.315T1.81 5.25q0-1 .5-1.84Q3.69 5.1 5.655 6.115T9.87 7.24q-.1-.45-.1-.84 0-1.51 1.075-2.585T13.44 2.74q1.6 0 2.68 1.16 1.26-.26 2.33-.89-.43 1.32-1.62 2.02 1.07-.11 2.11-.57z"/>
				</svg>
				<span className="screen-reader-text">{ __( 'Twitter' ) }</span>
			</a>
		</li>
	);
};

export default Twitter;
