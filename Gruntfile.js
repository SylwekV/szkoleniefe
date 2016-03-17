module.exports = function(grunt) {
	
	    grunt.initConfig({
			
			pkg: grunt.file.readJSON('package.json'),
		cfg: {
			paths: {
				root: __dirname,
				source: '<%= cfg.paths.root %>/src',
				output: '<%= cfg.paths.root %>/dist',
				bower: '<%= cfg.paths.root %>/bower_components',
			}
			
			
		},
			copy: {
			  index: {
				src: '<%= cfg.paths.source %>/index.html',
				dest: '<%= cfg.paths.output %>/index.html'
			  },
			  css: {
				src: '<%= cfg.paths.source %>/style.css',
				dest: '<%= cfg.paths.output %>/style.css'
			  },
			},
	        connect: {
	            options: {
	                port: 7700,
	                hostname: 'localhost',
					open: true,
	                base: [
	                    'bower_components',
						'.'
	                ]
	            },
	            server: {
	                options: {
	                    open: true,
	                    livereload: 8999
	                }
	            }
	        },
	        watch: {
	            options: {
	                livereload: 8999
	                // processes are spawned by default (unspawned grunt fails often)
	            },
	            livereload: {
	                files: [
	                    '**/*'
	                ]
	            },
	            'index': {
	                files: ['<%= cfg.paths.source %>/index.html'],
	                tasks: [] // nothing to do here
	            }
	        }
	    });
	
		require('load-grunt-tasks')(grunt);
	
	    grunt.registerTask('build', [
	        'connect',
	        'watch'
	    ]);
		
		grunt.registerTask('help', 'Do something interesting.', function(arg) {
		  grunt.log.writeln('Options');
		  grunt.log.writeln('build');
		  grunt.log.writeln('help');
		});
	
	    grunt.registerTask('default', ['build']);
		grunt.registerTask('default', ['copy']);
	};
