const modileMenu = (e, targ) => {
    let menuMob = document.querySelector(".header__nav-wrapper")

    if (targ.closest(".menu-button")) {
        menuMob.classList.toggle("open");
        document.querySelector("body").classList.toggle("overflow");
    }
}

export default modileMenu