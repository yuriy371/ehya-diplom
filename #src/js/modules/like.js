const like = (e, targ) => {
	let likeBtn = document.querySelectorAll(".recom__like-btn>.icon")
	let checkBtn = document.querySelectorAll(".author__checkbox>.icon")

	if (targ.closest(".recom__like-btn>.icon")) {
		likeBtn.forEach(item => {
			if (targ.closest(".icon") === item) {
				item.classList.toggle("active")
			}
		});
	} else if (targ.closest(".author__checkbox>.icon")) {
		checkBtn.forEach(item => {
			if (targ.closest(".icon") === item) {
				item.classList.toggle("active")
			}
		});
	} else {
		return
	}
}

export default like