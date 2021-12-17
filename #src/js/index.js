import mobileMenu from "./modules/mobileMenu"
import like from "./modules/like"
import sliderSwiper from "./modules/sliderSwiper"
import sliderUnpub from "./modules/sliderUnpub"
import valid from "./modules/valid"
import modal from "./modules/modal"
import scrollTop from "./modules/scrollTop"
import scroll from "./modules/scroll"

document.addEventListener("click", (e) => {
	const targ = e.target

	like(e, targ)
	valid()
	scroll(e, targ)
	mobileMenu(e, targ)
});

sliderSwiper()
sliderUnpub()
modal()
scrollTop()
// document.body.contentEditable = true