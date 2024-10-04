const buttons = document.querySelectorAll(".card__btn");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    const card = button.closest(".card");
    const cardCredits = card.querySelector(".card__credits");
    const cardOffer = card.querySelector(".card__offer");

    card.style.backgroundColor = "#9564aa";
    cardCredits.style.color = "#fff";

    if (cardOffer) {
      cardOffer.style.display = "block";
    }
  });

  button.addEventListener("mouseout", () => {
    const card = button.closest(".card");
    const cardCredits = card.querySelector(".card__credits");
    const cardOffer = card.querySelector(".card__offer");

    card.style.backgroundColor = "";
    cardCredits.style.color = "";

    if (cardOffer) {
      cardOffer.style.display = "none";
    }
  });
});
