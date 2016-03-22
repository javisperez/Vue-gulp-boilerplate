'use strict';

var Vue = require('vue'),
    VueResource = require('vue-resource');

Vue.config.debug = true;

Vue.use(VueResource);

new Vue({
    el: '#app',

    components: {}
});
