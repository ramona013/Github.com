// META: global=!default,worker
test(() => {
  assert_true(navigator.hardwareConcurrency > 0);
}, 'Test worker navigator hardware concurrency.');
