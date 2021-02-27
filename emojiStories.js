const form = document.querySelector("form"); // grab form
const inputNum = document.querySelector("#story-length-input"); // grab - user number 
const p = document.querySelector("#emoji-story"); // grab - output destiantion
const inputText = document.querySelector("#description-input");
const h2 = document.querySelector("#history-title");
const ul = document.querySelector("ul");
const output = document.querySelector("ul");
let emojisPicks = "";
const generateBtn = document.querySelector("#generate-story-btn");
const descriptionBtn = document.querySelector("#submit-description-btn");
let count = 0;


const updateStoryHistory = () => {
  h2.textContent = `${count} Saved Stories`; // not certain why this value is doubling
};

const displayDescription = () => {
  const li = document.createElement("li");
  li.textContent = `${emojisPicks} ${inputText.value} `;
  ul.appendChild(li);
};

const randomEmojisSelector = (event) => {
  const length = Number(inputNum.value); // why doesn't the variable work outside of the function?
  event.preventDefault();
  for (let i = 0; i < length; i++) {
    const randomizeEmojis = Math.floor(Math.random() * (emojis.length - 1));
    emojisPicks += emojis[randomizeEmojis];
  }
  p.textContent = `Story: ${emojisPicks}`;
};

form.addEventListener("submit", (event) => {
  randomEmojisSelector(event);
  updateStoryHistory();
  displayDescription();
  count++;
});
