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
