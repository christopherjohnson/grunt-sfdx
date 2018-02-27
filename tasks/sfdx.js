/*
 * grunt-sfdx
 * https://github.com/christopherjohnson/grunt-sfdx
 *
 * Copyright (c) 2018 Chris Johnson
 * Licensed under the MIT license.
 */

'use strict';

var commands = require('../lib/commands');

module.exports = function(grunt) {

  function wrapCommand(fn) {
      return function () {
          var self = this;

          function exec() {
              var args = Array.prototype.slice.call(arguments);
              var callback = args.pop();
              var options = self.options({
                  verbose: false
              });
              var spawnOpts = {};
              grunt.log.writeln('args: ' + args);
              //build spawn options based on task options
              if (options.cwd) {
                  //verify that the specified cwd exists
                  if (grunt.file.isDir(options.cwd)) {
                      spawnOpts.cwd = options.cwd;
                  } else {
                      throw new Error('The specified cwd does not exist: "' + options.cwd  + '"');
                  }
              }
              if (options.verbose) { spawnOpts.stdio = 'inherit'; }

              grunt.util.spawn({
                  cmd: 'sfdx',
                  args: args,
                  opts: spawnOpts
              }, function () {
                  callback.apply(this, arguments);
              });
          }

          var done = self.async();
          fn(self, exec, done);
      };
  }

  for (let command in commands) {
      let fn = commands[command];
      //grunt.log.writeln('fn : ' + fn);
      grunt.log.writeln('command : ' + command);
      grunt.registerMultiTask(command, fn.description || '', wrapCommand(fn));
  }





  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  /*
  grunt.registerMultiTask('sourcepush', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
  */
};
