// demo chat 
// version 0.0.1
// author nguyen thanh phuc
// email phuccntt1990@gmail.com
// 
//
//
//
var jsfile = [
  'js/vendor/jquery-1.11.0.min.js',
  'js/vendor/*.js',
  'js/main.js',
];
var cssfile = [
  'css/**/*.css'
]

//regiter task
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'sails-linker':{
      devJs:{
        options:{
          startTag:'<!--SCRIPTS-->',
          endTag:'<!--SCRIPTS END-->',
          fileTmpl:'<script src="%s"></script>',
          appRoot:'app/'
        },
        files:{
          'index.html':[jsfile]
        },
      },
      devCss:{
        options:{
          startTag:'<!--STYLE-->',
          endTag:'<!--STYLE END-->',
          fileTmpl:'<link rel="stylesheet" href="%s">',
          appRoot:'app/'
        },
        files:{
          'index.html':[cssfile]
        },
      }
    },
  });
  grunt.loadNpmTasks('grunt-sails-linker');
  grunt.registerTask('default',['sails-linker']);
}