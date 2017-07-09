var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var reload = browserSync.reload;
var paths = {
  html:['index.html'], // файл index.html
};
	gulp.task('less', function(){
		gulp.src('src/styles/**/*.less')
		.pipe(less())
		.pipe(concat('main.css'))
		.pipe(gulp.dest('build/style'))
		.pipe(reload({stream:true}));
});
	gulp.task('html', function(){
		gulp.src(paths.html)
		.pipe(reload({stream:true}));
});
	gulp.task('browser-sync', function(){
		browserSync({
			server: { // Определяем параметры сервера
            baseDir: '' // Директория для сервера - 
        },
        notify: false // Отключаем уведомления
   		});
});
	gulp.task('watch', function(){
		gulp.watch('src/styles/**/*.less', ['browser-sync', 'less'])
		gulp.watch('index.html', ['browser-sync', 'html']);
});
