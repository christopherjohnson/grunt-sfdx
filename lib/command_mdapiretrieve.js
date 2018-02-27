'use strict';

var async = require('grunt').util.async;
var grunt = require('grunt');
var ArgUtil = require('flopmang');

module.exports = function (task, exec, done) {
    var argUtil = new ArgUtil(task, [
        {
            option: 'apiversion',
            useValue: true,
            defaultValue: false,
            flag: '-a'
        },
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
            option: 'unpackaged',
            useValue: true,
            flag: '-k'
        },
        {
            option: 'sourcedir',
            useValue: true,
            flag: '-d'
        },
        {
            option: 'packagenames',
            useValue: true,
            flag: '-p'
        },
        {
            option: 'singlepackage',
            useValue: true,
            flag: '-s'
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

    var args = ['force:mdapi:retrieve'].concat(argUtil.getArgFlags());

    // Add callback
    args.push(done);

    exec.apply(this, args);
};

module.exports.description = 'Deploys file representations of components into an org by creating or updating the components they represent. You can deploy and retrieve up to 10,000 files or 400 MB (39 MB compressed) at one time. The default target username is the admin user for the default scratch org.';
