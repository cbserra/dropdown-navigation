
function toggleCssClass(evt, element, cssClass) {
    evt.preventDefault();
    element.classList.toggle(cssClass);
}

const featuresLink = document.querySelector('.features-link');
const featuresItem = document.querySelector('.features-item');

featuresLink.addEventListener('click', evt => toggleCssClass(evt, featuresItem, 'open'));


const companyLink = document.querySelector('.company-link');
const companyItem = document.querySelector('.company-item');

companyLink.addEventListener('click', evt => toggleCssClass(evt, companyItem, 'open'));

const closeLink = document.querySelector('.close-menus');
const openLink = document.querySelector('.open-menus');
const overlayContainer = document.querySelector('.overlay-container');

function toggleMobileMenus(_evt) {
    overlayContainer.classList.toggle('show');
}

closeLink.addEventListener('click', toggleMobileMenus);
openLink.addEventListener('click', toggleMobileMenus);