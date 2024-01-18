let gridContainer = document.getElementById("grid-container");
for (i = 0; i < 798; i++) {
	let box = document.createElement("div");
	box.classList.add("box");
	box.setAttribute("id", "box");

	gridContainer.appendChild(box);
}
let boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
	box.addEventListener("mouseenter", () => {
		box.style.backgroundColor = "lightcoral";
	});

	// removes the color
	// box.addEventListener("mouseleave", () => {
	// 	box.style.backgroundColor = "cyan";
	// });
});
