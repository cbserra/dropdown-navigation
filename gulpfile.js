const { series, parallel, watch, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const del = require('del');
// import {deleteSync} from 'del';
const sass = require('gulp-sass')(require('sass'));
const pipeline = require('readable-stream').pipeline;
const cleanCSS = require('gulp-clean-css');

function clean() {
    return del(['public/*.js', 'public/*.css']);
}

function cleanJs() {
    return del('public/*.js');
}

function cssTranspile() {
    return src('src/*.scss')
        .pipe(
            sass({
                includePaths: ['node_modules/normalize-scss/sass'],
            }).on('error', sass.logError),
        )
        .pipe(dest('public'));
}

function cssMinify() {
    return src('public/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(dest('public'));
}

function jsMinify() {
    return pipeline(src('src/*.js'), uglify(), dest('public'));
}

function jsCopy() {
    return pipeline(src('src/*.js'), dest('public'));
}

exports.clean = clean;

exports.build = series(clean, cssTranspile, parallel(cssMinify, jsMinify));

function watchChanges() {
    // You can use a single task
    watch('src/*.scss', cssTranspile);
    // Or a composed task
    watch('src/*.js', series(cleanJs, jsCopy));
}

exports.watch = watchChanges;

exports.default = watchChanges;

// exports.watch = function () {
//     exports.build;
//     watch('src/styles.scss', cssTranspile, cssMinify);
//     watch('src/scripts.js', jsMinify);
// };

// exports.default = exports.build;

// exports.default = function () {
//     // You can use a single task
//     watch('src/*.scss', cssTranspile, cssMinify);
//     // Or a composed task
//     watch('src/*.js', series(cleanJs, jsMinify));
// };
