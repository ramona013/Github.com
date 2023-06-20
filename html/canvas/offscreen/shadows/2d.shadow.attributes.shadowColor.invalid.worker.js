// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.attributes.shadowColor.invalid
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.shadowColor = '#00ff00';
ctx.shadowColor = 'bogus';
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");
ctx.shadowColor = '#00ff00';
ctx.shadowColor = 'red bogus';
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");
ctx.shadowColor = '#00ff00';
ctx.shadowColor = ctx;
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");
ctx.shadowColor = '#00ff00';
ctx.shadowColor = undefined;
_assertSame(ctx.shadowColor, '#00ff00', "ctx.shadowColor", "'#00ff00'");
t.done();

});
done();
