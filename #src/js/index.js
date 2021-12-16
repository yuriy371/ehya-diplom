import modileMenu from "./modules/modileMenu"
import like from "./modules/like"
import sliderSwiper from "./modules/sliderSwiper"
import sliderUnpub from "./modules/sliderUnpub"
import valid from "./modules/valid"
import modal from "./modules/modal"
import scrollTop from "./modules/scrollTop"

document.addEventListener("click", (e) => {
	const targ = e.target

	like(e, targ)
	valid()
	modal()
	modileMenu(e, targ)
});

sliderSwiper()
sliderUnpub()

scrollTop()
// document.body.contentEditable = true