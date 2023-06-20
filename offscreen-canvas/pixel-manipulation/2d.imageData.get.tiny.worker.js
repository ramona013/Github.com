// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.tiny
// Description:getImageData() works for sizes smaller than one pixel
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("getImageData() works for sizes smaller than one pixel");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var imgdata = ctx.getImageData(0, 0, 0.0001, 0.0001);
_assertSame(imgdata.data.length, imgdata.width*imgdata.height*4, "imgdata.data.length", "imgdata.width*imgdata.height*4");
_assertSame(imgdata.width, 1, "imgdata.width", "1");
_assertSame(imgdata.height, 1, "imgdata.height", "1");
t.done();

});
done();
