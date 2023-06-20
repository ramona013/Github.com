// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.strokeRect.nonfinite
// Description:strokeRect() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("strokeRect() with Infinity/NaN is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.lineWidth = 150;
ctx.strokeRect(Infinity, 0, 100, 50);
ctx.strokeRect(-Infinity, 0, 100, 50);
ctx.strokeRect(NaN, 0, 100, 50);
ctx.strokeRect(0, Infinity, 100, 50);
ctx.strokeRect(0, -Infinity, 100, 50);
ctx.strokeRect(0, NaN, 100, 50);
ctx.strokeRect(0, 0, Infinity, 50);
ctx.strokeRect(0, 0, -Infinity, 50);
ctx.strokeRect(0, 0, NaN, 50);
ctx.strokeRect(0, 0, 100, Infinity);
ctx.strokeRect(0, 0, 100, -Infinity);
ctx.strokeRect(0, 0, 100, NaN);
ctx.strokeRect(Infinity, Infinity, 100, 50);
ctx.strokeRect(Infinity, Infinity, Infinity, 50);
ctx.strokeRect(Infinity, Infinity, Infinity, Infinity);
ctx.strokeRect(Infinity, Infinity, 100, Infinity);
ctx.strokeRect(Infinity, 0, Infinity, 50);
ctx.strokeRect(Infinity, 0, Infinity, Infinity);
ctx.strokeRect(Infinity, 0, 100, Infinity);
ctx.strokeRect(0, Infinity, Infinity, 50);
ctx.strokeRect(0, Infinity, Infinity, Infinity);
ctx.strokeRect(0, Infinity, 100, Infinity);
ctx.strokeRect(0, 0, Infinity, Infinity);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
t.done();

});
done();
