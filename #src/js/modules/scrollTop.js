const scrollTop = () => {
	let btnUp = document.querySelector(".up")
	let elemUp = document.getElementById("top")

	window.addEventListener("scroll", () => {
		if (document.documentElement.scrollTop >= 600) {
			btnUp.classList.add("view")
		} else {
			btnUp.classList.remove("view")
		}
	})

	btnUp.addEventListener("click", (e) => {
		e.preventDefault()
		elemUp.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})

}

export default scrollTop