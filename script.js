const cards = [
  {
    name: "The Fool",
    meaning: "A new beginning is opening. Trust the path even if it feels uncertain.",
    symbol: "✦"
  },
  {
    name: "The Magician",
    meaning: "You already have the tools. Focus your energy and take action.",
    symbol: "☿"
  },
  {
    name: "The High Priestess",
    meaning: "The answer is quiet. Listen to your intuition before moving.",
    symbol: "☾"
  },
  {
    name: "The Empress",
    meaning: "Growth, softness, beauty, and emotional abundance are near.",
    symbol: "♀"
  },
  {
    name: "The Lovers",
    meaning: "A choice of the heart needs honesty, clarity, and alignment.",
    symbol: "♡"
  },
  {
    name: "The Chariot",
    meaning: "Move with discipline. Your direction matters more than speed.",
    symbol: "♞"
  },
  {
    name: "Strength",
    meaning: "Your calmness is power. Do not force what patience can guide.",
    symbol: "♌"
  },
  {
    name: "The Hermit",
    meaning: "Step back and observe. Solitude will reveal what noise hides.",
    symbol: "♄"
  },
  {
    name: "The Star",
    meaning: "Healing is returning. Keep faith in the version of you that is growing.",
    symbol: "✧"
  },
  {
    name: "The Moon",
    meaning: "Not everything is clear yet. Move slowly and trust your instincts.",
    symbol: "☽"
  },
  {
    name: "The Sun",
    meaning: "Clarity, warmth, joy, and confidence are coming into view.",
    symbol: "☉"
  }
];

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

function drawOneCard() {
  const card = getRandomCard();

  const mainCard = document.getElementById("mainCard");
  const cardSymbol = document.querySelector(".card-symbol");
  const cardName = document.getElementById("cardName");
  const cardMeaning = document.getElementById("cardMeaning");

  if (!mainCard || !cardSymbol || !cardName || !cardMeaning) return;

  mainCard.style.transform = "rotateY(180deg) scale(0.96)";

  setTimeout(() => {
    cardSymbol.textContent = card.symbol;
    cardName.textContent = card.name;
    cardMeaning.textContent = card.meaning;
    mainCard.style.transform = "rotateY(0deg) scale(1)";
  }, 350);
}

function drawThreeCards() {
  const spreadResult = document.getElementById("spreadResult");
  const pastCard = document.getElementById("pastCard");
  const presentCard = document.getElementById("presentCard");
  const futureCard = document.getElementById("futureCard");

  if (!spreadResult || !pastCard || !presentCard || !futureCard) return;

  const selected = [];

  while (selected.length < 3) {
    const card = getRandomCard();

    if (!selected.includes(card)) {
      selected.push(card);
    }
  }

  pastCard.textContent = selected[0].name;
  presentCard.textContent = selected[1].name;
  futureCard.textContent = selected[2].name;

  spreadResult.classList.remove("hidden");
}

function createRoom() {
  const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const roomUrl = `${window.location.origin}/room.html?room=${roomCode}`;

  const roomBox = document.getElementById("roomBox");
  const roomLink = document.getElementById("roomLink");

  if (roomBox && roomLink) {
    roomLink.textContent = roomUrl;
    roomLink.href = roomUrl;
    roomBox.classList.remove("hidden");
  } else {
    window.location.href = roomUrl;
  }
}

function drawRoomCard() {
  const card = getRandomCard();

  const roomCardName = document.getElementById("roomCardName");
  const roomCardMeaning = document.getElementById("roomCardMeaning");
  const roomCardSymbol = document.getElementById("roomCardSymbol");

  if (!roomCardName || !roomCardMeaning || !roomCardSymbol) return;

  roomCardSymbol.textContent = card.symbol;
  roomCardName.textContent = card.name;
  roomCardMeaning.textContent = card.meaning;
}

document.addEventListener("DOMContentLoaded", () => {
  const roomCode = document.getElementById("roomCode");

  if (roomCode) {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");

    roomCode.textContent = room || "NO ROOM";
  }
});
