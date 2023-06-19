// For documentation of the format, see README in this directory.
var browserTests = [
["foo[]bar",
    [["backcolor","#00FFFF"]],
    "foo[]bar",
    [true],
    {"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<p>[foo</p> <p>bar]</p>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<p><span style=\"background-color:rgb(0, 255, 255)\">[foo</span></p> <p><span style=\"background-color:rgb(0, 255, 255)\">bar]</span></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<p>[foo</p> <p>bar]</p>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<p><span style=\"background-color:rgb(0, 255, 255)\">[foo</span></p> <p><span style=\"background-color:rgb(0, 255, 255)\">bar]</span></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<span>[foo</span> <span>bar]</span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\"><span>[foo</span> <span>bar]</span></span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<span>[foo</span> <span>bar]</span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\"><span>[foo</span> <span>bar]</span></span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<p>[foo</p><p> <span>bar</span> </p><p>baz]</p>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<p><span style=\"background-color:rgb(0, 255, 255)\">[foo</span></p><p> <span style=\"background-color:rgb(0, 255, 255)\"><span>bar</span></span> </p><p><span style=\"background-color:rgb(0, 255, 255)\">baz]</span></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<p>[foo</p><p> <span>bar</span> </p><p>baz]</p>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<p><span style=\"background-color:rgb(0, 255, 255)\">[foo</span></p><p> <span style=\"background-color:rgb(0, 255, 255)\"><span>bar</span></span> </p><p><span style=\"background-color:rgb(0, 255, 255)\">baz]</span></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<p>[foo<p><br><p>bar]",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<p><span style=\"background-color:rgb(0, 255, 255)\">[foo</span></p><p><span style=\"background-color:rgb(0, 255, 255)\"><br></span></p><p><span style=\"background-color:rgb(0, 255, 255)\">bar]</span></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<p>[foo<p><br><p>bar]",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<p><span style=\"background-color:rgb(0, 255, 255)\">[foo</span></p><p><span style=\"background-color:rgb(0, 255, 255)\"><br></span></p><p><span style=\"background-color:rgb(0, 255, 255)\">bar]</span></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<b>foo[]bar</b>",
    [["backcolor","#00FFFF"]],
    "<b>foo[]bar</b>",
    [true],
    {"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<i>foo[]bar</i>",
    [["backcolor","#00FFFF"]],
    "<i>foo[]bar</i>",
    [true],
    {"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<span>foo</span>{}<span>bar</span>",
    [["backcolor","#00FFFF"]],
    "<span>foo</span>{}<span>bar</span>",
    [true],
    {"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<span>foo[</span><span>]bar</span>",
    [["backcolor","#00FFFF"]],
    "<span>foo[</span><span>]bar</span>",
    [true],
    {"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo[bar]baz",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(0, 255, 255)\">[bar]</span>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo[bar]baz",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(0, 255, 255)\">[bar]</span>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo[bar<b>baz]qoz</b>quz",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(0, 255, 255)\">[bar</span><b><span style=\"background-color:rgb(0, 255, 255)\">baz]</span>qoz</b>quz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo[bar<b>baz]qoz</b>quz",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(0, 255, 255)\">[bar</span><b><span style=\"background-color:rgb(0, 255, 255)\">baz]</span>qoz</b>quz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo[bar<i>baz]qoz</i>quz",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(0, 255, 255)\">[bar</span><i><span style=\"background-color:rgb(0, 255, 255)\">baz]</span>qoz</i>quz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo[bar<i>baz]qoz</i>quz",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(0, 255, 255)\">[bar</span><i><span style=\"background-color:rgb(0, 255, 255)\">baz]</span>qoz</i>quz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["{<p><p> <p>foo</p>}",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "{<p></p><p> </p><p><span style=\"background-color:rgb(0, 255, 255)\">foo</span></p>}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["{<p><p> <p>foo</p>}",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "{<p></p><p> </p><p><span style=\"background-color:rgb(0, 255, 255)\">foo</span></p>}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody><tr><td>foo<td>b[a]r<td>baz</table>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<table><tbody><tr><td>foo</td><td>b<span style=\"background-color:rgb(0, 255, 255)\">[a]</span>r</td><td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody><tr><td>foo<td>b[a]r<td>baz</table>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<table><tbody><tr><td>foo</td><td>b<span style=\"background-color:rgb(0, 255, 255)\">[a]</span>r</td><td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody><tr data-start=1 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<table><tbody><tr><td>foo</td>{<td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody><tr data-start=1 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<table><tbody><tr><td>foo</td>{<td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody><tr data-start=0 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<table><tbody><tr>{<td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody><tr data-start=0 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<table><tbody><tr>{<td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody data-start=0 data-end=1><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<table><tbody>{<tr><td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">baz</span></td></tr>}</tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table><tbody data-start=0 data-end=1><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<table><tbody>{<tr><td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">baz</span></td></tr>}</tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table data-start=0 data-end=1><tbody><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<table>{<tbody><tr><td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">baz</span></td></tr></tbody>}</table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<table data-start=0 data-end=1><tbody><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<table>{<tbody><tr><td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">baz</span></td></tr></tbody>}</table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["{<table><tr><td>foo<td>bar<td>baz</table>}",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "{<table><tbody><tr><td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">baz</span></td></tr></tbody></table>}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["{<table><tr><td>foo<td>bar<td>baz</table>}",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "{<table><tbody><tr><td><span style=\"background-color:rgb(0, 255, 255)\">foo</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">bar</span></td><td><span style=\"background-color:rgb(0, 255, 255)\">baz</span></td></tr></tbody></table>}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["<p style=\"background-color: rgb(0, 255, 255)\">foo[bar]baz</p>",
    [["backcolor","#00FFFF"]],
    "<p style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</p>",
    [true],
    {"backcolor":[false,false,"rgb(0, 255, 255)",false,false,"rgb(0, 255, 255)"]}],
["<p style=\"background-color: #00ffff\">foo[bar]baz</p>",
    [["backcolor","#00FFFF"]],
    "<p style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</p>",
    [true],
    {"backcolor":[false,false,"rgb(0, 255, 255)",false,false,"rgb(0, 255, 255)"]}],
["<p style=\"background-color: aqua\">foo[bar]baz</p>",
    [["backcolor","#00FFFF"]],
    "<p style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</p>",
    [true],
    {"backcolor":[false,false,"rgb(0, 255, 255)",false,false,"rgb(0, 255, 255)"]}],
["{<p style=\"background-color: aqua\">foo</p><p>bar</p>}",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "{<p style=\"background-color:rgb(0, 255, 255)\">foo</p><p><span style=\"background-color:rgb(0, 255, 255)\">bar</span></p>}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[true,false,"rgb(0, 255, 255)",false,false,"rgb(0, 255, 255)"]}],
["{<p style=\"background-color: aqua\">foo</p><p>bar</p>}",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "{<p style=\"background-color:rgb(0, 255, 255)\">foo</p><p><span style=\"background-color:rgb(0, 255, 255)\">bar</span></p>}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[true,false,"rgb(0, 255, 255)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: aqua\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: aqua\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: #00ffff\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: #00ffff\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: #0ff\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: #0ff\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: rgb(0, 255, 255)\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: rgb(0, 255, 255)\">foo<span style=\"background-color: tan\">[bar]</span>baz</span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo[bar]baz</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"background-color: aqua\">foo<span style=\"background-color: tan\">b[ar]</span>baz</span>",
    [["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(0, 255, 255)\">foo<span style=\"background-color:rgb(210, 180, 140)\">b</span>[ar]baz</span>",
    [true],
    {"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<p style=\"background-color: aqua\">foo<span style=\"background-color: tan\">b[ar]</span>baz</p>",
    [["backcolor","#00FFFF"]],
    "<p style=\"background-color:rgb(0, 255, 255)\">foo<span style=\"background-color:rgb(210, 180, 140)\">b</span>[ar]baz</p>",
    [true],
    {"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<div style=\"background-color: aqua\"><p style=\"background-color: tan\">b[ar]</p></div>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<div style=\"background-color:rgb(0, 255, 255)\"><p style=\"background-color:rgb(210, 180, 140)\">b<span style=\"background-color:rgb(0, 255, 255)\">[ar]</span></p></div>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<div style=\"background-color: aqua\"><p style=\"background-color: tan\">b[ar]</p></div>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<div style=\"background-color:rgb(0, 255, 255)\"><p style=\"background-color:rgb(210, 180, 140)\">b<span style=\"background-color:rgb(0, 255, 255)\">[ar]</span></p></div>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"display: block; background-color: aqua\"><span style=\"display: block; background-color: tan\">b[ar]</span></span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"display:block; background-color:rgb(0, 255, 255)\"><span style=\"display:block; background-color:rgb(210, 180, 140)\">b<span style=\"background-color:rgb(0, 255, 255)\">[ar]</span></span></span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=\"display: block; background-color: aqua\"><span style=\"display: block; background-color: tan\">b[ar]</span></span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"display:block; background-color:rgb(0, 255, 255)\"><span style=\"display:block; background-color:rgb(210, 180, 140)\">b<span style=\"background-color:rgb(0, 255, 255)\">[ar]</span></span></span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["fo[o<span style=background-color:tan>b]ar</span>baz",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span><span style=\"background-color:rgb(210, 180, 140)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[true,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["fo[o<span style=background-color:tan>b]ar</span>baz",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span><span style=\"background-color:rgb(210, 180, 140)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[true,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo<span style=background-color:tan>ba[r</span>b]az",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(210, 180, 140)\">ba<span style=\"background-color:rgb(0, 255, 255)\">[r</span></span><span style=\"background-color:rgb(0, 255, 255)\">b]</span>az",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[true,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["foo<span style=background-color:tan>ba[r</span>b]az",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(210, 180, 140)\">ba<span style=\"background-color:rgb(0, 255, 255)\">[r</span></span><span style=\"background-color:rgb(0, 255, 255)\">b]</span>az",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[true,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["fo[o<span style=background-color:tan>bar</span>b]az",
    [["backcolor","#00FFFF"]],
    "fo<span style=\"background-color:rgb(0, 255, 255)\">[obarb]</span>az",
    [true],
    {"backcolor":[true,false,"rgba(0, 0, 0, 0)",false,false,"rgb(0, 255, 255)"]}],
["foo[<span style=background-color:tan>b]ar</span>baz",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "foo[<span style=\"background-color:rgb(210, 180, 140)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["foo[<span style=background-color:tan>b]ar</span>baz",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "foo[<span style=\"background-color:rgb(210, 180, 140)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["foo<span style=background-color:tan>ba[r</span>]baz",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(210, 180, 140)\">ba<span style=\"background-color:rgb(0, 255, 255)\">[r</span></span>]baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["foo<span style=background-color:tan>ba[r</span>]baz",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(210, 180, 140)\">ba<span style=\"background-color:rgb(0, 255, 255)\">[r</span></span>]baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["foo[<span style=background-color:tan>bar</span>]baz",
    [["backcolor","#00FFFF"]],
    "foo[<span style=\"background-color:rgb(0, 255, 255)\">bar</span>]baz",
    [true],
    {"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["foo<span style=background-color:tan>[bar]</span>baz",
    [["backcolor","#00FFFF"]],
    "foo<span style=\"background-color:rgb(0, 255, 255)\">[bar]</span>baz",
    [true],
    {"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["foo{<span style=background-color:tan>bar</span>}baz",
    [["backcolor","#00FFFF"]],
    "foo{<span style=\"background-color:rgb(0, 255, 255)\">bar}</span>baz",
    [true],
    {"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=background-color:tan>fo[o</span><span style=background-color:yellow>b]ar</span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(210, 180, 140)\">fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span></span><span style=\"background-color:rgb(255, 255, 0)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[true,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=background-color:tan>fo[o</span><span style=background-color:yellow>b]ar</span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(210, 180, 140)\">fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span></span><span style=\"background-color:rgb(255, 255, 0)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[true,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=background-color:tan>fo[o</span><span style=background-color:tan>b]ar</span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(210, 180, 140)\">fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span></span><span style=\"background-color:rgb(210, 180, 140)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=background-color:tan>fo[o</span><span style=background-color:tan>b]ar</span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(210, 180, 140)\">fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span></span><span style=\"background-color:rgb(210, 180, 140)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=background-color:tan>fo[o<span style=background-color:transparent>b]ar</span></span>",
    [["stylewithcss","true"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(210, 180, 140)\">fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span><span style=\"background-color:rgba(0, 0, 0, 0)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span></span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}],
["<span style=background-color:tan>fo[o<span style=background-color:transparent>b]ar</span></span>",
    [["stylewithcss","false"],["backcolor","#00FFFF"]],
    "<span style=\"background-color:rgb(210, 180, 140)\">fo<span style=\"background-color:rgb(0, 255, 255)\">[o</span><span style=\"background-color:rgba(0, 0, 0, 0)\"><span style=\"background-color:rgb(0, 255, 255)\">b]</span>ar</span></span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"backcolor":[false,false,"rgb(210, 180, 140)",false,false,"rgb(0, 255, 255)"]}]
]
