const tarotDatabase = {
  oneCard: [
    {
      title: "The Fool",
      meaning: "Khởi đầu mới đang mở ra. Hãy tin vào hành trình dù bạn chưa thấy hết con đường phía trước."
    },
    {
      title: "The Magician",
      meaning: "Bạn đã có đủ công cụ trong tay. Tập trung năng lượng và chủ động hành động."
    },
    {
      title: "The High Priestess",
      meaning: "Câu trả lời nằm trong trực giác của bạn. Đừng vội, hãy lắng nghe bản thân."
    },
    {
      title: "The Empress",
      meaning: "Sự nuôi dưỡng, phát triển và cảm xúc đủ đầy đang đến gần."
    },
    {
      title: "The Lovers",
      meaning: "Một lựa chọn quan trọng liên quan đến trái tim và sự đồng điệu."
    },
    {
      title: "The Chariot",
      meaning: "Tiến lên với quyết tâm. Điều quan trọng là hướng đi, không chỉ là tốc độ."
    },
    {
      title: "Strength",
      meaning: "Sức mạnh thật sự đến từ sự bình tĩnh, kiên nhẫn và khả năng tự chủ."
    },
    {
      title: "The Hermit",
      meaning: "Lùi lại một bước để quan sát. Sự tĩnh lặng sẽ giúp bạn thấy rõ hơn."
    },
    {
      title: "The Star",
      meaning: "Hy vọng và chữa lành đang quay trở lại. Hãy tiếp tục tin tưởng."
    },
    {
      title: "The Moon",
      meaning: "Mọi chuyện chưa hoàn toàn rõ ràng. Hãy đi chậm và tin vào cảm nhận của mình."
    },
    {
      title: "The Sun",
      meaning: "Niềm vui, sự sáng tỏ và thành công đang dần xuất hiện."
    }
  ]
};

function getRandomItem(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function openWebApp() {
  const appSection = document.getElementById("app");

  if (appSection) {
    appSection.scrollIntoView({ behavior: "smooth" });
  }
}

function drawOneCard() {
  const card = getRandomItem(tarotDatabase.oneCard);

  const resultBox = document.getElementById("resultBox");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");

  if (!resultBox || !resultTitle || !resultText) return;

  resultTitle.textContent = `Lá bài của bạn: ${card.title}`;
  resultText.textContent = card.meaning;

  resultBox.classList.remove("hidden");
}

function drawThreeCards() {
  const cards = [];
  const usedTitles = new Set();

  while (cards.length < 3) {
    const card = getRandomItem(tarotDatabase.oneCard);

    if (!usedTitles.has(card.title)) {
      cards.push(card);
      usedTitles.add(card.title);
    }
  }

  const resultBox = document.getElementById("resultBox");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");

  if (!resultBox || !resultTitle || !resultText) return;

  resultTitle.textContent = "Trải bài 3 lá";
  resultText.innerHTML = `
    <strong>Quá khứ:</strong> ${cards[0].title} — ${cards[0].meaning}<br><br>
    <strong>Hiện tại:</strong> ${cards[1].title} — ${cards[1].meaning}<br><br>
    <strong>Tương lai:</strong> ${cards[2].title} — ${cards[2].meaning}
  `;

  resultBox.classList.remove("hidden");
}

function createRoom() {
  const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  const roomUrl = `${window.location.origin}/room.html?room=${roomCode}`;

  const roomBox = document.getElementById("roomBox");
  const roomLink = document.getElementById("roomLink");

  if (!roomBox || !roomLink) return;

  roomLink.textContent = roomUrl;
  roomLink.href = roomUrl;

  roomBox.classList.remove("hidden");
}
