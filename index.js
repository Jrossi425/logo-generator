const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// inquirer prompt to get user input for logo text, text color, shape, and shape color
function init() {
  inquirer
    .prompt([
      {
        name: "text",
        message: "please choose up to three characters for your logo text",
        type: "input",
      },
      {
        name: "textcolor",
        message: "please choose a color for your logo text",
        type: "list",
        choices: [
          "red",
          "blue",
          "green",
          "yellow",
          "purple",
          "orange",
          "pink",
          "white",
          "black",
        ],
      },
      {
        name: "shape",
        message: "please choose a shape for your logo shape",
        type: "list",
        choices: ["circle", "triangle", "square"],
      },
      {
        name: "color",
        message: "please choose a color for your logo color",
        type: "list",
        choices: [
          "red",
          "blue",
          "green",
          "yellow",
          "purple",
          "orange",
          "pink",
          "white",
          "black",
        ],
      },
    ])
    // promise with if statements to create new instances of the shape classes based on user input and call generateLogo() to create the svg file
    // if there is an error, it will log the error, otherwise it will log "Generated logo.svg"
    .then((answers) => {
      if (answers.shape === "circle") {
        const circle = new Circle(
          answers.shape,
          answers.color,
          answers.text,
          answers.textcolor
        );
        const svg = generateLogo(circle);
        fs.writeFile("./examples/logo.svg", svg, (err) =>
          err ? console.log(err) : console.log("Generated logo.svg")
        );
      }
      if (answers.shape === "triangle") {
        const triangle = new Triangle(
          answers.shape,
          answers.color,
          answers.text,
          answers.textcolor
        );
        const svg = generateLogo(triangle);
        fs.writeFile("./examples/logo.svg", svg, (err) =>
          err ? console.log(err) : console.log("Generated logo.svg")
        );
      }
      if (answers.shape === "square") {
        const square = new Square(
          answers.shape,
          answers.color,
          answers.text,
          answers.textcolor
        );
        const svg = generateLogo(square);
        fs.writeFile("./examples/logo.svg", svg, (err) =>
          err ? console.log(err) : console.log("Generated logo.svg")
        );
      }
        
      // function to generate the svg using the user input and the renderShape method from the shape classes
      function generateLogo(answers) {
        return `
                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${answers.renderShape()}
                    <text x="150" y="125" text-anchor="middle" font-size="60" fill="${
                      answers.textcolor
                    }">${answers.text}</text>
                    </svg>`;
      }
    });
}

init();
