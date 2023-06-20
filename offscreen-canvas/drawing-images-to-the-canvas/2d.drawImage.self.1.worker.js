// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.self.1
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

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 50, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(50, 0, 50, 50);
ctx.drawImage(offscreenCanvas, 50, 0);
_assertPixelApprox(offscreenCanvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);
t.done();

});
done();
