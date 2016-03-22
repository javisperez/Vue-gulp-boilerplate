'use strict';

var config = {};

// Backend api server url and helper function
config.api = function (uri) {
    return 'http://my.backend.server/' + uri;
};

module.exports = config;
