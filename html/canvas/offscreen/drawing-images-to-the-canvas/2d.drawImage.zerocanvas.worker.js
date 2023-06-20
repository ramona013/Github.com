// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.zerocanvas
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

var offscreenCanvas2 = new OffscreenCanvas(0, 10);
assert_throws_dom("INVALID_STATE_ERR", function() { ctx.drawImage(offscreenCanvas2, 0, 0); });

offscreenCanvas2.width = 10;
offscreenCanvas2.height = 0;
assert_throws_dom("INVALID_STATE_ERR", function() { ctx.drawImage(offscreenCanvas2, 0, 0); });

offscreenCanvas2.width = 0;
offscreenCanvas2.height = 0;
assert_throws_dom("INVALID_STATE_ERR", function() { ctx.drawImage(offscreenCanvas2, 0, 0); });
t.done();

});
done();
