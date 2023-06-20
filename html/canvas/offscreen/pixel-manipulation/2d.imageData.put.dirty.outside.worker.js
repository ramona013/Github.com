// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.put.dirty.outside
// Description:putImageData() handles dirty rectangles outside the canvas correctly
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("putImageData() handles dirty rectangles outside the canvas correctly");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50)
var imgdata = ctx.getImageData(0, 0, 100, 50);
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50)
ctx.putImageData(imgdata, 100, 20, 20, 20, -20, -20);
ctx.putImageData(imgdata, 200, 200, 0, 0, 100, 50);
ctx.putImageData(imgdata, 40, 20, -30, -20, 30, 20);
ctx.putImageData(imgdata, -30, 20, 0, 0, 30, 20);
_assertPixelApprox(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 98,15, 0,255,0,255, "98,15", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 98,25, 0,255,0,255, "98,25", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 98,45, 0,255,0,255, "98,45", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 1,5, 0,255,0,255, "1,5", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 1,25, 0,255,0,255, "1,25", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 1,45, 0,255,0,255, "1,45", "0,255,0,255", 2);
t.done();

});
done();
