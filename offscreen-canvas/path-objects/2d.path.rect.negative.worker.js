// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.rect.negative
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("");
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
ctx.fillStyle = '#0f0';
ctx.rect(0, 0, 50, 25);
ctx.rect(100, 0, -50, 25);
ctx.rect(0, 50, 50, -25);
ctx.rect(100, 50, -50, -25);
ctx.fill();
_assertPixel(offscreenCanvas, 25,12, 0,255,0,255, "25,12", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,12, 0,255,0,255, "75,12", "0,255,0,255");
_assertPixel(offscreenCanvas, 25,37, 0,255,0,255, "25,37", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,37, 0,255,0,255, "75,37", "0,255,0,255");
t.done();

});
done();
