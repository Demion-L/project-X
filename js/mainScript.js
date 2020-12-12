"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
       let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();

      if (genre === null || genre === "") {
         console.log('Эррор! Ведденые данные не верны!');
        i--;
      } else {
         this.genres[i - 1] = genre;
      }
    }
    this.genres.forEach((values, numbers) => {
      console.log(`Любимый жанр ${numbers + 1} - это ${values}`);
    });
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        this.movies[a] = b;
        console.log("done!");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (this.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (this.count >= 10 && this.count < 30) {
      alert("Вы классический зритель");
    } else {
      alert("Вы киноман");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
};
