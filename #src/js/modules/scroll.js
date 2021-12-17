const scroll = (e, targ) => {
	let nameTag = targ

	let smoothScroll = (itemScrol) => {
		let blockID = itemScrol.getAttribute('href').slice(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}

	if (targ.matches("ul>li>a")) {
		let blockID = nameTag.getAttribute('href').slice(1)
		if (document.getElementById(blockID)) {
			e.preventDefault()
			smoothScroll(nameTag)
		}
		$("body").removeClass("overflow")
		$(".header__nav-wrapper").removeClass("open")
	}
}

export default scroll