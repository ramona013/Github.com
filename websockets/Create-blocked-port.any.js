// META: script=websocket.sub.js

async_test(t => {
  const ws = CreateWebSocketWithBlockedPort(__PORT)
  ws.onerror = t.unreached_func()
  ws.onopen = t.step_func_done()
}, 'Basic check');
// list of bad ports according to
// https://fetch.spec.whatwg.org/#port-blocking
[
  1, // tcpmux
  7, // echo
  9, // discard
  11, // systat
  13, // daytime
  15, // netstat
  17, // qotd
  19, // chargen
  20, // ftp-data
  21, // ftp
  22, // ssh
  23, // telnet
  25, // smtp
  37, // time
  42, // name
  43, // nicname
  53, // domain
  77, // priv-rjs
  79, // finger
  87, // ttylink
  95, // supdup
  101, // hostriame
  102, // iso-tsap
  103, // gppitnp
  104, // acr-nema
  109, // pop2
  110, // pop3
  111, // sunrpc
  113, // auth
  115, // sftp
  117, // uucp-path
  119, // nntp
  123, // ntp
  135, // loc-srv / epmap
  139, // netbios
  143, // imap2
  179, // bgp
  389, // ldap
  465, // smtp+ssl
  512, // print / exec
  513, // login
  514, // shell
  515, // printer
  526, // tempo
  530, // courier
  531, // chat
  532, // netnews
  540, // uucp
  556, // remotefs
  563, // nntp+ssl
  587, // smtp
  601, // syslog-conn
  636, // ldap+ssl
  993, // imap+ssl
  995, // pop3+ssl
  2049, // nfs
  3659, // apple-sasl
  4045, // lockd
  6000, // x11
  6665, // irc (alternate)
  6666, // irc (alternate)
  6667, // irc (default)
  6668, // irc (alternate)
  6669, // irc (alternate)
].forEach(blockedPort => {
  async_test(t => {
    const ws = CreateWebSocketWithBlockedPort(blockedPort)
    ws.onerror = t.step_func_done()
    ws.onopen = t.unreached_func()
  }, "WebSocket blocked port test " + blockedPort)
})
