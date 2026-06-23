const tarotDatabase = {
  cards: [
    {
      name: "The Fool",
      viName: "Kẻ Khờ",
      meaning: "Một khởi đầu mới đang mở ra. Hãy bước đi với sự tò mò, nhưng đừng bỏ qua trực giác của mình."
    },
    {
      name: "The Magician",
      viName: "Nhà Ảo Thuật",
      meaning: "Bạn có đủ công cụ để tạo ra thay đổi. Điều cần nhất bây giờ là tập trung và hành động rõ ràng."
    },
    {
      name: "The High Priestess",
      viName: "Nữ Tư Tế",
      meaning: "Câu trả lời chưa cần nói ra ngay. Hãy lắng nghe cảm giác bên trong trước khi quyết định."
    },
    {
      name: "The Empress",
      viName: "Nữ Hoàng",
      meaning: "Sự phát triển, chăm sóc và cảm xúc đủ đầy đang xuất hiện. Đây là lúc nuôi dưỡng điều quan trọng."
    },
    {
      name: "The Emperor",
      viName: "Hoàng Đế",
      meaning: "Bạn cần cấu trúc, giới hạn và sự ổn định. Đừng để cảm xúc làm mất định hướng."
    },
    {
      name: "The Lovers",
      viName: "Những Người Yêu Nhau",
      meaning: "Một lựa chọn liên quan đến trái tim, giá trị cá nhân hoặc sự kết nối đang cần được nhìn thẳng."
    },
    {
      name: "The Chariot",
      viName: "Cỗ Xe",
      meaning: "Tiến lên bằng ý chí và kỷ luật. Bạn có thể thắng nếu biết mình đang đi về đâu."
    },
    {
      name: "Strength",
      viName: "Sức Mạnh",
      meaning: "Sức mạnh thật sự nằm ở sự bình tĩnh. Dịu dàng nhưng không yếu mềm."
    },
    {
      name: "The Hermit",
      viName: "Ẩn Sĩ",
      meaning: "Bạn cần khoảng lặng để nhìn rõ vấn đề. Không phải mọi câu trả lời đều đến từ bên ngoài."
    },
    {
      name: "Wheel of Fortune",
      viName: "Bánh Xe Số Phận",
      meaning: "Tình huống đang chuyển động. Hãy linh hoạt vì một chu kỳ mới có thể đang bắt đầu."
    },
    {
      name: "Justice",
      viName: "Công Lý",
      meaning: "Sự thật, trách nhiệm và lựa chọn công bằng là trọng tâm. Điều gì gieo ra sẽ có kết quả tương ứng."
    },
    {
      name: "The Hanged Man",
      viName: "Người Treo Ngược",
      meaning: "Hãy đổi góc nhìn. Việc tạm dừng không phải thất bại, mà là cơ hội để hiểu sâu hơn."
    },
    {
      name: "Death",
      viName: "Cái Chết",
      meaning: "Một giai đoạn cũ cần khép lại. Sự kết thúc này mở đường cho chuyển hóa mới."
    },
    {
      name: "Temperance",
      viName: "Tiết Chế",
      meaning: "Cân bằng là chìa khóa. Đừng ép mọi thứ xảy ra quá nhanh."
    },
    {
      name: "The Devil",
      viName: "Ác Quỷ",
      meaning: "Có điều gì đó đang ràng buộc bạn: nỗi sợ, ham muốn, thói quen hoặc một mối quan hệ không lành mạnh."
    },
    {
      name: "The Tower",
      viName: "Tòa Tháp",
      meaning: "Một sự thật có thể làm lung lay cấu trúc cũ. Nhưng điều không vững thì cần được phá bỏ."
    },
    {
      name: "The Star",
      viName: "Ngôi Sao",
      meaning: "Hy vọng và chữa lành đang trở lại. Bạn chưa mất đường, chỉ là cần tin vào tiến trình."
    },
    {
      name: "The Moon",
      viName: "Mặt Trăng",
      meaning: "Mọi chuyện chưa rõ ràng. Đừng vội kết luận khi còn bị cảm xúc hoặc ảo ảnh che mắt."
    },
    {
      name: "The Sun",
      viName: "Mặt Trời",
      meaning: "Sự rõ ràng, niềm vui và năng lượng tích cực đang xuất hiện. Đây là lá bài của ánh sáng."
    },
    {
      name: "Judgement",
      viName: "Phán Xét",
      meaning: "Một lời gọi thức tỉnh đang đến. Bạn cần nhìn lại quá khứ để bước sang phiên bản mới."
    },
    {
      name: "The World",
      viName: "Thế Giới",
      meaning: "Một chu kỳ đang hoàn tất. Thành quả, sự trưởng thành và cảm giác trọn vẹn đang đến gần."
    }
  ]
};

function getRandomCard() {
  const index = Math.floor(Math.random() * tarotDatabase.cards.length);
  return tarotDatabase.cards[index];
}

function openWebApp() {
  const appSection = document.getElementById("app");

  if (appSection) {
    appSection.scrollIntoView({ behavior: "smooth" });
  }
}

function drawOneCard() {
  const card = getRandomCard();

  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");

  if (!resultTitle || !resultText) return;

  resultTitle.textContent = `${card.name} — ${card.viName}`;
  resultText.textContent = card.meaning;
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

  const roomTitle = document.getElementById("roomTitle");
  const roomText = document.getElementById("roomText");

  if (!roomTitle || !roomText) return;

  roomTitle.textContent = `${card.name} — ${card.viName}`;
  roomText.textContent = card.meaning;
}
