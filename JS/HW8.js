import galleryItems from './gallery-items.js';
console.log(galleryItems);

const gallery = document.querySelector('.gallery js-gallery');
console.log(gallery);


const galleryMarkup = createGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
