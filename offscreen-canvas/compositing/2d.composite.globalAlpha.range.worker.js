// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.globalAlpha.range
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.globalAlpha = 0.5;
var a = ctx.globalAlpha; // might not be exactly 0.5, if it is rounded/quantised, so remember for future comparisons
ctx.globalAlpha = 1.1;
_assertSame(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = -0.1;
_assertSame(ctx.globalAlpha, a, "ctx.globalAlpha", "a");
ctx.globalAlpha = 0;
_assertSame(ctx.globalAlpha, 0, "ctx.globalAlpha", "0");
ctx.globalAlpha = 1;
_assertSame(ctx.globalAlpha, 1, "ctx.globalAlpha", "1");

t.done();

});
done();
