// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js

// https://w3c.github.io/web-share/

'use strict';

idl_test(
  ['web-share'],
  ['html'],
  idl_array => {
    idl_array.add_objects({
      Navigator: ['navigator']
    });
  }
);
