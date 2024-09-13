/**
 * MaterialIcons icon set component.
 * Usage: <MaterialIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const MaterialIcons = createIcon(require('./glyphmaps/MaterialIcons.json'), 'MaterialIcons');

export default MaterialIcons;