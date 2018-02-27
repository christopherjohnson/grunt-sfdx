'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'rootdir',
            useValue: true,
            flag: '-r'
        },
        {
            option: 'outputdir',
            useValue: true,
            flag: '-d'
        },
        {
            option: 'packagename',
            useValue: true,
            flag: '-n'
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

    var args = ['force:source:convert'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Converts source in a Salesforce DX project into metadata that you can deploy using Metadata API.';
