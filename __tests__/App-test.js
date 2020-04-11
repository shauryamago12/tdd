const greet = require('../greeting');

test('simple', () => {
  expect(greet("Bob")).toBe("Hello, Bob.");
});

test('null', () => {
  expect(greet()).toBe("Hello, my friend.");
});

test('shout back', () => {
  expect(greet("JERRY")).toBe("HELLO, JERRY!");
});

test('two name', () => {
  expect(greet(["jack", "jill"])).toBe("Hello, jack and jill.");
});

test('oxford and', () => {
  expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});

test('normal and shout', () => {
  expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test('handle comma', () => {
  expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
});
test('escape intentional commas', () => {
  expect(greet(["Bob", '"Charlie, Dianne"'])).toBe("Hello, Bob and Charlie, Dianne.");
});
