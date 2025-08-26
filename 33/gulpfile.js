const { task, series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const PLUGINS = [
    autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: true
    }),
    cssnano({ preset: ['default', {}] })
];

// Об'єкт із шляхами до файлів проєкту для легкого доступу та управління
const PATH = {
    scssAllFiles: './scss/*.scss', // Всі SCSS файли для спостереження
    htmlAllFiles: './*.html', // Всі HTML файли для спостереження
};

function scss() {
    return src('./scss/style.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(PLUGINS))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./css/', { sourcemaps: true }));
}

function syncInit() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
}

async function sync() {
    browserSync.reload()
}

// Функція для спостереження за змінами у файлах
function watchFiles() {
    syncInit(); // Ініціалізація BrowserSync
    watch(PATH.scssAllFiles, series(scss, sync)); // Спостереження за SCSS файлами
    watch(PATH.htmlAllFiles, sync); // Спостереження за HTML файлами
}

scss();

task('scss', scss);
task('watch', watchFiles);
