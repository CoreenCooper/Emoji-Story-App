// 1. create a button
// - grab form add event listenter submit 
// - add preventDefault()
// 2. grab user input for length of emojis
// 3. generate random emojis
// - Math.round
// 4. display emjois - grab ptag
const storyButton = document.querySelector("#generate-story-btn") // grab button
const storyForm = document.querySelector("#generate-story-form");
const storyLength = document.querySelector("#story-length-input"); // grab user input
const emojiStory = document.querySelector("#emoji-story");

const generateEmojis = () => {
    const userInput = Number(storyLength.value); // get input value
    for (let i = 0; i < userInput; i++) {
        const randomIdx = Math.floor(Math.random() * (emojis.length - 1));
        emojiStory.textContent += emojis[randomIdx];   
    }
}

storyForm.addEventListener("click", (event) => {
    event.preventDefault();
})

storyButton.addEventListener("click" , generateEmojis)

debugger


// storyButton.addEventListener("click", () => {})

