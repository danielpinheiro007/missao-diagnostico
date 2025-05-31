const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next");
const respostasInput = document.getElementById("respostas");
const respostasForm = document.getElementById("respostasForm");

const perguntas = [
  {
    pergunta: "Paciente com anemia falciforme apresenta crises dolorosas frequentes. Qual o cuidado odontológico mais indicado?",
    opcoes: ["Uso profilático de antibióticos", "Evitar anestésico com vasoconstritor", "Uso rotineiro de anticoagulantes"],
    correta: 1
  },
  {
    pergunta: "Em caso de trombofilia, o que o cirurgião-dentista deve avaliar antes de um procedimento invasivo?",
    opcoes: ["Nível de glicose", "Tempo de sangramento", "Uso de anticoagulantes"],
    correta: 2
  }
];

let indice = 0;
const respostas = [];

function mostrarPergunta() {
  const atual = perguntas[indice];
  quiz.innerHTML = `<p>${atual.pergunta}</p>` + atual.opcoes.map((op, i) =>
    `<label><input type="radio" name="pergunta" value="${op}"> ${op}</label><br>`).join("");
}

nextBtn.addEventListener("click", () => {
  const selecionada = document.querySelector("input[name='pergunta']:checked");
  if (selecionada) {
    respostas.push(selecionada.value);
    indice++;
    if (indice < perguntas.length) {
      mostrarPergunta();
    } else {
      quiz.innerHTML = "<p>Missão Concluída!</p>";
      nextBtn.style.display = "none";
      respostasInput.value = respostas.join("; ");
      respostasForm.style.display = "block";
    }
  } else {
    alert("Selecione uma opção.");
  }
});

mostrarPergunta();
respostasForm.style.display = "none";