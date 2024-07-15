
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 'auto',
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


		

// Get modal and buttons
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');


// Function to close modal
closeModalButton.addEventListener('click', () => {
	modal.classList.add('hidden')
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.classList.add('hidden');
	}
});
