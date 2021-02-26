const form = document.querySelector("form");
const ul = document.querySelector("ul");
const h2 = document.querySelector("#history-title");
const p = document.querySelector("#emoji-story")
const output = document.querySelector("ul");
let emojisPicks = "";

const randomEmojisSelector = (event) => {
    event.preventDefault();
    const length = Number(document.querySelector("#story-length-input").value);
    for (let i = 0; i < length; i++) {
        const randomizeEmojis = Math.floor(Math.random() * (emojis.length - 1));   
        emojisPicks += emojis[randomizeEmojis]
    }
    p.textContent = `Story: ${emojisPicks}`;
};



form.addEventListener("submit", randomEmojisSelector);
