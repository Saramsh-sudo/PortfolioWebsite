<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aging Animation</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>Time Changes Everything ⏳</h1>
        <p>Watch as time passes by...</p>
        <img id="ageImg" src="young.png" alt="Young Face"> <!-- Default young face -->
        <br>
        <button id="ageBtn">See the Future 👀</button>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            let button = document.getElementById("ageBtn");
            let ageImg = document.getElementById("ageImg");
            let ageStages = ["young.png", "middle.png", "old.png"];
            let index = 0;

            button.addEventListener("click", function () {
                if (index < ageStages.length - 1) {
                    gsap.to(ageImg, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 1,
                        onComplete: function () {
                            index++;
                            ageImg.src = ageStages[index];
                            gsap.to(ageImg, { opacity: 1, scale: 1.2, duration: 1 });
                        }
                    });
                } else {
                    button.textContent = "Time waits for no one... ⏳";
                    button.disabled = true;
                }
            });
        });
    </script>
</body>
</html>

<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #f0e6d2;
        margin: 0;
        padding: 0;
    }

    .container {
        margin-top: 50px;
    }

    h1 {
        font-size: 2.5em;
        color: #b36a5e;
    }

    p {
        font-size: 1.5em;
        color: #444;
    }

    button {
        padding: 15px 25px;
        font-size: 1.2em;
        border: none;
        background-color: #b36a5e;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        outline: none;
    }

    button:hover {
        background-color: #8b4c3b;
    }

    button:disabled {
        background-color: #666;
        cursor: not-allowed;
    }

    #ageImg {
        width: 250px;
        height: 250px;
        margin-top: 20px;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    }
</style>
