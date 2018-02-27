'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'forceoverwrite',
            flag: '-f'
        },
        {
            option: 'ignorewarnings',
            flag: '-g'
        },
        {
            option: 'wait',
            useValue: true,
            flag: '-w',
            defaultValue: 33
        },
        {
            option: 'targetusername',
            useValue: true,
            flag: '-u'
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

    var args = ['force:source:push'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Pushes changed source from your project to the scratch org to keep them in sync.';
