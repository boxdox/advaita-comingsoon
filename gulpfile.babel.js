import { src, dest, watch, series, parallel } from "gulp";
import yargs from "yargs";
import sass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import htmlmin from "gulp-htmlmin";
import imagemin from "gulp-imagemin";
import del from "del";
import webpack from "webpack-stream";
import browserSync from "browser-sync";
const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return src("src/scss/main.scss")
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, postcss([autoprefixer, cssnano])))
    .pipe(gulpif(PRODUCTION, cleanCss({ compatibility: "ie8" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest("dist/css"))
    .pipe(browser_sync.stream());
};

export const images = () => {
  return src("src/img/**/*.{jpg,jpeg,png,svg,gif}")
    .pipe(gulpif(PRODUCTION, imagemin()))
    .pipe(dest("dist/img"));
};

export const scripts = () => {
  return src("src/js/app.js")
    .pipe(gulpif(PRODUCTION, webpack(require("./webpack.prod.js"))))
    .pipe(gulpif(!PRODUCTION, webpack(require("./webpack.dev.js"))))
    .pipe(dest("dist/js"));
};

export const htmlCopy = () => {
  return src("src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(dest("dist"));
};

export const jsonCopy = () => {
  return src("src/*.json").pipe(dest("dist"));
};

export const fonts = () => {
  return src("src/fonts/**/*.{ttf,woff,woff2,eot}").pipe(dest("dist/fonts"));
};

export const watchForChanges = () => {
  watch("src/scss/**/*.scss", styles);
  watch("src/img/**/*.{jpg,jpeg,png,svg,gif}", series(images, reload));
  watch("src/js/**/*.js", series(scripts, reload));
  watch("src/*.html", series(htmlCopy, reload));
  watch("src/*.json", series(jsonCopy, reload));
  watch("src/fonts/*", series(fonts, reload));
};

const browser_sync = browserSync.create();
export const serve = done => {
  browser_sync.init({
    server: {
      baseDir: "./dist"
    }
  });
  done();
};

export const reload = done => {
  browser_sync.reload();
  done();
};

export const clean = () => del(["dist"]);
export const dev = series(
  clean,
  parallel(styles, images, scripts, htmlCopy, jsonCopy, fonts),
  serve,
  watchForChanges
);
export const build = series(
  clean,
  parallel(htmlCopy, jsonCopy, fonts, styles, images, scripts)
);

export default dev;
