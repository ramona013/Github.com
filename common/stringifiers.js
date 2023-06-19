// Tests <http://heycam.github.io/webidl/#es-stringifier>.
function test_stringifier_attribute(aObject, aAttribute, aIsUnforgeable) {
  // Step 1.
  test(function() {
    [null, undefined].forEach(function(v) {
      assert_throws(new TypeError(), function() {
        aObject.toString.call(v);
      });
    });
  });

  // TODO Step 2: security check.

  // Step 3.
  test(function() {
    assert_false("Window" in window && aObject instanceof window.Window);
    [{}, window].forEach(function(v) {
      assert_throws(new TypeError(), function() {
        aObject.toString.call(v)
      });
    });
  });

  // Step 4-6.
  var expected_value;
  test(function() {
    expected_value = aObject[aAttribute];
    assert_equals(aObject[aAttribute], expected_value,
                  "The attribute " + aAttribute + " should be pure.");
  });

  var test_error = { name: "test" };
  test(function() {
    if (!aIsUnforgeable) {
      Object.defineProperty(aObject, aAttribute, {
        configurable: true,
        get: function() { throw test_error; }
      });
    }
    assert_equals(aObject.toString(), expected_value);
  });

  test(function() {
    if (!aIsUnforgeable) {
      Object.defineProperty(aObject, aAttribute, {
        configurable: true,
        value: { toString: function() { throw test_error; } }
      });
    }
    assert_equals(aObject.toString(), expected_value);
  });
}
