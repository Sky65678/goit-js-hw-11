import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.searchInput');
const loading = document.querySelector('.loading');
const gallery = document.querySelector('.gallery');

// Обробник події submit для форми
formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userImg = inputEl.value.toLowerCase().trim();

  if (userImg === '') {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  loading.style.display = 'flex';
  gallery.innerHTML = '';

  getImage(userImg)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          maxWidth: '432px',
          color: '#ef4040',
        });
        gallery.innerHTML = '';
        loading.style.display = 'none';
        formEl.reset();
        return;
      }
      renderGallery(hits);
      loading.style.display = 'none';
      formEl.reset();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching pictures. Please try again later.',
        position: 'topRight',
      });
      loading.style.display = 'none';
    });
});
