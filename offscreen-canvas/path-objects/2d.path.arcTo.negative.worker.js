// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.arcTo.negative
// Description:arcTo() with negative radius throws an exception
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("arcTo() with negative radius throws an exception");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

assert_throws("INDEX_SIZE_ERR", function() { ctx.arcTo(0, 0, 0, 0, -1); });

t.done();

});
done();
