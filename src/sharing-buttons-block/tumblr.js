/**
 * The tumblr component.
 *
 * Creates the tumblr list item with a link.
 *
 * @param 		obj 		props 		The properties for this component.
 * 											colorClass: the class determining the button color.
 */

import classnames from 'classnames';

const { Component } = wp.element;
const { __ } = wp.i18n;

export default class Tumblr extends Component {

	constructor ( props ) {
		super( ...arguments );
	}

	render() {

		return (
			<li className={ this.props.attributes.colorClass }>
				<a
					className="tout-social-link tout-social-link-tumblr"
					href="https://www.tumblr.com/widgets/share/tool?canonicalUrl="
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="tout-social-icon tout-social-icon-tumblr">
						<path d="M15.7 18.7c-.4.5-2 1.1-3.4 1.2-4.3.1-5.9-3.1-5.9-5.3V8.1h-2V5.6c3-1.1 3.7-3.8 3.9-5.3 0-.1.1-.1.1-.1h2.9v5h4v3h-4v6.1c0 .8.3 2 1.9 1.9.5 0 1.2-.2 1.6-.3l.9 2.8z"/>
					</svg>
					<span className={ this.props.attributes.textClass }>{ __( 'tumblr' ) }</span>
				</a>
			</li>
		);
	}
}
