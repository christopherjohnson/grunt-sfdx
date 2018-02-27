'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'all',
            flag: '-a'
        },
        {
            option: 'local',
            flag: '-l'
        },
        {
            option: 'remote',
            flag: '-r'
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

    var args = ['force:source:status'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Lists changes that have been made locally, in a scratch org, or both.';
