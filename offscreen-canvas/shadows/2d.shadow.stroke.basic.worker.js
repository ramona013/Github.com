// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.stroke.basic
// Description:Shadows are drawn for strokes
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Shadows are drawn for strokes");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.shadowColor = '#0f0';
ctx.shadowOffsetY = 50;
ctx.beginPath();
ctx.lineWidth = 50;
ctx.moveTo(0, -25);
ctx.lineTo(100, -25);
ctx.stroke();
_assertPixel(offscreenCanvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255");
t.done();

});
done();
