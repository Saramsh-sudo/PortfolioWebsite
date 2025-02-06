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

        // Scale up effect
        gsap.to(expressionImg, { scale: 1.2, duration: 0.3, yoyo: true, repeat: 1 });

        // Generate floating hearts
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("heart");
            heartContainer.appendChild(heart);

            gsap.to(heart, {
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: -window.innerHeight,
                duration: 2 + Math.random(),
                opacity: 0,
                onComplete: () => heart.remove()
            });
        }
    });
});
