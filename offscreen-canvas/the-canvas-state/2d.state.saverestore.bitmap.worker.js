// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.state.saverestore.bitmap
// Description:save()/restore() does not affect the current bitmap
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("save()/restore() does not affect the current bitmap");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.save();
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.restore();
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");

t.done();

});
done();
