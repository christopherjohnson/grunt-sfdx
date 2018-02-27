'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'wait',
            useValue: true,
            defaultValue: -1,
            flag: '-w'
        },
        {
            option: 'retrievetargetdir',
            useValue: true,
            required: true,
            flag: '-r'
        },
        {
            option: 'jobid',
            useValue: true,
            flag: '-i'
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
        {
            option: 'verbose',
        },
    ]);

    var args = ['force:mdapi:retrieve:report'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Check the status of an asynchronous metadata retrieval.';
