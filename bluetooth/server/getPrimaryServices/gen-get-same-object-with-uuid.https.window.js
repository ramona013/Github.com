// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
// Generated by //third_party/WebKit/LayoutTests/bluetooth/generate.py
'use strict';
const test_desc = 'Calls to getPrimaryServices should return the same object.';
let device;

bluetooth_test(
    () => getHealthThermometerDevice({
            filters: [{services: ['health_thermometer']}],
            optionalServices: ['generic_access']
          })
              .then(({device}) => Promise.all([
                device.gatt.getPrimaryServices('health_thermometer'),
                device.gatt.getPrimaryServices('health_thermometer')
              ]))
              .then(([services_first_call, services_second_call]) => {
                // Convert to arrays if necessary.
                services_first_call = [].concat(services_first_call);
                services_second_call = [].concat(services_second_call);

                assert_equals(
                    services_first_call.length, services_second_call.length);

                let first_call_set = new Set(services_first_call);
                assert_equals(services_first_call.length, first_call_set.size);
                let second_call_set = new Set(services_second_call);
                assert_equals(
                    services_second_call.length, second_call_set.size);

                services_first_call.forEach(
                    service => {assert_true(second_call_set.has(service))});

                services_second_call.forEach(service => {
                  assert_true(first_call_set.has(service));
                });
              }),
    test_desc);
