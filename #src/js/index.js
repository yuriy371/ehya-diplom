import modileMenu from "./modules/modileMenu"
import like from "./modules/like"
import sliderSwiper from "./modules/sliderSwiper"
import sliderUnpub from "./modules/sliderUnpub"
import valid from "./modules/valid"

document.addEventListener("click", (e) => {
	const targ = e.target

	like(e, targ)
	valid()
	modileMenu(e, targ)
});

sliderSwiper()
sliderUnpub()
