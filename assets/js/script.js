
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	centeredSlides: true,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	autoplay: {
		delay:7500,
		disableOnInteraction: true
	},
	keyboard: {
	enabled: true,
},
// 	breakpoints: {
// 	769: {
// 		slidesPerView: 2,
// 		slidesPerGroup: 2,
// 	}
// },
	navigation: {
	nextEl: ".swiper-btn-next",
	prevEl: ".swiper-btn-prev",
}
})

// module.exports = swiper
