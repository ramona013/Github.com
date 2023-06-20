// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.composite.canvas.copy
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');


var offscreenCanvas2 = new OffscreenCanvas(offscreenCanvas.width, offscreenCanvas.height);
var ctx2 = offscreenCanvas2.getContext('2d');
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/yellow75.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    createImageBitmap(response).then(bitmap => {
        ctx2.drawImage(bitmap, 0, 0);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.fillRect(0, 0, 100, 50);
        ctx.globalCompositeOperation = 'copy';
        ctx.drawImage(offscreenCanvas2, 0, 0);
        _assertPixelApprox(offscreenCanvas, 50,25, 255,255,0,191, "50,25", "255,255,0,191", 5);
    }, t_fail);
}).then(t_pass, t_fail);

});
done();
