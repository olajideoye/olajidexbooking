/* Import Node.js modules */
var environments = require('gulp-environments'),
    autoprefixer = require('autoprefixer');


var config = {
    sourceDir: "./app",
    buildDir: "./public",
    styles: {
        sourceDir: "./app/scss",
        sourceFiles: "./app/scss/**/*.scss",
        destinationDir: "./public/css",
        mapsDir: "./maps", // relative to the destination directory
        postcss: [
            autoprefixer({browsers: ["last 5 versions", "> .5% in NG", "not ie < 11"]})
        ]
    },
    scripts: {
        sourceDir: "./app/scripts",
        sourceFiles: ["./app/scripts/**/*.js"],
        destinationDir: "./public/js"
    },
    images: {
        sourceDir: "./app/images",
        sourceFiles: "./app/images/**/*",
        destinationDir: "./public/img"
    },
    htmlAssets: {
        sourceDir: "./app/views",
        sourceFiles: ["./app/views/**/*.html"],
        destinationDir: "./public"
    },
    bowerAssets: {
        sourceDir: "./bower_components",
        sourceFiles: ["./bower_components/**/*"],
        destinationDir: "./public/bower-assets"
    }
};

/* Add sourcemaps on all environments except production */
config.sourcemaps = !(environments.production());

/* Minify build files on all environments except development */
config.minify = !(environments.development());


module.exports = config;
