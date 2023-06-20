// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:initial.reset.same
// Description:Setting size (not changing the value) resets canvas to transparent black
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Setting size (not changing the value) resets canvas to transparent black");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

offscreenCanvas.width = 100;
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 50, 50);
_assertPixel(offscreenCanvas, 20,20, 255,0,0,255, "20,20", "255,0,0,255");
offscreenCanvas.width = 100;
_assertPixel(offscreenCanvas, 20,20, 0,0,0,0, "20,20", "0,0,0,0");
t.done();

});
done();
