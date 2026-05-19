const reviewForm = document.getElementById("reviewForm");

const reviewsContainer = document.getElementById("reviewsContainer");

reviewForm.addEventListener("submit", function(event){

    event.preventDefault();

    const category = document.getElementById("category").value;

    const gameName = document.getElementById("gameName").value;

    const reviewText = document.getElementById("reviewText").value;

    // CREATE REVIEW CARD

    const reviewCard = document.createElement("div");

    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `

        <h3>${category}</h3>

        <h4>${gameName}</h4>

        <p>${reviewText}</p>

    `;

    // ADD REVIEW CARD

    reviewsContainer.prepend(reviewCard);

    // RESET FORM

    reviewForm.reset();

});