//++Static Page

const staticToggleBtns = selectAll('.static-toggle-btns');
const [storiesToggle, imagesToggle, researchToggle] = staticToggleBtns;

const staticContentHeader = getById('static-content-header');

const staticStoriesContainer = getById('static-stories-container');
const staticImagesContainer = getById('static-images-container');
const staticResearchContainer = getById('static-research-container');

function toggleStaticContainer(btn, targetContainer, container1, container2) {
	btn.addEventListener(click, () => {
		if (
			!targetContainer.classList.contains(flexActive) &&
			container1.classList.contains(flexActive) &&
			!container2.classList.contains(flexActive)
		) {
			toggleClass(targetContainer, flexActive);
			toggleClass(container1, flexActive);
		} else if (
			!targetContainer.classList.contains(flexActive) &&
			!container1.classList.contains(flexActive) &&
			container2.classList.contains(flexActive)
		) {
			toggleClass(targetContainer, flexActive);
			toggleClass(container2, flexActive);
		}

		textContent(staticContentHeader, btn.value);
	});
}

toggleStaticContainer(
	imagesToggle,
	staticImagesContainer,
	staticStoriesContainer,
	staticResearchContainer,
);

toggleStaticContainer(
	researchToggle,
	staticResearchContainer,
	staticImagesContainer,
	staticStoriesContainer,
);
toggleStaticContainer(
	storiesToggle,
	staticStoriesContainer,
	staticResearchContainer,
	staticImagesContainer,
);

//++Stories Object

const stories = [
	{
		id: 'story1',
		title: 'Main Story',
		story: `	(placeHolder) I once went on a road trip... it was like a five thousand miles to no
							where... total head trip right. I was pushing my whip with little devils on my
							shoulders. Sleep deprivation on a journey in search for peace of mind... Somehow
							tweaked into mental destruction. I have yet to fine the words to call it. Funny
							thing... it's some where in my mine but I've since been transformed into a horded of
							thoughts and phrases I involuntary adopted and can't return to sender.'
							(INSERT FULL STORY HERE)`,
	},

	{
		id: 'story1',
		title: 'Story One',
		story: `	Mannn... it's like... I am not trying to walk around with mfs sounding off in my head
							at will.. against mine at that... Iam NOT about to keep suffering in slience on shit
							that I know for a fact I can 100% talk about being how they are 100% MY
							experiences.... fucked up part is... wait... I do this with ease... Me!...`,
	},
	{
		id: 'story2',
		title: 'Story Two',
		story: `I'm trapped in an mental asylum within my own cranium walls. Crazy part... I let it
							happen and I'm plotting an escape. Casualties expected. 🤷‍♂️ I had nothing to do with
							that (In the way)... Methods thing'`,
	},
	{
		id: 'story3',
		title: 'Story Three',
		story: `This is the replacement text of the last scream`,
	},

	{
		id: 'staticHeroText',
		title: 'static hero text',
		story: `Years of dealing with fuck shit, has be just years of dealing with fuck shit. But when the fuck shit has me got me  completely fucked up is a line. When you have to express to a mf... I DO NOT BELONG TO YOU... shit has gone to far.  And now comes the You gotta die, we got to delete you, you about to get jumped and a bunch of fuck shit that does not trump the prime issues. What you are doing to me is NOT ok and I dont like, I dont care you sent you! RETURN THE SENDER MF`,
	},
];

const [mainStory, story1, story2, story3, static] = stories;

const storyBtns = selectAll('.story-btns');
const [mainStoryBtn, story1Btn, story2Btn, story3Btn] = storyBtns;

const storyContentWrapper = getById('story-content-wrapper');
const mainStoryContainer = getById('mainStoryContainer');

function generateStoryContainer(obj) {
	const storyWrapper = createElement('div');
	addClass(storyWrapper, 'static-story-wrapper');
	addClass(storyWrapper, 'content-section');
	addClass(storyWrapper, 'container');

	const storyTitle = createElement('h2');
	textContent(storyTitle, obj.title);

	const story = createElement('p');
	addClass(story, 'content-section');
	textContent(story, obj.story);

	appendChild(storyContentWrapper, storyWrapper);
	appendChild(storyWrapper, storyTitle);
	appendChild(storyWrapper, story);
}

function toggleStory(btn, storyObj) {
	let test = generateStoryContainer(storyObj);

	btn.addEventListener(click, () => {
		if (btn.value !== 'mainStory' && !mainStoryContainer.classList.contains(flexInactive)) {
			toggleClass(mainStoryContainer, flexInactive);
			generateStoryContainer(storyObj);
		} else if (btn.value !== 'mainStory' && mainStoryContainer.classList.contains(flexInactive)) {
			storyContentWrapper.replaceChildren();
			generateStoryContainer(storyObj);
		} else if (btn.value === 'mainStory' && mainStoryContainer.classList.contains(flexInactive)) {
			storyContentWrapper.replaceChildren();
			generateStoryContainer(storyObj);
		}
	});
}

toggleStory(mainStoryBtn, mainStory);
toggleStory(story1Btn, story1);
toggleStory(story2Btn, story2);
toggleStory(story3Btn, story3);

//++Static Hero Text
const staticHero = getById('static-hero-text');
textContent(staticHero, static.story);
