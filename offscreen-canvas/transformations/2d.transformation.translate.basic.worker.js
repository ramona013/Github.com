// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.transformation.translate.basic
// Description:translate() works
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("translate() works");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.translate(100, 50);
ctx.fillStyle = '#0f0';
ctx.fillRect(-100, -50, 100, 50);
_assertPixel(offscreenCanvas, 90,40, 0,255,0,255, "90,40", "0,255,0,255");
t.done();

});
done();
