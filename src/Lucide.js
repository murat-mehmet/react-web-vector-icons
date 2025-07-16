/**
 * Lucide icon set component.
 * Usage: <Lucide name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Lucide = createIcon(require('./glyphmaps/Lucide.json'), 'Lucide');

export default Lucide;