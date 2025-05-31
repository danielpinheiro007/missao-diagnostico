
const questions = [
  {
    question: "Paciente com crises de dor óssea e mucosa pálida. Qual é a condição?",
    answers: ["Anemia Megaloblástica", "Anemia Falciforme", "Leucemia"],
    correct: 1
  },
  {
    question: "Manifestações orais comuns da Anemia Falciforme incluem:",
    answers: ["Sangramento gengival", "Parestesia facial", "Úlceras recorrentes e palidez"],
    correct: 2
  },
  {
    question: "Paciente com histórico de abortos e dor nas pernas ao caminhar:",
    answers: ["Trombofilia", "Diabetes", "Anemia Ferropriva"],
    correct: 0
  },
  {
    question: "Tratamento odontológico em pacientes com trombofilia exige:",
    answers: ["Antibiótico profilático", "Controle da coagulação e médico assistente", "Uso de flúor tópico"],
    correct: 1
  },
  {
    question: "Paciente com halitose, sangramento e relato de estresse:",
    answers: ["Periodontite avançada", "Propedêutica", "Úlcera de estresse"],
    correct: 1
  },
  {
    question: "Propedêutica significa:",
    answers: ["Conjunto de técnicas para diagnóstico", "Tratamento com antibióticos", "Prevenção de cárie"],
    correct: 0
  },
  {
    question: "Paciente com sangramento excessivo após extração dentária:",
    answers: ["Hemofilia", "Diabetes", "Trombose"],
    correct: 0
  },
  {
    question: "Na hemofilia, o procedimento odontológico deve incluir:",
    answers: ["Extração sem cuidado especial", "Evitar anestesia local", "Equipe multidisciplinar e fator de coagulação"],
    correct: 2
  },
  {
    question: "Paciente jovem com dentes translúcidos, coloração acastanhada:",
    answers: ["Cárie avançada", "Dentinogênese Imperfeita", "Fluorose"],
    correct: 1
  },
  {
    question: "Tratamento inicial para Dentinogênese Imperfeita:",
    answers: ["Raspagem subgengival", "Aplicação de verniz", "Reabilitação protética e prevenção precoce"],
    correct: 2
  },
  {
    question: "Paciente com glossite, fadiga, palidez e queixa de dor lingual:",
    answers: ["Candidíase", "Anemia Megaloblástica", "Herpes labial"],
    correct: 1
  },
  {
    question: "Na anemia megaloblástica, a mucosa apresenta:",
    answers: ["Cianose intensa", "Glossite atrófica e queilite angular", "Necrose do palato"],
    correct: 1
  },
  {
    question: "Paciente com dentes recém-erupcionados opacos e esfarelados:",
    answers: ["Hipomineralização", "Atrição", "Tártaro"],
    correct: 0
  },
  {
    question: "Principal cuidado com hipomineralização:",
    answers: ["Evitar café", "Remineralização e selantes", "Uso de bicarbonato de sódio"],
    correct: 1
  }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("div");
    btn.classList.add("answer");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[current];
  const allAnswers = document.querySelectorAll(".answer");

  allAnswers.forEach((btn, i) => {
    if (i === q.correct) {
      btn.classList.add("correct");
    } else if (i === selected) {
      btn.classList.add("incorrect");
    }
    btn.onclick = null;
  });

  if (selected === q.correct) {
    score++;
  }

  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
    document.getElementById("next-btn").style.display = "none";
  } else {
    document.getElementById("game").style.display = "none";
    document.getElementById("score-box").classList.remove("hidden");
    document.getElementById("score").textContent = score;
  }
}

window.onload = () => {
  showQuestion();
  document.getElementById("next-btn").style.display = "none";
};
