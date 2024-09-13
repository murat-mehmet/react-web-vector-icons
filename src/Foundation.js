/**
 * Foundation icon set component.
 * Usage: <Foundation name="icon-name" size={20} color="#4F8EF7" />
 */

import createIcon from './lib/create-icon-set';

const Foundation = createIcon(require('./glyphmaps/Foundation.json'), 'Foundation');

export default Foundation;