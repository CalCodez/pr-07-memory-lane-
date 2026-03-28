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
			{ label: 'Six', href: '#' },
			{ label: 'Seven', href: '#' },
			{ label: 'Eight', href: '#' },
			{ label: 'Nine', href: '#' },
			{ label: 'Ten', href: '#' },
		],
	},
	{
		year: '2021',
		videos: [
			{ label: 'Eleven', href: '#' },
			{ label: 'Twelve', href: '#' },
			{ label: 'Thirteen', href: '#' },
			{ label: 'Fourteen', href: '#' },
			{ label: 'Fifteen', href: '#' },
		],
	},

	{
		year: '2022',
		videos: [
			{ label: 'Sixteen', href: '#' },
			{ label: 'Seventeen', href: '#' },
			{ label: 'Eighteen', href: '#' },
			{ label: 'Nineteen', href: '#' },
			{ label: 'Twenty', href: '#' },
		],
	},

	{
		year: '2023',
		videos: [
			{ label: 'Twenty-one', href: '#' },
			{ label: 'Twenty-two', href: '#' },
			{ label: 'Twenty-three', href: '#' },
			{ label: 'Twenty-four', href: '#' },
			{ label: 'Twenty-five', href: '#' },
		],
	},

	{
		year: '2026',
		videos: [{ label: '2026', href: '#' }],
	},

	{
		year: '2014',
		videos: [{ label: 'Graphic', href: './triggerPage.html' }],
	},
];

const [year2018, year2020, year2021, year2022, year2023, year2026, year2014] = videoButton;
//++Video Year Buttons
const videoYearBtns = selectAll('.video-year-select-btns');
const [btn2018, btn2020, btn2021, btn2022, btn2023, btn2026, btn2014] = videoYearBtns;

//!!Generate View Videos Button Functions

function generateVideoLinkButton(button, obj) {
	const activeParent = 'isActive';
	const parent = getById('view-videos-container');
	const viewVideoBtns = 'view-video-btn';
	const videoYearDisplay = getById('video-year-display');
	button.addEventListener(click, () => {
		if (!parent.classList.contains(activeParent)) {
			obj.videos.forEach((video) => {
				button.id = 'activeButton'; //(adds the css activeButton styles )
				addClass(parent, activeParent);

				const videoLink = createElement('a');

				addClass(videoLink, viewVideoBtns);

				textContent(videoLink, video.label);
				videoLink.href = video.href;
				textContent(videoYearDisplay, obj.year);
				appendChild(parent, videoLink);
			});
		} else if (parent.classList.contains(activeParent)) {
			for (let buttonId of videoYearBtns) {
				if (buttonId.id == 'activeButton') {
					buttonId.removeAttribute('id'); //(removes the css activeButton styles )
				}
			}
			console.log(parent);
			parent.replaceChildren();
			removeClass(parent, activeParent);
			obj.videos.forEach((video) => {
				button.id = 'activeButton'; //(adds the css activeButton styles )

				addClass(parent, activeParent);

				const videoLink = createElement('a');

				addClass(videoLink, viewVideoBtns);

				textContent(videoLink, video.label);
				videoLink.href = video.href;
				textContent(videoYearDisplay, obj.year);
				appendChild(parent, videoLink);
			});
		}
	});
}

generateVideoLinkButton(btn2018, year2018);
generateVideoLinkButton(btn2020, year2020);
generateVideoLinkButton(btn2021, year2021);
generateVideoLinkButton(btn2022, year2022);
generateVideoLinkButton(btn2023, year2023);
generateVideoLinkButton(btn2026, year2026);
generateVideoLinkButton(btn2014, year2014);

//Create a function that clears out the view videos container when selecting a new year(set of) videos to view.
//Attempt to mka the generateVideoLinkButton function a call back function
