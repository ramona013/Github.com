// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.stroke.join.3
// Description:Shadows are drawn for stroke joins respecting miter limit
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Shadows are drawn for stroke joins respecting miter limit");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.strokeStyle = '#f00';
ctx.shadowColor = '#f00';
ctx.shadowOffsetX = 100;
ctx.lineWidth = 200;
ctx.lineJoin = 'miter';
ctx.miterLimit = 0.1;
ctx.beginPath();
ctx.moveTo(-200, -50);
ctx.lineTo(-150, -50);
ctx.lineTo(-151, -100); // (not an exact right angle, to avoid some other bug in Firefox 3)
ctx.stroke();
_assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
_assertPixel(offscreenCanvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");

t.done();

});
done();
