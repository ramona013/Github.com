// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.translate.nonfinite
// Description:translate() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("translate() with Infinity/NaN is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.translate(100, 10);
ctx.translate(Infinity, 0.1);
ctx.translate(-Infinity, 0.1);
ctx.translate(NaN, 0.1);
ctx.translate(0.1, Infinity);
ctx.translate(0.1, -Infinity);
ctx.translate(0.1, NaN);
ctx.translate(Infinity, Infinity);
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -10, 100, 50);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
