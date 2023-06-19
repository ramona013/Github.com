// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.lineTo.nonfinite.details
// Description:lineTo() with Infinity/NaN for first arg still converts the second arg
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("lineTo() with Infinity/NaN for first arg still converts the second arg");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

for (var arg1 of [Infinity, -Infinity, NaN]) {
  var converted = false;
  ctx.lineTo(arg1, { valueOf: function() { converted = true; return 0; } });
  _assert(converted, "converted");
}

t.done();

});
done();
