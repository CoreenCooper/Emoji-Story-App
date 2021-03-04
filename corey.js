const lengthForm = document.querySelector("#length-form");
const descriptionForm = document.querySelector("#description-form");
const emojiStory = document.querySelector("#emoji-story");
let storyCount = 0;

const generateStory = (e) => {
  e.preventDefault();
  resetStory();
  const numberInput = document.querySelector("#story-length-input");
  for (let i = 0; i < numberInput.valueAsNumber; i++) {
    const randIdx = Math.floor(Math.random() * emojis.length);
    emojiStory.textContent += emojis[randIdx];
  }
};

const saveStory = (e) => {
  e.preventDefault();
  storyCount++;
  const historyTitle = document.querySelector("#history-title");
  const descriptionInput = document.querySelector("#description-input");

  historyTitle.textContent = `${storyCount} Saved ${
    storyCount === 1 ? "Story" : "Stories"
  }`;

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = `${emojiStory.textContent}`;

  ul.appendChild(li);
  resetStory();
  descriptionInput.value = "";
};

const resetStory = () => {
  emojiStory.textContent = "Story: ";
};

lengthForm.addEventListener("submit", generateStory);
descriptionForm.addEventListener("submit", saveStory);
