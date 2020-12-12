"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    this.count = +prompt("������� ������� �� ��� ����������?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("������� ������� �� ��� ����������?", "");
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
       let genre = prompt(`��� ������� ���� ��� ������� ${i}`).toLowerCase();

      if (genre === null || genre === "") {
         console.log('�����! �������� ������ �� �����!');
        i--;
      } else {
         this.genres[i - 1] = genre;
      }
    }
    this.genres.forEach((values, numbers) => {
      console.log(`������� ���� ${numbers + 1} - ��� ${values}`);
    });
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("���� �� ��������� ������������� �������?", ""),
        b = prompt("�� ������� ������� ���?", "");

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
      alert("����������� �������� ���� �������");
    } else if (this.count >= 10 && this.count < 30) {
      alert("�� ������������ �������");
    } else {
      alert("�� �������");
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
