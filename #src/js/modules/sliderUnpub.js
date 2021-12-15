const sliderUnpub = () => {
	new Swiper(".unpublished__slider", {

		navigation: {
			disabledClass: "unpublished-button-disabled",
			nextEl: '.unpublished-slider-button-next',
			prevEl: '.unpublished-slider-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			481: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			769: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 26,
			}
		}
	});
}

export default sliderUnpub