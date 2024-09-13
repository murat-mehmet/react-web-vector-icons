/**
 * AntDesign icon set component.
 * Usage: <AntDesign name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const AntDesign = createIcon(require('./glyphmaps/AntDesign.json'), 'AntDesign');

export default AntDesign;