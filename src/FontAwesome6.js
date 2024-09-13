/**
 * FontAwesome6 icon set component.
 * Usage: <FontAwesome6 name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const FontAwesome6 = createIcon(require('./glyphmaps/FontAwesome6Free.json'), 'FontAwesome6');

export default FontAwesome6;