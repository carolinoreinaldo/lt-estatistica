// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
//###################################################################################
// Aqui n�s carregamos o gulp e os plugins atrav�s da fun��o `require` do nodejs
/*var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
 
// Definimos o diretorio dos arquivos para evitar repeti��o futuramente
var files = "./src/*.js";
 
//Aqui criamos uma nova tarefa atrav�s do �gulp.task� e damos a ela o nome 'lint'
gulp.task('lint', function() {
 
	// Aqui carregamos os arquivos que a gente quer rodar as tarefas com o `gulp.src`
	// E logo depois usamos o `pipe` para rodar a tarefa `jshint`
	gulp.src(files)
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
 
//Criamos outra tarefa com o nome 'dist'
gulp.task('public', function() {
 
	// Carregamos os arquivos novamente
	// E rodamos uma tarefa para concatena��o
	// Renomeamos o arquivo que sera minificado e logo depois o minificamos com o `uglify`
	// E pra terminar usamos o `gulp.dest` para colocar os arquivos concatenados e minificados na pasta build/
	gulp.src(files)
	.pipe(concat('./public'))
	.pipe(rename('dist.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public'));
});
 
//Criamos uma tarefa 'default' que vai rodar quando rodamos `gulp` no projeto
gulp.task('default', function() {
 
	// Usamos o `gulp.run` para rodar as tarefas
	// E usamos o `gulp.watch` para o Gulp esperar mudan�as nos arquivos para rodar novamente
	gulp.run('lint', 'public');
	gulp.watch(files, function(evt) {
		gulp.run('lint', 'dispublict');
	});
});
*/