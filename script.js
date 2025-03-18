document.addEventListener("DOMContentLoaded", () => {
    // Booking Form Submission
    const bookingForm = document.querySelector(".hero form");
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const date = document.getElementById("date").value;
        
        if (from && to && date) {
            alert(`Transport booked from ${from} to ${to} on ${date}!`);
        } else {
            alert("Please fill in all the details.");
        }
    });

    // Tracking Form Submission
    const trackingForm = document.querySelector("#tracking form");
    trackingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const trackingNumber = trackingForm.querySelector("input").value;
        
        if (trackingNumber) {
            alert(`Tracking details for: ${trackingNumber}`);
        } else {
            alert("Please enter a tracking number.");
        }
    });

    // Navigation Active State
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
