// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.source.negative
// Description:getImageData() works with negative width and height, and returns top-to-bottom left-to-right
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("getImageData() works with negative width and height, and returns top-to-bottom left-to-right");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#fff';
ctx.fillRect(20, 10, 60, 10);
var imgdata1 = ctx.getImageData(85, 25, -10, -10);
_assertSame(imgdata1.data[0], 255, "imgdata1.data[\""+(0)+"\"]", "255");
_assertSame(imgdata1.data[1], 255, "imgdata1.data[\""+(1)+"\"]", "255");
_assertSame(imgdata1.data[2], 255, "imgdata1.data[\""+(2)+"\"]", "255");
_assertSame(imgdata1.data[3], 255, "imgdata1.data[\""+(3)+"\"]", "255");
_assertSame(imgdata1.data[imgdata1.data.length-4+0], 0, "imgdata1.data[imgdata1.data.length-4+0]", "0");
_assertSame(imgdata1.data[imgdata1.data.length-4+1], 0, "imgdata1.data[imgdata1.data.length-4+1]", "0");
_assertSame(imgdata1.data[imgdata1.data.length-4+2], 0, "imgdata1.data[imgdata1.data.length-4+2]", "0");
_assertSame(imgdata1.data[imgdata1.data.length-4+3], 255, "imgdata1.data[imgdata1.data.length-4+3]", "255");
var imgdata2 = ctx.getImageData(0, 0, -1, -1);
_assertSame(imgdata2.data[0], 0, "imgdata2.data[\""+(0)+"\"]", "0");
_assertSame(imgdata2.data[1], 0, "imgdata2.data[\""+(1)+"\"]", "0");
_assertSame(imgdata2.data[2], 0, "imgdata2.data[\""+(2)+"\"]", "0");
_assertSame(imgdata2.data[3], 0, "imgdata2.data[\""+(3)+"\"]", "0");
t.done();

});
done();
