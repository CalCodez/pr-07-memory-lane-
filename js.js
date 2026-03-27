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

//++Video Page

const videoButton = [
	{
		year: '2014',
		videos: [
			{ number: 'one', href: '#' },
			{ number: 'Two', href: '#' },
			{ number: 'Three', href: '#' },
			{ number: 'Four', href: '#' },
			{ number: 'Five', href: '#' },
		],
	},
];

const [one, two, three, four, five, six] = videoButton;
const videoYearBtns = selectAll('.video-year-select-btns');
const [oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn] = videoYearBtns;

//!!Generate View Videos Button Functions

const parent = getById('view-videos-container');
const viewVideoBtns = 'view-video-btn';
const videoYearDisplay = getById('video-year-display');

function generateVideoLinkButton(button, obj) {
	button.addEventListener(click, () => {
		obj.videos.forEach((video) => {
			video = createElement('a');
			addClass(video, viewVideoBtns);
			textContent(video, video.number);
			video.href = video.href;

			textContent(videoYearDisplay, obj.year);
			appendChild(parent, video);
		});
	});
}

generateVideoLinkButton(oneBtn, one);
