document.getElementById("forgiveBtn").addEventListener("click", function() {
    this.innerText = "Yay! 💖";
    this.style.background = "#4CAF50";

    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.getElementById("heartContainer").appendChild(heart);

    gsap.to(heart, {
        y: -100,
        opacity: 0,
        duration: 2,
        onComplete: () => heart.remove()
    });
}

const style = document.createElement("style");
style.innerHTML = `
.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 50% 75%, 20% 100%, 0% 35%);
    left: ${Math.random() * window.innerWidth}px;
    top: ${Math.random() * window.innerHeight}px;
}
`;
document.head.appendChild(style);
