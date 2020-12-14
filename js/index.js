"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Супермен",
      "Марсианин",
      "Гренландия",
      "Звездные войны",
      "Ганнибал лектор"
    ]
  };

  const advertiser = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    title = poster.querySelector(".promo__title"),
    wrapper = document.querySelector(".promo__interactive"),
    ratings = poster.querySelector(".promo__ratings"),
    promo = document.querySelectorAll(".promo__menu-list");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

      if(newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('It is favorite!');
      }

    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "Мелодрамма";

    genre.style.fontSize = "30px";

    title.textContent = "Аргонианин";

    title.insertAdjacentHTML("afterbegin", "<div> Привет хохохо!!! </div>");

    poster.style.backgroundImage = "url(./img/bg.jpg)";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
    <li class="promo__interactive-item"> 
      N${i + 1} ${film}
        <div class="delete"></div>
    </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();   
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  deleteAdv(advertiser);
  makeChanges();
  createMovieList(movieDB.movies, movieList);


  for (let elements of wrapper.childNodes) {
    if (elements.nodeName == "#text") {
      continue;
    }
    console.log(elements);
  }

});

