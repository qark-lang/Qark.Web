var del = require('del');
const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

function clean(cb) {
    del('wwwroot/dist');
    cb();
}

function styles(cb) {
    src(['Client/main.scss', 'Client/lib/prism/prism.css'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('site.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('wwwroot/dist'));
    cb();
}

function scripts(cb) {
    src(['Client/lib/prism/prism.js', 'Client/main.js'])
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(dest('wwwroot/dist'));
    cb();
}

function dev(cb) {
    watch(['Client/**/*.scss', 'Client/**/*.sass', 'Client/**/*.css'], styles);
    cb();
}

exports.default = series(clean, parallel(styles, scripts));
exports.watch = dev;