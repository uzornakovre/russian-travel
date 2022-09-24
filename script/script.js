const langButtonEn = document.querySelector('#langButtonEn');
const popupMessage = document.querySelector('.header__popup');

function showPopupMessage() {
  popupMessage.setAttribute('style', 'display: flex');
}

function closePopupMessage() {
  popupMessage.setAttribute('style', 'display: none');
}

langButtonEn.addEventListener('mouseover', showPopupMessage);
langButtonEn.addEventListener('mouseout', closePopupMessage);