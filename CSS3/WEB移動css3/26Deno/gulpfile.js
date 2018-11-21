'use strict';
 //使用嚴格模式

 //引入gulp ans gulp-sass
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 //創建gulp的任務
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')//讓gulp拿到原始文件 所有 scss的檔案(包含子目錄 根孫子目錄)
  //把scss原本文件交給 gulp-sass做編譯
  //{outputStyle:'expanded'}為要輸出為 CSS的排版方式 可以查要哪種
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))//錯誤訊息 也可以自己改成function(){console.log()}
    .pipe(gulp.dest('./src/css'));//輸出到哪個目錄下
});
 //創建gulp的 監聽任務
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);//監聽'./sass/**/*.scss'  並執行'sass'上面的任務
});

//加一個默認的任務
gulp.task('default',['sass:watch'],function(){//代表如果執行sass它會自動幫忙執行 sass:watch 變成一個默認

});