// Default options
const defaultOptions = {
	toggleClassName: "toggle-open",
	menuClassName: "dropdown-open",
};

// Sets a dropdown stystem on HTML elements
export default function setDropdown(toggleTarget, _options = defaultOptions) {
	const options = { ...defaultOptions, ..._options };
	const toggle = document.querySelector(`[data-toggle="${toggleTarget}"]`);
	const menu = document.getElementById(toggleTarget);
	toggle.onclick = (e) => {
		e.stopPropagation();
		toggle.classList.toggle(options.toggleClassName);
		menu.classList.toggle(options.menuClassName);
	};
	window.addEventListener("click", (e) => {
		if (!menu.contains(e.target)) {
			e.stopPropagation();
			toggle.classList.toggle(options.toggleClassName);
			menu.classList.toggle(options.menuClassName);
		}
	});
}
