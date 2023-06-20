// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.stroke.scale1
// Description:Stroke line widths are scaled by the current transformation matrix
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Stroke line widths are scaled by the current transformation matrix");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.beginPath();
ctx.rect(25, 12.5, 50, 25);
ctx.save();
ctx.scale(50, 25);
ctx.strokeStyle = '#0f0';
ctx.stroke();
ctx.restore();
ctx.beginPath();
ctx.rect(-25, -12.5, 150, 75);
ctx.save();
ctx.scale(50, 25);
ctx.strokeStyle = '#f00';
ctx.stroke();
ctx.restore();
_assertPixel(offscreenCanvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,0, 0,255,0,255, "50,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 0,25, 0,255,0,255, "0,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,25, 0,255,0,255, "99,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,49, 0,255,0,255, "50,49", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255");
t.done();

});
done();
