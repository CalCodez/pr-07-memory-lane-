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

const questions = [
	{
		number: 'Q1',
		question: `Why is it that my whole life... Or actually I should I say my own life, do not belong to me?`,
		remark: 'This is some straight up bullshit',
		emoji: '🙄',
	},
	{
		number: 'Q2',
		question: 'Why is it that my own thought are not my own?',
		remark: `Can you imagine what it's like to not be the only person in your head? I mean it's one thing to have someone stimulate your thinking, but to be in a steady state of mind fuck..wild!`,
		emoji: '🤯',
	},
	{
		number: 'Q3',
		question: `Why is it that me as a grown ass man don't have any privacy?`,
		remark: 'Like national TV... really> My whole life is that of the Truman Show. Ass!',
		emoji: '📺',
	},
	{
		number: 'Q4',
		question: `Why is it that I can go to the doctors and seek help and
        carrying on, not just medical (ENT, Dermatology, Gastrologist, ER) and all I do is get
        bullshitted?`,
		remark: 'My insurance gets billed tho. I mean...',
		emoji: '😒',
	},
	{
		number: 'Q5',
		question: `Why is my life a whole set up?`,
		remark: 'Enough Said',
		emoji: '🎯',
	},
	{
		number: 'Q6',
		question: `Why is it that every device I'm looking at... somebody is looking at me?`,
		remark: 'This one is not really that much of a stinger. I mean if you now you know!',
		emoji: '🤷‍♂️',
	},
	{
		number: 'Q7',
		question: `Why is it that even while being watched, stalked, harassed and some more shit... I still get treated as if I'm the one who can't be trusted..?`,
		remark: `That shit don't even match or make sense!`,
		emoji: '🫤',
	},
	{
		number: 'Q8',
		question: `Why is it what my demise can be plotted, discussed. displayed in my face, fed back to me in real time, and some more shit... `,
		remark: `Like... they couldn't keep that shit to themselves?... That's wild!`,
		emoji: '🤯',
	},
	{
		number: 'Q9',
		question: `Why is it that, my grown ass is always in "trouble"`,
		remark: `Thoughts in my head get me
        all screamed on and carrying on. Like… yeah no. I hate it.  my grown ass wake up every day in the
        Principal's Office? I'm talking right off the wake up. Like What the actual fuck!`,
		emoji: '🤡',
	},
	{
		number: 'Q10',
		question: `Why am I always in a constant battle for my own head space?`,
		remark: `When I tell you that this is most annoying shit ever. You will never know the struggles of being forced to deal with mfs who has the audacity so rich that it has transformed into an perverse entitlement. And rights to you in all aspects being attached to said perverse entitlement...`,
		emoji: '😬',
	},
];

function generateQuestionCard(arg) {
	const questionWall = getById('question-wall');

	const questionCard = createElement('div');
	addClass(questionCard, 'question-card');
	addClass(questionCard, 'container');

	const questionCardSpanContainer = createElement('div');
	addClass(questionCardSpanContainer, 'question-card-span-container');
	addClass(questionCardSpanContainer, 'container');
	appendChild(questionCard, questionCardSpanContainer);

	const numberSpan = createElement('span');
	addClass(numberSpan, 'q-span');
	textContent(numberSpan, arg.number);

	const emojiSpan = createElement('span');
	addClass(emojiSpan, 'emoji-span');
	textContent(emojiSpan, arg.emoji);

	appendChild(questionCardSpanContainer, numberSpan);
	appendChild(questionCardSpanContainer, emojiSpan);

	const question = createElement('p');
	addClass(question, 'content-summary');
	addClass(question, 'question');
	textContent(question, arg.question);
	appendChild(questionCard, question);

	const remark = createElement('em');
	addClass(remark, 'remarks');
	textContent(remark, arg.remark);
	appendChild(questionCard, remark);

	appendChild(questionWall, questionCard);
}

questions.forEach((card) => {
	generateQuestionCard(card);
});
