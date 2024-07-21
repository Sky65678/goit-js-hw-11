import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImage } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryIt = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const formEL = document.querySelector('.search-form');
const inputEl = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
export const ulElem = document.querySelector('.gallery');
const moreBtnEl = document.querySelector('.more-img-btn');

let currentPage = 1;
let perPage = 15;
let maxPage = 0;
let userImg = '';

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

function hideBtn() {
    moreBtnEl.classList.add('hidden');
}

function showBtn() {
    moreBtnEl.classList.remove('hidden');
}

formEL.addEventListener('submit', async e => {
    currentPage = 1;
    e.preventDefault();
    userImg = inputEl.value.trim();
    showLoader();
    if (userImg === '') {
        ulElem.innerHTML = '';
        iziToast.error({
            title: '',
            message: 'Enter query to see rezults!',
            position: 'topRight',            
        })
        hideLoader();
        return;
    }
    try {
        const { hits, totalHits } = await getImage(userImg, currentPage);
        maxPage = Math.ceil(totalHits / perPage);
        console.log(maxPage);
        if (hits.length === 0) {
            iziToast.error({
                title: '',
                message:
                    'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                maxWidth: '432px',
                color: '#ef4040',
            })
            ulElem.innerHTML = '';
            updateBtnStatus();
            hideLoader();
            formEL.reset();
            return;
        }
        const markup = imagesTemplate(hits);
        ulElem.innerHTML = markup;
        galleryIt.refresh();
        hideLoader();
        formEL.reset();
    } catch {
        (err) => {
            console.log(err);
        }
    };
    updateBtnStatus();
});

moreBtnEl.addEventListener('click', async () => {
    currentPage++;
    hideBtn();
    showLoader();
    try {
        const { hits } = await getImage(userImg, currentPage);
        const markup = imagesTemplate(hits);
        ulElem.insertAdjacentHTML('beforeend', markup);
        galleryIt.refresh();
        scrollGallery();
        hideLoader();
    } catch {
        err => {
        console.log(err);
        }
    }
    updateBtnStatus();
})

function updateBtnStatus() {
  if (currentPage >= maxPage) {
    hideBtn();
    if (maxPage) {
      iziToast.info({
        title: '',
        message: 'We`re sorry, but you`ve reached the end of search results.',
      });
    }
  } else {
    showBtn();
  }
}

function scrollGallery() {
  const liElem = ulElem.children[0];
  const height = liElem.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}


