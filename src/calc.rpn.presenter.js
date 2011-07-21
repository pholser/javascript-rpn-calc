modit('calc.rpn.presenter', function() {
    function Presenter(model, view) {
        var theModel = model;
        var theView = view;

        theView.registerFor('numberTyped', function(key) {
            theView.setEntry(theView.getEntry() + key);
        });
        theView.registerFor('decimalTyped', function() {
            var entry = theView.getEntry();
            if (entry.indexOf('.') == -1) {
                theView.setEntry(entry + '.');
            }
        });
        theView.registerFor('enter', function() {
            enter(theView.getEntry());
        });
        theView.registerFor('execute', function(operation) {
            execute(operation);
        });

        function enter(operand) {
            theModel.enter(parseFloat(operand));
            theView.setEntry('');
            theView.setOperands(theModel.operands())
        }

        function execute(operation) {
            theModel.execute(operation);
            theView.setEntry('');
            theView.setOperands(theModel.operands())
        }

        return {
            enter : enter,
            execute : execute
        };
    }

    this.exports(Presenter);
});
