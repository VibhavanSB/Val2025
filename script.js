document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".rotate");

    // Make the "No" button move away on hover
    noButton.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });

    // Start the emoji shower
    setInterval(createEmoji, 300);

    function createEmoji() {
        const emojiArray = ["❤️", "💖", "💘", "💝", "💞", "💕"]; // Romantic emojis
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojiArray[Math.floor(Math.random() * emojiArray.length)];
        
        // Random position from left to right
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.animationDuration = 3 + Math.random() * 2 + "s"; // Random fall speed
        
        document.body.appendChild(emoji);

        // Remove emoji after animation ends
        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }
});
