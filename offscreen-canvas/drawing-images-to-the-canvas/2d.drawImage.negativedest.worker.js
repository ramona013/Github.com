// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.negativedest
// Description:Negative destination width/height represents the correct rectangle
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Negative destination width/height represents the correct rectangle");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/ggrr-256x256.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    ctx.drawImage(response, 100, 78, 50, 50, 0, 50, 50, -50);
    ctx.drawImage(response, 100, 128, 50, -50, 100, 50, -50, -50);
    _assertPixelApprox(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 48,1, 0,255,0,255, "48,1", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 48,48, 0,255,0,255, "48,48", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 51,1, 0,255,0,255, "51,1", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 51,48, 0,255,0,255, "51,48", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255", 2);
    _assertPixelApprox(offscreenCanvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255", 2);
});

t.done();

});
done();
