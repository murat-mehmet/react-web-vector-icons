/**
 * Ionicons icon set component.
 * Usage: <Ionicons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Ionicons = createIcon(require('./glyphmaps/Ionicons.json'), 'Ionicons');

export default Ionicons;