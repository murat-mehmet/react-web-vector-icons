/**
 * Fontisto icon set component.
 * Usage: <Fontisto name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Fontisto = createIcon(require('./glyphmaps/Fontisto.json'), 'Fontisto');

export default Fontisto;