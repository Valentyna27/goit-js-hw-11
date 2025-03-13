// Add iziToast library  and import functions from modules

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { refillGallery, clearGallery } from './js/render-functions';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const inputValue = form.search.value.trim();

  //Checking for valid value in input
  if (inputValue === '') {
    iziToast.error({
      title: ' Error',
      titleColor: '#FFFFFF',
      icon: 'material-icons',
      iconText: 'error',
      iconColor: '#FFFFFF',
      message: `Please, fill in the field`,
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'bottomRight',
      close: false,
      layout: 2,
      timeout: 10000,
    });
    return;
  }

  loader.style.display = 'block';
  clearGallery();

  getImages(inputValue)
    .then(images => {
      loader.style.display = 'none';

      if (images.length === 0) {
        iziToast.error({
          title: 'No images',
          titleColor: '#FFFFFF',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          position: 'bottomRight',
          icon: 'material-icons',
          iconText: 'error',
          iconColor: '#FFFFFF',
          messageColor: '#FFFFFF',
          close: false,
          layout: 2,
          timeout: 10000,
        });
        return;
      }
      refillGallery(images);
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        titleColor: '#FFFFFF',
        message: 'Something went wrong!',
        backgroundColor: '#EF4040',
        position: 'bottomRight',
        icon: 'material-icons',
        iconText: 'error',
        iconColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        close: false,
        layout: 2,
        timeout: 10000,
      });
    })
    .finally(() => {
      form.reset();
    });
});
