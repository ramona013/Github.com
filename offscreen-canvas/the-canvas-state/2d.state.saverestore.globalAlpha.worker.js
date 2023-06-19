// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.state.saverestore.globalAlpha
// Description:save()/restore() works for globalAlpha
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("save()/restore() works for globalAlpha");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

// Test that restore() undoes any modifications
var old = ctx.globalAlpha;
ctx.save();
ctx.globalAlpha = 0.5;
ctx.restore();
_assertSame(ctx.globalAlpha, old, "ctx.globalAlpha", "old");

// Also test that save() doesn't modify the values
ctx.globalAlpha = 0.5;
old = ctx.globalAlpha;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 0.5
ctx.save();
_assertSame(ctx.globalAlpha, old, "ctx.globalAlpha", "old");
ctx.restore();

t.done();

});
done();
