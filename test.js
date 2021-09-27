const getGreeting = require('./project');
const sayHelloWormy = require('./project')

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('Wormy acknowledges the given peasant', () => {
  expect(sayHelloWormy('Spencer')).toBe("'Hello Spencer.' said Wormy");
});