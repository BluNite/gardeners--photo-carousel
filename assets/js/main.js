// const created to refer to data set carousel-buttons
const buttons = document.querySelectorAll("[data-carousel-buttons]");
// forEach to loop through buttons reference/element and add event listener
buttons.forEach(button => {
	button.addEventListener("click", () => {
		const nextOrPrevOffSet = button.dataset.carousel_buttons === "next" ? 1 : -1;
		const slides = button.closest("[data-carousel]").querySelector("[data-slides");

		const presentSlide = slides.querySelector("[data-active]")
		let startingIndex = [...slides.children].indexOf(presentSlide) + nextOrPrevOffSet
		if (startingIndex < 0) startingIndex = slides.children.length - 1
		if (startingIndex >= slides.children.length) startingIndex = 0;

		slides.children[startingIndex].dataset.active = true;
		delete presentSlide.dataset.active

	})
})