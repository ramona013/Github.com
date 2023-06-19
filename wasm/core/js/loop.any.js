// META: global=jsshell
// META: script=/wasm/core/harness.js

// loop.wast:3
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x9e\x80\x80\x80\x00\x06\x60\x02\x7f\x7f\x01\x7f\x60\x00\x00\x60\x00\x01\x7f\x60\x01\x7f\x01\x7f\x60\x01\x7e\x01\x7e\x60\x02\x7d\x7d\x01\x7d\x03\xae\x80\x80\x80\x00\x2d\x01\x01\x02\x02\x02\x02\x02\x02\x02\x01\x02\x02\x02\x02\x02\x02\x00\x02\x02\x02\x01\x01\x02\x03\x02\x02\x01\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x02\x04\x04\x05\x04\x85\x80\x80\x80\x00\x01\x70\x01\x01\x01\x05\x83\x80\x80\x80\x00\x01\x00\x01\x06\x86\x80\x80\x80\x00\x01\x7f\x01\x41\x00\x0b\x07\x9e\x85\x80\x80\x00\x2a\x05\x65\x6d\x70\x74\x79\x00\x01\x08\x73\x69\x6e\x67\x75\x6c\x61\x72\x00\x02\x05\x6d\x75\x6c\x74\x69\x00\x03\x06\x6e\x65\x73\x74\x65\x64\x00\x04\x04\x64\x65\x65\x70\x00\x05\x0f\x61\x73\x2d\x73\x65\x6c\x65\x63\x74\x2d\x66\x69\x72\x73\x74\x00\x06\x0d\x61\x73\x2d\x73\x65\x6c\x65\x63\x74\x2d\x6d\x69\x64\x00\x07\x0e\x61\x73\x2d\x73\x65\x6c\x65\x63\x74\x2d\x6c\x61\x73\x74\x00\x08\x0f\x61\x73\x2d\x69\x66\x2d\x63\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x00\x09\x0a\x61\x73\x2d\x69\x66\x2d\x74\x68\x65\x6e\x00\x0a\x0a\x61\x73\x2d\x69\x66\x2d\x65\x6c\x73\x65\x00\x0b\x0e\x61\x73\x2d\x62\x72\x5f\x69\x66\x2d\x66\x69\x72\x73\x74\x00\x0c\x0d\x61\x73\x2d\x62\x72\x5f\x69\x66\x2d\x6c\x61\x73\x74\x00\x0d\x11\x61\x73\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x66\x69\x72\x73\x74\x00\x0e\x10\x61\x73\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x6c\x61\x73\x74\x00\x0f\x16\x61\x73\x2d\x63\x61\x6c\x6c\x5f\x69\x6e\x64\x69\x72\x65\x63\x74\x2d\x66\x69\x72\x73\x74\x00\x11\x14\x61\x73\x2d\x63\x61\x6c\x6c\x5f\x69\x6e\x64\x69\x72\x65\x63\x74\x2d\x6d\x69\x64\x00\x12\x15\x61\x73\x2d\x63\x61\x6c\x6c\x5f\x69\x6e\x64\x69\x72\x65\x63\x74\x2d\x6c\x61\x73\x74\x00\x13\x0e\x61\x73\x2d\x73\x74\x6f\x72\x65\x2d\x66\x69\x72\x73\x74\x00\x14\x0d\x61\x73\x2d\x73\x74\x6f\x72\x65\x2d\x6c\x61\x73\x74\x00\x15\x14\x61\x73\x2d\x6d\x65\x6d\x6f\x72\x79\x2e\x67\x72\x6f\x77\x2d\x76\x61\x6c\x75\x65\x00\x16\x0d\x61\x73\x2d\x63\x61\x6c\x6c\x2d\x76\x61\x6c\x75\x65\x00\x18\x0f\x61\x73\x2d\x72\x65\x74\x75\x72\x6e\x2d\x76\x61\x6c\x75\x65\x00\x19\x0f\x61\x73\x2d\x64\x72\x6f\x70\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x1a\x0b\x61\x73\x2d\x62\x72\x2d\x76\x61\x6c\x75\x65\x00\x1b\x12\x61\x73\x2d\x6c\x6f\x63\x61\x6c\x2e\x73\x65\x74\x2d\x76\x61\x6c\x75\x65\x00\x1c\x12\x61\x73\x2d\x6c\x6f\x63\x61\x6c\x2e\x74\x65\x65\x2d\x76\x61\x6c\x75\x65\x00\x1d\x13\x61\x73\x2d\x67\x6c\x6f\x62\x61\x6c\x2e\x73\x65\x74\x2d\x76\x61\x6c\x75\x65\x00\x1e\x0f\x61\x73\x2d\x6c\x6f\x61\x64\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x1f\x10\x61\x73\x2d\x75\x6e\x61\x72\x79\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x20\x11\x61\x73\x2d\x62\x69\x6e\x61\x72\x79\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x21\x0f\x61\x73\x2d\x74\x65\x73\x74\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x22\x12\x61\x73\x2d\x63\x6f\x6d\x70\x61\x72\x65\x2d\x6f\x70\x65\x72\x61\x6e\x64\x00\x23\x0a\x62\x72\x65\x61\x6b\x2d\x62\x61\x72\x65\x00\x24\x0b\x62\x72\x65\x61\x6b\x2d\x76\x61\x6c\x75\x65\x00\x25\x0e\x62\x72\x65\x61\x6b\x2d\x72\x65\x70\x65\x61\x74\x65\x64\x00\x26\x0b\x62\x72\x65\x61\x6b\x2d\x69\x6e\x6e\x65\x72\x00\x27\x0a\x63\x6f\x6e\x74\x2d\x69\x6e\x6e\x65\x72\x00\x28\x07\x65\x66\x66\x65\x63\x74\x73\x00\x29\x05\x77\x68\x69\x6c\x65\x00\x2a\x03\x66\x6f\x72\x00\x2b\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x2c\x09\x87\x80\x80\x80\x00\x01\x00\x41\x00\x0b\x01\x10\x0a\x81\x8a\x80\x80\x00\x2d\x82\x80\x80\x80\x00\x00\x0b\x88\x80\x80\x80\x00\x00\x03\x40\x0b\x03\x40\x0b\x0b\x8b\x80\x80\x80\x00\x00\x03\x40\x01\x0b\x03\x7f\x41\x07\x0b\x0b\x98\x80\x80\x80\x00\x00\x03\x40\x10\x00\x10\x00\x10\x00\x10\x00\x0b\x03\x7f\x10\x00\x10\x00\x10\x00\x41\x08\x0b\x0b\x95\x80\x80\x80\x00\x00\x03\x7f\x03\x40\x10\x00\x02\x40\x0b\x01\x0b\x03\x7f\x10\x00\x41\x09\x0b\x0b\x0b\xff\x80\x80\x80\x00\x00\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x02\x7f\x10\x00\x41\x96\x01\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x8c\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x41\x02\x41\x03\x1b\x0b\x8c\x80\x80\x80\x00\x00\x41\x02\x03\x7f\x41\x01\x0b\x41\x03\x1b\x0b\x8c\x80\x80\x80\x00\x00\x41\x02\x41\x03\x03\x7f\x41\x01\x0b\x1b\x0b\x8c\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x04\x40\x10\x00\x0b\x0b\x8f\x80\x80\x80\x00\x00\x41\x01\x04\x7f\x03\x7f\x41\x01\x0b\x05\x41\x02\x0b\x0b\x8f\x80\x80\x80\x00\x00\x41\x01\x04\x7f\x41\x02\x05\x03\x7f\x41\x01\x0b\x0b\x0b\x8e\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x41\x01\x0b\x41\x02\x0d\x00\x0b\x0b\x8e\x80\x80\x80\x00\x00\x02\x7f\x41\x02\x03\x7f\x41\x01\x0b\x0d\x00\x0b\x0b\x90\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x41\x01\x0b\x41\x02\x0e\x01\x00\x00\x0b\x0b\x90\x80\x80\x80\x00\x00\x02\x7f\x41\x02\x03\x7f\x41\x01\x0b\x0e\x01\x00\x00\x0b\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x41\x01\x0b\x41\x02\x41\x00\x11\x00\x00\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x41\x02\x03\x7f\x41\x01\x0b\x41\x00\x11\x00\x00\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x41\x01\x41\x02\x03\x7f\x41\x00\x0b\x11\x00\x00\x0b\x0b\x8c\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x41\x01\x36\x02\x00\x0b\x8c\x80\x80\x80\x00\x00\x41\x0a\x03\x7f\x41\x01\x0b\x36\x02\x00\x0b\x89\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x40\x00\x0b\x84\x80\x80\x80\x00\x00\x20\x00\x0b\x89\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x10\x17\x0b\x88\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x0f\x0b\x88\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x1a\x0b\x8c\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x41\x01\x0b\x0c\x00\x0b\x0b\x8d\x80\x80\x80\x00\x01\x01\x7f\x03\x7f\x41\x01\x0b\x21\x00\x20\x00\x0b\x8b\x80\x80\x80\x00\x01\x01\x7f\x03\x7f\x41\x01\x0b\x22\x00\x0b\x8b\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x24\x00\x23\x00\x0b\x8a\x80\x80\x80\x00\x00\x03\x7f\x41\x01\x0b\x28\x02\x00\x0b\x8a\x80\x80\x80\x00\x00\x03\x7f\x10\x00\x41\x0d\x0b\x68\x0b\x91\x80\x80\x80\x00\x00\x03\x7f\x10\x00\x41\x03\x0b\x03\x7f\x10\x00\x41\x04\x0b\x6c\x0b\x8a\x80\x80\x80\x00\x00\x03\x7f\x10\x00\x41\x0d\x0b\x45\x0b\x97\x80\x80\x80\x00\x00\x03\x7d\x10\x00\x43\x00\x00\x40\x40\x0b\x03\x7d\x10\x00\x43\x00\x00\x40\x40\x0b\x5e\x0b\xb4\x80\x80\x80\x00\x00\x02\x40\x03\x40\x0c\x01\x0c\x00\x00\x0b\x0b\x02\x40\x03\x40\x41\x01\x0d\x01\x00\x0b\x0b\x02\x40\x03\x40\x41\x00\x0e\x00\x01\x00\x0b\x0b\x02\x40\x03\x40\x41\x01\x0e\x02\x01\x01\x01\x00\x0b\x0b\x41\x13\x0b\x90\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x41\x12\x0c\x01\x0c\x00\x41\x13\x0b\x0b\x0b\xb4\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x41\x12\x0c\x01\x41\x13\x0c\x01\x41\x14\x41\x00\x0d\x01\x1a\x41\x14\x41\x01\x0d\x01\x1a\x41\x15\x0c\x01\x41\x16\x41\x00\x0e\x00\x01\x41\x17\x41\x01\x0e\x02\x01\x01\x01\x41\x15\x0b\x0b\x0b\xe6\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x20\x00\x02\x7f\x03\x7f\x02\x7f\x41\x01\x0c\x02\x0b\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x03\x7f\x41\x02\x0c\x02\x0b\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x02\x7f\x03\x7f\x41\x04\x0c\x01\x0b\x0b\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x41\x08\x0c\x01\x68\x0b\x0b\x6a\x21\x00\x20\x00\x02\x7f\x03\x7f\x03\x7f\x41\x10\x0c\x02\x0b\x68\x0b\x0b\x6a\x21\x00\x20\x00\x0b\xb0\x80\x80\x80\x00\x01\x01\x7f\x41\x00\x21\x00\x20\x00\x03\x7f\x03\x7f\x0c\x01\x0b\x0b\x6a\x21\x00\x20\x00\x03\x7f\x0c\x00\x68\x0b\x6a\x21\x00\x20\x00\x03\x7f\x03\x7f\x0c\x01\x0b\x68\x0b\x6a\x21\x00\x20\x00\x0b\xb2\x80\x80\x80\x00\x01\x01\x7f\x02\x40\x03\x40\x41\x01\x21\x00\x20\x00\x41\x03\x6c\x21\x00\x20\x00\x41\x05\x6b\x21\x00\x20\x00\x41\x07\x6c\x21\x00\x0c\x01\x20\x00\x41\xe4\x00\x6c\x21\x00\x0b\x0b\x20\x00\x41\x72\x46\x0b\xa5\x80\x80\x80\x00\x01\x01\x7e\x42\x01\x21\x01\x02\x40\x03\x40\x20\x00\x50\x0d\x01\x20\x00\x20\x01\x7e\x21\x01\x20\x00\x42\x01\x7d\x21\x00\x0c\x00\x0b\x0b\x20\x01\x0b\xab\x80\x80\x80\x00\x01\x02\x7e\x42\x01\x21\x01\x42\x02\x21\x02\x02\x40\x03\x40\x20\x02\x20\x00\x56\x0d\x01\x20\x01\x20\x02\x7e\x21\x01\x20\x02\x42\x01\x7c\x21\x02\x0c\x00\x0b\x0b\x20\x01\x0b\xda\x80\x80\x80\x00\x01\x02\x7d\x02\x40\x03\x40\x20\x00\x43\x00\x00\x00\x00\x5b\x0d\x01\x20\x01\x21\x02\x02\x40\x03\x40\x20\x02\x43\x00\x00\x00\x00\x5b\x0d\x01\x20\x02\x43\x00\x00\x00\x00\x5d\x0d\x03\x20\x03\x20\x02\x92\x21\x03\x20\x02\x43\x00\x00\x00\x40\x93\x21\x02\x0c\x00\x0b\x0b\x20\x03\x20\x00\x95\x21\x03\x20\x00\x43\x00\x00\x80\x3f\x93\x21\x00\x0c\x00\x0b\x0b\x20\x03\x0b");

// loop.wast:305
assert_return(() => call($1, "empty", []));

// loop.wast:306
assert_return(() => call($1, "singular", []), 7);

// loop.wast:307
assert_return(() => call($1, "multi", []), 8);

// loop.wast:308
assert_return(() => call($1, "nested", []), 9);

// loop.wast:309
assert_return(() => call($1, "deep", []), 150);

// loop.wast:311
assert_return(() => call($1, "as-select-first", []), 1);

// loop.wast:312
assert_return(() => call($1, "as-select-mid", []), 2);

// loop.wast:313
assert_return(() => call($1, "as-select-last", []), 2);

// loop.wast:315
assert_return(() => call($1, "as-if-condition", []));

// loop.wast:316
assert_return(() => call($1, "as-if-then", []), 1);

// loop.wast:317
assert_return(() => call($1, "as-if-else", []), 2);

// loop.wast:319
assert_return(() => call($1, "as-br_if-first", []), 1);

// loop.wast:320
assert_return(() => call($1, "as-br_if-last", []), 2);

// loop.wast:322
assert_return(() => call($1, "as-br_table-first", []), 1);

// loop.wast:323
assert_return(() => call($1, "as-br_table-last", []), 2);

// loop.wast:325
assert_return(() => call($1, "as-call_indirect-first", []), 1);

// loop.wast:326
assert_return(() => call($1, "as-call_indirect-mid", []), 2);

// loop.wast:327
assert_return(() => call($1, "as-call_indirect-last", []), 1);

// loop.wast:329
assert_return(() => call($1, "as-store-first", []));

// loop.wast:330
assert_return(() => call($1, "as-store-last", []));

// loop.wast:332
assert_return(() => call($1, "as-memory.grow-value", []), 1);

// loop.wast:333
assert_return(() => call($1, "as-call-value", []), 1);

// loop.wast:334
assert_return(() => call($1, "as-return-value", []), 1);

// loop.wast:335
assert_return(() => call($1, "as-drop-operand", []));

// loop.wast:336
assert_return(() => call($1, "as-br-value", []), 1);

// loop.wast:337
assert_return(() => call($1, "as-local.set-value", []), 1);

// loop.wast:338
assert_return(() => call($1, "as-local.tee-value", []), 1);

// loop.wast:339
assert_return(() => call($1, "as-global.set-value", []), 1);

// loop.wast:340
assert_return(() => call($1, "as-load-operand", []), 1);

// loop.wast:342
assert_return(() => call($1, "as-unary-operand", []), 0);

// loop.wast:343
assert_return(() => call($1, "as-binary-operand", []), 12);

// loop.wast:344
assert_return(() => call($1, "as-test-operand", []), 0);

// loop.wast:345
assert_return(() => call($1, "as-compare-operand", []), 0);

// loop.wast:347
assert_return(() => call($1, "break-bare", []), 19);

// loop.wast:348
assert_return(() => call($1, "break-value", []), 18);

// loop.wast:349
assert_return(() => call($1, "break-repeated", []), 18);

// loop.wast:350
assert_return(() => call($1, "break-inner", []), 31);

// loop.wast:352
assert_return(() => call($1, "effects", []), 1);

// loop.wast:354
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x31\x05\x77\x68\x69\x6c\x65\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x00\x10\x00\x01\x42\x01\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "while", [int64("0")]), int64("1"))

// loop.wast:355
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x31\x05\x77\x68\x69\x6c\x65\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x01\x10\x00\x01\x42\x01\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "while", [int64("1")]), int64("1"))

// loop.wast:356
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x31\x05\x77\x68\x69\x6c\x65\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x02\x10\x00\x01\x42\x02\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "while", [int64("2")]), int64("2"))

// loop.wast:357
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x31\x05\x77\x68\x69\x6c\x65\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x03\x10\x00\x01\x42\x06\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "while", [int64("3")]), int64("6"))

// loop.wast:358
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x31\x05\x77\x68\x69\x6c\x65\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x42\x05\x10\x00\x01\x42\xf8\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "while", [int64("5")]), int64("120"))

// loop.wast:359
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8c\x80\x80\x80\x00\x01\x02\x24\x31\x05\x77\x68\x69\x6c\x65\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa1\x80\x80\x80\x00\x01\x9b\x80\x80\x80\x00\x00\x02\x40\x42\x14\x10\x00\x01\x42\x80\x80\xd0\x95\xc8\xef\xd9\xe1\x21\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "while", [int64("20")]), int64("2432902008176640000"))

// loop.wast:361
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8a\x80\x80\x80\x00\x01\x02\x24\x31\x03\x66\x6f\x72\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x00\x10\x00\x01\x42\x01\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "for", [int64("0")]), int64("1"))

// loop.wast:362
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8a\x80\x80\x80\x00\x01\x02\x24\x31\x03\x66\x6f\x72\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x01\x10\x00\x01\x42\x01\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "for", [int64("1")]), int64("1"))

// loop.wast:363
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8a\x80\x80\x80\x00\x01\x02\x24\x31\x03\x66\x6f\x72\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x02\x10\x00\x01\x42\x02\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "for", [int64("2")]), int64("2"))

// loop.wast:364
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8a\x80\x80\x80\x00\x01\x02\x24\x31\x03\x66\x6f\x72\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x99\x80\x80\x80\x00\x01\x93\x80\x80\x80\x00\x00\x02\x40\x42\x03\x10\x00\x01\x42\x06\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "for", [int64("3")]), int64("6"))

// loop.wast:365
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8a\x80\x80\x80\x00\x01\x02\x24\x31\x03\x66\x6f\x72\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9a\x80\x80\x80\x00\x01\x94\x80\x80\x80\x00\x00\x02\x40\x42\x05\x10\x00\x01\x42\xf8\x00\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "for", [int64("5")]), int64("120"))

// loop.wast:366
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7e\x01\x7e\x02\x8a\x80\x80\x80\x00\x01\x02\x24\x31\x03\x66\x6f\x72\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa1\x80\x80\x80\x00\x01\x9b\x80\x80\x80\x00\x00\x02\x40\x42\x14\x10\x00\x01\x42\x80\x80\xd0\x95\xc8\xef\xd9\xe1\x21\x01\x51\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "for", [int64("20")]), int64("2432902008176640000"))

// loop.wast:368
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x00\x43\x00\x00\xe0\x40\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [0., 7.]), 0.)

// loop.wast:369
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xe0\x40\x43\x00\x00\x00\x00\x10\x00\xbc\x43\x00\x00\x00\x00\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [7., 0.]), 0.)

// loop.wast:370
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x80\x3f\x43\x00\x00\x80\x3f\x10\x00\xbc\x43\x00\x00\x80\x3f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [1., 1.]), 1.)

// loop.wast:371
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x80\x3f\x43\x00\x00\x00\x40\x10\x00\xbc\x43\x00\x00\x00\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [1., 2.]), 2.)

// loop.wast:372
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x80\x3f\x43\x00\x00\x40\x40\x10\x00\xbc\x43\x00\x00\x80\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [1., 3.]), 4.)

// loop.wast:373
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x80\x3f\x43\x00\x00\x80\x40\x10\x00\xbc\x43\x00\x00\xc0\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [1., 4.]), 6.)

// loop.wast:374
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x80\x3f\x43\x00\x00\xc8\x42\x10\x00\xbc\x43\x00\x60\x1f\x45\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [1., 100.]), 2550.)

// loop.wast:375
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x80\x3f\x43\x00\x00\xca\x42\x10\x00\xbc\x43\x00\x90\x22\x45\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [1., 101.]), 2601.)

// loop.wast:376
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x40\x43\x00\x00\x80\x3f\x10\x00\xbc\x43\x00\x00\x80\x3f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [2., 1.]), 1.)

// loop.wast:377
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x40\x40\x43\x00\x00\x80\x3f\x10\x00\xbc\x43\x00\x00\x80\x3f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [3., 1.]), 1.)

// loop.wast:378
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x20\x41\x43\x00\x00\x80\x3f\x10\x00\xbc\x43\x00\x00\x80\x3f\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [10., 1.]), 1.)

// loop.wast:379
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x40\x43\x00\x00\x00\x40\x10\x00\xbc\x43\x00\x00\x40\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [2., 2.]), 3.)

// loop.wast:380
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\x00\x40\x43\x00\x00\x40\x40\x10\x00\xbc\x43\x00\x00\x80\x40\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [2., 3.]), 4.)

// loop.wast:381
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xe0\x40\x43\x00\x00\x80\x40\x10\x00\xbc\x43\xcf\xf3\x24\x41\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [7., 4.]), 10.3095235825)

// loop.wast:382
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xe0\x40\x43\x00\x00\xc8\x42\x10\x00\xbc\x43\x62\xec\x88\x45\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [7., 100.]), 4381.54785156)

// loop.wast:383
run(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8a\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7d\x7d\x01\x7d\x02\x8e\x80\x80\x80\x00\x01\x02\x24\x31\x07\x6e\x65\x73\x74\x69\x6e\x67\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\xa4\x80\x80\x80\x00\x01\x9e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xe0\x40\x43\x00\x00\xca\x42\x10\x00\xbc\x43\x00\x90\x22\x45\xbc\x46\x45\x0d\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_return(() => call($1, "nesting", [7., 101.]), 2601.)

// loop.wast:385
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x03\x40\x0b\x0b");

// loop.wast:389
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7e\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x03\x40\x0b\x0b");

// loop.wast:393
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7d\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x03\x40\x0b\x0b");

// loop.wast:397
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7c\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x03\x40\x0b\x0b");

// loop.wast:402
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8d\x80\x80\x80\x00\x01\x87\x80\x80\x80\x00\x00\x03\x40\x41\x01\x0b\x0b");

// loop.wast:408
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8b\x80\x80\x80\x00\x01\x85\x80\x80\x80\x00\x00\x03\x7f\x0b\x0b");

// loop.wast:414
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x03\x7f\x01\x0b\x0b");

// loop.wast:420
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x90\x80\x80\x80\x00\x01\x8a\x80\x80\x80\x00\x00\x03\x7f\x43\x00\x00\x00\x00\x0b\x0b");

// loop.wast:426
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x8f\x80\x80\x80\x00\x01\x89\x80\x80\x80\x00\x00\x03\x7e\x00\x00\x00\x1b\x0b\x0b");

// loop.wast:433
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x02\x40\x03\x7f\x0b\x1a\x0b\x0b");

// loop.wast:442
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x41\x00\x03\x40\x03\x7f\x0b\x1a\x0b\x0b");

// loop.wast:451
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x41\x00\x41\x00\x04\x40\x03\x7f\x0b\x1a\x0b\x0b");

// loop.wast:462
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");

// loop.wast:466
assert_malformed("\x3c\x6d\x61\x6c\x66\x6f\x72\x6d\x65\x64\x20\x71\x75\x6f\x74\x65\x3e");
