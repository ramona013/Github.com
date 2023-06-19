// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.pattern.transparent.2
// Description:Shadows are not drawn for transparent parts of fill patterns
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Shadows are not drawn for transparent parts of fill patterns");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/redtransparent.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    var pattern = ctx.createPattern(response, 'repeat');
    ctx.fillStyle = '#f00';
    ctx.fillRect(0, 0, 50, 50);
    ctx.fillStyle = '#0f0';
    ctx.fillRect(50, 0, 50, 50);
    ctx.shadowOffsetY = 50;
    ctx.shadowColor = '#0f0';
    ctx.fillStyle = pattern;
    ctx.fillRect(0, -50, 100, 50);
    _assertPixel(offscreenCanvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
    _assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
    _assertPixel(offscreenCanvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");
});

t.done();

});
done();
