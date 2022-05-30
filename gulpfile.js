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

exports.clean = clean;

exports.build = series(clean, cssTranspile, parallel(cssMinify, jsMinify));

exports.watch = function () {
    exports.build;
    watch('src/styles.scss', cssTranspile, cssMinify);
    watch('src/scripts.js', jsMinify);
};

exports.default = exports.build;
