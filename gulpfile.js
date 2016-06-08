var path = require('path'),                 //路径处理
    moment = new require('moment')(),       //日期格式化插件
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),        //文件压缩
    rename = require('gulp-rename'),        //重命名
    concat = require('gulp-concat'),        //文件合并
    glob = require('glob'),                 //返回和筛选文件夹下的所有文件
    header = require('gulp-header'),        //add a header to file(s) in the pipeline
    changed = require('gulp-changed'),      //只对有修改的文件进行处理
    upload = require('gulp-upload');        //上传

var headerBanner = '/** @version v ' + moment.format('YYYY-MM-DD HH:mm:ss') + ' */\n';

var minifyCss = require("gulp-minify-css"),         //压缩CSS
    autoprefixer = require('gulp-autoprefixer');    //增加私有变量前缀

gulp.task('css', function () {
    gulp.src('css/**/page/**/*.css') // 要压缩的css文件
        .pipe(changed('build/css'))
        .pipe(autoprefixer({browsers: ['last 5 versions']}))
        .pipe(minifyCss()) //压缩css
        .pipe(header(headerBanner))
        .pipe(gulp.dest(function (file) {
            var nowTime = '[' + moment.format('HH:mm:ss') + ']';
            console.log(nowTime + ' Optimizing ' + file.history[0].replace(file.cwd, ''));
            return 'build/css';
        }));
});

//压缩html目录下.html文件
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function () {
    return gulp.src('html/**/*.html')
        .pipe(changed('build/html'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(header(headerBanner))
        .pipe(gulp.dest(function (file) {
            var nowTime = '[' + moment.format('HH:mm:ss') + ']';
            console.log(nowTime + ' Optimizing ' + file.history[0].replace(file.cwd, ''));
            return 'build/html';
        }));
})

//压缩所有page目录下JS文件，[优化requireJS模块加载器]，支持增量压缩
var requirejsOptimize = require('gulp-requirejs-optimize');
gulp.task('js', function () {
    return gulp.src(['js/**/page/**/*.js'])
        .pipe(changed('build/js'))
        .pipe(requirejsOptimize({
            mainConfigFile: 'js/common/config/requireConfig.js'
        }))
        .pipe(header(headerBanner))
        .pipe(gulp.dest('build/js'));
});

gulp.task('upload', function () {
    var options = {
        server: 'http://192.168.0.77:7890/upload',
        data: {
            dirname: 'upload',
            fileName: 'dest.js'
        },
        callback: function (err, data, res) {
            if (err) {
                console.log('error:' + err.toString());
            } else {
                console.log(data.toString());
            }
        }
    }
    return gulp.src('server.js')
        .pipe(upload(options));
});

var sftp = require('gulp-sftp');
gulp.task('sftp', function () {
    return gulp.src('build/css/**/*.*')
        .pipe(sftp({
            host: '123.56.198.163',
            user: 'root',
            pass: 'Topschool110',
            remotePath: '/tmp/',
            callback: function (e) {
                console.dir(e);
            }
        }));
});

gulp.task('default', ['css', 'js', 'html'], function () {
});