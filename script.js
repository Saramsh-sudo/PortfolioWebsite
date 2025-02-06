document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("forgiveBtn");
    let heartContainer = document.getElementById("heartContainer");
    let expressionImg = document.getElementById("expressionImg");

    // Shake animation for the button
    gsap.to(button, { 
        x: -5, 
        repeat: -1, 
        yoyo: true, 
        duration: 0.1 
    });

    button.addEventListener("click", function () {
        // Fade out sad expression, then switch to happy and fade in
        gsap.to(expressionImg, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            onComplete: function () {
                expressionImg.src = "happy.png"; // Ensure you have happy.png in the same folder
                gsap.to(expressionImg, { opacity: 1, scale: 1.2, duration: 0.5 });
            }
        });

        // Change button text and disable it
        button.textContent = "Yay! You Forgave Me! 💖";
        button.disabled = true;

        // Generate floating hearts
        for (let i = 0; i < 15; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.bottom = `0px`;
            heart.style.position = "absolute";

            heartContainer.appendChild(heart);

            gsap.to(heart, {
                y: -window.innerHeight,
                duration: 3 + Math.random(),
                opacity: 0,
                onComplete: () => heart.remove()
            });
        }
    });
});
