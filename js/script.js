'use strict'
let numberPfFilms = +prompt('Сколько фильмов вы ужепросмторели?', "0");
console.log(numberPfFilms);

let personalMoveDB = {
	count: numberPfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
}

for(let i = 0; i < 2; i++){
	let lastFilm = prompt('Однин из последних просмотренных фильмов?');
	let markOfFilm = prompt('На сколько оцените его?');
	personalMoveDB.movies[lastFilm] = markOfFilm;
}

console.log(personalMoveDB);
