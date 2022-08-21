console.log("Hello world");

import setDropdown from "./dropdown.js";

// Set navbar dropdown
setDropdown("navbar-menu", {
	menuClassName: "hide-mobile",
});

// Set the navbar sublinks dropdown
const navbarMenuTargets = ["product-sublinks", "company-sublinks", "connect-sublinks"];
navbarMenuTargets.forEach((target) => setDropdown(target));
