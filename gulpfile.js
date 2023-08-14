const { series, parallel, watch, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const pipeline = require('readable-stream').pipeline;
const cleanCSS = require('gulp-clean-css');

function clean() {
    return del(['public/*.js', 'public/*.css']);
}

function cssTranspile() {
    return src('./src/*.scss')
        .pipe(
            sass({
                includePaths: ['node_modules/normalize-scss/sass'],
            }).on('error', sass.logError),
        )
        .pipe(dest('./public'));
}

function cssMinify() {
    return src('build/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(dest('build'));
}

function jsMinify() {
    return pipeline(src('./src/*.js'), uglify(), dest('public'));
}

function jsCopy() {
    return pipeline(src('./src/*.js'), dest('public'));
}

exports.clean = clean;

exports.build = series(clean, cssTranspile, parallel(cssMinify, jsMinify));

exports.dev = series(clean, parallel(cssTranspile, jsCopy));

// exports.watch = function () {
//     exports.dev;
//     watch('src/*.scss', cssTranspile);
//     watch('src/*.js', jsCopy);
// };
function watchChanges() {
    exports.dev;
    watch('src/*.scss', cssTranspile);
    watch('src/*.js', jsCopy);
}

exports.watch = watchChanges;

exports.default = exports.build;
