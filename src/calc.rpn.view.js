modit('calc.rpn.view', function() {
    function MessageBus() {
        return {
            registerFor : function(name, fn) {
                this.send[name] = fn;
            },
            send : {}
        };
    }

    function View() {
        var messageBus = new MessageBus();
        var myDom = $('#calculator');

        myDom.find('.number').click(function() {
            messageBus.send.numberTyped($(this).text());
        });
        myDom.find('.decimal').click(function() {
            messageBus.send.decimalTyped($(this).text());
        });
        myDom.find('.enter').click(function() {
            messageBus.send.enter();
        });
        myDom.find('.operation').click(function() {
            messageBus.send.execute($(this).text());
        });

        return {
            registerFor : function(name, fn) {
                messageBus.registerFor(name, fn);
            },
            getEntry : function() {
                return myDom.find('#entry').val();
            },
            setEntry : function(operand) {
                myDom.find('#entry').val(operand);
            },
            setOperands : function(operands) {
                myDom.find('#operands').text(operands.join(' '));
            },
            getOperands : function() {
                return myDom.find('#operands').text();
            },
            send : messageBus.send
        };
    }

    this.exports(View);
});
