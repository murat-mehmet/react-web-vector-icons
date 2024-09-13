/**
 * SimpleLineIcons icon set component.
 * Usage: <SimpleLineIcons name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const SimpleLineIcons = createIcon(require('./glyphmaps/SimpleLineIcons.json'), 'SimpleLineIcons');

export default SimpleLineIcons;