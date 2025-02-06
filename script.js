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
        // Change image to happy expression
        expressionImg.src = "happy.png"; // Ensure you have happy.png in the same folder

        // Bounce effect when image changes
        gsap.fromTo(expressionImg, 
            { scale: 1, rotate: 0 }, 
            { scale: 1.2, rotate: 5, duration: 0.3, yoyo: true, repeat: 1 }
        );

        // Change button text and disable it
        button.textContent = "Yay! You Forgave Me! 💖";
        button.disabled = true;
        button.style.backgroundColor = "#999"; // Disable button effect

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
