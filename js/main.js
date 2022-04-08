const listNav = document.querySelector('.list-nav');
const modal = document.querySelector('.modal');
const btnNav = document.querySelector('.btn-nav');

let btnNavClasses = btnNav.classList;
let modalClasses = modal.classList;
let listNavClasses = listNav.classList;

window.addEventListener('load', (e) => {
    showMobileNav(window.innerWidth);
})

window.addEventListener('resize', (e) => {
    showMobileNav(window.innerWidth);
})

btnNav.addEventListener('click', (e) => {
    if (btnNavClasses.contains('btn-close')) {
        btnNavClasses.remove('btn-close');
        modalClasses.add('list-hide');
    } else if (!btnNavClasses.contains('btn-close')) {
        btnNavClasses.add('btn-close');
        modalClasses.remove('list-hide');
    }
})

function showMobileNav(width) {
    if (width < 1000) {
        listNavClasses.add('list-hide');
        btnNavClasses.remove('btn-nav-hide');
        btnNavClasses.contains('btn-close') && btnNavClasses.remove('btn-close');
    } else {
        listNavClasses.remove('list-hide')
        btnNavClasses.add('btn-nav-hide');
        modalClasses.add('list-hide');
    }
}