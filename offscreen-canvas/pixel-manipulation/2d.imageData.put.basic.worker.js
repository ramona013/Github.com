// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.put.basic
// Description:putImageData() puts image data from getImageData() onto the canvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("putImageData() puts image data from getImageData() onto the canvas");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)
var imgdata = ctx.getImageData(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
ctx.putImageData(imgdata, 0, 0);
_assertPixelApprox(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);

t.done();

});
done();
