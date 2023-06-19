// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.strokeRect.zero.1
// Description:strokeRect of 0x0 pixels draws nothing
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("strokeRect of 0x0 pixels draws nothing");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.strokeStyle = '#f00';
ctx.lineWidth = 250;
ctx.strokeRect(50, 25, 0, 0);
_assertPixel(offscreenCanvas, 50,25, 0,0,0,0, "50,25", "0,0,0,0");

t.done();

});
done();
