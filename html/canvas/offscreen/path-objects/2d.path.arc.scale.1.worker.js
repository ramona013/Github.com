// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arc.scale.1
// Description:Non-uniformly scaled arcs are the right shape
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Non-uniformly scaled arcs are the right shape");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.scale(2, 0.5);
ctx.fillStyle = '#0f0';
ctx.beginPath();
ctx.arc(25, 50, 56, 0, 2*Math.PI, false);
ctx.fill();
ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(-25, 50);
ctx.arc(-25, 50, 24, 0, 2*Math.PI, false);
ctx.moveTo(75, 50);
ctx.arc(75, 50, 24, 0, 2*Math.PI, false);
ctx.moveTo(25, -25);
ctx.arc(25, -25, 24, 0, 2*Math.PI, false);
ctx.moveTo(25, 125);
ctx.arc(25, 125, 24, 0, 2*Math.PI, false);
ctx.fill();
_assertPixel(offscreenCanvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,0, 0,255,0,255, "50,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255");
_assertPixel(offscreenCanvas, 0,25, 0,255,0,255, "0,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,25, 0,255,0,255, "99,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,49, 0,255,0,255, "50,49", "0,255,0,255");
_assertPixel(offscreenCanvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255");
t.done();

});
done();
