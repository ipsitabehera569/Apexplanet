
// ----------------------------
// QUIZ FUNCTIONALITY
// ----------------------------
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Markdown Language", "None of the above"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which CSS property controls text size?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Which keyword declares a JavaScript variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("quiz-result");

function loadQuiz() {
  const q = quizData[currentQ];
  questionEl.textContent = `Q${currentQ + 1}: ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQ].answer;
  if (selected === correct) {
    score++;
  }
  currentQ++;
  if (currentQ < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  resultEl.innerHTML = `🎉 You scored ${score} out of ${quizData.length}!`;
}

loadQuiz();

// ----------------------------
// WEATHER API FUNCTIONALITY
// ----------------------------
document.getElementById("fetch-weather").addEventListener("click", async () => {
  const resultDiv = document.getElementById("weather-result");
  resultDiv.textContent = "Fetching weather...";

  try {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=20.3&longitude=85.8&current_weather=true");
    const data = await res.json();
    const weather = data.current_weather;

    resultDiv.innerHTML = `
      🌡️ Temperature: ${weather.temperature}°C<br>
      🌬️ Wind Speed: ${weather.windspeed} km/h<br>
      🕒 Time: ${weather.time}
    `;
  } catch (error) {
    resultDiv.textContent = "Failed to fetch weather. Please try again.";
  }
});
