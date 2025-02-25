let displayText = "";
let buttons = [];
let inputHistory = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createButtons();
}

function draw() {
  background(0, 200, 150);

  // Desenha a calculadora
  fill(150, 150, 150);
  rect(80, 50, 250, 300);
  rect(85, 55, 240, 290);

  // Desenha a tela da calculadora
  fill(0);
  rect(85, 55, 240, 100);
  
  // Exibe o input do usuário
  fill(255);
  textSize(20);
  textAlign(RIGHT, CENTER);
  text(displayText, 300, 100); 

  // Desenha os botões
  for (let btn of buttons) {
    fill(255);
    rect(btn.x, btn.y, btn.width, btn.height);
    fill(0);
    textAlign(CENTER, CENTER);
    text(btn.label, btn.x + btn.width / 2, btn.y + btn.height / 2);
  }
}

// Criar os botões apenas uma vez
function createButtons() {
  let cols = 5;
  let rows = 4;
  let buttonSize = 50;
  let spacing = 47.5;
  let middle = 85;
  let numbers = [
    ["7", "8", "9", "/", "AC"],
    ["4", "5", "6", "*", "C"],
    ["1", "2", "3", "-", "0"],
    ["(", ")", ".", "+", "="]
  ];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xPos = middle + x * spacing;
      let yPos = 156 + y * spacing;
      buttons.push({
        label: numbers[y][x],
        x: xPos,
        y: yPos,
        width: buttonSize,
        height: buttonSize
      });
    }
  }
}

// Detecta cliques nos botões
function mousePressed() {
  for (let btn of buttons) {
    if (
      mouseX > btn.x && mouseX < btn.x + btn.width &&
      mouseY > btn.y && mouseY < btn.y + btn.height
    ) {
      console.log("Botão clicado:", btn.label);

      if (btn.label === "AC") {
        displayText = "";
        inputHistory = [];
      } else if (btn.label === "C") {
        displayText = displayText.slice(0, -1);
        inputHistory.pop();
      } else if (btn.label === "=") {
        calcularResultado();
      } else {
        displayText += btn.label;
        inputHistory.push(btn.label);
      }
    }
  }
}

// Calcula o resultado
function calcularResultado() {
  try {
    let resultado = eval(inputHistory.join(""));
    displayText = resultado.toString();
    inputHistory = [resultado.toString()];
  } catch (error) {
    displayText = "Erro";
    inputHistory = [];
  }
}
