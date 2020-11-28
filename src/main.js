import {createProfileTemplate} from './view/profile.js';
import {createSiteMenu} from './view/site-menu.js';
import {createSorting} from './view/sorting.js';
import {createFilmsWrapper} from './view/films-wrapper.js';
import {createAllFilms} from './view/all-films.js';
import {createFilmCard} from './view/film-card.js';
import {createShowMoreButton} from './view/show-more-button.js'
import {createTopRelatedFilms} from './view/top-rated-films.js'
import {createMostCommentedFilms} from './view/most-commented-films.js'
import {createFooterStatistics} from './view/footer-statistics.js'
import {createFilmDetails} from './view/film-details.js'

const ALL_FILMS_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;

const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

const bodyElement = document.querySelector(`body`);
const siteHeaderElement = bodyElement.querySelector(`.header`);
const siteMainElement = bodyElement.querySelector(`.main`);

render(siteHeaderElement, createProfileTemplate(), `beforeEnd`);
render(siteMainElement, createSiteMenu(), `beforeEnd`);

render(siteMainElement, createSorting(), `beforeEnd`);

render(siteMainElement, createFilmsWrapper(), `beforeEnd`);

const filmsWrapperElement = siteMainElement.querySelector(`.films`);
render(filmsWrapperElement, createAllFilms(), `beforeEnd`);
render(filmsWrapperElement, createTopRelatedFilms(), `beforeEnd`);
render(filmsWrapperElement, createMostCommentedFilms(), `beforeEnd`);


const filmsLists = filmsWrapperElement.querySelectorAll(`.films-list`);

filmsLists.forEach((list) => {
    const filmContainer = list.querySelector(`.films-list__container`);
    const isExtra = list.classList.contains(`films-list--extra`);
    for (let i = 0; i < (isExtra ? EXTRA_FILMS_COUNT : ALL_FILMS_COUNT); i++) {
        render(filmContainer, createFilmCard(), `beforeEnd`);
    }
    if (!isExtra) {
        render(list, createShowMoreButton(), `beforeEnd`);
    }
});

const footerElement = bodyElement.querySelector(`.footer`);
render(footerElement, createFooterStatistics(), `beforeEnd`);


//render(siteMainElement, createFilmDetails(), `beforeEnd`);
