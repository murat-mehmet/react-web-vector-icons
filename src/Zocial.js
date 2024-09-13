/**
 * Zocial icon set component.
 * Usage: <Zocial name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Zocial = createIcon(require('./glyphmaps/Zocial.json'), 'Zocial');

export default Zocial;