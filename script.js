// stats card animation on scroll
const  statsCard = document.querySelectorAll('.stats-card');

window.addEventListener('scroll', () => {
    
    statsCard.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect();

        // Delay in milliseconds for each card 
        const delay = index * 70;  

        // distance of card entering the viewport 
        const progress = Math.min(1, 
            Math.max(0, 
                (window.innerHeight - cardPosition.top - delay) / 155)
        );

        // movement
        const moveX = 0 * progress;
        const moveY = -15 * progress;

        // scale
        const scale = 1 + (0.06 * progress);

        // shadow 
        const shadow = 4 + (13 * progress);

        // applying everything together to move the card 
        card.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;

        card.style.scale = scale;

        card.style.boxShadow = `0 0 ${shadow}px rgb(18, 235, 159)`;  

        card.style.transition = 'transform 0.3s linear, scale 0.4s ease-in, box-shadow 0.3s linear';

    });


});


// ---------------------------------------------




