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

// const closeLink = document.querySelector('.close-menus');
// const openLink = document.querySelector('.open-menus');
const overlayContainer = document.querySelector('.overlay-container');
const menus = overlayContainer.querySelector('.menus');

const toggleMenuLabel = document.querySelector('.toggle-sidebar-menu-lbl');
// const openMenuLabel = document.querySelector('.open-sidebar-menu-lbl');
// const closeMenuLabel = document.querySelector('.close-sidebar-menu-lbl');

// const toggleMenuOpen = document.querySelector('.toggle-sidebar-menu input[type="checkbox"]:checked');
// const toggleMenuClose = document.querySelector('.toggle-sidebar-menu input[type="checkbox"]');

function toggleMobileMenus(_evt) {
    console.log(`🚀 ~ toggleMobileMenus ~ _evt:`, _evt);
    //     if (toggleMenuCheckbox.checked) {
    //         menus.classList.add('slide-in');
    //         setTimeout(() => overlayContainer.classList.toggle('show'), 500);
    //     } else {
    //         overlayContainer.classList.toggle('show');
    //         setTimeout(() => menus.classList.toggle('slide-in'), 500);
    //     }
    // }

    if (menus.classList.contains('slide-in')) {
        menus.classList.remove('slide-in');
        menus.classList.add('slide-out');
        // setTimeout(() => overlayContainer.classList.add('show'), 500);
    } else {
        menus.classList.remove('slide-out');
        menus.classList.add('slide-in');

        // setTimeout(() => menus.classList.add('slide-in'), 500);
    }

    if (overlayContainer.classList.contains('show')) {
        overlayContainer.classList.remove('show');
        overlayContainer.classList.add('hide');

        // setTimeout(() => menus.classList.remove('slide-out'), 500);
    } else {
        // setTimeout(() => overlayContainer.classList.add('show'), 500);
        overlayContainer.classList.remove('hide');
        overlayContainer.classList.add('show');
    }
}

toggleMenuLabel.addEventListener('click', toggleMobileMenus);

// function openMobileMenus(_evt) {
//     console.log(`🚀 ~ openMobileMenus ~ _evt:`, _evt);
//     if (toggleMenuCheckbox.checked) {
//         menus.classList.add('slide-in');
//         setTimeout(() => overlayContainer.classList.toggle('show'), 500);
//     } else {
//         overlayContainer.classList.toggle('show');
//         setTimeout(() => menus.classList.toggle('slide-in'), 500);
//     }
// }

// menus.classList.add('slide-in');
// setTimeout(() => overlayContainer.classList.add('show'), 500);

// if (menus.classList.contains('slide-in')) {
//     menus.classList.remove('slide-in');
//     menus.classList.add('slide-out');
//     // setTimeout(() => overlayContainer.classList.add('show'), 500);
// } else {
//     menus.classList.remove('slide-out');
//     menus.classList.add('slide-in');

//     // setTimeout(() => menus.classList.add('slide-in'), 500);
// }

// if (overlayContainer.classList.contains('show')) {
//     overlayContainer.classList.remove('show');
//     overlayContainer.classList.add('hide');

//     // setTimeout(() => menus.classList.remove('slide-out'), 500);
// } else {
//     // setTimeout(() => overlayContainer.classList.add('show'), 500);
//     overlayContainer.classList.remove('hide');
//     overlayContainer.classList.add('show');
// }
// }

// function closeMobileMenus(_evt) {
//     console.log(`🚀 ~ closeMobileMenus ~ _evt:`, _evt);
//     if (toggleMenuCheckbox.checked) {
//         menus.classList.add('slide-in');
//         setTimeout(() => overlayContainer.classList.toggle('show'), 500);
//     } else {
//         overlayContainer.classList.toggle('show');
//         setTimeout(() => menus.classList.toggle('slide-in'), 500);
//     }
// }

// menus.classList.remove('slide-in');
// setTimeout(() => overlayContainer.classList.remove('show'), 500);

// if (menus.classList.contains('slide-in')) {
//     menus.classList.add('slide-out');
// } else {
//     menus.classList.remove('slide-out');
//     menus.classList.add('slide-in');

//     // setTimeout(() => menus.classList.add('slide-in'), 500);
// }

// if (overlayContainer.classList.contains('show')) {
//     overlayContainer.classList.remove('show');
//     overlayContainer.classList.add('hide');

//     // setTimeout(() => menus.classList.remove('slide-out'), 500);
// } else {
//     // setTimeout(() => overlayContainer.classList.add('show'), 500);
//     overlayContainer.classList.remove('hide');
//     overlayContainer.classList.add('show');
// }
// }

// openMenuLabel.addEventListener('click', openMobileMenus);
// closeMenuLabel.addEventListener('click', closeMobileMenus);

// closeLink.addEventListener('click', toggleMobileMenus);
// openLink.addEventListener('click', toggleMobileMenus);
