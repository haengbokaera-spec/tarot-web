const cards = [
  {
    name: "The Fool",
    meaning: "A new beginning is opening. Trust the journey, even if the path is unclear."
  },
  {
    name: "The Magician",
    meaning: "You have the tools you need. Focus your energy and take action."
  },
  {
    name: "The High Priestess",
    meaning: "Listen to your intuition. The answer is already within you."
  },
  {
    name: "The Empress",
    meaning: "Growth, beauty, and emotional abundance are surrounding you."
  },
  {
    name: "The Lovers",
    meaning: "A choice of the heart is important. Choose with honesty and alignment."
  },
  {
    name: "The Star",
    meaning: "Healing and hope are returning. Keep faith in the future."
  },
  {
    name: "The Moon",
    meaning: "Something is hidden or unclear. Move slowly and trust your instincts."
  },
  {
    name: "The Sun",
    meaning: "Joy, clarity, and success are coming into view."
  }
];

function drawCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const selectedCard = cards[randomIndex];

  document.getElementById("cardName").textContent = selectedCard.name;
  document.getElementById("cardMeaning").textContent = selectedCard.meaning;

  const tarotCard = document.getElementById("tarotCard");
  tarotCard.style.transform = "rotateY(360deg) scale(1.05)";

  setTimeout(() => {
    tarotCard.style.transform = "rotateY(0deg) scale(1)";
  }, 500);
}
