document.addEventListener("DOMContentLoaded", () => {
  // 1. Dữ liệu chi tiết của 3 trò chơi (giữ nguyên toàn bộ nội dung từ context)
  const gamesData = {
    "tam-sao-that-ban": {
      title: "Tam sao thất bản",
      emoji: "🗣️👥",
      rules: "Cả lớp sẽ chia thành 3 nhóm xếp thành 3 hàng. Mỗi hàng sẽ cử ra một đại diện để coi hình ảnh và bắt đầu suy nghĩ ra từ để truyền đạt ý nghĩa của hình ảnh hoặc tới người cuối cùng.",
      quantity: "3 câu",
      questions: [
        "Bộ lọc", "Tờ tiền", "Con mèo", "Robot", "Người tuyết", "Con lợn",
        "Guitar", "Cây quạt (cầm tay)", "Kem hộp", "Cái gương", "Cá hộp", "Ổ khóa"
      ],
      notes: [
        "Khi lên nhận hình ảnh và khi truyền đạt, các thành viên còn lại đều phải quay mặt về phía ngược lại để đảm bảo sự công bằng trong trò chơi.",
        "Tuyệt đối không được nói ra từ ngữ nằm trong trò chơi. Nếu vi phạm, bạn sẽ phải nhận hình ảnh mới."
      ]
    },
    "doan-hinh-anh": {
      title: "Đoán hình ảnh",
      emoji: "👁️🖼️",
      rules: "Trò chơi sẽ được thực hiện trên web. Mỗi nhóm sẽ thảo luận và đoán tổng cộng 05 hình ảnh được trình chiếu. Các hình ảnh sẽ được hiển thị dưới nhiều dạng biến đổi khác nhau như phóng to chi tiết, cắt góc, làm mờ hoặc chuyển sang dạng pixel hóa. Trong quá trình chơi, các thành viên trong nhóm được phép thảo luận với nhau để đưa ra câu trả lời cuối cùng.",
      quantity: "Mỗi nhóm 5 hình",
      questions: [
        "Giáo trình triết học Mác-Lênin", "Bóng đèn", "Đôi mắt", "Logo Bộ Lọc", "Đồng tiền",
        "Hình của Mác - Lênin (bị làm mờ)", "Angghen (Hoạt hình hóa)", "Loa phát thanh", "Biểu đồ", "Cây xanh",
        "Quả địa cầu", "Công nhân", "Cái cân (cân bằng)", "Chim bồ câu đưa thư", "Khối xúc xắc",
        "Con ngựa", "Ngôi sao", "Con tem dán bìa thư", "Đồng hồ", "Cây búa công lý",
        "Cây bút máy", "Cây bút chì", "Đồng hồ cát", "Ngọn lửa", "Bản đồ giấy",
        "Kính lúp", "La bàn"
      ],
      notes: [
        "Khi lên nhận hình ảnh và khi truyền đạt, các thành viên còn lại đều phải quay mặt về phía ngược lại để đảm bảo sự công bằng trong trò chơi.",
        "Tuyệt đối không được nói ra từ ngữ nằm trong trò chơi. Nếu vi phạm, bạn sẽ phải nhận hình ảnh mới."
      ]
    },
    "ghi-nho-the-bai": {
      title: "Ghi nhớ thẻ bài",
      emoji: "🧠🃏",
      rules: "Trước khi bắt đầu, mỗi đội sẽ bốc thăm ngẫu nhiên thời gian quan sát bài gồm: 5 giây, 10 giây hoặc 15 giây. Quản trò sẽ lật toàn bộ 20 lá bài để đội chơi ghi nhớ vị trí, sau đó úp lại và bắt đầu trò chơi.",
      howToPlay: "Các thành viên trong đội chơi lần lượt, không được chơi cùng lúc. Đến lượt mình, người chơi sẽ lật 2 lá bài để tìm cặp giống nhau. Nếu hai lá giống nhau: đội được giữ cặp bài và người chơi được tiếp tục lượt. Nếu hai lá khác nhau: úp lại đúng vị trí ban đầu và chuyển lượt cho thành viên tiếp theo.",
      isMemoryCard: true,
      questions: [
        "Vũ trụ", "Đồi núi", "Trái đất", "Đồng hồ", "Thiên hà",
        "Cây búa", "Công nhân", "Quyển sách", "Bóng đèn", "Đôi mắt"
      ],
      notes: [
        "Không được chỉ bài, nhắc bài, ra ký hiệu hoặc hỗ trợ nhau bằng lời nói/hành động.",
        "Mỗi người chơi phải tự ghi nhớ và tự đưa ra lựa chọn.",
        "Nếu vi phạm, quản trò có quyền nhắc nhở hoặc xử thua tùy mức độ."
      ]
    }
  };

  // 2. Lấy các phần tử DOM quan trọng
  const modalOverlay = document.getElementById("game-modal");
  const modalContent = document.getElementById("modal-content");
  const btnCloseModal = document.getElementById("btn-close-modal");

  // 3. Hàm mở Modal
  function openModal(gameKey) {
    const game = gamesData[gameKey];
    if (!game) return;

    // Thiết kế cấu trúc HTML nội dung chi tiết
    let questionsTitle = "Danh Sách Đề Bài Tham Khảo:";
    let questionsHtml = "";

    if (game.isMemoryCard) {
      questionsTitle = "10 Cặp Thẻ Bài Cần Ghi Nhớ:";
    }

    game.questions.forEach((q) => {
      questionsHtml += `<span class="tag-item">${q}</span>`;
    });

    let extraHowToPlayHtml = "";
    if (game.howToPlay) {
      extraHowToPlayHtml = `
        <div class="modal-section">
          <h4 class="modal-section-title">🏃‍♂️ Cách chơi</h4>
          <p class="modal-section-content">${game.howToPlay}</p>
        </div>
      `;
    }

    let quantityHtml = "";
    if (game.quantity) {
      quantityHtml = `
        <div class="modal-section">
          <h4 class="modal-section-title">🔢 Số lượng chơi</h4>
          <p class="modal-section-content">${game.quantity}</p>
        </div>
      `;
    }

    let notesHtml = "";
    if (game.notes && game.notes.length > 0) {
      let notesItems = "";
      game.notes.forEach((note) => {
        notesItems += `<li>${note}</li>`;
      });
      notesHtml = `
        <div class="modal-note-box">
          <div class="modal-note-title">⚠️ Lưu ý quan trọng</div>
          <ul class="modal-note-list">
            ${notesItems}
          </ul>
        </div>
      `;
    }

    // Chèn HTML hoàn chỉnh
    modalContent.innerHTML = `
      <div class="modal-game-header">
        <span class="modal-game-emoji">${game.emoji}</span>
        <h3 class="modal-game-title" id="modal-title">${game.title}</h3>
      </div>
      
      <div class="modal-section">
        <h4 class="modal-section-title">📜 Luật chơi</h4>
        <p class="modal-section-content">${game.rules}</p>
      </div>

      ${extraHowToPlayHtml}
      ${quantityHtml}

      <div class="modal-section">
        <h4 class="modal-section-title">🎯 ${questionsTitle}</h4>
        <div class="tags-grid">
          ${questionsHtml}
        </div>
      </div>

      ${notesHtml}

      <div class="modal-footer">
        <button class="btn btn-secondary" id="btn-close-modal-bottom">Đóng</button>
      </div>
    `;

    // Kích hoạt Modal hiển thị
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  // 4. Hàm đóng Modal
  function closeModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  // 5. Gắn sự kiện cho các Card trò chơi để mở Modal khi bấm
  document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("click", () => {
      const gameKey = card.getAttribute("data-game");
      openModal(gameKey);
    });
  });

  // 6. Gắn sự kiện Đóng Modal
  btnCloseModal.addEventListener("click", closeModal);

  // Đóng modal khi bấm nút Đóng ở dưới chân modal (sử dụng ủy quyền sự kiện)
  modalContent.addEventListener("click", (e) => {
    if (e.target && e.target.id === "btn-close-modal-bottom") {
      closeModal();
    }
  });

  // Đóng modal khi bấm ra ngoài vùng container (nhấn vào overlay nền mờ)
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Đóng modal khi nhấn phím ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
});
