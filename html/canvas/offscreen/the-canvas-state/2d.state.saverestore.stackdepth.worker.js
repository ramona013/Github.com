// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.state.saverestore.stackdepth
// Description:save()/restore() stack depth is not unreasonably limited
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("save()/restore() stack depth is not unreasonably limited");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var limit = 512;
for (var i = 1; i < limit; ++i)
{
    ctx.save();
    ctx.lineWidth = i;
}
for (var i = limit-1; i > 0; --i)
{
    _assertSame(ctx.lineWidth, i, "ctx.lineWidth", "i");
    ctx.restore();
}
t.done();

});
done();
