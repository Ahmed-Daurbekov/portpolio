const menu = document.querySelectorAll('.menu');
const showMenu = document.querySelectorAll('.b-menu');
const hideMenu = document.querySelectorAll('.b-menu__close');
let menuLinks = document.querySelectorAll('.menu__link');
let headerLink = document.querySelector('.header__link');
let navList = document.querySelectorAll('.nav-list');

navList.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        scrollBefore(this)
    })
})

headerLink.addEventListener('click', function(e) {
    e.preventDefault()
    scrollBefore(this)
})
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        addClass(this)
        scrollBefore(this)
    })
})

function addClass(item) {
    menuLinks.forEach(item => {
        item.classList.remove('menu__link_active')
    })
    item.classList.add('menu__link_active')
}

function scrollBefore(item) {
    let id = item.getAttribute('href')
    let selector = document.querySelector(id)

    selector.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
}

showMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.forEach(menu => {
            menu.style.display = 'block'
        })
    })
})

hideMenu.forEach(btn => {
    btn.addEventListener('click', () => {
        menu.forEach(menu => {
            menu.style.display = 'none'
        })
    })
})


window.addEventListener('resize', (e) => {
    if(e.target.innerWidth > 768) {
        menu.forEach(menu => {
            menu.style.display = 'flex'
        })
    } else if (e.target.innerWidth < 768) {
        menu.forEach(menu => {
            menu.style.display = 'none'
        })
    }
})

const navbar = document.querySelector('.navbar');
const navbarBg = document.querySelector('.navbar__bg')
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', e => {
    if(window.pageYOffset >= 100) {
        navbar.style.padding = '15px';
        navbarBg.style.background = '#2b2b2b'
    } else {
        navbar.style.padding = '35px 15px'
        navbarBg.style.background = 'none'
    }
})
