// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.scale.multiple
// Description:Multiple scale()s combine
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Multiple scale()s combine");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.scale(Math.sqrt(2), Math.sqrt(2));
ctx.scale(Math.sqrt(2), Math.sqrt(2));
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 50, 25);
_assertPixel(offscreenCanvas, 90,40, 0,255,0,255, "90,40", "0,255,0,255");

t.done();

});
done();
