// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.join.invalid
// Description:Setting lineJoin to invalid values is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Setting lineJoin to invalid values is ignored");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.lineJoin = 'bevel'
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");
ctx.lineJoin = 'bevel';
ctx.lineJoin = 'invalid';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");
ctx.lineJoin = 'bevel';
ctx.lineJoin = 'ROUND';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");
ctx.lineJoin = 'bevel';
ctx.lineJoin = 'round\0';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");
ctx.lineJoin = 'bevel';
ctx.lineJoin = 'round ';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");
ctx.lineJoin = 'bevel';
ctx.lineJoin = "";
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");
ctx.lineJoin = 'bevel';
ctx.lineJoin = 'butt';
_assertSame(ctx.lineJoin, 'bevel', "ctx.lineJoin", "'bevel'");

t.done();

});
done();
