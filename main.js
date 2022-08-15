'use strict';
const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
const personalMuvieDB = {
count: numberOfFilms,
movies:{},
actors: {},
genres:[],
privat: false
};
const a= prompt('Один из последних просмтренных фильмов?', ''),
      b= prompt('На сколько оцените его?', ''),
      c= prompt('Один из последних просмтренных фильмов?', ''),
      d= prompt('На сколько оцените его?', '');

      personalMuvieDB.movies[a]=b;
      personalMuvieDB.movies[c]=d;
      console.log(personalMuvieDB);

