'use strict';

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;
const src = env === 'production' ? './build/index' : './src/index';

require('babel-polyfill');
if (env === 'development') { require('babel-register'); }

const app = require(src).default;
app.listen(port);
console.log('Server running at ' + port);
console.log("Running in "  + process.env.NODE_ENV + " v" + process.env.npm_package_version);