// generate emojis
const storyForm = document.querySelector("#generate-story-form"); // grab form
const storyLength = document.querySelector("#story-length-input"); // grab user input
const emojiStory = document.querySelector("#emoji-story"); // display emojis
let emojiPicks = "";

// display description
const descriptionForm = document.querySelector("#submit-description-form"); // grab button
const descriptionInput = document.querySelector("#description-input"); // grab user input
const ul = document.querySelector("ul"); // display list items
const h2 = document.querySelector("#history-title"); // grab Saved Stories
let n = 0; // update stories saved

const generateStory = (event) => {
  event.preventDefault();
  const userTextInput = descriptionInput.value;
  const li = document.createElement("li");
  li.textContent = `${emojiPicks} ${userTextInput}`;
  ul.appendChild(li); // how do you access the length of li's that have been created? use querySelector all
  n++
  h2.textContent = n === 1 ? `1 Saved Story` : `${n} Saved Stories`;
  resetStory()
};

const resetStory = () => {
  storyLength.value = 0;
  descriptionInput.value = "";
  emojiStory.textContent = "";
}

const generateEmojis = (event) => {
  event.preventDefault();
  emojiPicks = "";
  const userNumInput = Number(storyLength.value); // get input value
  for (let i = 0; i < userNumInput; i++) {
    const randomIdx = Math.floor(Math.random() * emojis.length);
    emojiPicks += `${emojis[randomIdx]} `;
  }
  
  emojiStory.textContent = `Story: ${emojiPicks}`;
};

descriptionForm.addEventListener("submit", generateStory);

storyForm .addEventListener("submit", generateEmojis);

//// Vanessa - https://blog.jonnew.com/posts/poo-dot-length-equals-two

// const arr = [2, 5, 4, 45, 32, 46, 78, 87, 98, 56, 23, 12];
// const chooseRandom = (arr, num = 4) => {
//    const res = [];
//    for(let i = 0; i < num; i++){
//       const random = Math.floor(Math.random() * arr.length);
//       if(res.indexOf(arr[random]) !== res[i]){
//       res.push(arr[random]);
//    };
// };
// return res;
// };
