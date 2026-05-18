const resultData = {
  status: "Failed",
  passed: false,

  summary: [
    {
      label: "Number of question",
      value: "10 Questions"
    },
    {
      label: "Time allowed",
      value: "20 Minutes"
    },
    {
      label: "Time spent",
      value: "2 Minutes"
    },
    {
      label: "Total score",
      value: "10 Points"
    },
    {
      label: "Your score earned",
      value: "2 Points"
    },
    {
      label: "Percent",
      value: "30.00%"
    }
  ],

  questions: [
    { question: "Question 1", score: 0 },
    { question: "Question 2", score: 0 },
    { question: "Question 3", score: 0 },
    { question: "Question 4", score: 1 },
    { question: "Question 5", score: 0 },
    { question: "Question 6", score: 1 },
    { question: "Question 7", score: 0 },
    { question: "Question 8", score: 0 },
    { question: "Question 9", score: 0 },
    { question: "Question 10", score: 1 }
  ]
};


// =========================
// STATUS
// =========================

const statusIcon = document.getElementById("statusIcon");
const statusText = document.getElementById("statusText");

statusText.innerText = resultData.status;

if(resultData.passed){
  statusIcon.className = "bi bi-check-circle-fill text-success fs-2";
  statusText.classList.add("text-success");
}else{
  statusIcon.className = "bi bi-x-circle-fill text-danger fs-2";
  statusText.classList.add("text-danger");
}

// =========================
// SUMMARY TABLE
// =========================

const summaryTable = document.getElementById("summaryTable");

resultData.summary.forEach(item => {

  summaryTable.innerHTML += `
    <tr>
      <td class="ps-4">${item.label}</td>
      <td class="text-end pe-4">${item.value}</td>
    </tr>
  `;
});

// =========================
// QUESTION TABLE
// =========================

const questionTable = document.getElementById("questionTable");

let totalScore = 0;

resultData.questions.forEach(item => {

  totalScore += item.score;

  const dotClass = item.score > 0
    ? "dot-green"
    : "dot-red";

  questionTable.innerHTML += `
    <tr>
      <td>
        <span class="question-dot ${dotClass} me-2"></span>
        ${item.question}
      </td>

      <td class="text-end">
        ${item.score}
      </td>
    </tr>
  `;
});

document.getElementById("totalScore").innerText = totalScore;