const sliderSwiper = () => {
	new Swiper(".theme__slider", {
		navigation: {
			nextEl: '.theme-button-next',
			prevEl: '.theme-button-prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 10,
				slidesPerView: 2,
				slidesPerGroup: 2,
				grid: {
					fill: "row",
					rows: 2,
				},
			},
			480: {
				spaceBetween: 10,
				slidesPerView: 2,
				slidesPerGroup: 2,
				grid: {
					fill: "row",
					rows: 2,
				},
			},
			576: {
				spaceBetween: 10,
				slidesPerView: 2,
				slidesPerGroup: 2,
				grid: {
					fill: "row",
					rows: 2,
				},
			},
			768: {
				spaceBetween: 10,
				slidesPerView: 2,
				slidesPerGroup: 2,
				grid: {
					fill: "row",
					rows: 2,
				},
			},
			992: {
				spaceBetween: 26,
				slidesPerView: 2,
				slidesPerGroup: 2,
				grid: {
					fill: "row",
					rows: 2,
				},
			},
			1200: {
				spaceBetween: 26,
				slidesPerView: 2,
				slidesPerGroup: 2,
				grid: {
					fill: "row",
					rows: 2,
				},
			},
			1400: {
				spaceBetween: 26,
				slidesPerView: 4,
			}
		}
	});
}
export default sliderSwiper