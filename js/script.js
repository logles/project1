//TODO: Create a function to shuffle the cards upon page reset

//TODO: Create a function which flips a card when it is clicked on
function cardFlipping() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  });
}

cardFlipping();

//TODO: Create a function which keeps track of the number of attempts the user has made

//TODO: Create a function which recognizes when a pair is found and hides the found pair

//TODO: Create a function which recognizes when the user has won and logs the user's score in local memory
