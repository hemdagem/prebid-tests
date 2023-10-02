import pbjs from 'prebid.js';
import 'prebid.js/modules/rubiconBidAdapter.js';
import 'prebid.js/modules/appnexusBidAdapter.js';

export default class PrebidLoader {

    constructor() {
        pbjs.processQueue();
    }

};