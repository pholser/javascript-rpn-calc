modit('calc.rpn.model', function() {
    var operations = {
        '+' : {
            execute : function(operandStack) {
                var first = operandStack.pop();
                var second = operandStack.pop();
                operandStack.push(first + second);	
            }
        },
        '-' : {
            execute : function(operandStack) {
                var second = operandStack.pop();
                var first = operandStack.pop();
                operandStack.push(first - second);	
            }
        },
        '*' : {
            execute : function(operandStack) {
                var first = operandStack.pop();
                var second = operandStack.pop();
                operandStack.push(first * second);	
            }
        },
        '/' : {
            execute : function(operandStack) {
                var second = operandStack.pop();
                var first = operandStack.pop();
                operandStack.push(first / second);	
            }
        },
    };

    function makeOperation(operationIndicator) {
        return operations[operationIndicator];       
    }

    function Calculator() {
        var operandStack = [];

        return {
            enter : function(operand) {
                operandStack.push(operand);
            },

            execute : function(operationIndicator) {
                makeOperation(operationIndicator).execute(operandStack);
            },

            top : function() {
                return operandStack[operandStack.length - 1];
            }
        };
    }

	this.exports(Calculator);	
});
