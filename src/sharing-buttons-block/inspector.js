/**
 * The Icons Panel Component.
 *
 * Creates a block panel for selecting icons.
 *
 * @param 		obj 		site 		The icons panel.
 */

import classnames from 'classnames';
const { Component } = wp.element;

const { __ } = wp.i18n;
const {
	InspectorControls,
	BlockDescription
} = wp.blocks; // Import from wp.blocks
const {
	Toolbar,
	Button,
	PanelBody,
	PanelRow,
	FormToggle,
} = wp.components; // Import from wp.components

export default class Inspector extends Component {

	constructor ( props ) {
		super( ...arguments );
	}

	render() {
		return (
			<InspectorControls key="inspector">

				<BlockDescription>
					<p>{ __( 'Let others tout your content! Select icons below.' ) }</p>
				</BlockDescription>

				<PanelBody title={ __( 'Icons' ) }>
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
							checked={ !! this.props.attributes.email }
							onChange={ this.props.toggleEmail }
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
							checked={ !! this.props.attributes.facebook }
							onChange={ this.props.toggleFacebook }
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
							checked={ !! this.props.attributes.google }
							onChange={ this.props.toggleGoogle }
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
							checked={ !! this.props.attributes.linkedin }
							onChange={ this.props.toggleLinkedIn }
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
							checked={ !! this.props.attributes.pinterest }
							onChange={ this.props.togglePinterest }
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
							checked={ !! this.props.attributes.stumbleupon }
							onChange={ this.props.toggleStumbleupon }
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
							checked={ !! this.props.attributes.tumblr }
							onChange={ this.props.toggleTumblr }
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
							checked={ !! this.props.attributes.twitter }
							onChange={ this.props.toggleTwitter }
						/>
					</PanelRow>
				</PanelBody>
				
			</InspectorControls>
		);
	}
}
