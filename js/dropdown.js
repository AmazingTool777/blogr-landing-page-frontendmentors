// Default options
const defaultOptions = {
	toggleClassName: "toggle-open",
	menuClassName: "dropdown-open",
};

// Function that toggles the classNames of dropdowns on click
function toggleDropdown(e, toggle, menu, options) {
	e.stopPropagation();
	toggle.classList.toggle(options.toggleClassName);
	menu.classList.toggle(options.menuClassName);
}

// Sets a dropdown stystem on HTML elements
export default function setDropdown(toggleTarget, _options = defaultOptions) {
	const options = { ...defaultOptions, ..._options };
	const toggle = document.querySelector(`[data-toggle="${toggleTarget}"]`);
	const menu = document.getElementById(toggleTarget);
	let isOpen = false;
	toggle.onclick = (e) => {
		toggleDropdown(e, toggle, menu, options);
		isOpen = !isOpen;
	};
	window.addEventListener("click", (e) => {
		if (isOpen && !menu.contains(e.target)) {
			toggleDropdown(e, toggle, menu, options);
			isOpen = false;
		}
	});
}