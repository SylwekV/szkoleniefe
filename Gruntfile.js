module.exports = function(grunt) {
	
	    grunt.initConfig({
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
	                files: ['index.html'],
	                tasks: [] // nothing to do here
	            }
	        }
	    });
	
	    grunt.loadNpmTasks('grunt-contrib-connect');
	    grunt.loadNpmTasks('grunt-contrib-watch');
	
	    grunt.registerTask('build', [
	        'connect',
	        'watch'
	    ]);
	
	    grunt.registerTask('default', ['build']);
	};
