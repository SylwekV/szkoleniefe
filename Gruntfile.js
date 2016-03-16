module.exports = function(grunt) {

  grunt.initConfig({
	  connect: {
		server: {
		  options: {
			port: 9900,
			hostname: 'localhost',
			base: '.',
			keepalive: true,
			open: true,
			onCreateServer: function(server, connect, options) {
			  var io = require('socket.io').listen(server);
			  io.sockets.on('connection', function(socket) {
				alert('abc');
			  });
			}
		  }
		}
	  }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect']);

};