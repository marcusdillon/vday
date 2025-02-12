const questions = [
  {
    question: "Identify this mushroom.",
    answer: "Pinewood Mushroom",
    image: "pinewood mushroom.jpg",
  },
  {
    question: "Identify this mushroom.",
    answer: "Brown Puffball",
    image: "Brown puffball.jpg",
  },
  {
    question: "Identify this mushroom.",
    answer: "The Miller",
    image: "The Miller.jpg",
  },
  {
    question: "Identify this mushroom.",
    answer: "Gassy Webcap",
    image: "Gassy webcap.jpg",
  },
  {
    question: "Identify this mushroom.",
    answer: "Poison Pie",
    image: "Poison Pie.jpg",
  },
  {
    question: "Identify this mushroom.",
    answer: "Curry Milkcap",
    image: "Curry Milkcap.jpg",
  },
  { question: "What is Marcus' Favourite Show?", answer: "The Simpsons" },
  { question: "What is the best workout supplement?", answer: "Creatine" },
  { question: "Who is Marcus' Favourite Comedian?", answer: "Feli" },
  {
    question: `I am a place where earth meets flame,
Yet neither forest nor mountain claim my name.
In my heart, creations rest,
Transforming under a fiery test.

I mirror no artist, yet hold their soul,
Each stroke a story, each curve a goal.
Not for food, yet I bake with care,
Leaving a shine that wasn’t there.

What am I?`,
    answer: "Mudoven",
  },
];

let currentQuestionIndex = 0;
let timeLeft = 600;

const questionBox = document.getElementById("question-box");
const questionElement = document.getElementById("question");
const imageContainer = document.getElementById("image-container");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const timerElement = document.getElementById("time");

const suspenseSound = document.getElementById("suspense-sound");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

// Check if we are on the index.html page, play suspense sound
if (window.location.pathname.includes("index.html")) {
  suspenseSound.play(); // Play suspense sound on load
}

// Function to load question and timer
function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Display image if it exists
    if (currentQuestion.image) {
      imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Mushroom Image">`;
    } else {
      imageContainer.innerHTML = "";
    }

    answerInput.value = "";
    feedbackElement.textContent = "";
  } else {
    // Redirect to the success page when all questions are answered
    window.location.href = "success.html";
  }
}

submitButton.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();
  const currentAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer.toLowerCase() === currentAnswer.toLowerCase()) {
    feedbackElement.textContent = "Correct!";
    correctSound.play();
    currentQuestionIndex++;
    loadQuestion();
  } else {
    feedbackElement.textContent = "Incorrect. Try again!";
    wrongSound.play();
  }
});

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft} seconds`;
  } else {
    feedbackElement.textContent = "Time's up!";
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(updateTimer, 1000);

// Initial load of the first question
loadQuestion();
