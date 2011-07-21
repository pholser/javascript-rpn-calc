TestCase('test.calc.rpn.presenter', {
    'testEnter' : function() {
        var model = JsMockito.mock(calc.rpn.model.Calculator);
        JsMockito.when(model).operands().thenReturn([3]);
        var view = JsMockito.mock(calc.rpn.view.View);

        var presenter = new calc.rpn.presenter.Presenter(model, view);
        presenter.enter('3');

        JsMockito.verify(model).enter(3);
        JsMockito.verify(view).setEntry('');
        JsMockito.verify(view).setOperands([3]);
    },
    'testExecute' : function() {
        var model = JsMockito.mock(calc.rpn.model.Calculator);
        JsMockito.when(model).operands().thenReturn([7]);
        var view = JsMockito.mock(calc.rpn.view.View);

        var presenter = new calc.rpn.presenter.Presenter(model, view);
        presenter.execute('+');

        JsMockito.verify(model).execute('+');
        JsMockito.verify(view).setEntry('');
        JsMockito.verify(view).setOperands([7]);
    },
    'testWhenNumberTyped' : function() {
        /*:DOC += <div id="calculator"><input id="entry" name="entry" type="text" value="" /></div> */
        var view = new calc.rpn.view.View();

        var presenter = new calc.rpn.presenter.Presenter(null, view);
        view.send.numberTyped('3');

        assertEquals('3', view.getEntry());
    },
    'testWhenDecimalTyped' : function() {
        /*:DOC += <div id="calculator"><input id="entry" name="entry" type="text" value="34" /></div> */
        var view = new calc.rpn.view.View();

        var presenter = new calc.rpn.presenter.Presenter(null, view);
        view.send.decimalTyped();

        assertEquals('34.', view.getEntry());
    },
    'testWhenDecimalTypedWithDecimalAlreadyInEntry' : function() {
        /*:DOC += <div id="calculator"><input id="entry" name="entry" type="text" value="34." /></div> */
        var view = new calc.rpn.view.View();

        var presenter = new calc.rpn.presenter.Presenter(null, view);
        view.send.decimalTyped();

        assertEquals('34.', view.getEntry());
    },
    'testWhenOperandEntered' : function() {
        /*:DOC += <div id="calculator"><input id="entry" name="entry" type="text" value="56.78" /><span id="operands"></span></div> */
        var model = JsMockito.mock(calc.rpn.model.Calculator);
        JsMockito.when(model).operands().thenReturn([56.78]);
        var view = new calc.rpn.view.View();

        var presenter = new calc.rpn.presenter.Presenter(model, view);
        view.send.enter();

        assertEquals('', view.getEntry());
        assertEquals(['56.78'], view.getOperands());
    }
});
