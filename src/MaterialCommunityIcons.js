/**
 * MaterialCommunityIcons icon set component.
 * Usage: <MaterialCommunityIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const MaterialCommunityIcons = createIcon(require('./glyphmaps/MaterialCommunityIcons.json'), 'MaterialCommunityIcons');

export default MaterialCommunityIcons;