// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
import galleryItemsTmp from '../template/gallery-items.hbs';

const galleryList = document.querySelector('.gallery');
const markup = galleryItemsTmp(galleryItems);

galleryList.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});
