/**
 * Octicons icon set component.
 * Usage: <Octicons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Octicons = createIcon(require('./glyphmaps/Octicons.json'), 'Octicons');

export default Octicons;