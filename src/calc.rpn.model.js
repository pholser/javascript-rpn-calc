modit('calc.rpn.model', function() {
    var operations = {
        '+' : {
            execute : function(operands) {
                var first = operands.pop();
                var second = operands.pop();
                operands.push(first + second);	
            }
        },
        '-' : {
            execute : function(operands) {
                var second = operands.pop();
                var first = operands.pop();
                operands.push(first - second);	
            }
        },
        '*' : {
            execute : function(operands) {
                var first = operands.pop();
                var second = operands.pop();
                operands.push(first * second);	
            }
        },
        '/' : {
            execute : function(operands) {
                var second = operands.pop();
                var first = operands.pop();
                operands.push(first / second);	
            }
        },
    };

    function makeOperation(operationIndicator) {
        return operations[operationIndicator];       
    }

    function Calculator() {
        var operands = [];

        return {
            enter : function(operand) {
                operands.push(operand);
            },

            execute : function(operationIndicator) {
                makeOperation(operationIndicator).execute(operands);
            },

            top : function() {
                return operands[operands.length - 1];
            },

            operands : function() {
                return operands;
            }
        };
    }

	this.exports(Calculator);	
});
