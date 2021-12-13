import modileMenu from "./modules/modileMenu"


document.addEventListener("click", (e) => {
	const targ = e.target

	modileMenu(e, targ)
})