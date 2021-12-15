import modileMenu from "./modules/modileMenu"
import like from "./modules/like"
import sliderSwiper from "./modules/sliderSwiper"
import sliderUnpub from "./modules/sliderUnpub"

document.addEventListener("click", (e) => {
	const targ = e.target

	like(e, targ)

	modileMenu(e, targ)
});

sliderSwiper()
sliderUnpub()