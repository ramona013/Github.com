// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.cap.invalid
// Description:Setting lineCap to invalid values is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Setting lineCap to invalid values is ignored");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.lineCap = 'butt'
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
ctx.lineCap = 'butt';
ctx.lineCap = 'invalid';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
ctx.lineCap = 'butt';
ctx.lineCap = 'ROUND';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
ctx.lineCap = 'butt';
ctx.lineCap = 'round\0';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
ctx.lineCap = 'butt';
ctx.lineCap = 'round ';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
ctx.lineCap = 'butt';
ctx.lineCap = "";
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
ctx.lineCap = 'butt';
ctx.lineCap = 'bevel';
_assertSame(ctx.lineCap, 'butt', "ctx.lineCap", "'butt'");
t.done();

});
done();
