const { task, series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
    return src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css/style.css'));
}

task('scss', scss);
