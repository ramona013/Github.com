// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.missingargs
// Description:Missing arguments cause TypeError
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Missing arguments cause TypeError");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

assert_throws_js(TypeError, function() { ctx.scale(); });
assert_throws_js(TypeError, function() { ctx.scale(1); });
assert_throws_js(TypeError, function() { ctx.rotate(); });
assert_throws_js(TypeError, function() { ctx.translate(); });
assert_throws_js(TypeError, function() { ctx.translate(0); });
if (ctx.transform) { // (avoid spurious failures, since the aim here is not to test that all features are supported)
    assert_throws_js(TypeError, function() { ctx.transform(); });
    assert_throws_js(TypeError, function() { ctx.transform(1); });
    assert_throws_js(TypeError, function() { ctx.transform(1, 0); });
    assert_throws_js(TypeError, function() { ctx.transform(1, 0, 0); });
    assert_throws_js(TypeError, function() { ctx.transform(1, 0, 0, 1); });
    assert_throws_js(TypeError, function() { ctx.transform(1, 0, 0, 1, 0); });
}
if (ctx.setTransform) {
    assert_throws_js(TypeError, function() { ctx.setTransform(1); });
    assert_throws_js(TypeError, function() { ctx.setTransform(1, 0); });
    assert_throws_js(TypeError, function() { ctx.setTransform(1, 0, 0); });
    assert_throws_js(TypeError, function() { ctx.setTransform(1, 0, 0, 1); });
    assert_throws_js(TypeError, function() { ctx.setTransform(1, 0, 0, 1, 0); });
}
assert_throws_js(TypeError, function() { ctx.createLinearGradient(); });
assert_throws_js(TypeError, function() { ctx.createLinearGradient(0); });
assert_throws_js(TypeError, function() { ctx.createLinearGradient(0, 0); });
assert_throws_js(TypeError, function() { ctx.createLinearGradient(0, 0, 1); });
assert_throws_js(TypeError, function() { ctx.createRadialGradient(); });
assert_throws_js(TypeError, function() { ctx.createRadialGradient(0); });
assert_throws_js(TypeError, function() { ctx.createRadialGradient(0, 0); });
assert_throws_js(TypeError, function() { ctx.createRadialGradient(0, 0, 1); });
assert_throws_js(TypeError, function() { ctx.createRadialGradient(0, 0, 1, 0); });
assert_throws_js(TypeError, function() { ctx.createRadialGradient(0, 0, 1, 0, 0); });
assert_throws_js(TypeError, function() { ctx.createPattern(offscreenCanvas); });
assert_throws_js(TypeError, function() { ctx.clearRect(); });
assert_throws_js(TypeError, function() { ctx.clearRect(0); });
assert_throws_js(TypeError, function() { ctx.clearRect(0, 0); });
assert_throws_js(TypeError, function() { ctx.clearRect(0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.fillRect(); });
assert_throws_js(TypeError, function() { ctx.fillRect(0); });
assert_throws_js(TypeError, function() { ctx.fillRect(0, 0); });
assert_throws_js(TypeError, function() { ctx.fillRect(0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.strokeRect(); });
assert_throws_js(TypeError, function() { ctx.strokeRect(0); });
assert_throws_js(TypeError, function() { ctx.strokeRect(0, 0); });
assert_throws_js(TypeError, function() { ctx.strokeRect(0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.moveTo(); });
assert_throws_js(TypeError, function() { ctx.moveTo(0); });
assert_throws_js(TypeError, function() { ctx.lineTo(); });
assert_throws_js(TypeError, function() { ctx.lineTo(0); });
assert_throws_js(TypeError, function() { ctx.quadraticCurveTo(); });
assert_throws_js(TypeError, function() { ctx.quadraticCurveTo(0); });
assert_throws_js(TypeError, function() { ctx.quadraticCurveTo(0, 0); });
assert_throws_js(TypeError, function() { ctx.quadraticCurveTo(0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.bezierCurveTo(); });
assert_throws_js(TypeError, function() { ctx.bezierCurveTo(0); });
assert_throws_js(TypeError, function() { ctx.bezierCurveTo(0, 0); });
assert_throws_js(TypeError, function() { ctx.bezierCurveTo(0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.bezierCurveTo(0, 0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.bezierCurveTo(0, 0, 0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.arcTo(); });
assert_throws_js(TypeError, function() { ctx.arcTo(0); });
assert_throws_js(TypeError, function() { ctx.arcTo(0, 0); });
assert_throws_js(TypeError, function() { ctx.arcTo(0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.arcTo(0, 0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.rect(); });
assert_throws_js(TypeError, function() { ctx.rect(0); });
assert_throws_js(TypeError, function() { ctx.rect(0, 0); });
assert_throws_js(TypeError, function() { ctx.rect(0, 0, 0); });
assert_throws_js(TypeError, function() { ctx.arc(); });
assert_throws_js(TypeError, function() { ctx.arc(0); });
assert_throws_js(TypeError, function() { ctx.arc(0, 0); });
assert_throws_js(TypeError, function() { ctx.arc(0, 0, 1); });
assert_throws_js(TypeError, function() { ctx.arc(0, 0, 1, 0); });
assert_throws_js(TypeError, function() { ctx.drawImage(); });
assert_throws_js(TypeError, function() { ctx.drawImage(offscreenCanvas); });
assert_throws_js(TypeError, function() { ctx.drawImage(offscreenCanvas, 0); });
// TODO: n >= 3 args on drawImage could be either a valid overload,
// or too few for another overload, or too many for another
// overload - what should happen?
if (ctx.createImageData) {
    assert_throws_js(TypeError, function() { ctx.createImageData(); });
    assert_throws_js(TypeError, function() { ctx.createImageData(1); });
}
if (ctx.getImageData) {
    assert_throws_js(TypeError, function() { ctx.getImageData(); });
    assert_throws_js(TypeError, function() { ctx.getImageData(0); });
    assert_throws_js(TypeError, function() { ctx.getImageData(0, 0); });
    assert_throws_js(TypeError, function() { ctx.getImageData(0, 0, 1); });
}
if (ctx.putImageData) {
    var imgdata = ctx.getImageData(0, 0, 1, 1);
    assert_throws_js(TypeError, function() { ctx.putImageData(); });
    assert_throws_js(TypeError, function() { ctx.putImageData(imgdata); });
    assert_throws_js(TypeError, function() { ctx.putImageData(imgdata, 0); });
}
var g = ctx.createLinearGradient(0, 0, 0, 0);
assert_throws_js(TypeError, function() { g.addColorStop(); });
assert_throws_js(TypeError, function() { g.addColorStop(0); });
t.done();

});
done();
