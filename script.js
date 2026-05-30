document.addEventListener("DOMContentLoaded", () => {
  const gameOrder = ["tam-sao-that-ban", "doan-hinh-anh", "ghi-nho-the-bai"];

  const gameIcons = {
    "tam-sao-that-ban": `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="modal-game-icon-svg">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16Z" fill="#1757ab"/>
      </svg>
    `,
    "doan-hinh-anh": `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="modal-game-icon-svg">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#f2533d"/>
      </svg>
    `,
    "ghi-nho-the-bai": `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="modal-game-icon-svg">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C8.74 12.09 8 10.66 8 9c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.66-.74 3.09-2.15 4.1z" fill="#b39625"/>
      </svg>
    `,
  };

  const gamesData = {
    "tam-sao-that-ban": {
      number: "01",
      title: "Tam sao thất bản",
      tagline: "Một thông điệp — Ba lăng kính",
      badge: "BỘ LỌC",
      heroImageCaption:
        "Mỗi người sẽ vẽ lại thông điệp theo cách hiểu của mình.",
      visualType: "image",
      rules:
        "Cả lớp sẽ chia thành 3 nhóm xếp thành 3 hàng. Mỗi hàng sẽ cử ra một đại diện để coi hình ảnh và bắt đầu suy nghĩ ra từ để truyền đạt ý nghĩa của hình ảnh hoặc tới người cuối cùng.",
      howToPlay:
        "Mỗi hàng cử ra 1 đại diện xem hình và truyền đạt ý nghĩa cho người kế tiếp. Các thành viên còn lại quay mặt ngược lại để giữ công bằng trong quá trình chơi.",
      quantityLabel: "SỐ LƯỢNG",
      quantityValue: "3 câu",
      questionLabel: "ĐỀ BÀI",
      questionValue: "12 từ khóa",
      questions: [
        "Bộ lọc",
        "Tờ tiền",
        "Con mèo",
        "Robot",
        "Người tuyết",
        "Con lợn",
        "Guitar",
        "Cây quạt (cầm tay)",
        "Kem hộp",
        "Cái gương",
        "Cá hộp",
        "Ổ khóa",
      ],
      notes: [
        "Khi lên nhận hình ảnh và khi truyền đạt, các thành viên còn lại đều phải quay mặt về phía ngược lại để đảm bảo sự công bằng trong trò chơi.",
        "Tuyệt đối không được nói ra từ ngữ nằm trong trò chơi. Nếu vi phạm, bạn sẽ phải nhận hình ảnh mới.",
      ],
      media: {
        heroCandidates: [
          "assets/tamsaothatban2.png",
          "assets/tam-sao-that-ban.png",
        ],
        galleryCandidates: [...buildFolderCandidates("assets/game1")],
      },
    },
    "doan-hinh-anh": {
      number: "02",
      title: "Đoán hình ảnh",
      tagline: "Nhìn thật kỹ — Đoán thật nhanh",
      badge: "BỘ LỌC",
      heroImageCaption:
        "Nhìn từ một phần rất nhỏ, bạn có đoán được toàn bộ bức tranh?",
      visualType: "image",
      rules:
        "Trò chơi sẽ được thực hiện trên web. Mỗi nhóm sẽ thảo luận và đoán tổng cộng 05 hình ảnh được trình chiếu. Các hình ảnh sẽ được hiển thị dưới nhiều dạng biến đổi khác nhau như phóng to chi tiết, cắt góc, làm mờ hoặc chuyển sang dạng pixel hóa. Trong quá trình chơi, các thành viên trong nhóm được phép thảo luận với nhau để đưa ra câu trả lời cuối cùng.",
      howToPlay:
        "Mỗi nhóm quan sát hình ảnh biến đổi, thảo luận nhanh và chốt đáp án trong thời gian giới hạn. Toàn đội được phép trao đổi với nhau trước khi đưa ra câu trả lời cuối cùng.",
      quantityLabel: "SỐ LƯỢNG",
      quantityValue: "5 hình",
      questionLabel: "ĐỀ BÀI",
      questionValue: "27 hình ảnh",
      questions: [
        "Giáo trình triết học Mác-Lênin",
        "Bóng đèn",
        "Đôi mắt",
        "Logo Bộ Lọc",
        "Đồng tiền",
        "Hình của Mác - Lênin (bị làm mờ)",
        "Angghen (Hoạt hình hóa)",
        "Loa phát thanh",
        "Biểu đồ",
        "Cây xanh",
        "Quả địa cầu",
        "Công nhân",
        "Cái cân (cân bằng)",
        "Chim bồ câu đưa thư",
        "Khối xúc xắc",
        "Con ngựa",
        "Ngôi sao",
        "Con tem dán bìa thư",
        "Đồng hồ",
        "Cây búa công lý",
        "Cây bút máy",
        "Cây bút chì",
        "Đồng hồ cát",
        "Ngọn lửa",
        "Bản đồ giấy",
        "Kính lúp",
        "La bàn",
      ],
      notes: [
        "Được thảo luận nhóm để đưa ra câu trả lời cuối cùng.",
        "Không nói trực tiếp từ khóa nếu đang ở phần truyền đạt.",
        "Khi nhận hình ảnh và truyền đạt, các thành viên khác phải quay mặt về hướng ngược lại để đảm bảo công bằng.",
      ],
      media: {
        heroCandidates: ["assets/doanhinhanh.png", "assets/doan-hinh-anh.png"],
        galleryCandidates: [...buildFolderCandidates("assets/game2")],
      },
    },
    "ghi-nho-the-bai": {
      number: "03",
      title: "Ghi nhớ thẻ bài",
      tagline: "Quan sát — Ghi nhớ — Kết nối",
      badge: "BỘ LỌC",
      heroImageCaption:
        "Bạn còn nhớ vị trí của các cặp thẻ sau vài giây quan sát?",
      visualType: "memory-board",
      rules:
        "Trước khi bắt đầu, mỗi đội sẽ bốc thăm ngẫu nhiên thời gian quan sát bài gồm: 5 giây, 10 giây hoặc 15 giây. Quản trò sẽ lật toàn bộ 20 lá bài để đội chơi ghi nhớ vị trí, sau đó úp lại và bắt đầu trò chơi.",
      howToPlay:
        "Mỗi người lần lượt mở 2 lá. Nếu trùng cặp thì được giữ lại và tiếp tục lượt. Nếu sai thì úp lại đúng vị trí ban đầu và chuyển lượt cho thành viên tiếp theo.",
      quantityLabel: "SỐ LƯỢNG",
      quantityValue: "10 cặp thẻ",
      questionLabel: "ĐỀ BÀI",
      questionValue: "10 cặp bài",
      questions: [
        "Vũ trụ",
        "Đồi núi",
        "Trái đất",
        "Đồng hồ",
        "Thiên hà",
        "Cây búa",
        "Công nhân",
        "Quyển sách",
        "Bóng đèn",
        "Đôi mắt",
      ],
      notes: [
        "Không được chỉ bài, nhắc bài, ra ký hiệu hoặc hỗ trợ nhau bằng lời nói/hành động.",
        "Mỗi người chơi phải tự ghi nhớ và tự đưa ra lựa chọn.",
        "Nếu vi phạm, quản trò có quyền nhắc nhở hoặc xử thua tùy mức độ.",
      ],
      media: {
        heroCandidates: [
          "assets/ghinhothebai.png",
          "assets/ghi-nho-the-bai.png",
        ],
        galleryCandidates: [...buildFolderCandidates("assets/game3")],
      },
    },
  };

  const modalOverlay = document.getElementById("game-modal");
  const modalContent = document.getElementById("modal-content");
  const btnCloseModal = document.getElementById("btn-close-modal");

  const selectedImageByGame = {};
  const loadedImagesByGame = {};
  let activeGameKey = null;
  let renderToken = 0;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function buildFolderCandidates(folder) {
    const names = [
      "cover",
      "hero",
      "main",
      "1",
      "2",
      "3",
      "detail",
      "shot",
      "preview",
    ];
    const extensions = ["png", "jpg", "jpeg", "webp"];
    const candidates = [];

    names.forEach((name) => {
      extensions.forEach((extension) => {
        candidates.push(`${folder}/${name}.${extension}`);
      });
    });

    return candidates;
  }

  function probeImage(source) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(source);
      image.onerror = () => resolve(null);
      image.src = source;
    });
  }

  async function loadGameMedia(gameKey) {
    if (loadedImagesByGame[gameKey]) {
      return loadedImagesByGame[gameKey];
    }

    const game = gamesData[gameKey];
    if (!game) return [];

    const candidates = [
      ...game.media.heroCandidates,
      ...game.media.galleryCandidates,
    ];

    const uniqueCandidates = [...new Set(candidates.filter(Boolean))];
    const results = await Promise.all(uniqueCandidates.map(probeImage));
    const loaded = results.filter(Boolean);

    loadedImagesByGame[gameKey] = loaded;
    return loaded;
  }

  function iconMarkup(gameKey) {
    return gameIcons[gameKey] || "";
  }

  function buildSidebar(activeKey) {
    return gameOrder
      .map((gameKey, index) => {
        const game = gamesData[gameKey];
        const isActive = gameKey === activeKey;

        return `
          <button
            class="modal-sidebar-item ${isActive ? "is-active" : ""}"
            type="button"
            data-switch-game="${gameKey}"
            aria-pressed="${isActive ? "true" : "false"}"
          >
            <span class="modal-sidebar-number">${String(index + 1).padStart(2, "0")}</span>
            <span class="modal-sidebar-icon">${iconMarkup(gameKey)}</span>
            <span class="modal-sidebar-label">${escapeHtml(game.title)}</span>
          </button>
        `;
      })
      .join("");
  }

  function buildQuickCard(label, value) {
    return `
      <article class="modal-info-card">
        <div class="modal-info-label">${escapeHtml(label)}</div>
        <div class="modal-info-value">${escapeHtml(value)}</div>
      </article>
    `;
  }

  function buildThumbnail(imageSource, activeSource, gameKey) {
    const isActive = imageSource === activeSource;
    return `
      <button
        type="button"
        class="modal-thumb ${isActive ? "is-active" : ""}"
        data-gallery-image="${imageSource}"
        data-gallery-game="${gameKey}"
        aria-label="Xem ảnh ${escapeHtml(gameKey)}"
      >
        <img src="${imageSource}" alt="Ảnh thu nhỏ ${escapeHtml(gameKey)}" />
      </button>
    `;
  }

  function buildImageStage(gameKey, media, activeImage) {
    const game = gamesData[gameKey];

    if (game.visualType === "memory-board" && media.length === 0) {
      return `
        <section class="modal-visual-card modal-board-card">
          <div class="modal-board-grid" aria-hidden="true">
            ${Array.from({ length: 20 })
              .map(
                (_, index) => `
                  <div class="modal-board-tile ${index % 2 === 0 ? "is-gold" : "is-cream"}"></div>
                `,
              )
              .join("")}
          </div>
          <div class="modal-visual-caption">${escapeHtml(game.heroImageCaption)}</div>
        </section>
      `;
    }

    if (media.length === 0) {
      return `
        <section class="modal-visual-card modal-placeholder-card">
          <div class="modal-placeholder-mark">${escapeHtml(game.number)}</div>
          <div class="modal-placeholder-copy">
            <strong>${escapeHtml(game.title)}</strong>
            <span>${escapeHtml(game.heroImageCaption)}</span>
          </div>
        </section>
      `;
    }

    const gallery = media
      .filter((source) => source !== activeImage)
      .slice(0, 3);

    return `
      <section class="modal-visual-wrap">
        <figure class="modal-visual-card">
          <img class="modal-hero-image" src="${activeImage}" alt="${escapeHtml(game.title)}" />
          <figcaption class="modal-visual-caption">${escapeHtml(game.heroImageCaption)}</figcaption>
        </figure>
        ${
          gallery.length > 0
            ? `
              <div class="modal-gallery-row">
                ${gallery
                  .map((source) => buildThumbnail(source, activeImage, gameKey))
                  .join("")}
              </div>
            `
            : ""
        }
      </section>
    `;
  }

  function buildSection(title, icon, content, extraClass = "") {
    return `
      <section class="modal-section-block ${extraClass}">
        <div class="modal-section-heading">
          <span class="modal-section-icon">${icon}</span>
          <h4>${escapeHtml(title)}</h4>
        </div>
        <div class="modal-section-body">
          ${content}
        </div>
      </section>
    `;
  }

  function buildNotesList(notes) {
    return `
      <ul class="modal-note-list">
        ${notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
      </ul>
    `;
  }

  function buildGameMarkup(gameKey, media, activeImage) {
    const game = gamesData[gameKey];
    const visibleImage = activeImage || media[0] || "";

    const questionsHtml = game.questions
      .map(
        (question) => `<span class="tag-item">${escapeHtml(question)}</span>`,
      )
      .join("");

    return `
      <div class="modal-shell ${media.length > 0 ? "has-media" : ""}" data-active-game="${gameKey}">
        <aside class="modal-sidebar">
          <div class="modal-sidebar-title">TRÒ CHƠI</div>
          <div class="modal-sidebar-list">
            ${buildSidebar(gameKey)}
          </div>
        </aside>

        <section class="modal-main">
          <div class="modal-main-inner modal-enter">
            <header class="modal-hero-block">
              <div class="modal-hero-badge">
                <span class="modal-hero-icon">${iconMarkup(gameKey)}</span>
                <span class="modal-hero-number">${escapeHtml(game.number)}</span>
              </div>
              <h2 class="modal-hero-title">${escapeHtml(game.title)}</h2>
              <p class="modal-hero-tagline">${escapeHtml(game.tagline)}</p>
            </header>

            ${buildImageStage(gameKey, media, visibleImage)}

            <section class="modal-info-grid">
              ${buildQuickCard(game.quantityLabel, game.quantityValue)}
              ${buildQuickCard(game.questionLabel, game.questionValue)}
            </section>

            ${buildSection(
              "LUẬT CHƠI",
              "📜",
              `<p class="modal-section-copy">${escapeHtml(game.rules)}</p>`,
            )}

            ${
              game.howToPlay
                ? buildSection(
                    "CÁCH CHƠI",
                    "⚙️",
                    `<p class="modal-section-copy">${escapeHtml(game.howToPlay)}</p>`,
                  )
                : ""
            }

            ${buildSection(
              "ĐỀ BÀI",
              "🎯",
              `<div class="tags-grid">${questionsHtml}</div>`,
            )}

            ${buildSection(
              "LƯU Ý",
              "⚠️",
              buildNotesList(game.notes),
              "modal-notes-section",
            )}

            <div class="modal-footer-bar">
              <button class="btn btn-secondary modal-close-inline" type="button" data-close-modal>
                Đóng
              </button>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  async function renderGame(gameKey, options = {}) {
    const game = gamesData[gameKey];
    if (!game) return;

    const token = ++renderToken;
    activeGameKey = gameKey;

    if (options.transition && modalContent.querySelector(".modal-shell")) {
      modalContent.querySelector(".modal-shell")?.classList.add("is-leaving");
      await new Promise((resolve) => window.setTimeout(resolve, 140));
    }

    modalContent.innerHTML = buildGameMarkup(gameKey, [], null);

    const loadedMedia = await loadGameMedia(gameKey);
    if (token !== renderToken || activeGameKey !== gameKey) return;

    const selectedImage =
      (selectedImageByGame[gameKey] &&
      loadedMedia.includes(selectedImageByGame[gameKey])
        ? selectedImageByGame[gameKey]
        : loadedMedia[0]) || null;

    if (selectedImage) {
      selectedImageByGame[gameKey] = selectedImage;
    }

    modalContent.innerHTML = buildGameMarkup(
      gameKey,
      loadedMedia,
      selectedImage,
    );
  }

  function openModal(gameKey) {
    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    renderGame(gameKey);
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("click", () => {
      const gameKey = card.getAttribute("data-game");
      openModal(gameKey);
    });
  });

  btnCloseModal.addEventListener("click", closeModal);

  modalContent.addEventListener("click", (event) => {
    const closeButton = event.target.closest("[data-close-modal]");
    if (closeButton) {
      closeModal();
      return;
    }

    const switchButton = event.target.closest("[data-switch-game]");
    if (switchButton) {
      const nextGameKey = switchButton.getAttribute("data-switch-game");
      if (nextGameKey && nextGameKey !== activeGameKey) {
        renderGame(nextGameKey, { transition: true });
      }
      return;
    }

    const thumbnailButton = event.target.closest("[data-gallery-image]");
    if (thumbnailButton) {
      const imageSource = thumbnailButton.getAttribute("data-gallery-image");
      if (imageSource && activeGameKey) {
        selectedImageByGame[activeGameKey] = imageSource;
        renderGame(activeGameKey, { transition: true });
      }
    }
  });

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  const menuToggle = document.getElementById("menu-toggle");
  const headerNavWrapper = document.getElementById("header-nav-wrapper");

  if (menuToggle && headerNavWrapper) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      menuToggle.classList.toggle("active");
      headerNavWrapper.classList.toggle("nav-active");
    });

    document.querySelectorAll(".nav-link, .btn-cta").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        headerNavWrapper.classList.remove("nav-active");
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !headerNavWrapper.contains(event.target) &&
        event.target !== menuToggle
      ) {
        menuToggle.classList.remove("active");
        headerNavWrapper.classList.remove("nav-active");
      }
    });
  }
});
