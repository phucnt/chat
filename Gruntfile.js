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
    'sass':{
      devsass:{
        options:{
          style:'expanded'
        },
        files:{
          'css/main.css':'css/sass/header.sass'
        }

      }
    },
    'less':{
      devless:{
        options:{
          paths:["css"],
          dumpLineNumbers:'comments'
        },
        files:{
          "css/main.css":"css/less/style.less"
        }
      }
    },
    //watch
    watch:{
      less:{
        files:['css/less/*.less'],
        tasks:['less'],
        options:{
          reload:true,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-sails-linker');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default',['sails-linker','watch:less']);

}