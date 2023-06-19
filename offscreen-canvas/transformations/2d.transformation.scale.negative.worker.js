// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.scale.negative
// Description:scale() with negative scale factors works
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("scale() with negative scale factors works");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.save();
ctx.scale(-1, 1);
ctx.fillStyle = '#0f0';
ctx.fillRect(-50, 0, 50, 50);
ctx.restore();
ctx.save();
ctx.scale(1, -1);
ctx.fillStyle = '#0f0';
ctx.fillRect(50, -50, 50, 50);
ctx.restore();
_assertPixel(offscreenCanvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");

t.done();

});
done();
