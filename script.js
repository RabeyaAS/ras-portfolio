// stats card animation on scroll
const  statsCard = document.querySelectorAll('.stats-card');

window.addEventListener('scroll', () => {
    
    statsCard.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect();

        // Delay in milliseconds for each card 
        const delay = index * 65;  

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


// skills card animation on scroll
const skillsCard = document.querySelectorAll('.s-lists');

window.addEventListener('scroll', () => {
    
    skillsCard.forEach((skill, index) => {
        const cardPosition = skill.getBoundingClientRect();

        // Delay in milliseconds for each card 
        const delay = index * 20;  

        // distance of card entering the viewport 
        // previously used (42)
        const progress = Math.min(1, 
            Math.max(0, 
                (window.innerHeight - cardPosition.top - delay) / 60)
        );

        // movement
        const moveX = 0 * progress;
        const moveY = -25 * progress;

        // shadow 
        const shadowY = 0 +(9 * progress);
        const shadowBlur = 13 + (2 * progress);
        const shadowSpread = 0 + (4 * progress);

        // applying everything together to move the card 
        skill.style.boxShadow = `0px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgb(78, 203, 159)`;

        skill.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;

    });
}); 

// ---------------------------------------------

// contact form 
window.formspree = window.formspree || 
    function () {
        (formspree.q = formspree.q || []).push(arguments);
    };

    formspree("initForm", {
        formElement: "#the-form",
        formId: "mgavnrrd",

        renderSuccess: ({form}, message) => {
            const successMessage = document.createElement("div");

            successMessage.className = "success-popup";
            successMessage.innerHTML = `
            <strong>Message Sent!</strong>
            <span>Thanks for reaching out! You'll receive a response within 3 working days.</span>
            `;

            document.body.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.remove();
            }, 6000);
        },

        renderFormError: ({form}, message) => {
            const errorMessage = document.createElement("div");

            errorMessage.className = "error-popup";
            errorMessage.innerHTML = `
            <strong>Oops! There seems to be a problem!</strong> 
            <span>Please check the required fields and try again.</span>
            `;

            document.body.appendChild(errorMessage);
            
            setTimeout(() => {
                errorMessage.remove();
            }, 6000);
        },

    });

// ---------------------------------------------

// nav menu toggle
const menuBar = document.querySelector(".menu-bar");
const navDrawer = document.querySelector(".nav-drawer");

menuBar.addEventListener("click", () => {
    navDrawer.classList.toggle("open");
});


// light mode click event
const lightBtn = document.getElementById("light-btn");
const lightIcon = lightBtn.querySelector("i");

lightBtn.addEventListener("click", () => {
    console.log("Light mode button clicked");

    lightIcon.classList.remove("rotate");

    void lightIcon.offsetWidth;
    lightIcon.classList.add("rotate");

});

