document.addEventListener("DOMContentLoaded", function () {
    // Select all images with the 'reveal' class
    const reveal = document.querySelectorAll('.nouss');

    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add the active class when visible
            } else {
                entry.target.classList.remove('active'); // Remove the active class when not visible
            }
        });
    }, {
        threshold: 0.3 // Trigger when 10% of the image is visible
    });

    // Observe each 'reveal' image
    reveal.forEach(nouss => {
        observer.observe(nouss);
    });
});
const textElement=document.getElementById('myText');
window.addEventListener('scroll', ()=>{
    const rect=textElement.getBoundingClientRect();
    if(rect.top<window.innerHeight){
        textElement.classList.add('scroll-reveal');

    }
});

