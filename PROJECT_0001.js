function setup() {
  createCanvas(400, 400);
}

//Draw the calculator
var draw = function() {
  //set the background color
  background(0, 200, 150);

  //take the middle of the canvas

  //draw the body of the calculator
  fill(150, 150, 150);
  rect(80, 50, 250, 300);
  rect(80+5, 50+5, 250-10, 300-10);

  //draw the screen
  fill(0, 0, 0);
  rect(85, 55, 240,100);

  //draw the buttons
    let cols = 5;
    let rows = 3;
    let buttonSize = 50;
    let spacing = 47.5;
    let middle = 85;
    let numbers = [
      ["7", "8", "9", "/", "c" ],
      ["4", "5", "6", "*", "AC"],
      ["1", "2", "3", "-", "0'" ],
    ];


    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let xPos = middle + x * spacing;
        let yPos = 175 + y * spacing;
        fill(255);
        rect(xPos, yPos, buttonSize, buttonSize);

        textAlign(CENTER, CENTER);
        textSize(20);
        fill(0);
        text (numbers [y][x], xPos + buttonSize/2, yPos + buttonSize/2);
      };

    };
};

//Make the buttons clickable
let displayText = "";

