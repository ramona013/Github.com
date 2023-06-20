// For documentation of the format, see README in this directory.
var browserTests = [
["foo[]bar",
    [["superscript",""]],
    "foo[]bar",
    [true],
    {"superscript":[false,false,"",false,true,""]}],
["<p>[foo</p> <p>bar]</p>",
    [["stylewithcss","true"],["superscript",""]],
    "<p><sup>[foo</sup></p> <p><sup>bar]</sup></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<p>[foo</p> <p>bar]</p>",
    [["stylewithcss","false"],["superscript",""]],
    "<p><sup>[foo</sup></p> <p><sup>bar]</sup></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<span>[foo</span> <span>bar]</span>",
    [["stylewithcss","true"],["superscript",""]],
    "<sup><span>[foo</span> <span>bar]</span></sup>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<span>[foo</span> <span>bar]</span>",
    [["stylewithcss","false"],["superscript",""]],
    "<sup><span>[foo</span> <span>bar]</span></sup>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<p>[foo</p><p> <span>bar</span> </p><p>baz]</p>",
    [["stylewithcss","true"],["superscript",""]],
    "<p><sup>[foo</sup></p><p> <sup><span>bar</span></sup> </p><p><sup>baz]</sup></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<p>[foo</p><p> <span>bar</span> </p><p>baz]</p>",
    [["stylewithcss","false"],["superscript",""]],
    "<p><sup>[foo</sup></p><p> <sup><span>bar</span></sup> </p><p><sup>baz]</sup></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<p>[foo<p><br><p>bar]",
    [["stylewithcss","true"],["superscript",""]],
    "<p><sup>[foo</sup></p><p><sup><br></sup></p><p><sup>bar]</sup></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<p>[foo<p><br><p>bar]",
    [["stylewithcss","false"],["superscript",""]],
    "<p><sup>[foo</sup></p><p><sup><br></sup></p><p><sup>bar]</sup></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<b>foo[]bar</b>",
    [["superscript",""]],
    "<b>foo[]bar</b>",
    [true],
    {"superscript":[false,false,"",false,true,""]}],
["<i>foo[]bar</i>",
    [["superscript",""]],
    "<i>foo[]bar</i>",
    [true],
    {"superscript":[false,false,"",false,true,""]}],
["<span>foo</span>{}<span>bar</span>",
    [["superscript",""]],
    "<span>foo</span>{}<span>bar</span>",
    [true],
    {"superscript":[false,false,"",false,true,""]}],
["<span>foo[</span><span>]bar</span>",
    [["superscript",""]],
    "<span>foo[</span><span>]bar</span>",
    [true],
    {"superscript":[false,false,"",false,true,""]}],
["foo[bar]baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo[bar]baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo[bar<b>baz]qoz</b>quz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>[bar</sup><b><sup>baz]</sup>qoz</b>quz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo[bar<b>baz]qoz</b>quz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>[bar</sup><b><sup>baz]</sup>qoz</b>quz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo[bar<i>baz]qoz</i>quz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>[bar</sup><i><sup>baz]</sup>qoz</i>quz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo[bar<i>baz]qoz</i>quz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>[bar</sup><i><sup>baz]</sup>qoz</i>quz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["{<p><p> <p>foo</p>}",
    [["stylewithcss","true"],["superscript",""]],
    "{<p></p><p> </p><p><sup>foo</sup></p>}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["{<p><p> <p>foo</p>}",
    [["stylewithcss","false"],["superscript",""]],
    "{<p></p><p> </p><p><sup>foo</sup></p>}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody><tr><td>foo<td>b[a]r<td>baz</table>",
    [["stylewithcss","true"],["superscript",""]],
    "<table><tbody><tr><td>foo</td><td>b<sup>[a]</sup>r</td><td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody><tr><td>foo<td>b[a]r<td>baz</table>",
    [["stylewithcss","false"],["superscript",""]],
    "<table><tbody><tr><td>foo</td><td>b<sup>[a]</sup>r</td><td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=1 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["superscript",""]],
    "<table><tbody><tr><td>foo</td>{<td><sup>bar</sup></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=1 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["superscript",""]],
    "<table><tbody><tr><td>foo</td>{<td><sup>bar</sup></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=0 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["superscript",""]],
    "<table><tbody><tr>{<td><sup>foo</sup></td><td><sup>bar</sup></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody><tr data-start=0 data-end=2><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["superscript",""]],
    "<table><tbody><tr>{<td><sup>foo</sup></td><td><sup>bar</sup></td>}<td>baz</td></tr></tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody data-start=0 data-end=1><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["superscript",""]],
    "<table><tbody>{<tr><td><sup>foo</sup></td><td><sup>bar</sup></td><td><sup>baz</sup></td></tr>}</tbody></table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<table><tbody data-start=0 data-end=1><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["superscript",""]],
    "<table><tbody>{<tr><td><sup>foo</sup></td><td><sup>bar</sup></td><td><sup>baz</sup></td></tr>}</tbody></table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<table data-start=0 data-end=1><tbody><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","true"],["superscript",""]],
    "<table>{<tbody><tr><td><sup>foo</sup></td><td><sup>bar</sup></td><td><sup>baz</sup></td></tr></tbody>}</table>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["<table data-start=0 data-end=1><tbody><tr><td>foo<td>bar<td>baz</table>",
    [["stylewithcss","false"],["superscript",""]],
    "<table>{<tbody><tr><td><sup>foo</sup></td><td><sup>bar</sup></td><td><sup>baz</sup></td></tr></tbody>}</table>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["{<table><tr><td>foo<td>bar<td>baz</table>}",
    [["stylewithcss","true"],["superscript",""]],
    "{<table><tbody><tr><td><sup>foo</sup></td><td><sup>bar</sup></td><td><sup>baz</sup></td></tr></tbody></table>}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["{<table><tr><td>foo<td>bar<td>baz</table>}",
    [["stylewithcss","false"],["superscript",""]],
    "{<table><tbody><tr><td><sup>foo</sup></td><td><sup>bar</sup></td><td><sup>baz</sup></td></tr></tbody></table>}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub>[bar]</sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub>[bar]</sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub>b[a]r</sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub>b[a]r</sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<sup>b[a]r</sup>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>b</sup>[a]<sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,true,"",false,false,""]}],
["foo<sup>b[a]r</sup>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>b</sup>[a]<sup>r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,true,"",false,false,""]}],
["foo<span style=vertical-align:sub>[bar]</span>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup><span style=\"vertical-align:sub\">[bar]</span></sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:sub>[bar]</span>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup><span style=\"vertical-align:sub\">[bar]</span></sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:super>[bar]</span>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup><span style=\"vertical-align:super\">[bar]</span></sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:super>[bar]</span>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup><span style=\"vertical-align:super\">[bar]</span></sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub><sub>[bar]</sub></sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub><sub>[bar]</sub></sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub><sub>b[a]r</sub></sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub><sub>b[a]r</sub></sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub>b<sub>[a]</sub>r</sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<sub>b<sub>[a]</sub>r</sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["foo<sup><sup>[bar]</sup></sup>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,true,"",false,false,""]}],
["foo<sup><sup>[bar]</sup></sup>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,true,"",false,false,""]}],
["foo<sup><sup>b[a]r</sup></sup>baz",
    [["superscript",""]],
    "foo<sup>b</sup>[a]<sup>r</sup>baz",
    [true],
    {"superscript":[false,true,"",false,false,""]}],
["foo<sup>b<sup>[a]</sup>r</sup>baz",
    [["superscript",""]],
    "foo<sup>b</sup>[a]<sup>r</sup>baz",
    [true],
    {"superscript":[false,true,"",false,false,""]}],
["foo<sub><sup>[bar]</sup></sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["foo<sub><sup>[bar]</sup></sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["foo<sub><sup>b[a]r</sup></sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>b[a]r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["foo<sub><sup>b[a]r</sup></sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>b[a]r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["foo<sub>b<sup>[a]</sup>r</sub>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["foo<sub>b<sup>[a]</sup>r</sub>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["foo<sup><sub>[bar]</sub></sup>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["foo<sup><sub>[bar]</sub></sup>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>[bar]</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["foo<sup><sub>b[a]r</sub></sup>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["foo<sup><sub>b[a]r</sub></sup>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sub>b</sub><sup>[a]</sup><sub>r</sub>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["foo<sup>b<sub>[a]</sub>r</sup>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup>b[a]r</sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["foo<sup>b<sub>[a]</sub>r</sup>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup>b[a]r</sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["fo[o<sup>b]ar</sup>baz",
    [["superscript",""]],
    "fo<sup>[ob]ar</sup>baz",
    [true],
    {"superscript":[true,false,"",false,true,""]}],
["foo<sup>ba[r</sup>b]az",
    [["superscript",""]],
    "foo<sup>ba[rb]</sup>az",
    [true],
    {"superscript":[true,false,"",false,true,""]}],
["fo[o<sup>bar</sup>b]az",
    [["superscript",""]],
    "fo<sup>[obarb]</sup>az",
    [true],
    {"superscript":[true,false,"",false,true,""]}],
["foo[<sup>b]ar</sup>baz",
    [["superscript",""]],
    "foo[b]<sup>ar</sup>baz",
    [true],
    {"superscript":[false,true,"",false,false,""]}],
["foo<sup>ba[r</sup>]baz",
    [["superscript",""]],
    "foo<sup>ba</sup>[r]baz",
    [true],
    {"superscript":[false,true,"",false,false,""]}],
["foo[<sup>bar</sup>]baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,true,"",false,false,""]}],
["foo[<sup>bar</sup>]baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,true,"",false,false,""]}],
["foo<sup>[bar]</sup>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,true,"",false,false,""]}],
["foo<sup>[bar]</sup>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo[bar]baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,true,"",false,false,""]}],
["foo{<sup>bar</sup>}baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo{bar}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,true,"",false,false,""]}],
["foo{<sup>bar</sup>}baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo{bar}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,true,"",false,false,""]}],
["<sup>fo[o</sup><sub>b]ar</sub>",
    [["superscript",""]],
    "<sup>fo[ob]</sup><sub>ar</sub>",
    [true],
    {"superscript":[true,false,"",false,true,""]}],
["<sup>fo[o</sup><span style=vertical-align:super>b]ar</span>",
    [["stylewithcss","true"],["superscript",""]],
    "<sup>fo[o</sup><span style=\"vertical-align:super\"><sup>b]</sup>ar</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["<sup>fo[o</sup><span style=vertical-align:super>b]ar</span>",
    [["stylewithcss","false"],["superscript",""]],
    "<sup>fo[o</sup><span style=\"vertical-align:super\"><sup>b]</sup>ar</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["foo<span style=vertical-align:bottom>[bar]</span>baz",
    [["stylewithcss","true"],["superscript",""]],
    "foo<sup><span style=\"vertical-align:bottom\">[bar]</span></sup>baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,false,"",false,true,""]}],
["foo<span style=vertical-align:bottom>[bar]</span>baz",
    [["stylewithcss","false"],["superscript",""]],
    "foo<sup><span style=\"vertical-align:bottom\">[bar]</span></sup>baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,false,"",false,true,""]}],
["<sup>fo[o</sup><span style=vertical-align:bottom>b]ar</span>",
    [["stylewithcss","true"],["superscript",""]],
    "<sup>fo[o</sup><span style=\"vertical-align:bottom\"><sup>b]</sup>ar</span>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[true,false,"",false,true,""]}],
["<sup>fo[o</sup><span style=vertical-align:bottom>b]ar</span>",
    [["stylewithcss","false"],["superscript",""]],
    "<sup>fo[o</sup><span style=\"vertical-align:bottom\"><sup>b]</sup>ar</span>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[true,false,"",false,true,""]}],
["foo<sup>[bar]<br></sup>",
    [["stylewithcss","true"],["superscript",""]],
    "foo[bar]<br>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"superscript":[false,true,"",false,false,""]}],
["foo<sup>[bar]<br></sup>",
    [["stylewithcss","false"],["superscript",""]],
    "foo[bar]<br>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"superscript":[false,true,"",false,false,""]}]
]
