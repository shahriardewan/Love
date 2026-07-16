const no = document.getElementById("no");
const yes = document.getElementById("yes");
const msg = document.getElementById("msg");
const play = document.getElementById("play");
const music = document.getElementById("music");

// No Button Move
function moveNo() {
    no.style.position = "absolute";
    no.style.left = Math.random() * (window.innerWidth - 120) + "px";
    no.style.top = Math.random() * (window.innerHeight - 60) + "px";
}
no.onmouseover = moveNo;
no.ontouchstart = moveNo;

// Yes Button
yes.onclick = () => {
    msg.innerHTML = "🌹 I Love You Forever My Sexy Star ❤️";
    music.play();
};

// Music Button
play.onclick = () => {
    music.play();
};

// Falling Hearts & Stars
function createItem() {

    const item = document.createElement("div");

    item.innerHTML = Math.random() > 0.5 ? "💖" : "✨";

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = "-40px";
    item.style.fontSize = (15 + Math.random() * 20) + "px";
    item.style.pointerEvents = "none";
    item.style.zIndex = "999";
    item.style.transition = "transform 6s linear";

    document.body.appendChild(item);

    setTimeout(() => {
        item.style.transform = "translateY(120vh)";
    }, 50);

    setTimeout(() => {
        item.remove();
    }, 6500);

}

setInterval(createItem, 180);
