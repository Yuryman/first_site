 'use strict';
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
  while(numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
  }
}
start();

const personalMuvieDB = {
count: numberOfFilms,
movies:{},
actors: {},
genres:[],
privat: false
 };

// const a= prompt('Один из последних просмтренных фильмов?', ''),
//       b= prompt('На сколько оцените его?', ''),
//       c= prompt('Один из последних просмтренных фильмов?', ''),
//       d= prompt('На сколько оцените его?', '');

//       personalMuvieDB.movies[a]=b;
//       personalMuvieDB.movies[c]=d;

function rememberMyFilms() {
for(let i=0; i<2; i++){
        const a= prompt('Один из последних просмтренных фильмов?', ''),
              b= prompt('На сколько оцените его?', '');
              if(a != null && b!= null && a != '' &&  b != '' ) {
                personalMuvieDB.movies[a]=b;
                console.log('done');
               } else {
                console.log('error');
                i--;
               }
      }
}
      
rememberMyFilms();


function detectPersonalLevel() {
      if(personalMuvieDB.count < 10){
        console.log('Просмотрено мало фильмов');
      } else if(personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
        console.log('Вы классный зритель');
      }
    }
    detectPersonalLevel();

    function showMyDb (hiden){
      if(!hiden){
        console.log(personalMuvieDB);
      }
    }
    showMyDb(personalMuvieDB.privat);

    function writeYourGenres() {
      for (let i = 1; i <= 3; i++) {
          personalMuvieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);          
      }
  }
  
  writeYourGenres();
      

     