// Redirection page 1
function goToLovePage() {
    window.location.href = "valentin.html";
}

// Animation coeurs page 2
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Vérifie si on est sur la page valentin
if (document.body.classList.contains("page2")) {
    setInterval(createHeart, 300);
}
