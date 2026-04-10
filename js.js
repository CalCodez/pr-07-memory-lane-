const getByClass = (className) => document.getElementsByClassName(className);
const getById = (id) => document.getElementById(id);
const createElement = (element) => document.createElement(element);
const appendChild = (parent, child) => parent.appendChild(child);
const removeChild = (parent, child) => parent.removeChild(child);
const addClass = (element, className = '') => element.classList.add(className);
const removeClass = (element, className) => element.classList.remove(className);
const toggleClass = (element, className) => element.classList.toggle(className);
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const textContent = (element, text) => (element.textContent = text);

const click = 'click';
const keyup = 'keyup';
const flexActive = 'flex-active';
const flexInactive = 'flex-inactive';

//**Mobile Menu Function */
function toggleMobileMenu(toggle, menu) {
	const menuActive = 'menu-active';

	toggle.addEventListener(click, () => {
		if (!menu.classList.contains(menuActive)) {
			toggleClass(menu, menuActive);

			for (let elm of menu.children) {
				setTimeout(() => {
					elm.style.visibility = 'visible';
				}, 200);
			}
		} else {
			if (menu.classList.contains(menuActive)) {
				for (let elm of menu.children) {
					elm.style.visibility = 'hidden';
				}
				toggleClass(menu, menuActive);
			}
		}
	});

	for (let elm of menu.children) {
		elm.addEventListener(click, () => {
			if (menu.classList.contains(menuActive)) {
				toggleClass(menu, menuActive);

				for (let self of menu.children) {
					self.style.visibility = 'hidden';
				}
			}
		});
	}
	window.addEventListener(keyup, (e) => {
		if (e.key == 'Escape' && menu.classList.contains(menuActive)) {
			toggleClass(menu, menuActive);

			for (let elm of menu.children) {
				elm.style.visibility = 'hidden';
			}
		}
	});
}

const mobileMenuToggle = getById('mobile-menu-toggle');
const summaryPageMenu = getById('mobile-menu');

toggleMobileMenu(mobileMenuToggle, summaryPageMenu);

//**Summary Page
