const langButtonEn = document.querySelector('#langButtonEn');
const popupMessage = document.querySelector('.header__popup');
const popupCloseButton = document.querySelector('.header__popup-close');

function showPopupMessage() {
  popupMessage.setAttribute('style', 'display: flex');
}

function closePopupMessage() {
  popupMessage.setAttribute('style', 'display: none');
}

langButtonEn.addEventListener('click', showPopupMessage);
popupCloseButton.addEventListener('click', closePopupMessage);