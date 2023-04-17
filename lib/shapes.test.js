const { Shape, Circle, Triangle, Square } = require("./shapes");

// Test for the Shape class
describe("Shape", () => {
  it("should create a new shape", () => {
    const shape = new Shape("shape", "red", "hello", "white");
    expect(shape.shape).toEqual("shape");
    expect(shape.color).toEqual("red");
    expect(shape.text).toEqual("hello");
    expect(shape.textcolor).toEqual("white");
  });
});

// Test for the Circle class
describe("Circle", () => {
  it("should create a new circle", () => {
    const circle = new Circle("circle", "blue", "world", "black");
    expect(circle.shape).toEqual("circle");
    expect(circle.color).toEqual("blue");
    expect(circle.text).toEqual("world");
    expect(circle.textcolor).toEqual("black");
    expect(circle.cx).toEqual(50);
    expect(circle.cy).toEqual(50);
    expect(circle.r).toEqual(50);
    expect(circle.fill).toEqual("blue");
  });

  // Test for the renderShape method on the Circle class
  it("should render a circle", () => {
    const circle = new Circle("circle", "blue", "world", "black");
    const svg = circle.renderShape();
    expect(svg).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
  });
});

// Test for the Triangle class
describe("Triangle", () => {
  it("should create a new triangle", () => {
    const triangle = new Triangle("triangle", "green", "hi", "yellow");
    expect(triangle.shape).toEqual("triangle");
    expect(triangle.color).toEqual("green");
    expect(triangle.text).toEqual("hi");
    expect(triangle.textcolor).toEqual("yellow");
    expect(triangle.fill).toEqual("green");
  });

  // Test for the renderShape method on the Triangle class
  it("should render a triangle", () => {
    const triangle = new Triangle("triangle", "green", "hi", "yellow");
    const svg = triangle.renderShape();
    expect(svg).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

// Test for the Square class
describe("Square", () => {
  it("should create a new square", () => {
    const square = new Square("square", "red", "hello", "white");
    expect(square.shape).toEqual("square");
    expect(square.color).toEqual("red");
    expect(square.text).toEqual("hello");
    expect(square.textcolor).toEqual("white");
    expect(square.x).toEqual(0);
    expect(square.y).toEqual(0);
    expect(square.width).toEqual(100);
    expect(square.height).toEqual(100);
    expect(square.fill).toEqual("red");
  });

  // Test for the renderShape method on the Square class
  it("should render a square", () => {
    const square = new Square("square", "red", "hello", "white");
    const svg = square.renderShape();
    expect(svg).toEqual('<rect width="300" height="200" fill="red" />');
  });
});
