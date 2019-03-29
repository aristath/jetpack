/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './editor.scss';
import VRImageEdit from './edit';
import VRImageSave from './save';

export const name = 'vr';

export const settings = {
	title: __( 'VR Image', 'jetpack' ),
	description: __( 'Embed 360° photos and Virtual Reality (VR) content', 'jetpack' ),
	icon: 'embed-photo',
	category: 'jetpack',
	keywords: [ __( 'vr', 'jetpack' ), __( 'panorama', 'jetpack' ), __( '360', 'jetpack' ) ],
	supports: {
		html: false,
	},
	attributes: {
		url: {
			type: 'string',
		},
		view: {
			type: 'string',
		},
	},
	edit: VRImageEdit,
	save: VRImageSave,
};
