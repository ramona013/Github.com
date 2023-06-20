// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.uncovered.fill.source-in
// Description:fill() draws pixels not covered by the source object as (0,0,0,0), and does not leave the pixels unchanged.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("fill() draws pixels not covered by the source object as (0,0,0,0), and does not leave the pixels unchanged.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');


ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.fillRect(0, 0, 100, 50);
ctx.globalCompositeOperation = 'source-in';
ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
ctx.translate(0, 25);
ctx.fillRect(0, 50, 100, 50);
_assertPixelApprox(offscreenCanvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0", 5);
t.done();

});
done();
