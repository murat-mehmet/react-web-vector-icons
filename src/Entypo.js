/**
 * Entypo icon set component.
 * Usage: <Entypo name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Entypo = createIcon(require('./glyphmaps/Entypo.json'), 'Entypo');

export default Entypo;