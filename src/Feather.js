/**
 * Feather icon set component.
 * Usage: <Feather name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Feather = createIcon(require('./glyphmaps/Feather.json'), 'Feather');

export default Feather;