function toggleSubMenus(evt, element) {
    evt.preventDefault();
    element.classList.toggle('open');
    element.classList.toggle('close');
}

const featuresLink = document.querySelector('.features-link');
const featuresItem = document.querySelector('.features-item');
featuresLink.addEventListener('click', (evt) => toggleSubMenus(evt, featuresItem));

const companyLink = document.querySelector('.company-link');
const companyItem = document.querySelector('.company-item');
companyLink.addEventListener('click', (evt) => toggleSubMenus(evt, companyItem));

const closeLink = document.querySelector('.close-menus');
const openLink = document.querySelector('.open-menus');
const overlayContainer = document.querySelector('.overlay-container');
const menus = document.querySelector('.menus');

function toggleMobileMenus(_evt) {
    if (menus.classList.contains('slide-in')) {
        menus.classList.toggle('slide-in');
        setTimeout(() => overlayContainer.classList.toggle('show'), 500);
    } else {
        overlayContainer.classList.toggle('show');
        setTimeout(() => menus.classList.toggle('slide-in'), 500);
    }
}

closeLink.addEventListener('click', toggleMobileMenus);
openLink.addEventListener('click', toggleMobileMenus);
