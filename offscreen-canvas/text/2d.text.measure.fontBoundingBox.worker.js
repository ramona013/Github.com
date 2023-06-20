// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.measure.fontBoundingBox
// Description:Testing fontBoundingBox for OffscreenCanvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Testing fontBoundingBox for OffscreenCanvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var f = new FontFace("CanvasTest", "url('/fonts/CanvasTest.ttf')");
let fonts = (self.fonts ? self.fonts : document.fonts);
f.load();
fonts.add(f);
fonts.ready.then(function() {
    ctx.font = '50px CanvasTest';
    ctx.direction = 'ltr';
    ctx.align = 'left'
    _assertSame(ctx.measureText('A').fontBoundingBoxAscent, 85, "ctx.measureText('A').fontBoundingBoxAscent", "85");
    _assertSame(ctx.measureText('A').fontBoundingBoxDescent, 39, "ctx.measureText('A').fontBoundingBoxDescent", "39");

    _assertSame(ctx.measureText('ABCD').fontBoundingBoxAscent, 85, "ctx.measureText('ABCD').fontBoundingBoxAscent", "85");
    _assertSame(ctx.measureText('ABCD').fontBoundingBoxDescent, 39, "ctx.measureText('ABCD').fontBoundingBoxDescent", "39");
}).then(t_pass, t_fail);

});
done();
