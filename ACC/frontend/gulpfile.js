'use strict';

const gulp = require('gulp'),
    del = require('del'),
    zip = require('gulp-zip'),
    FormData = require('form-data'),
    fs = require('fs'),
    browserSync = require('browser-sync').create();

var appname = 'frontend';

gulp.task('deploy', gulp.series(_clean, _zip, _deploy));
gulp.task('undeploy', gulp.series(_undeploy));
gulp.task('update', gulp.series(_clean, _zip, _update));

gulp.task('serve', _serve);

// ===============================================

function _clean() {
    return del(['dist/**']);
}

function _zip() {
    return gulp.src('**/*')
        .pipe(zip('frontend.zip'))
        .pipe(gulp.dest('dist'));
}

function _deploy() {
    createApp(appname, fs.createReadStream('dist/frontend.zip'), require('./ocloud'), response => { console.log('CREATED', response) });
}

function _undeploy() {
    deleteApp(appname, require('./ocloud'), response => { console.log('REMOVED', response) });
}

function _update() {
    updateApp(appname, fs.createReadStream('dist/frontend.zip'), require('./ocloud'), response => { console.log('UPDATED', response) });
}

function _serve() {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });
    gulp.watch("public/**/*", browserSync.reload);
}

// ===============================================

function createApp(name, zipstream, ocloud, callback) {
    var form = new FormData();
    form.append('name', name);
    form.append('runtime', 'node');
    form.append('subscription', 'Hourly');
    form.append('archive', zipstream);
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
        }, function (err, res) {
            if (err) { throw err }
            var body = '';
            res.on('data', function (chunk) { body += chunk; });
            res.on('end', function () {
                if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
                    throw new Error('unexpected reply (status ' + res.statusCode + '): ' + body);
                }
                var json = body.length > 0 && body.charAt(0) === '{' ? JSON.parse(body) : body;
                callback && callback(json);
            });
        });
}
