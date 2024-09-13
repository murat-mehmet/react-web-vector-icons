/**
 * EvilIcons icon set component.
 * Usage: <EvilIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const EvilIcons = createIcon(require('./glyphmaps/EvilIcons.json'), 'EvilIcons');

export default EvilIcons;