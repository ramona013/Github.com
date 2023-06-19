// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.baselines
// Description:Testing baselines for OffscreenCanvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Testing baselines for OffscreenCanvas");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

deferTest();
var f = new FontFace("CanvasTest", "/fonts/CanvasTest.ttf");
let fonts = (self.fonts ? self.fonts : document.fonts);
fonts.add(f);
fonts.ready.then(() => {
    step_timeout(t.step_func_done(function () {
        ctx.font = '50px CanvasTest';
        ctx.direction = 'ltr';
        ctx.align = 'left'
        _assertSame(Math.abs(ctx.measureText('A').getBaselines().alphabetic), 0, "Math.abs(ctx.measureText('A').getBaselines().alphabetic)", "0");
        _assertSame(ctx.measureText('A').getBaselines().ideographic, -39, "ctx.measureText('A').getBaselines().ideographic", "-39");
        _assertSame(ctx.measureText('A').getBaselines().hanging, 68, "ctx.measureText('A').getBaselines().hanging", "68");

        _assertSame(Math.abs(ctx.measureText('ABCD').getBaselines().alphabetic), 0, "Math.abs(ctx.measureText('ABCD').getBaselines().alphabetic)", "0");
        _assertSame(ctx.measureText('ABCD').getBaselines().ideographic, -39, "ctx.measureText('ABCD').getBaselines().ideographic", "-39");
        _assertSame(ctx.measureText('ABCD').getBaselines().hanging, 68, "ctx.measureText('ABCD').getBaselines().hanging", "68");
    }), 500);
});

t.done();

});
done();
