// META: script=resources/util.js
// META: script=/common/utils.js

promise_test(() =>
  fetch("resources/echo-critical-hint.py")
      .then((r) => r.text())
      .then((r) => {
        assert_true(r.includes("FAIL"));
      })
, "Critical-CH subresource fetch");
