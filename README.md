# Sass: Css with superpowers

## Configurando
* Node.js / NPM
> npm install -g node-sass

## Elementos
### Variáveis

* números (com ou sem unidades) (1.2, 13, 10px)
* strings ("foo", 'bar', baz)
* cores ( blue, #04a3f9, rgba(255, 0, 0, 0.5))
* booleanos ( true, false)
* nulls (null)
* listas separados por espaços ou virgulas (1.5em 1em 0 2em, Helvetica, Arial, sans-serif)
* maps from one value to another (e.g. (key1: value1, key2: value2))

``` scss
$variavel : valor; 

```
### Mixins

``` scss
@mixin transition($args...) {
  -webkit-transition: $args;
  -moz-transition: $args;
  -ms-transition: $args;
  -o-transition: $args;
  transition: $args;
}

@include transition(all .2s ease .1s);


$w-color: white;
@mixin colors($color: blue) {
  background-color: $color;
  @content;
  border-color: $color;
}
.colors {
  @include colors { color: $w-color; }
}
```
>Links com mixins uteis:  http://zerosixthree.se/8-sass-mixins-you-must-have-in-your-toolbox


### Functions 
Retornam valores:
``` scss
@function calculateRem($size) {
  $remSize: $size / 16px;
  @return $remSize * 1rem;
}
```
### Control Directives
#### @if
``` scss
$color: #pink;
.content
{
    @if $color == pink {
        border-color: 1px solid purple;
    }
}
```
#### @for 
``` scss
@for $i from 1 through 9 {
  .item-#{$i} { width: 2em * $i; }
}
```
#### @each
``` scss
$countries: "brasil", "alemanha", "virou-passeio";
@each $country in $countries {
  .#{$country}-icon {
    background-image: url('/images/#{$country}.png');
  }
}
```
#### @while
``` scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```  
#### Comments
``` scss
/* Será renderizado */
// Não será renderizado 
```

### Util Functions
#### Cores e Opacidade
``` scss
// == Cores
mix($color1, $color2, [$weight]) // Misturar duas cores
lighten($color, $amount) //Clarear cor
darken($color, $amount) //Escurer cor
grayscale($color) //Escala de cinza
invert($color) //Inverter
// == Opacidade
rgba($color, $alpha) //Adicionar canal alpha
opacify($color, $amount) / fade-in($color, $amount)
transparentize($color, $amount) / fade-out($color, $amount)
```
#### Strings
```
str-length($string)
str-slice($string, $start-at, [$end-at])
to-lower-case($string)
to-upper-case($string)
```
#### Números 
```
percentage($number)
round($number)
random([$limit])
```
#### Listas
```
length($list)
nth($list, $n)
join($list1, $list2, [$separator])
```
> Outras informações: http://sass-lang.com/documentation/Sass/Script/Functions.html

# Gulp: Automatizador de tarefas
> npm install -g gulp

> npm install --save-dev gulp gulp-sass

## Configurando projeto
Criar `gulpfile.js`

### Importar modulos do gulp
```
var gulp = require('gulp'); // módulo principal
var gulp-sass = require('gulp-sass'); // módulo do sass
```

### Criando tarefa principal
``` javascript
gulp.task('default', function () {
    gulp.task('build-sass');
});

gulp.task('build-sass', function () {
    gulp.src('./site.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'))
});
```
### Criando 'watcher'
``` javascript
gulp.watch('./site.scss', ['build-sass']);
```

### Executando
> gulp

ou para executar terfa específica

> gulp build-sass