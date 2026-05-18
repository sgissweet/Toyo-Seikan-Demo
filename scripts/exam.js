const questions = [
  {
    q: "1. 2 + 2 เท่ากับอะไร?",
    choices: ["1", "2", "3", "4"],
  },
  {
    q: "2. เมืองหลวงของประเทศไทยคืออะไร?",
    choices: ["เชียงใหม่", "กรุงเทพมหานคร", "ภูเก็ต", "ขอนแก่น"],
  },
  {
    q: "3. 5 x 6 เท่ากับอะไร?",
    choices: ["11", "25", "30", "35"],
  },
  {
    q: "4. สีของท้องฟ้าคืออะไร?",
    choices: ["แดง", "เขียว", "ฟ้า", "เหลือง"],
  },
  {
    q: "5. 10 - 3 เท่ากับอะไร?",
    choices: ["5", "6", "7", "8"],
  },
  // {
  //   q: "6. สัตว์ชนิดใดบินได้?",
  //   choices: ["สุนัข", "แมว", "นก", "ปลา"],
  // },
  // {
  //   q: "7. 9 ÷ 3 เท่ากับอะไร?",
  //   choices: ["2", "3", "4", "5"],
  // },
  // {
  //   q: "8. น้ำแข็งมีสถานะอะไร?",
  //   choices: ["ของแข็ง", "ของเหลว", "แก๊ส", "พลาสมา"],
  // },
  // {
  //   q: "9. 7 + 8 เท่ากับอะไร?",
  //   choices: ["13", "14", "15", "16"],
  // },
  // {
  //   q: "10. ดวงอาทิตย์ขึ้นทางทิศใด?",
  //   choices: ["เหนือ", "ใต้", "ตะวันออก", "ตะวันตก"],
  // }
];

const tabContainer = document.getElementById("exam-tabs");
const contentContainer = document.getElementById("exam-content");

let contentHTML = `<h5>The exams can choose only one answer.</h5>`;

// Tabs
let tabHTML = `
  <table class="table table-bordered text-center mb-0">
    <tbody>
      <tr>
`;

questions.forEach((_, index) => {
  tabHTML += `
    <td class="p-0">
      <button class="nav-link w-100 rounded-0 ${index === 0 ? "active" : ""}"
              data-bs-toggle="pill"
              data-bs-target="#q${index + 1}">
        ${index + 1}
      </button>
    </td>
  `;
});

tabHTML += `
      </tr>
    </tbody>
  </table>
`;

// Content
questions.forEach((item, index) => {
  contentHTML += `
    <div class="tab-pane fade ${index === 0 ? "show active" : ""} ms-3" id="q${index+1}">
      <h5>${item.q}</h5>
      <div class="mx-5 px-5 mt-3">
  `;

  item.choices.forEach((choice, i) => {
    const id = `q${index+1}-${i}`;
    contentHTML += `
      <div class="position-relative mb-2">
        <input type="radio" name="q${index+1}" id="${id}"
              class="form-check-input position-absolute top-50 start-0 translate-middle-y mt-0">

        <label for="${id}" class="d-block border px-3 py-2 ms-2">
          ${choice}
        </label>
      </div>
    `;
  });

  contentHTML += `</div></div>`;
});

tabContainer.innerHTML = tabHTML;
contentContainer.innerHTML = contentHTML;

// change tab color + count
document.addEventListener("change", function(e) {
  if (e.target.matches('input[type="radio"]')) {

    const questionName = e.target.name;

    const tabBtn = document.querySelector(
      `[data-bs-target="#${questionName}"]`
    );

    if (tabBtn) {
      tabBtn.classList.add("bg-success", "text-white");
    }

    // จำนวนข้อที่ตอบแล้ว
    const answeredCount = document.querySelectorAll(
      'input[type="radio"]:checked'
    ).length;

    const examCount = document.getElementById("exam-count");

    if (examCount) {
      examCount.textContent = `${answeredCount}/${questions.length}`;
    }
  }
});


// click events (Previous + Submit)
document.addEventListener("click", function(e) {

  // Previous
  if (e.target && e.target.id === "previous-bt") {
    const activeTab = document.querySelector(".nav-link.active");
    const prevTab = activeTab?.parentElement.previousElementSibling?.querySelector(".nav-link");

    if (prevTab) {
      prevTab.click();
    }
  }

  //  Submit
  if (e.target && e.target.id === "submit-bt") {

    const answeredCount = document.querySelectorAll(
      'input[type="radio"]:checked'
    ).length;

    // ยังตอบไม่ครบ
    if (answeredCount < questions.length) {

      // เปลี่ยนข้อความใน modal
      document.getElementById("warning-message").textContent =
        `Please complete all questions (${answeredCount}/${questions.length})`;

      // เปิด warning modal
      const warningModal = new bootstrap.Modal(
        document.getElementById("warningModal")
      );

      warningModal.show();

      return;
    }

    //  ตอบครบ
    const completeModal = new bootstrap.Modal(
      document.getElementById("completeModal")
    );

    completeModal.show();
  }

});


// update prev button state
document.addEventListener("shown.bs.tab", function() {
  const activeTab = document.querySelector(".nav-link.active");
  const isFirst = !activeTab?.parentElement.previousElementSibling;

  const prevBt = document.getElementById("previous-bt");
  if (prevBt) {
    prevBt.disabled = isFirst;
  }
});

// เรียกครั้งแรก (ถ้า DOM มาทันก็ทำเลย)
setTimeout(() => {
  const activeTab = document.querySelector(".nav-link.active");
  const isFirst = !activeTab?.parentElement.previousElementSibling;

  const prevBt = document.getElementById("previous-bt");
  if (prevBt) {
    prevBt.disabled = isFirst;
  }
}, 0);