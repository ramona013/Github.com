// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.width.invalid
// Description:Setting lineWidth to invalid values is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Setting lineWidth to invalid values is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.lineWidth = 1.5;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");
ctx.lineWidth = 1.5;
ctx.lineWidth = 0;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");
ctx.lineWidth = 1.5;
ctx.lineWidth = -1;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");
ctx.lineWidth = 1.5;
ctx.lineWidth = Infinity;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");
ctx.lineWidth = 1.5;
ctx.lineWidth = -Infinity;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");
ctx.lineWidth = 1.5;
ctx.lineWidth = NaN;
_assertSame(ctx.lineWidth, 1.5, "ctx.lineWidth", "1.5");
t.done();

});
done();
