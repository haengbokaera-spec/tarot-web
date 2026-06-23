async function askGemini(prompt) {
  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Gemini API error.");
  }

  return data.text || "Gemini không trả về nội dung.";
}

function buildTarotPromptForMatch() {
  if (!selectedCase || !matchCards || matchCards.length === 0) {
    return "";
  }

  const cardLines = matchCards.map((card, index) => {
    return `
${index + 1}. Vị trí: ${card.position}
Lá bài: ${card.name} / ${card.viName}
Chiều: ${card.isReversed ? "Ngược" : "Xuôi"}
Nghĩa gốc: ${card.isReversed ? reversedMeaning(card) : card.meaning}
`;
  }).join("\n");

  return `
Bạn là FreshSpirit Tarot, một tarot reader nói tiếng Việt, giọng văn tự nhiên, sâu sắc nhưng dễ hiểu.

Hãy diễn giải trải bài tarot dưới đây cho mục đích luyện tập đọc bài.

Yêu cầu:
- Không nói như robot.
- Không quá dài.
- Không chỉ dịch nghĩa từng lá.
- Hãy nối các lá thành một câu chuyện.
- Có phần tổng quan, phân tích từng vị trí, lời khuyên thực tế.
- Giọng văn thân thiện, chuyên nghiệp, giống reader đang hướng dẫn người mới luyện đọc.
- Không khẳng định tuyệt đối tương lai.
- Không dùng markdown bảng.

CASE QUERENT:
Tên: ${selectedCase.name}
Tuổi: ${selectedCase.age}
Chủ đề: ${selectedCase.topic}
Câu hỏi: ${selectedCase.question}
Bối cảnh: ${selectedCase.story}

KIỂU TRẢI:
${matchSpread.name}
${matchSpread.description}

CÁC LÁ BÀI:
${cardLines}

Hãy trả lời bằng tiếng Việt.
`;
}

function buildTarotPromptForNormal() {
  if (!normalCards || normalCards.length === 0) {
    return "";
  }

  const cardLines = normalCards.map((card, index) => {
    return `
${index + 1}. Vị trí: ${card.position}
Lá bài: ${card.name} / ${card.viName}
Chiều: ${card.isReversed ? "Ngược" : "Xuôi"}
Nghĩa gốc: ${card.isReversed ? reversedMeaning(card) : card.meaning}
`;
  }).join("\n");

  return `
Bạn là FreshSpirit Tarot, một tarot reader nói tiếng Việt, giọng văn tự nhiên, sâu sắc nhưng dễ hiểu.

Hãy diễn giải trải bài tarot dưới đây cho người dùng.

Yêu cầu:
- Không nói như robot.
- Không quá dài.
- Không chỉ dịch nghĩa từng lá.
- Hãy nối các lá thành một câu chuyện.
- Có phần tổng quan, phân tích từng vị trí, lời khuyên thực tế.
- Không khẳng định tuyệt đối tương lai.
- Không dùng markdown bảng.

CÂU HỎI:
${normalQuestion || "Người dùng chưa nhập câu hỏi cụ thể."}

KIỂU TRẢI:
${normalSpread.name}
${normalSpread.description}

CÁC LÁ BÀI:
${cardLines}

Hãy trả lời bằng tiếng Việt.
`;
}

window.getFreshSpiritTake = async function() {
  const takeBox = document.getElementById("freshSpiritTakeBox");

  if (!takeBox) return;

  if (!matchCards || matchCards.length === 0 || !selectedCase) {
    takeBox.innerHTML = `
      <section class="card">
        <h2>Góc nhìn FreshSpirit</h2>
        <p>Bạn cần chọn case và rút bài trước.</p>
      </section>
    `;
    return;
  }

  takeBox.innerHTML = `
    <section class="card">
      <h2>Góc nhìn FreshSpirit</h2>
      <p>Đang hỏi Gemini...</p>
    </section>
  `;

  try {
    const prompt = buildTarotPromptForMatch();
    freshSpiritTakeText = await askGemini(prompt);

    takeBox.innerHTML = `
      <section class="card">
        <h2>Góc nhìn FreshSpirit</h2>
        <p style="white-space:pre-wrap;">${esc(freshSpiritTakeText)}</p>
      </section>
    `;
  } catch (error) {
    takeBox.innerHTML = `
      <section class="card">
        <h2>Góc nhìn FreshSpirit</h2>
        <p>${esc(error.message)}</p>
      </section>
    `;
  }
};

window.getNormalFreshSpiritTake = async function() {
  const takeBox = document.getElementById("normalFreshSpiritTakeBox");

  if (!takeBox) return;

  if (!normalCards || normalCards.length === 0) {
    takeBox.innerHTML = `
      <section class="card">
        <h2>Góc nhìn FreshSpirit</h2>
        <p>Bạn cần rút bài trước.</p>
      </section>
    `;
    return;
  }

  takeBox.innerHTML = `
    <section class="card">
      <h2>Góc nhìn FreshSpirit</h2>
      <p>Đang hỏi Gemini...</p>
    </section>
  `;

  try {
    const prompt = buildTarotPromptForNormal();
    const text = await askGemini(prompt);

    takeBox.innerHTML = `
      <section class="card">
        <h2>Góc nhìn FreshSpirit</h2>
        <p style="white-space:pre-wrap;">${esc(text)}</p>
      </section>
    `;
  } catch (error) {
    takeBox.innerHTML = `
      <section class="card">
        <h2>Góc nhìn FreshSpirit</h2>
        <p>${esc(error.message)}</p>
      </section>
    `;
  }
};
