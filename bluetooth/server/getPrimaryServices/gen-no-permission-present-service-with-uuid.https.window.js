// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-helpers.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'Request for present service without permission. ' +
    'Reject with SecurityError.';
const expected = new DOMException(
    'Origin is not allowed to access the service. Tip: Add the service UUID ' +
        'to \'optionalServices\' in requestDevice() options. https://goo.gl/HxfxSQ',
    'SecurityError');

bluetooth_test(
    () =>
        getConnectedHealthThermometerDevice(
            {filters: [{services: ['health_thermometer']}]})
            .then(({device}) => Promise.all([
              assert_promise_rejects_with_message(
                  device.gatt.getPrimaryServices(generic_access.alias),
                  expected),
              assert_promise_rejects_with_message(
                  device.gatt.getPrimaryServices(generic_access.name),
                  expected),
              assert_promise_rejects_with_message(
                  device.gatt.getPrimaryServices(generic_access.uuid), expected)
            ])),
    test_desc);
