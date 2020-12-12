
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advertiser = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelectorAll('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      chekbox = addForm.querySelector('[type="checkbox"]'),
      title = poster.querySelector('.promo__title'),
      ratings = poster.querySelector('.promo__ratings'),
      promo = document.querySelectorAll('.promo__menu-list');
      

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newFilm = addInput.value;
  const favorite = checkbox.checked;
})

advertiser.forEach(item => {
    item.remove();
});

genre.textContent = 'Мелодрамма';

genre.style.fontSize = '30px';

title.textContent = 'Аргонианин';

title.insertAdjacentHTML('afterbegin','<div> Привет хохохо!!! </div>');

poster.style.backgroundImage = 'url(./img/bg.jpg)';

movieList[0].innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML +=`<li class="promo__interactive-item"> N${i + 1}${film}<div class="delete"></div></li>`;
});















