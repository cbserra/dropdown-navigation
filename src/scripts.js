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
    [featuresItem, companyItem]
        .filter((el) => el.classList.contains('open'))
        .forEach((e) => {
            console.log(`🚀 ~ [featuresItem,companyItem].filter ~ e:`, e);
            toggleSubMenus(_evt, e);
        });

    if (menus.classList.contains('slide-in')) {
        menus.classList.toggle('slide-in');
        setTimeout(() => overlayContainer.classList.toggle('show'), 500);
    } else {
        overlayContainer.classList.toggle('show');
        setTimeout(() => menus.classList.toggle('slide-in'), 500);
    }
}

function toggleMobileMenusOnWindowEnlargement(evt) {
    if (window.innerWidth >= 1024) {
        toggleMobileMenus(evt);
    }
}

closeLink.addEventListener('click', toggleMobileMenus);
openLink.addEventListener('click', toggleMobileMenus);

window.addEventListener('resize', toggleMobileMenusOnWindowEnlargement);
