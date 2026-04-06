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
		story: `The last scream… Man look, at this point in this life of mine… I am mfn tired… wait…
							have I said that before?... Hella. Really, you think I would be used to certain shit
							at this point. But… there is just certain shit I'll never get used too. So rather than
							hoping in a whole rating rambling spill I'm just going to present a series of
							questions that I've asked myself probably a million times…. While it's unfair and some
							more shit. I more tiring than anything. Like… man ugh. Why is it that… 1. Why is it
							that my whole life… Or actually I should say my own life, do not belong to me? 2. Why
							is it that my own thoughts are not my own. a. Can you image what it's like to not be
							the only person in your head? I mean it one thing to have someone stimulate your
							thinking. But to be in a steady state of mind fuck… wild! 3. Why is that me as a grown
							as man don’t have any privacy? a. Like national TV… really. My whole life is that of
							the Turman Project. Ass! 4. Why is it that I can go to the doctors and seek help and
							carrying on, not just medical (ENT, Dermatology, Gastrologist) and all I do is get
							bullshitted> a. My insurance gets billed tho. I mean.. 5. Why is it that… man look,
							not even a question. One thing for sure a GS is going to smile in your face. That
							ain't never not been a thing. 6. Why is it that every device I'm looking… somebody is
							looking at me? Like… it really don’t matter, I don’t do shit. But still. I mean… 7.
							Why is that even while being watched, stalked, harassed and some more shit… I still
							get treated as if I can't be trusted… like that shit don’t even match. I don’t do shit
							no way. But hey, it is what it is. 8. Why is that my demise can be plotted, discussed
							among the group only to be displayed in my face like? a. Like… you couldn’t keep that
							to yourself? That's wild 9. Why is it that my grown ass wake up every day in the
							principal's office? a. I'm talking right off the wake up. Ain't did shit. 10. Why is
							it that the way my life is set up, I can't tell if the voyeurism is remote physical
							based or remote neuro monitored based. a. Because man… the conversation that be going
							on in my head. That in addition to me talking to myself. Mad annoying 11. Why is it
							that, my grown ass is always in trouble. Don’t do shit.. Thoughts in my head get me
							all screamed on and carrying on. Like… yeah no. I hate it 12. Why is it that I'm not
							even doing anything and still.. a. Man you know what it's like to always be in
							trouble. I mean I'm literally always in trouble…. Seriously… 38 years old with the
							world against me, having to take care of myself… and always in trouble. My lil
							feelings just be hurt. Like… damn and I still have to work and pay bills. Hate ittttt.
							13. Why is it that… man just ugh. So the current spill is I'm being badgered to…
							'move'… like… I did that already. And I'm not going to really get into all the fine
							fucked up details. But I went from one bazaar situation to an even more bazaar
							situation. And I've just come to the conclusion that… company is always going to keep
							me. I don’t know. Now I been on this shit for years now. Ain't none of this really
							new. But After going to this new addition of the fucked up life I've be configured.
							I'm on my final scream. And at this point if they want to send me home then so be it.
							If im going to jail then so be it. I've actually given up. This was coming… it's been
							a minute since I've been feeling like this. And I went ahead an made a dumb decision.
							Yes, I did that. But.. Well really there ain't no but, I'm mf tired man. And still…
							not really a valid excuse but it’s a factor. I'm constantly in a state of man ugh, I'm
							in enteral mental warfare, nobody around can be trusted (like in a I'm not judging
							you, but I'm not gon lie, I don’t trust you) type shit. I feel like… its valid, but
							not in a judgy way if that make sense. Anyway, my life is giving off real… flat Tv
							screeni-ish. Like I'm really don’t think the need for "control" is really called for…
							And man let me tell you it's bad…like real bad. But I ain't going to swan dive. The
							thing about it is. I like to consider myself a sensible guy, like I'm not a difficult
							niggga to deal with…. However…. My mouth is a problem… I'm not gon lie. Always has
							been. And I'm stuck in a state of I don’t need or like to be 'handled'. But the entity
							at hand is not really one I can battle on that. Like it is what it is, what can you
							do? I don’t like that shit at all though… like at all. I feel like it’s a thing of me
							not being… I don’t know human… or whatever. But I very much am indeed human. And just
							because passes have been issued to disregard me as human. I ain't get that pass for
							me. So, attitude is ass… not gon lie. I try to handle it internally though because
							well… I'm already all these things and carrying on. I don’t need them problems. Like
							I've already stated before, I'm always in trouble. So yeah. But mannn… being handled…
							too wild. I can get into all the being by myself and everybody turning their backs on
							me, but that ain't even a thing no more. I mean sucks? Yeah. However, I can't
							determine if I've pushed people away or if it's some other shit. I'm leaning towards
							that, but that's not my issue… I'm supposed to be by myself this that and the third.
							Yet… I mean… Not gon lie I used to be really hurt and walking around all sad about it.
							But It ain't that. I don’t know why my attitude is all fucked off. Wait… I do. But it
							was only family at one point I really gave a fuck about. But once I got over that I
							was good. You know like it is what it is. I can't be mad at nobody. Only say that to
							give reference the only other time I have a valid fucked up attitude. But now… tuh.
							The most annoying element of my life at this point, is the whole 'toying' bit. Like…
							that ain't cool. All the unconventional shit I go through in life, I have mental
							issues that just won't tolerate that. I mean, I probably should because, the amount of
							'run' makes me question myself as to why I don’t just absolutely hate people. Like… I
							can see how it would be valid. But… I don’t hate people. Not even for whatever, I
							still don’t see the need be toyed with when mfs know I'm sensitive… that’s ain't even
							called for. Oh but it's called and I think this whole thing of being in a constant
							state of annoyance may be why my attitude is a little fucked. But who cares right? At
							one point I was thinking nobody caring and me taking care of myself was grounds for a
							peaceful life. In a way. Oh but… fuck me. This shit is ass. Like I really am okay with
							peace forever, if you know what I mean. That's another story. Anyway, so the current
							state, I'm stressed out, always annoyed, every day is… a day. I know everybody
							plotting on me… in cahoots, or whatever…. Maybe I'm paranoid. Possibly. 🙄 nobody to
							talk to about it, can't even talk to myself about it, cause… how…why… or what the fuck
							is that about? Who the fuck am I to talk to about it, when there's nobody to talk to
							and can't even think about it. Man… like said ASS! I mean I don’t even know what angle
							to go about it. And with all the above going on and… yeah, nah, I'm good on life.
							Because man look. I'm not even doing nothing… and in trouble per usual. What that
							mean? Nothing. So I'm just like man WTF. Then the Truman show… man you me to tell me…
							Nope, not gon do it. But I ain't feeling it. It's one thing to be…. You know what
							never mind. But I'm over it. I'm at a point where it's like. I ain't digging none of
							this shit. Bring on the consequences and so I can be done with all this. I'm not
							really… man I'm tired. Simply because , Who? Nah, I'm grown! And that ain't flying and
							the fact that I can't do shit about that… I mean I can… I do. But I not really trying
							to live my life based on streaming viewers approval. It's mad weird. But again, what
							can you do? And trying to adapt to that is… like yeah I don’t understand how to do
							that. I mean I don’t do shit no way. But still it's like… fuck all that obvious shit.,
							the shit that gets me is the how of it all… You not like seeing through my eyes or
							hearing through my ears or even receiving what im thinking or no shit like that….
							Right? I mean and if so… how? I don’t even care why. My life is a whole unfair walking
							civil rights violation. That’s another one of those 'it is what it is'. But some shit
							is just next level. I ain't never in all my years of being grown thought I would be
							chastised of some… like 'what are you talking about'? Type shit. Nah fuck that not
							what, but more like how? That's one of them elements in my life that come and go. Ibe
							like knowing, then sometimes, I forget. And then it's like oh fuck. But still how? You
							know what, don’t even matter… it's to wild for me. I feel unsafe..🙄, and violated.
							But not to the point of Oh my goodd, they about to kill me, or throw me away in jail
							or not shit like that. Like nobody I plotting on me to set me up or nothing like that.
							That would be too weird…. Now imagine being told these things… like whaaaaatttt…. Well
							I'm glad that ain't' a thing . Cause man sheesh. I just wouldn’t even know what to do
							with myself. Like run away or some shit… sheesh. I'm like life… yeah I'm over it.
							Cause it's too much for 14 years of targe… It's just too much. It be like some real
							life shit. Nobody really be knowing what that shit be like. I can only imagine it's
							pure hell though… if I just had to imagine. And apparently… I'm supposed to, if I was
							in such type of situation or what not. I'm too cooked. That shit is ass. Adding insult
							to injury… if a person was to be going through all this and then to turn around and be
							demonized. While I imagine that is some fuck shit at it's finest. I wouldn’t say I'm a
							saint… I'm not, but some shit is reaching for Jupiter sometimes. Like, that is … a
							lot. So anyway, I've entered self sabotaged mode… well I won't say that entirely, but
							I made a decision that, yeah, I knew better, but who can blame me. I sure as hell,
							wish I would have had other options, but you know… I going to eat that. But I won't
							live the light that I should have remembered the Truman show, cause man… I didn't and
							now again, im in trouble. The second most annoying thing about the way my life is
							configured… is this whole false cause bid going on. Like I don’t… im not… like what
							the fuck? Lets be for real. I'm not now or have I even been the bad guy. I'm not a bad
							guy. Some shit be OD and I be like… cause the current configuration aint already,,,,
							the most? I beg the differ, but who cares what I think right? Mind you this shit is
							really depressing to talk about. Not in a self loathing way, but more in a… wow… life
							really got me fucked up though. More depressing…. Ain't shit I can do about it…. And I
							already depressed in real life. Clinical. With all that comes the fact that I refuse
							to take any medication give by doctors, far as brain chemistry go, cause…. Yeah nah,
							I'm goody on all that. Again, not gon swan dive. But I do go to the doctor though.
							Ain't missed an appointment yet. But apparently I don't or… I… I don’t know, none of
							that matters. Life is ass crack dot com. And this is a 'knowing' type life. I don’t
							know everything. I never claimed I do, or did. In fact I don’t understand a lot of
							shit… but what I do know… Yeah ain't no tip top energy coming out of that. Guess I'm
							dead. Like damn. Anyhow, at this point I feel like I'm talking a lot on some rambling
							shit. That ain't good for my mental health. I really do get on my own nerves. And I'm
							just glad I ain't been in the black box as of lately cause, talking about overthinking
							to the Gods! But I be having a lot of shit on the mind and heart…. More the mind, but
							shit gets heavy and… well I be having a lot to say. I feel like, I should let this go
							though. Well I mean… I just at a point where nothing fucking matters. This battle I be
							having to internalize got me like… man fuck it. I ain't really set up for this
							warranted back shots life Is giving me. And It's not something I think I can handle.
							More like, not going to handle cause whyyyy am I forced to deal whit shit that I just
							don’t get? And it's just too much after so long and all that's come with it, I don’t
							have toooo… So with that being said. I'm in trouble…. And it's hell. So it's a R.I.P
							for me. Cuase fuck all this shit. I could ramble on and on. But I would just be
							repating every other rant I've ever ranted about… aint that dumb? It is. So I've
							decided that I was going to make this my final scream…. I'm thinking…volgs or some
							shit. Sheesh That All`,
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
