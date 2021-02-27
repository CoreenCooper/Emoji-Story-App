// generate emojis
const storyButton = document.querySelector("#generate-story-btn"); // grab button
const storyLength = document.querySelector("#story-length-input"); // grab user input
const emojiStory = document.querySelector("#emoji-story"); // display emojis
let emojiPicks = "";

// display description
const descriptionButton = document.querySelector("#submit-description-btn"); // grab button
const descriptionInput = document.querySelector("#description-input"); // grab user input
const ul = document.querySelector("ul"); // display list items
const h2 = document.querySelector("#history-title");
let n = 0;

const generateStory = () => {
  const userTextInput = descriptionInput.value;
  const li = document.createElement("li");
  li.textContent = `${emojiPicks} ${userTextInput} ${emojiPicks.length / 2}`; // why is this doubling?
  ul.appendChild(li);
  n++
  h2.textContent = n === 1 ? `1 Saved Story` : `${n} Saved Stories`;
};

const generateEmojis = () => {
  emojiPicks = "";
  const userNumInput = Number(storyLength.value); // get input value
  for (let i = 0; i < userNumInput; i++) {
    const randomIdx = Math.floor(Math.random() * (emojis.length - 1));
    emojiPicks += emojis[randomIdx];
    storyLength.value = "";
  }
  emojiStory.textContent = `Story: ${emojiPicks}`;
};

descriptionButton.addEventListener("click", (event) => {
  event.preventDefault();
  generateStory();
});

storyButton.addEventListener("click", (event) => {
  event.preventDefault();
  generateEmojis();
});
