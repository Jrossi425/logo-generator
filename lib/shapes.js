// Shape class that takes in shape, color, text, and text color
class Shape {
  constructor(shape, color, text, textcolor) {
    this.shape = shape;
    this.color = color;
    this.text = text;
    this.textcolor = textcolor;
  }
}

// Circle class that extends the Shape class and takes in shape, color, text, and text color
class Circle extends Shape {
  constructor(shape, color, text, textcolor) {
    super(shape, color, text, textcolor);
    if (shape === "circle") {
      this.cx = 50;
      this.cy = 50;
      this.r = 50;
      this.fill = color;
    }
  }
    
  // Method that renders the circle
  renderShape() {
    return `<circle cx="50" cy="50" r="50" fill="${this.fill}" />`;
  }
}

// Triangle class that extends the Shape class and takes in shape, color, text, and text color
class Triangle extends Shape {
  constructor(shape, color, text, textcolor) {
    super(shape, color, text, textcolor);
    if (shape === "triangle") {
      this.fill = color;
    }
  }

  // Method that renders the triangle
  renderShape() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`;
  }
}

// Square class that extends the Shape class and takes in shape, color, text, and text color
class Square extends Shape {
  constructor(shape, color, text, textcolor) {
    super(shape, color, text, textcolor);
    if (shape === "square") {
      this.x = 0;
      this.y = 0;
      this.width = 100;
      this.height = 100;
      this.fill = color;
    }
  }

  // Method that renders the square
  renderShape() {
    return `<rect width="300" height="200" fill="${this.fill}" />`;
  }
}

module.exports = { Circle, Triangle, Square, Shape };
