// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:context.unrecognised.unicode
// Description:Context name which kind of looks like "2d" is unrecognised
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Context name which kind of looks like \"2d\" is unrecognised");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
assert_throws(new TypeError(), function() { offscreenCanvas2.getContext("2\uFF44"); });

t.done();

});
done();
