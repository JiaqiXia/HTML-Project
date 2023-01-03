const text = document.querySelectorAll(".thepaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#thirtieth");
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend", () => {
  animation.style =
    "transition: all 1s ease 0.6s;opacity: 0; pointer-events: none;";
});
