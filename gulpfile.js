var gulp = require('gulp'),  
  pug = require('gulp-pug');

  gulp.task('pug', function() {  
  return gulp.src('index.pug')
      .pipe(pug())
      .pipe(gulp.dest('build'));
});

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});