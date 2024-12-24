const { option } = require("grunt");
const { OutputFileType } = require("typescript");

module.exports = function(grunt){
    grunt.initConfig({
        ts:{
            main:{
                src:['typescript/*.ts'],
                options: {
                    outFile: 'javascript/main.js',
                },
            },
        },
    });
    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask('default', ['ts']);
}