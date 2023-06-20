// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.pattern.modify.canvas2
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

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
var ctx2 = offscreenCanvas2.getContext('2d');
ctx2.fillStyle = '#0f0';
ctx2.fillRect(0, 0, 100, 50);
var pattern = ctx.createPattern(offscreenCanvas2, 'no-repeat');
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx2.fillStyle = '#f00';
ctx2.fillRect(0, 0, 100, 50);
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
t.done();

});
done();
