'use strict';

const gulp = require('gulp'),
    del = require('del'),
    zip = require('gulp-zip'),
    FormData = require('form-data'),
    fs = require('fs'),
    browserSync = require('browser-sync').create(),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    through2 = require('through2');

var appname = 'frontend';

gulp.task('dist', gulp.series(_clean, _rjs, _zip));
gulp.task('deploy', gulp.series('dist', _deploy));
gulp.task('undeploy', gulp.series(_undeploy));
gulp.task('redeploy', gulp.series('dist', _redeploy));

gulp.task('clean', gulp.series(_clean));
gulp.task('rjs', gulp.series(_rjs));
gulp.task('serve', _serve);

// ===============================================

function _clean() {
    return del(['dist/**', 'public/opt/**']);
}

function _zip() {
    return gulp.src(['**/*', '!ocloud*.js', '!gulpfile.js'])
        .pipe(zip('frontend.zip'))
        .pipe(gulp.dest('dist'));
}

function _rjs() {
    return rjs({
        baseUrl: 'public',
        mainConfigFile: 'public/main.js', // needed for library paths
        name: 'main',
        out: 'optimized.js',
        optimize: 'none',
        include: ['views/drill', 'views/acts', 'views/chart', 'views/details', 'text']
    })
        // workaround for gulp-requirejs not signaling end of stream
        // https://github.com/RobinThrift/gulp-requirejs/issues/5#issuecomment-71415187
        .pipe(through2.obj(function(file, enc, next) {
            this.push(file);
            this.end();
            next();
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/opt/'));
}

function _deploy() {
    createApp(appname, fs.createReadStream('manifest.json'), fs.createReadStream('deployment.json'), fs.createReadStream('dist/frontend.zip'),
        require('./ocloud'), response => { console.log('CREATED', response) });
}

function _undeploy() {
    deleteApp(appname, require('./ocloud'), response => { console.log('REMOVED', response) });
}

function _redeploy() {
    updateApp(appname, fs.createReadStream('dist/frontend.zip'), require('./ocloud'), response => { console.log('UPDATED', response) });
}

function _serve() {
    browserSync.init({
        server: {
            baseDir: "public",
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });
    gulp.watch("public/**/*", browserSync.reload);
}

// ===============================================

function createApp(name, manifest, deployment, archive, ocloud, callback) {
    var form = new FormData();
    form.append('name', name);
    form.append('runtime', 'node');
    form.append('subscription', 'Hourly');
    manifest && form.append('manifest', manifest);
    deployment && form.append('deployment', deployment);
    archive && form.append('archive', archive);
    ocloudPost(form, 'post', '', ocloud, callback);
}

function deleteApp(name, ocloud, callback) {
    var form = new FormData();
    ocloudPost(form, 'delete', '/' + name, ocloud, callback);
}

function updateApp(name, zipstream, ocloud, callback) {
    var form = new FormData();
    form.append('archive', zipstream);
    ocloudPost(form, 'put', '/' + name, ocloud, callback);
}

function ocloudPost(formData, method, urlSuffix, ocloud, callback) {
    formData.submit(
        {
            method: method,
            protocol: 'https:',
            host: 'apaas.' + ocloud.datacenter + '.oraclecloud.com',
            path: '/paas/service/apaas/api/v1.1/apps/' + ocloud.domain + (urlSuffix || ''),
            auth: ocloud.username + ':' + ocloud.password,
            headers: { 'X-ID-TENANT-NAME': ocloud.domain }
        }, function(err, res) {
            if (err) { throw err }
            var body = '';
            res.on('data', function(chunk) { body += chunk; });
            res.on('end', function() {
                if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
                    throw new Error('unexpected reply (status ' + res.statusCode + '): ' + body);
                }
                var json = body.length > 0 && body.charAt(0) === '{' ? JSON.parse(body) : body;
                callback && callback(json);
            });
        });
}
