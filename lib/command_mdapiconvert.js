'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'rootdir',
            useValue: true,
            required: true,
            flag: '-r'
        },
        {
            option: 'outputdir',
            useValue: true,
            flag: '-d'
        },
        {
            option: 'json',
        },
        {
            option: 'loglevel',
            useValue: true,
            defaultValue: 'error'
        },
    ]);

    var args = ['force:mdapi:convert'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Converts metadata retrieved via Metadata API into the source format used in Salesforce DX projects.';
