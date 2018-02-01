/**
 * The Email component.
 *
 * Creates the Email list item with a link.
 *
 * @param 		obj 		props 		The properties for this component.
 * 											colorClass: the class determining the button color.
 */

import classnames from 'classnames';
const { __ } = wp.i18n;

function Email( props ) {

	const colorClass = props.colorClass || 'content-color-white-on-brand';
	const textClass = props.textClass || 'screen-reader-text';

	return (
		<li
			className={ colorClass }
		>
			<a
				className="tout-social-link tout-social-link-email"
				href="mailto:body="
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="tout-social-icon tout-social-icon-email">
					<path d="M19 14.5v-9q0-.62-.44-1.06T17.5 4H3.49q-.62 0-1.06.44T1.99 5.5v9q0 .62.44 1.06t1.06.44H17.5q.62 0 1.06-.44T19 14.5zm-1.31-9.11q.15.15.175.325t-.04.295-.165.22L13.6 9.95l3.9 4.06q.26.3.06.51-.09.11-.28.12t-.28-.07l-4.37-3.73-2.14 1.95-2.13-1.95-4.37 3.73q-.09.08-.28.07t-.28-.12q-.2-.21.06-.51l3.9-4.06-4.06-3.72q-.1-.1-.165-.22t-.04-.295.175-.325q.4-.4.95.07l6.24 5.04 6.25-5.04q.55-.47.95-.07z"/>
				</svg>
				<span className={ textClass }>{ __( 'Email' ) }</span>
			</a>
		</li>
	);
};

export default Email;