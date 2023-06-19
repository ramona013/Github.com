// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.width.empty
// Description:The empty string has zero width for OffscreenCanvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("The empty string has zero width for OffscreenCanvas");
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
        _assertSame(ctx.measureText("").width, 0, "ctx.measureText(\"\").width", "0");
    }), 500);
});

t.done();

});
done();
