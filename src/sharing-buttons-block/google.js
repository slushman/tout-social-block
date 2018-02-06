/**
 * The Google component.
 *
 * Creates the Google list item with a link.
 *
 * @param 		obj 		props 		The properties for this component.
 * 											colorClass: the class determining the button color.
 */

import classNames from 'classnames';

const { Component } = wp.element;
const { __ } = wp.i18n;

export default class Google extends Component {

	constructor ( { buttonUrl, props } ) {
		super( ...arguments );
	}

	render() {

		const linkClasses = classNames({
			'tout-social-link': true,
			'tout-social-link__google': true,
		});

		const textClasses = classNames({
			'tout-social-text': true,
			'tout-social-text__icon': 'icon-and-text' === this.props.attributes.buttonContent,
			'screen-reader-text': 'icon-only' === this.props.attributes.buttonContent,
		});

		const iconClasses = classNames({
			'tout-social-icon-google': true,
			'is-Hidden': 'text-only' === this.props.attributes.buttonContent,
		});

		return (
			<li className={ this.props.attributes.colorClass }>
				<a className={ linkClasses } href={ this.props.attributes.buttonUrl }>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className={ iconClasses }>
						<path d="M2.8 4.9c2.3-1.7 5.7-1.5 7.8.5-.6.5-1.1 1.1-1.7 1.6-1.6-1.4-4.2-1.2-5.5.4-1.6 1.8-1.1 4.9 1 6.1 2 1.2 5 .2 5.5-2.2H6.3V9.1h6c.2 1.8-.2 3.8-1.4 5.2-1.5 1.8-4.2 2.4-6.4 1.7-2.1-.6-3.9-2.5-4.3-4.7-.5-2.4.5-5 2.6-6.4zM16.3 7.3h1.8v1.8h1.8v1.8h-1.8v1.8h-1.8v-1.8h-1.8V9.1h1.8V7.3z"/>
					</svg>
					<span className={ textClasses }>{ __( 'Google+' ) }</span>
				</a>
			</li>
		);
	}
}
