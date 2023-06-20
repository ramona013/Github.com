// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.getcontext.shared
// Description:getContext('2d') returns objects which share canvas state
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("getContext('2d') returns objects which share canvas state");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var ctx2 = offscreenCanvas.getContext('2d');
ctx.fillStyle = '#f00';
ctx2.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");

t.done();

});
done();
