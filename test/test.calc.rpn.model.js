var CalculatorTest = TestCase('test.calc.rpn.model');
var calculator = new calc.rpn.model.Calculator();

CalculatorTest.prototype.testAddition = function() {
    calculator.enter(42);
    calculator.enter(-17);
    calculator.execute('+');

    assertEquals(25, calculator.top());
};

CalculatorTest.prototype.testMoreAddition = function() {
    calculator.enter(3);
    calculator.enter(4);
    calculator.execute('+');

    assertEquals(7, calculator.top());
};

CalculatorTest.prototype.testSubtraction = function() {
    calculator.enter(24);
    calculator.enter(65);
    calculator.execute('-');

    assertEquals(-41, calculator.top());
};

CalculatorTest.prototype.testMoreSubtraction = function() {
    calculator.enter(65);
    calculator.enter(24);
    calculator.execute('-');

    assertEquals(41, calculator.top());
};

CalculatorTest.prototype.testMultiplication = function() {
    calculator.enter(2);
    calculator.enter(7);
    calculator.execute('*');

    assertEquals(14, calculator.top());
};

CalculatorTest.prototype.testDivision = function() {
    calculator.enter(15);
    calculator.enter(5);
    calculator.execute('/');

    assertEquals(3, calculator.top());
};

CalculatorTest.prototype.testDivision = function() {
    calculator.enter(5);
    calculator.enter(15);
    calculator.execute('/');

    assertEquals(0.333333, calculator.top().toFixed(6));
};

CalculatorTest.prototype.testCompoundOperations = function() {
    calculator.enter(2);
    calculator.enter(3);
    calculator.execute('+');
    calculator.enter(4);
    calculator.execute('-');
    calculator.enter(5);
    calculator.execute('*');
    calculator.enter(6);
    calculator.execute('/');

    assertEquals(0.833333, calculator.top().toFixed(6));
};

CalculatorTest.prototype.testOperationsConsumingHighStack = function() {
	calculator.enter(45);
	calculator.enter(3);
    calculator.enter(48);
    calculator.enter(32);
    calculator.enter(109);
    calculator.execute('+');
    calculator.execute('-');
    calculator.execute('*');
    calculator.execute('/');

    assertEquals(45 / ((48 - (109 + 32)) * 3), calculator.top());
};

CalculatorTest.prototype.testArrayOperationVersusLength = function() {
    var items = ['a', 'b', 'c'];

    items.push('d');
    assertEquals(4, items.length);

    items.pop();
    items.pop();
    assertEquals(2, items.length);
};
