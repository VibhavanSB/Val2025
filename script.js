document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".rotate");

    // "No" button moves away on hover
    noButton.addEventListener("mouseover", function () {
        noButton.style.transition = "transform 0.3s";
        noButton.style.transform = "rotate(360deg)"; // Spins before moving

        setTimeout(() => {
            const maxX = window.innerWidth - noButton.clientWidth;
            const maxY = window.innerHeight - noButton.clientHeight;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            noButton.style.position = "absolute";
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        }, 300);
    });

    // Emoji shower animation
    setInterval(createEmoji, 300);
    function createEmoji() {
        const emojiArray = ["❤️", "💖", "💘", "💝", "💞", "💕"];
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.animationDuration = 3 + Math.random() * 2 + "s";
        
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    // Sparkle effect on mouse move
    document.addEventListener("mousemove", function (e) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = e.pageX + "px";
        sparkle.style.top = e.pageY + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });

    // Fireworks effect when clicking "Yes"
    document.querySelector(".bounce").addEventListener("click", function () {
        for (let i = 0; i < 30; i++) {
            createFirework();
        }

        // Show romantic message
        document.getElementById("love-message").style.display = "block";
    });

    function createFirework() {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        
        firework.style.left = Math.random() * window.innerWidth + "px";
        firework.style.top = Math.random() * window.innerHeight + "px";
        
        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
});
