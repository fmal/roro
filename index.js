'use strict';

var rework = require('rework'),
    vars = require('rework-vars'),
    autoprefixer = require('autoprefixer'),
    calc = require('rework-calc'),
    color = require('rework-color-function'),
    hex = require('rework-hex-alpha'),
    remFallback = require('rework-rem-fallback'),
    reworkNPM = require('rework-npm'),
    mixins = require('rework-mixins'),
    opacity = require('./lib/opacity');

module.exports = roro;

function roro(str, options) {
    options = options || {};

    if(typeof str !== 'string') {
        throw new Error('`str` argument must be a String');
    }

    var browsers = options.browsers || autoprefixer['default'],
        baseFontSize = options.baseFontSize ? parseInt(options.baseFontSize, 10) : 16,
        dir = options.dir,
        css;

    css = rework(str)
        .use(reworkNPM(dir))
        .use(vars())
        .use(hex)
        .use(color)
        .use(calc)
        .use(remFallback(baseFontSize))
        .use(rework.extend())
        .use(rework.mixin({
            opacity: opacity,
            absolute: mixins.absolute,
            relative: mixins.relative,
            fixed: mixins.fixed,
            size: mixins.size
        }))
        .use(autoprefixer(browsers).rework)
        .toString();

    return css;
}
