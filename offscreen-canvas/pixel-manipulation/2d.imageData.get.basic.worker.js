// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.basic
// Description:getImageData() exists and returns something
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("getImageData() exists and returns something");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

_assertDifferent(ctx.getImageData(0, 0, 100, 50), null, "ctx.getImageData(0, 0, 100, 50)", "null");

t.done();

});
done();
