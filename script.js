const TAROT_CARDS = [
  {
    name: "The Fool",
    viName: "Kẻ Khờ",
    image: "images/cards/maj00.jpg",
    meaning: "Khởi đầu mới, tự do, niềm tin, bước vào hành trình dù chưa biết hết điều phía trước."
  },
  {
    name: "The Magician",
    viName: "Nhà Ảo Thuật",
    image: "images/cards/maj01.jpg",
    meaning: "Bạn có đủ công cụ để biến ý tưởng thành hiện thực. Hành động, tập trung và chủ động."
  },
  {
    name: "The High Priestess",
    viName: "Nữ Tư Tế",
    image: "images/cards/maj02.jpg",
    meaning: "Trực giác, bí mật, sự lắng nghe bên trong. Chưa phải lúc vội nói hay vội hành động."
  },
  {
    name: "The Empress",
    viName: "Hoàng Hậu",
    image: "images/cards/maj03.jpg",
    meaning: "Nuôi dưỡng, sáng tạo, tình yêu, sự phát triển tự nhiên và cảm giác được chăm sóc."
  },
  {
    name: "The Emperor",
    viName: "Hoàng Đế",
    image: "images/cards/maj04.jpg",
    meaning: "Kỷ luật, cấu trúc, quyền lực, trách nhiệm và việc cần thiết lập ranh giới rõ ràng."
  },
  {
    name: "The Hierophant",
    viName: "Giáo Hoàng",
    image: "images/cards/maj05.jpg",
    meaning: "Niềm tin, truyền thống, học hỏi từ hệ thống hoặc một người có kinh nghiệm."
  },
  {
    name: "The Lovers",
    viName: "Những Người Yêu Nhau",
    image: "images/cards/maj06.jpg",
    meaning: "Tình yêu, lựa chọn, sự hòa hợp và quyết định cần xuất phát từ giá trị thật của bạn."
  },
  {
    name: "The Chariot",
    viName: "Cỗ Xe Chiến",
    image: "images/cards/maj07.jpg",
    meaning: "Ý chí mạnh mẽ, kiểm soát hướng đi, vượt qua trở ngại bằng sự quyết tâm."
  },
  {
    name: "Strength",
    viName: "Sức Mạnh",
    image: "images/cards/maj08.jpg",
    meaning: "Sức mạnh mềm, kiên nhẫn, lòng can đảm và khả năng kiểm soát cảm xúc."
  },
  {
    name: "The Hermit",
    viName: "Ẩn Sĩ",
    image: "images/cards/maj09.jpg",
    meaning: "Cần lùi lại, suy ngẫm, tìm câu trả lời bên trong thay vì chạy theo tiếng ồn bên ngoài."
  },
  {
    name: "Wheel of Fortune",
    viName: "Bánh Xe Số Phận",
    image: "images/cards/maj10.jpg",
    meaning: "Chu kỳ thay đổi, vận may, bước ngoặt và những điều nằm ngoài kiểm soát cá nhân."
  },
  {
    name: "Justice",
    viName: "Công Lý",
    image: "images/cards/maj11.jpg",
    meaning: "Sự thật, công bằng, nhân quả và quyết định cần dựa trên lý trí rõ ràng."
  },
  {
    name: "The Hanged Man",
    viName: "Người Treo Ngược",
    image: "images/cards/maj12.jpg",
    meaning: "Tạm dừng, nhìn vấn đề từ góc khác, buông kiểm soát để hiểu sâu hơn."
  },
  {
    name: "Death",
    viName: "Cái Chết",
    image: "images/cards/maj13.jpg",
    meaning: "Kết thúc một giai đoạn cũ, chuyển hóa mạnh và mở đường cho điều mới."
  },
  {
    name: "Temperance",
    viName: "Tiết Độ",
    image: "images/cards/maj14.jpg",
    meaning: "Cân bằng, chữa lành, điều chỉnh nhịp độ và tìm sự hài hòa giữa các mặt đối lập."
  },
  {
    name: "The Devil",
    viName: "Ác Quỷ",
    image: "images/cards/maj15.jpg",
    meaning: "Sự ràng buộc, ham muốn, ám ảnh hoặc thói quen khiến bạn mất tự do."
  },
  {
    name: "The Tower",
    viName: "Tòa Tháp",
    image: "images/cards/maj16.jpg",
    meaning: "Sự thật bất ngờ, đổ vỡ cấu trúc cũ và thay đổi mạnh để giải phóng bạn."
  },
  {
    name: "The Star",
    viName: "Ngôi Sao",
    image: "images/cards/maj17.jpg",
    meaning: "Hy vọng, chữa lành, niềm tin trở lại và ánh sáng sau giai đoạn khó khăn."
  },
  {
    name: "The Moon",
    viName: "Mặt Trăng",
    image: "images/cards/maj18.jpg",
    meaning: "Mơ hồ, cảm xúc sâu, trực giác mạnh nhưng cần tránh để nỗi sợ dẫn đường."
  },
  {
    name: "The Sun",
    viName: "Mặt Trời",
    image: "images/cards/maj19.jpg",
    meaning: "Niềm vui, sự rõ ràng, thành công, năng lượng tích cực và cảm giác được soi sáng."
  },
  {
    name: "Judgement",
    viName: "Phán Xét",
    image: "images/cards/maj20.jpg",
    meaning: "Thức tỉnh, nhìn lại quá khứ, tha thứ và bước sang phiên bản trưởng thành hơn."
  },
  {
    name: "The World",
    viName: "Thế Giới",
    image: "images/cards/maj21.jpg",
    meaning: "Hoàn thành, viên mãn, kết thúc một hành trình và chuẩn bị bước sang vòng mới."
  },

  {
    name: "Ace of Wands",
    viName: "Át Gậy",
    image: "images/cards/wands01.jpg",
    meaning: "Nguồn cảm hứng mới, đam mê, ý tưởng bùng lên và động lực để bắt đầu."
  },
  {
    name: "Two of Wands",
    viName: "Hai Gậy",
    image: "images/cards/wands02.jpg",
    meaning: "Lập kế hoạch, nhìn xa hơn hiện tại và cân nhắc hướng đi tiếp theo."
  },
  {
    name: "Three of Wands",
    viName: "Ba Gậy",
    image: "images/cards/wands03.jpg",
    meaning: "Chờ kết quả, mở rộng tầm nhìn, cơ hội đang dần đến từ những gì đã chuẩn bị."
  },
  {
    name: "Four of Wands",
    viName: "Bốn Gậy",
    image: "images/cards/wands04.jpg",
    meaning: "Niềm vui, ổn định, ăn mừng, gia đình hoặc một cột mốc đáng ghi nhận."
  },
  {
    name: "Five of Wands",
    viName: "Năm Gậy",
    image: "images/cards/wands05.jpg",
    meaning: "Cạnh tranh, xung đột nhỏ, nhiều ý kiến trái chiều và cần phối hợp tốt hơn."
  },
  {
    name: "Six of Wands",
    viName: "Sáu Gậy",
    image: "images/cards/wands06.jpg",
    meaning: "Chiến thắng, được công nhận, vượt qua thử thách và có vị thế tốt hơn."
  },
  {
    name: "Seven of Wands",
    viName: "Bảy Gậy",
    image: "images/cards/wands07.jpg",
    meaning: "Bảo vệ quan điểm, giữ vị trí, đứng vững trước áp lực hoặc sự cạnh tranh."
  },
  {
    name: "Eight of Wands",
    viName: "Tám Gậy",
    image: "images/cards/wands08.jpg",
    meaning: "Tin tức nhanh, tiến triển nhanh, di chuyển và mọi thứ bắt đầu tăng tốc."
  },
  {
    name: "Nine of Wands",
    viName: "Chín Gậy",
    image: "images/cards/wands09.jpg",
    meaning: "Kiên cường, phòng thủ, mệt nhưng chưa bỏ cuộc. Cần giữ sức cho chặng cuối."
  },
  {
    name: "Ten of Wands",
    viName: "Mười Gậy",
    image: "images/cards/wands10.jpg",
    meaning: "Gánh nặng, trách nhiệm quá tải và cần chia nhỏ việc hoặc buông bớt áp lực."
  },
  {
    name: "Page of Wands",
    viName: "Tiểu Đồng Gậy",
    image: "images/cards/wands11.jpg",
    meaning: "Tò mò, nhiệt huyết, muốn thử điều mới và bắt đầu khám phá một hướng đi."
  },
  {
    name: "Knight of Wands",
    viName: "Kỵ Sĩ Gậy",
    image: "images/cards/wands12.jpg",
    meaning: "Hành động nhanh, đam mê mạnh, bốc đồng nhưng đầy năng lượng tiến về phía trước."
  },
  {
    name: "Queen of Wands",
    viName: "Nữ Hoàng Gậy",
    image: "images/cards/wands13.jpg",
    meaning: "Tự tin, cuốn hút, độc lập, biết mình muốn gì và dám thể hiện bản thân."
  },
  {
    name: "King of Wands",
    viName: "Vua Gậy",
    image: "images/cards/wands14.jpg",
    meaning: "Lãnh đạo, tầm nhìn, quyết đoán và khả năng truyền cảm hứng cho người khác."
  },

  {
    name: "Ace of Cups",
    viName: "Át Cốc",
    image: "images/cards/cups01.jpg",
    meaning: "Cảm xúc mới, tình yêu, sự mở lòng, chữa lành và dòng chảy cảm xúc tích cực."
  },
  {
    name: "Two of Cups",
    viName: "Hai Cốc",
    image: "images/cards/cups02.jpg",
    meaning: "Kết nối hai chiều, tình cảm cân bằng, sự hòa hợp và thấu hiểu lẫn nhau."
  },
  {
    name: "Three of Cups",
    viName: "Ba Cốc",
    image: "images/cards/cups03.jpg",
    meaning: "Bạn bè, ăn mừng, cộng đồng và niềm vui khi được chia sẻ cảm xúc."
  },
  {
    name: "Four of Cups",
    viName: "Bốn Cốc",
    image: "images/cards/cups04.jpg",
    meaning: "Chán nản, khép lòng, chưa nhìn thấy cơ hội đang ở trước mặt."
  },
  {
    name: "Five of Cups",
    viName: "Năm Cốc",
    image: "images/cards/cups05.jpg",
    meaning: "Tiếc nuối, mất mát, buồn vì điều đã qua nhưng vẫn còn thứ đáng để giữ lại."
  },
  {
    name: "Six of Cups",
    viName: "Sáu Cốc",
    image: "images/cards/cups06.jpg",
    meaning: "Kỷ niệm, quá khứ, sự trong sáng, người cũ hoặc cảm xúc quen thuộc quay lại."
  },
  {
    name: "Seven of Cups",
    viName: "Bảy Cốc",
    image: "images/cards/cups07.jpg",
    meaning: "Nhiều lựa chọn, mơ mộng, ảo tưởng và cần phân biệt điều thật với điều hấp dẫn."
  },
  {
    name: "Eight of Cups",
    viName: "Tám Cốc",
    image: "images/cards/cups08.jpg",
    meaning: "Rời đi khỏi điều không còn đủ đầy, tìm kiếm ý nghĩa sâu hơn cho bản thân."
  },
  {
    name: "Nine of Cups",
    viName: "Chín Cốc",
    image: "images/cards/cups09.jpg",
    meaning: "Mong ước thành hiện thực, sự hài lòng, cảm xúc đủ đầy và niềm vui cá nhân."
  },
  {
    name: "Ten of Cups",
    viName: "Mười Cốc",
    image: "images/cards/cups10.jpg",
    meaning: "Hạnh phúc gia đình, tình cảm viên mãn, sự hòa thuận và cảm giác thuộc về."
  },
  {
    name: "Page of Cups",
    viName: "Tiểu Đồng Cốc",
    image: "images/cards/cups11.jpg",
    meaning: "Tin nhắn cảm xúc, sự ngây thơ, lời bày tỏ nhẹ nhàng hoặc trực giác non trẻ."
  },
  {
    name: "Knight of Cups",
    viName: "Kỵ Sĩ Cốc",
    image: "images/cards/cups12.jpg",
    meaning: "Lãng mạn, lời mời, theo đuổi cảm xúc và hành động dựa trên trái tim."
  },
  {
    name: "Queen of Cups",
    viName: "Nữ Hoàng Cốc",
    image: "images/cards/cups13.jpg",
    meaning: "Dịu dàng, thấu cảm, trực giác sâu và khả năng chăm sóc cảm xúc cho người khác."
  },
  {
    name: "King of Cups",
    viName: "Vua Cốc",
    image: "images/cards/cups14.jpg",
    meaning: "Cảm xúc trưởng thành, điềm tĩnh, biết yêu thương nhưng vẫn giữ được kiểm soát."
  },

  {
    name: "Ace of Swords",
    viName: "Át Kiếm",
    image: "images/cards/swords01.jpg",
    meaning: "Sự thật, tư duy rõ ràng, quyết định dứt khoát và một nhận thức mới."
  },
  {
    name: "Two of Swords",
    viName: "Hai Kiếm",
    image: "images/cards/swords02.jpg",
    meaning: "Lưỡng lự, né tránh quyết định, cần tháo khăn bịt mắt để nhìn thẳng vấn đề."
  },
  {
    name: "Three of Swords",
    viName: "Ba Kiếm",
    image: "images/cards/swords03.jpg",
    meaning: "Tổn thương, đau lòng, thất vọng nhưng cũng là lúc sự thật được nhìn rõ."
  },
  {
    name: "Four of Swords",
    viName: "Bốn Kiếm",
    image: "images/cards/swords04.jpg",
    meaning: "Nghỉ ngơi, hồi phục, tạm dừng suy nghĩ quá mức để lấy lại năng lượng."
  },
  {
    name: "Five of Swords",
    viName: "Năm Kiếm",
    image: "images/cards/swords05.jpg",
    meaning: "Xung đột, thắng nhưng mất nhiều, lời nói sắc bén và cái tôi quá mạnh."
  },
  {
    name: "Six of Swords",
    viName: "Sáu Kiếm",
    image: "images/cards/swords06.jpg",
    meaning: "Rời khỏi giai đoạn khó khăn, chữa lành từ từ và chuyển sang trạng thái yên ổn hơn."
  },
  {
    name: "Seven of Swords",
    viName: "Bảy Kiếm",
    image: "images/cards/swords07.jpg",
    meaning: "Che giấu, chiến thuật, không nói hết sự thật hoặc cần khôn ngoan hơn."
  },
  {
    name: "Eight of Swords",
    viName: "Tám Kiếm",
    image: "images/cards/swords08.jpg",
    meaning: "Cảm giác bị mắc kẹt, tự giới hạn bản thân và cần nhận ra mình vẫn có lựa chọn."
  },
  {
    name: "Nine of Swords",
    viName: "Chín Kiếm",
    image: "images/cards/swords09.jpg",
    meaning: "Lo âu, mất ngủ, suy nghĩ quá nhiều và nỗi sợ có thể lớn hơn thực tế."
  },
  {
    name: "Ten of Swords",
    viName: "Mười Kiếm",
    image: "images/cards/swords10.jpg",
    meaning: "Kết thúc đau đớn, chạm đáy nhưng cũng là dấu hiệu chu kỳ cũ đã xong."
  },
  {
    name: "Page of Swords",
    viName: "Tiểu Đồng Kiếm",
    image: "images/cards/swords11.jpg",
    meaning: "Quan sát, tò mò, tìm hiểu sự thật, giao tiếp nhanh nhưng còn non kinh nghiệm."
  },
  {
    name: "Knight of Swords",
    viName: "Kỵ Sĩ Kiếm",
    image: "images/cards/swords12.jpg",
    meaning: "Lao nhanh về phía mục tiêu, quyết liệt, sắc bén nhưng dễ thiếu kiên nhẫn."
  },
  {
    name: "Queen of Swords",
    viName: "Nữ Hoàng Kiếm",
    image: "images/cards/swords13.jpg",
    meaning: "Rõ ràng, lý trí, độc lập, nói thẳng và không dễ bị cảm xúc che mắt."
  },
  {
    name: "King of Swords",
    viName: "Vua Kiếm",
    image: "images/cards/swords14.jpg",
    meaning: "Quyền lực trí tuệ, công bằng, quyết đoán và khả năng phân tích sắc bén."
  },

  {
    name: "Ace of Pentacles",
    viName: "Át Xu",
    image: "images/cards/pents01.jpg",
    meaning: "Cơ hội vật chất mới, tiền bạc, công việc, nền tảng thực tế và tiềm năng phát triển."
  },
  {
    name: "Two of Pentacles",
    viName: "Hai Xu",
    image: "images/cards/pents02.jpg",
    meaning: "Cân bằng nhiều việc, xoay xở tài chính hoặc cần quản lý thời gian linh hoạt hơn."
  },
  {
    name: "Three of Pentacles",
    viName: "Ba Xu",
    image: "images/cards/pents03.jpg",
    meaning: "Hợp tác, học nghề, làm việc nhóm và xây dựng kết quả bằng kỹ năng thực tế."
  },
  {
    name: "Four of Pentacles",
    viName: "Bốn Xu",
    image: "images/cards/pents04.jpg",
    meaning: "Giữ chặt, kiểm soát, sợ mất mát hoặc quá bám vào sự an toàn vật chất."
  },
  {
    name: "Five of Pentacles",
    viName: "Năm Xu",
    image: "images/cards/pents05.jpg",
    meaning: "Thiếu thốn, cảm giác bị bỏ rơi, khó khăn tài chính hoặc cần tìm sự hỗ trợ."
  },
  {
    name: "Six of Pentacles",
    viName: "Sáu Xu",
    image: "images/cards/pents06.jpg",
    meaning: "Cho và nhận, hỗ trợ, sự cân bằng trong tài chính hoặc trong mối quan hệ."
  },
  {
    name: "Seven of Pentacles",
    viName: "Bảy Xu",
    image: "images/cards/pents07.jpg",
    meaning: "Chờ thành quả, kiên nhẫn, đánh giá quá trình và xem công sức có xứng đáng không."
  },
  {
    name: "Eight of Pentacles",
    viName: "Tám Xu",
    image: "images/cards/pents08.jpg",
    meaning: "Rèn luyện, chăm chỉ, nâng cao kỹ năng và tập trung vào chất lượng công việc."
  },
  {
    name: "Nine of Pentacles",
    viName: "Chín Xu",
    image: "images/cards/pents09.jpg",
    meaning: "Độc lập, sung túc, tự chủ, tận hưởng thành quả do chính mình tạo ra."
  },
  {
    name: "Ten of Pentacles",
    viName: "Mười Xu",
    image: "images/cards/pents10.jpg",
    meaning: "Ổn định lâu dài, gia đình, tài sản, nền tảng vững chắc và thành tựu bền vững."
  },
  {
    name: "Page of Pentacles",
    viName: "Tiểu Đồng Xu",
    image: "images/cards/pents11.jpg",
    meaning: "Cơ hội học tập, bắt đầu thực tế, tin tức về tiền bạc hoặc một kế hoạch có tiềm năng."
  },
  {
    name: "Knight of Pentacles",
    viName: "Kỵ Sĩ Xu",
    image: "images/cards/pents12.jpg",
    meaning: "Chậm mà chắc, trách nhiệm, kiên trì và tiến từng bước ổn định."
  },
  {
    name: "Queen of Pentacles",
    viName: "Nữ Hoàng Xu",
    image: "images/cards/pents13.jpg",
    meaning: "Chăm sóc thực tế, ổn định, biết vun vén tiền bạc, gia đình và đời sống cá nhân."
  },
  {
    name: "King of Pentacles",
    viName: "Vua Xu",
    image: "images/cards/pents14.jpg",
    meaning: "Thành công vật chất, năng lực quản lý, sự ổn định và tư duy xây dựng lâu dài."
  }
];

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
  return TAROT_CARDS[randomIndex];
}

function getAllCards() {
  return TAROT_CARDS;
}
