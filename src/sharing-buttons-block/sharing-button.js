/**
 * The SharingButton Component.
 *
 * Creates a list item with a link.
 *
 * @param 		obj 		site 		The sharing site object.
 */

import classnames from 'classnames';

const SharingButton = ( { site, attributes, icon } ) => {

	return (
		<li>
			<a
				className="tout-social-link"
				href={ escape( site.url ) }
			>
				<span className="tout-social-icon">{ site.icon }</span>
				<span className="screen-reader-text">{ site.name }</span>
			</a>
		</li>
	);
};

export default SharingButton;
