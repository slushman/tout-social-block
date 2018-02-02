/**
 * The Facebook component.
 *
 * Creates the Facebook list item with a link.
 *
 * @param 		obj 		props 		The properties for this component.
 */

import classnames from 'classnames';
const { Component } = wp.element;
const { __ } = wp.i18n;

export default class Facebook extends Component {

	constructor ( props ) {
		super( ...arguments );
	}

	render() {

		return (
			<li className={ this.props.attributes.colorClass }>
				<a
					className="tout-social-link tout-social-link-facebook"
					href="https://www.facebook.com/sharer/sharer.php?u="
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="tout-social-icon tout-social-icon-facebook">
						<path d="M8.46 18h2.93v-7.3h2.45l.37-2.84h-2.82V6.04q0-.69.295-1.035T12.8 4.66h1.51V2.11Q13.36 2 12.12 2q-1.67 0-2.665.985T8.46 5.76v2.1H6v2.84h2.46V18z"/>
					</svg>
					<span className={ this.props.attributes.textClass }>{ __( 'Facebook' ) }</span>
				</a>
			</li>
		);
	}
}
