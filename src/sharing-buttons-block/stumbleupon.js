/**
 * The Stumbleupon component.
 *
 * Creates the Stumbleupon list item with a link.
 *
 * @param 		obj 		props 		The properties for this component.
 * 											colorClass: the class determining the button color.
 */

import classnames from 'classnames';

const { Component } = wp.element;
const { __ } = wp.i18n;

export default class Stumbleupon extends Component {

	constructor ( { buttonUrl, props } ) {
		super( ...arguments );
	}

	render() {

		return (
			<li className={ this.props.attributes.colorClass }>
				<a
					className="tout-social-link tout-social-link-stumbleupon"
					href={ this.props.attributes.buttonUrl }
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="tout-social-icon tout-social-icon-stumbleupon">
						<path d="M11.1 6.9c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v6.3c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4v-2.7h3.4v2.7c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1V6.7c0-2.4 2-4.3 4.4-4.3 2.4 0 4.4 1.9 4.4 4.3v1.4l-2 .6-1.4-.6V6.9zm8.8 3.5v2.7c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4v-2.8l1.4.6 2-.6v2.8c0 .6.5 1 1.1 1 .6 0 1.1-.5 1.1-1v-2.8h3.2z"/>
					</svg>
					<span className={ this.props.attributes.textClass }>{ __( 'Stumbleupon' ) }</span>
				</a>
			</li>
		);
	}
}
