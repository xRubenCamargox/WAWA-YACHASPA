const questionNumberElement = document.getElementById("questionNumber");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentQuestion = 1;

// Nombres de archivos en la misma carpeta
const localPages = [
  "num-pregunta-dos.html",
  "num-pregunta-tres.html",
];

// Actualizar la interfaz
function updateUI() {
  questionNumberElement.textContent = currentQuestion;
  prevButton.style.display = currentQuestion > 1 ? "inline-block" : "none";
}

// Botón "Atrás"
prevButton.addEventListener("click", () => {
  if (currentQuestion > 1) {
    currentQuestion--;
    updateUI();
  }
});

// Botón "Siguiente"
nextButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * localPages.length);
  window.location.href = localPages[randomIndex];
});

// Inicializar la interfaz
updateUI();
