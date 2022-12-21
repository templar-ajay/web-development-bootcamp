document.body.onload = () => {
  document.body.onclick = () => location.reload();
  const images = document.querySelectorAll(".dice img");
  const x = Array.from(images);
  images.forEach((i, index) => {
    i.src = `./images/dice${(x[index] = Math.ceil(Math.random() * 6))}.png`;
  });
  const win1 = x[0] > x[1];
  document.querySelector("h1").innerHTML =
    x[0] == x[1]
      ? `Draw!`
      : `${win1 ? "⛳" : ""} Player ${win1 ? 1 : 2} Wins ${win1 ? "" : "⛳"}`;
};
