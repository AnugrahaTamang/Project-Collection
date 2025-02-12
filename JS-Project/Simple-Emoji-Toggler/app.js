const emoji = document.querySelector(".Emoji");
const emojis = [
    "😄",
    "😂",
    "🤷‍♂️",
    "😘"
];
emoji.addEventListener("mouseover", () => {
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]
})