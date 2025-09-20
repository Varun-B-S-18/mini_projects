document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question:
        "1.In which year did Virat Kohli make his debut for India in ODIs?",
      choices: ["2006", "2007", "2008", "2009"],
      answer: "2008",
    },
    {
      question:
        "2.Under Kohli's captaincy India became the No.1 Test team in which year?",
      choices: ["2016", "2017", "2018", "2019"],
      answer: "2016",
    },
    {
      question: "3.How many centuries did Virat Kohli score in IPL as of 2025",
      choices: ["4", "5", "6", "7"],
      answer: "6",
    },
    {
      question:
        "4.Virat Kohli has been awarded which of the following major Indian honors",
      choices: ["Padma Shri", "Padma Bhushan", "Arjuna Award", "Both A and C"],
      answer: "Both A and C",
    },
    {
      question: "5.What is Virat Kohli's highest individual score in ODIs",
      choices: ["183", "175", "200", "168"],
      answer: "183",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;
  let answered = false;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    answered = false;
    nextBtn.classList.add("hiddenn");
    questionText.textContent = questions[currentQuestionIndex].question;
    choiceList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        if (!answered) {
          selectAnswer(choice);
          answered = true;
        }
      });
      choiceList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice == correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
