// generate emojis
const storyButton = document.querySelector("#generate-story-btn"); // grab button
const storyLength = document.querySelector("#story-length-input"); // grab user input
const emojiStory = document.querySelector("#emoji-story"); // display emojis

// display description
const descriptionButton = document.querySelector("#submit-description-btn"); // grab button
const descriptionInput = document.querySelector("#description-input"); // grab user input
const ul = document.querySelector("ul") // display list items

const generateStory = () => {
  const userTextInput = descriptionInput.value;
  const li = document.createElement("li");
  li.textContent = userTextInput;
  ul.appendChild(li);
};

const generateEmojis = () => {
  const userNumInput = Number(storyLength.value); // get input value
  for (let i = 0; i < userNumInput; i++) {
    const randomIdx = Math.floor(Math.random() * (emojis.length - 1));
    emojiStory.textContent += emojis[randomIdx];
  }
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
