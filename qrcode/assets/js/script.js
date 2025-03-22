function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heartsContainer.appendChild(heart);

        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    
    setInterval(createHeart, 200);
}

document.addEventListener('DOMContentLoaded', createHearts);
