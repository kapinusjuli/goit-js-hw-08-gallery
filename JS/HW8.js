import galleryItems from './gallery-items.js';
// console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery');
// console.log(galleryContainer);
const cardMarkup = createPictureCardMarkup(galleryItems);
const modalContainer = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');


galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);

// console.log(createPictureCardMarkup(galleryItems));

galleryContainer.addEventListener('click', onGalleryContainerClick);

modalContainer.addEventListener('click', onCloseButtonClick);

function createPictureCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
        `;
    })
    .join('');
    }

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    };
    console.log(evt.target);
    modalContainer.classList.add("is-open");
    modalImg.src = evt.target.dataset.source;
    modalImg.alt = evt.target.alt;

}

function onCloseButtonClick (evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "BUTTON") {
      return;
  };
  console.log(evt.target);
  modalContainer.classList.remove("is-open");
  modalImg.src = (unknown);
  modalImg.alt = "";
  galleryContainer.removeEventListener('click', onGalleryContainerClick);
}


