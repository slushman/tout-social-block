/**
 * The tumblr component.
 *
 * Creates the tumblr list item with a link.
 *
 * @param 		obj 		props 		The properties for this component.
 * 											colorClass: the class determining the button color.
 */

import classNames from 'classnames';

const { Component } = wp.element;
const { __ } = wp.i18n;

export default class Tumblr extends Component {

	constructor ( { buttonUrl, props } ) {
		super( ...arguments );
	}

	render() {

		const linkClasses = classNames({
			'tout-social-link': true,
			'tout-social-link__tumblr': true,
		});

		const textClasses = classNames({
			'tout-social-text': true,
			'tout-social-text__icon': 'icon-and-text' === this.props.attributes.buttonContent,
			'screen-reader-text': 'icon-only' === this.props.attributes.buttonContent,
		});

		const iconClasses = classNames({
			'tout-social-icon-tumblr': true,
			'is-Hidden': 'text-only' === this.props.attributes.buttonContent,
		});

		return (
			<li className={ this.props.attributes.colorClass }>
				<a className={ linkClasses } href={ this.props.attributes.buttonUrl }>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className={ iconClasses }>
						<path d="M15.7 18.7c-.4.5-2 1.1-3.4 1.2-4.3.1-5.9-3.1-5.9-5.3V8.1h-2V5.6c3-1.1 3.7-3.8 3.9-5.3 0-.1.1-.1.1-.1h2.9v5h4v3h-4v6.1c0 .8.3 2 1.9 1.9.5 0 1.2-.2 1.6-.3l.9 2.8z"/>
					</svg>
					<span className={ textClasses }>{ __( 'tumblr' ) }</span>
				</a>
			</li>
		);
	}
}
