import { getPictures } from './pixabay-api';
import { renderGallery } from './render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.searchInput');
export const gallery = document.querySelector('.gallery');

