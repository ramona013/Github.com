// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.zerocanvas
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(0, 10);
assert_throws("INVALID_STATE_ERR", function() { ctx.drawImage(offscreenCanvas2, 0, 0); });

offscreenCanvas2.width = 10;
offscreenCanvas2.height = 0;
assert_throws("INVALID_STATE_ERR", function() { ctx.drawImage(offscreenCanvas2, 0, 0); });

offscreenCanvas2.width = 0;
offscreenCanvas2.height = 0;
assert_throws("INVALID_STATE_ERR", function() { ctx.drawImage(offscreenCanvas2, 0, 0); });

t.done();

});
done();
