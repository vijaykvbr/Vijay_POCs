require('core-js');
require('core-js/es5');
require('babel-polyfill');

require('app.module');
require('angular-mocks');

var context = require.context('../../app', true, /.spec\.js$/);
context.keys().forEach(context);
