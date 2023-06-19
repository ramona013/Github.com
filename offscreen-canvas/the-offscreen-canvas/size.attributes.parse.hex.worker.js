// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:size.attributes.parse.hex
// Description:Parsing of non-negative integers
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Parsing of non-negative integers");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

offscreenCanvas.width = '0x100';
offscreenCanvas.height = '0x100';
_assertSame(offscreenCanvas.width, 256, "offscreenCanvas.width", "256");
_assertSame(offscreenCanvas.height, 256, "offscreenCanvas.height", "256");

t.done();

});
done();
