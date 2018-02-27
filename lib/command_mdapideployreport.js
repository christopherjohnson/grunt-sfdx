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

    var args = ['force:mdapi:deploy:report'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Checks the current status of an asynchronous metadata deployment.';
