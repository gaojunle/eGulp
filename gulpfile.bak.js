var path = require('path'),                 //路径处理
    moment = new require('moment')(),       //日期格式化插件
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),        //文件压缩
    rename = require('gulp-rename'),        //重命名
    concat = require('gulp-concat'),        //文件合并
    glob = require('glob'),                 //返回和筛选文件夹下的所有文件
    changed = require('gulp-changed');      //只对有修改的文件进行处理

// 压缩javascript 文件，压缩后文件放入build/js下(该方法不能实现增量压缩）
/*function buildJS(source) {
 var modelName = path.basename(source, '.js')
 gulp.src([source])
 .pipe(amdOptimize(modelName, {
 configFile: 'js/common/config/requireConfig.js',
 findNestedDependencies: true,
 include: true
 }))
 .pipe(concat(source))
 .pipe(uglify())
 .pipe(rename({suffix: '.min'}))
 .pipe(gulp.dest(function (file) {
 console.log(source + '\t --> successed')
 return 'build/';
 }));
 }
 gulp.task('js', function (callback) {
 glob('js/pc/page/!**!/!*.js', function (err, files) {
 files.map(function (file) {
 buildJS(file)
 });
 });
 });*/

var minifyCss = require("gulp-minify-css");
gulp.task('css', function () {
    gulp.src('css/**/page/**/*.css') // 要压缩的css文件
        .pipe(changed('build/css'))
        .pipe(minifyCss()) //压缩css
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
        .pipe(gulp.dest('build/js'));
});


/*var sass = require("gulp-sass");
gulp.task('compile-sass', function () {
    gulp.src('sass/!*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
var less = require("gulp-less");
gulp.task('compile-less', function () {
    gulp.src('less/!*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});*/

gulp.task('default', ['css', 'js', 'html'], function () {
});
