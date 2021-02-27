// generate emojis
const storyButton = document.querySelector("#generate-story-btn"); // grab button
const storyLength = document.querySelector("#story-length-input"); // grab user input
const emojiStory = document.querySelector("#emoji-story"); // display emojis
let emojiPicks = "";

// display description
const descriptionButton = document.querySelector("#submit-description-btn"); // grab button
const descriptionInput = document.querySelector("#description-input"); // grab user input
const ul = document.querySelector("ul"); // display list items
const h2 = document.querySelector("h2");
let n = 1;

const generateStory = () => {
  const userTextInput = descriptionInput.value;
  const li = document.createElement("li");
  li.textContent = `${emojiPicks} ${userTextInput}`;
  ul.appendChild(li);
  h2.textContent = `${n++} Saved Stories`;
};

const generateEmojis = () => {
  const userNumInput = Number(storyLength.value); // get input value
  for (let i = 0; i < userNumInput; i++) {
    const randomIdx = Math.floor(Math.random() * (emojis.length - 1));
    emojiPicks += emojis[randomIdx];
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

// storyButton.addEventListener("click" , generateEmojis)

debugger;
