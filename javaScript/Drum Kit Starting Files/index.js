document.addEventListener("keydown", playSound);

document.querySelectorAll(".drum").forEach((x) => {
  x.addEventListener("click", playSound);
});

function playSound(e) {
  const validKeys = ["w", "a", "s", "d", "j", "k", "l"];
  const ki =
    e.key != undefined
      ? validKeys.includes(e.key)
        ? e.key
        : null
      : validKeys.includes(e.target.innerText)
      ? e.target.innerText
      : null;
  ki ? animateAndPlay(ki) : null;
}
const which = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass",
};
function animateAndPlay(ki) {
  new Audio(`./sounds/${which[ki]}.mp3`).play();
  const el = document.querySelector(`.${ki}`);
  el.classList.add("pressed");
  setTimeout(() => {
    el.classList.remove("pressed");
  }, 100);
}

// function which(ki) {
//   switch (ki) {
//     case "w":
//       return "tom-1";
//       break;
//     case "a":
//       return "tom-2";
//     case "s":
//       return "tom-3";
//     case "d":
//       return "tom-4";
//     case "j":
//       return "snare";
//     case "k":
//       return "crash";
//     case "l":
//       return "kick-bass";
//   }
// }
