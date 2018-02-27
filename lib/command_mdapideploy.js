'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'checkonly',
            useValue: true,
            defaultValue: false,
            flag: '-c'
        },
        {
            option: 'deploydir',
            useValue: true,
            flag: '-d'
        },
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
            option: 'testlevel',
            useValue: true,
            flag: '-l'
        },
        {
            option: 'runtests',
            useValue: true,
            flag: '-r'
        },
        {
            option: 'rollbackonerror',
            useValue: true,
            defaultValue: true,
            flag: '-e'
        },
        {
            option: 'ignoreerrors',
            useValue: true,
            defaultValue: false,
            flag: '-o'
        },
        {
            option: 'ignorewarnings',
            useValue: true,
            defaultValue: false,
            flag: '-g'
        },
        {
            option: 'zipfile',
            useValue: true,
            flag: '-f'
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

    var args = ['force:mdapi:deploy'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Deploys file representations of components into an org by creating or updating the components they represent. You can deploy and retrieve up to 10,000 files or 400 MB (39 MB compressed) at one time. The default target username is the admin user for the default scratch org.';
