/**
 * FontAwesome icon set component.
 * Usage: <FontAwesome name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const FontAwesome = createIcon(require('./glyphmaps/FontAwesome.json'), 'FontAwesome');

export default FontAwesome;