import modileMenu from "./modules/modileMenu"
import sliderSwiper from "./modules/sliderSwiper"

document.addEventListener("click", (e) => {
	const targ = e.target

	modileMenu(e, targ)
});

sliderSwiper();
