const like = (e, targ) => {
	let likeBtn = document.querySelectorAll(".recom__like-btn>.icon")

	if (targ.closest(".recom__like-btn>.icon")) {
		likeBtn.forEach(item => {
			if (targ.closest(".icon") === item) {
				item.classList.toggle("active")
			}
		});
	}
}

export default like