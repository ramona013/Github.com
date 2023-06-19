// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.moveTo.basic
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.rect(0, 0, 10, 50);
ctx.moveTo(100, 0);
ctx.lineTo(10, 0);
ctx.lineTo(10, 50);
ctx.lineTo(100, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(offscreenCanvas, 90,25, 0,255,0,255, "90,25", "0,255,0,255");

t.done();

});
done();
