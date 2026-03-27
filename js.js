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
		year: '2018',
		videos: [
			{ label: 'One', href: 'https://www.facebook.com' },
			{ label: 'Two', href: '#' },
			{ label: 'Three', href: '#' },
			{ label: 'Four', href: '#' },
			{ label: 'Five', href: '#' },
		],
	},
	{
		year: '2020',
		videos: [
			{ label: 'One', href: '#' },
			{ label: 'Two', href: '#' },
			{ label: 'Three', href: '#' },
			{ label: 'Four', href: '#' },
			{ label: 'Five', href: '#' },
		],
	},
	{
		year: '2021',
		videos: [
			{ label: 'One', href: '#' },
			{ label: 'Two', href: '#' },
			{ label: 'Three', href: '#' },
			{ label: 'Four', href: '#' },
			{ label: 'Five', href: '#' },
		],
	},

	{
		year: '2022',
		videos: [
			{ label: 'One', href: '#' },
			{ label: 'Two', href: '#' },
			{ label: 'Three', href: '#' },
			{ label: 'Four', href: '#' },
			{ label: 'Five', href: '#' },
		],
	},

	{
		year: '2023',
		videos: [
			{ label: 'One', href: '#' },
			{ label: 'Two', href: '#' },
			{ label: 'Three', href: '#' },
			{ label: 'Four', href: '#' },
			{ label: 'Five', href: '#' },
		],
	},

	{
		year: '2026',
		videos: [{ label: 'one', href: '#' }],
	},

	{
		year: '2014',
		videos: [{ label: 'one', href: '#' }],
	},
];

const [one, two, three, four, five, six, seven] = videoButton;
const videoYearBtns = selectAll('.video-year-select-btns');
const [oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn] = videoYearBtns;

//!!Generate View Videos Button Functions

function generateVideoLinkButton(button, obj) {
	const parent = getById('view-videos-container');
	const viewVideoBtns = 'view-video-btn';
	const videoYearDisplay = getById('video-year-display');
	button.addEventListener(click, () => {
		obj.videos.forEach((video) => {
			const videoLink = createElement('a');

			addClass(videoLink, viewVideoBtns);

			textContent(videoLink, video.label);
			videoLink.href = video.href;
			console.log(video.label);
			textContent(videoYearDisplay, obj.year);
			appendChild(parent, videoLink);
		});
	});
}

generateVideoLinkButton(oneBtn, one);

//Create a function that clears out the view videos container when selecting a new year(set of) videos to view.
//Attempt to mka the generateVideoLinkButton function a call back function
