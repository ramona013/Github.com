onconnect = function(e) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '001-1.xml', false);
  xhr.send();
  var passed = xhr.responseText == '<x>bar</x>';
  e.ports[0].postMessage(passed);
}