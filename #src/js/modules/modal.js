import $ from "swiper/shared/dom";

const modal = () => {
	let modalBtn = $("[data-toggle=modal]");
	let closeModalBtn = $(".modal__close");

	let modalOverlay = $(".modal__overlay");
	let modalDialog = $(".modal__dialog");

	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();

	let openModal = () => {
		modalOverlay.addClass("modal__overlay--visible")
		modalDialog.addClass("modal__dialog--visible")
		$("body").addClass("body__hidden")
		$("body").css("paddingRight", scrollWidth)
		$(".up").css("marginRight", scrollWidth)
		$("body").removeClass("overflow")
		$(".header__nav-wrapper").removeClass("open")
	};

	let closeModal = (e) => {
		e.preventDefault()
		modalOverlay.removeClass("modal__overlay--visible")
		modalDialog.removeClass("modal__dialog--visible")
		$("body").removeClass("body__hidden")
		$("body").css("paddingRight", 0)
		$(".up").css("marginRight", 0)
	};

	modalBtn.on("click", openModal);
	closeModalBtn.on("click", closeModal);
	modalOverlay.on("click", closeModal);

	$(document).on('keydown', (e) => {
		if (e.which === 27) { // key = esc (27)
			modalOverlay.removeClass("modal__overlay--visible")
			modalDialog.removeClass("modal__dialog--visible")
			$("body").removeClass("body__hidden")
			$("body").css("paddingRight", 0)
			$(".up").css("marginRight", 0)
			return false;
		}
	});
}

export default modal