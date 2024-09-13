/**
 * FontAwesome5 icon set component.
 * Usage: <FontAwesome5 name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const FontAwesome5 = createIcon(require('./glyphmaps/FontAwesome5Free.json'), 'FontAwesome5');

export default FontAwesome5;