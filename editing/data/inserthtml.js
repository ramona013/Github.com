// For documentation of the format, see README in this directory.
var browserTests = [
["foo[]bar",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}bar",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo[]bar",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}bar",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>[bar]</span>baz",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>[bar]</span>baz",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>{bar}</span>baz",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>{bar}</span>baz",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo{<span style=color:#aBcDeF>bar</span>}baz",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo{<span style=color:#aBcDeF>bar</span>}baz",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["[foo<span style=color:#aBcDeF>bar]</span>baz",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "ab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["[foo<span style=color:#aBcDeF>bar]</span>baz",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "ab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["{foo<span style=color:#aBcDeF>bar}</span>baz",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "ab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["{foo<span style=color:#aBcDeF>bar}</span>baz",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "ab<b>c</b>d{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>[bar</span>baz]",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>[bar</span>baz]",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>{bar</span>baz}",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>{bar</span>baz}",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>[bar</span><span style=color:#fEdCbA>baz]</span>quz",
    [["stylewithcss","true"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}quz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo<span style=color:#aBcDeF>[bar</span><span style=color:#fEdCbA>baz]</span>quz",
    [["stylewithcss","false"],["inserthtml","ab<b>c</b>d"]],
    "fooab<b>c</b>d{}quz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["inserthtml",""]],
    "foo[]baz",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["inserthtml","\u0000"]],
    "foo[]baz",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["inserthtml","\u0007"]],
    "foo\u0007{}baz",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["stylewithcss","true"],["inserthtml","<b>"]],
    "foo<b></b>{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["stylewithcss","false"],["inserthtml","<b>"]],
    "foo<b></b>{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["stylewithcss","true"],["inserthtml","<b>abc"]],
    "foo<b>abc</b>{}baz",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["foo[bar]baz",
    [["stylewithcss","false"],["inserthtml","<b>abc"]],
    "foo<b>abc</b>{}baz",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["<p>foo[bar]baz",
    [["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<p>foo</p><p>abc</p>{}<p>baz</p>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<p>foo[bar]baz",
    [["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<p>foo</p><p>abc</p>{}<p>baz</p>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<p>foo[bar]baz",
    [["defaultparagraphseparator","div"],["inserthtml","<li>abc"]],
    "<p>foo</p><div>abc</div>{}<p>baz</p>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<p>foo[bar]baz",
    [["defaultparagraphseparator","p"],["inserthtml","<li>abc"]],
    "<p>foo</p><p>abc</p>{}<p>baz</p>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<ol>{<li>foo</li>}<li>bar</ol>",
    [["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<p>abc</p>{}<ol><li>bar</li></ol>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<ol>{<li>foo</li>}<li>bar</ol>",
    [["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<p>abc</p>{}<ol><li>bar</li></ol>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>foo</li>{<li>bar</li>}<li>baz</ol>",
    [["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<ol><li>foo</li></ol><p>abc</p>{}<ol><li>baz</li></ol>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>foo</li>{<li>bar</li>}<li>baz</ol>",
    [["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<ol><li>foo</li></ol><p>abc</p>{}<ol><li>baz</li></ol>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>[foo]</li><li>bar</ol>",
    [["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<ol><li><p>abc</p>{}</li><li>bar</li></ol>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>[foo]</li><li>bar</ol>",
    [["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<ol><li><p>abc</p>{}</li><li>bar</li></ol>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<xmp>f[o]o</xmp>",
    [["inserthtml","abc"]],
    "<xmp>fabc{}o</xmp>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<xmp>f[o]o</xmp>",
    [["stylewithcss","true"],["inserthtml","<b>abc</b>"]],
    "<xmp>f<b>abc</b>{}o</xmp>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["<xmp>f[o]o</xmp>",
    [["stylewithcss","false"],["inserthtml","<b>abc</b>"]],
    "<xmp>f<b>abc</b>{}o</xmp>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["<script>f[o]o</script>bar",
    [["inserthtml","abc"]],
    "<script>fabc{}o</script>bar",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<script>f[o]o</script>bar",
    [["stylewithcss","true"],["inserthtml","<b>abc</b>"]],
    "<script>f<b>abc</b>{}o</script>bar",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["<script>f[o]o</script>bar",
    [["stylewithcss","false"],["inserthtml","<b>abc</b>"]],
    "<script>f<b>abc</b>{}o</script>bar",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["<a>f[o]o</a>",
    [["inserthtml","<a>abc</a>"]],
    "<a>f</a><a>abc</a>{}<a>o</a>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<a href=.>f[o]o</a>",
    [["inserthtml","<a href=/>abc</a>"]],
    "<a href=\".\">f</a><a href=\"/\">abc</a>{}<a href=\".\">o</a>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p>f[o]o",
    [["defaultparagraphseparator","div"],["inserthtml","<hr>"]],
    "<p>f</p><hr>{}<p>o</p>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<p>f[o]o",
    [["defaultparagraphseparator","p"],["inserthtml","<hr>"]],
    "<p>f</p><hr>{}<p>o</p>",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<b>f[o]o</b>",
    [["stylewithcss","true"],["inserthtml","<hr>"]],
    "<b>f</b><hr>{}<b>o</b>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["<b>f[o]o</b>",
    [["stylewithcss","false"],["inserthtml","<hr>"]],
    "<b>f</b><hr>{}<b>o</b>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["<h1>f[o]o</h1>",
    [["inserthtml","<h2>abc</h2>"]],
    "<h1>f</h1><h2>abc</h2>{}<h1>o</h1>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<table><tr><td>f[o]o</table>",
    [["inserthtml","<td>abc</td>"]],
    "<table><tbody><tr><td>fabc{}o</td></tr></tbody></table>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["f[o]o",
    [["inserthtml","<td>abc</td>"]],
    "fabc{}o",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dl><dt>f[o]o<dd>bar</dl>",
    [["inserthtml","<dt>abc</dt>"]],
    "<dl><dt>f</dt><dt>abc</dt>{}<dt>o</dt><dd>bar</dd></dl>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>b[a]r</dl>",
    [["inserthtml","<dt>abc</dt>"]],
    "<dl><dt>foo</dt><dd>b</dd><dt>abc</dt>{}<dd>r</dd></dl>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dl><dt>f[o]o<dd>bar</dl>",
    [["inserthtml","<dd>abc</dd>"]],
    "<dl><dt>f</dt><dd>abc</dd>{}<dt>o</dt><dd>bar</dd></dl>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dl><dt>foo<dd>b[a]r</dl>",
    [["inserthtml","<dd>abc</dd>"]],
    "<dl><dt>foo</dt><dd>b</dd><dd>abc</dd>{}<dd>r</dd></dl>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["f[o]o",
    [["inserthtml","<dt>abc</dt>"]],
    "f<dl><dt>abc</dt>{}</dl>o",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>f[o]o</ol>",
    [["inserthtml","<dt>abc</dt>"]],
    "<ol><li>f<dl><dt>abc</dt>{}</dl>o</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["f[o]o",
    [["inserthtml","<dd>abc</dd>"]],
    "f<dl><dd>abc</dd>{}</dl>o",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>f[o]o</ol>",
    [["inserthtml","<dd>abc</dd>"]],
    "<ol><li>f<dl><dd>abc</dd>{}</dl>o</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dir><li>f[o]o</dir>",
    [["inserthtml","<li>abc</li>"]],
    "<dir><li>f</li><li>abc</li>{}<li>o</li></dir>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>f[o]o</ol>",
    [["inserthtml","<li>abc</li>"]],
    "<ol><li>f</li><li>abc</li>{}<li>o</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ul><li>f[o]o</ul>",
    [["inserthtml","<li>abc</li>"]],
    "<ul><li>f</li><li>abc</li>{}<li>o</li></ul>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dir><li>f[o]o</dir>",
    [["inserthtml","<dir><li>abc</dir>"]],
    "<dir><li>f<dir><li>abc</li></dir>{}o</li></dir>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>f[o]o</ol>",
    [["inserthtml","<dir><li>abc</dir>"]],
    "<ol><li>f<dir><li>abc</li></dir>{}o</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ul><li>f[o]o</ul>",
    [["inserthtml","<dir><li>abc</dir>"]],
    "<ul><li>f<dir><li>abc</li></dir>{}o</li></ul>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dir><li>f[o]o</dir>",
    [["inserthtml","<ol><li>abc</ol>"]],
    "<dir><li>f<ol><li>abc</li></ol>{}o</li></dir>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>f[o]o</ol>",
    [["inserthtml","<ol><li>abc</ol>"]],
    "<ol><li>f<ol><li>abc</li></ol>{}o</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ul><li>f[o]o</ul>",
    [["inserthtml","<ol><li>abc</ol>"]],
    "<ul><li>f<ol><li>abc</li></ol>{}o</li></ul>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<dir><li>f[o]o</dir>",
    [["inserthtml","<ul><li>abc</ul>"]],
    "<dir><li>f<ul><li>abc</li></ul>{}o</li></dir>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol><li>f[o]o</ol>",
    [["inserthtml","<ul><li>abc</ul>"]],
    "<ol><li>f<ul><li>abc</li></ul>{}o</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ul><li>f[o]o</ul>",
    [["inserthtml","<ul><li>abc</ul>"]],
    "<ul><li>f<ul><li>abc</li></ul>{}o</li></ul>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ul id=\"old\"><li id=\"li0\">{}<br></ul>",
    [["inserthtml","<ul id=\"new\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ul>"]],
    "<ul id=\"old\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ul>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol id=\"old\"><li id=\"li0\">{}<br></ol>",
    [["inserthtml","<ol id=\"new\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ol>"]],
    "<ol id=\"old\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ul id=\"old\"><li id=\"li0\">{}<br></ul>",
    [["inserthtml","<ol id=\"new\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ol>"]],
    "<ul id=\"old\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ul>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<ol id=\"old\"><li id=\"li0\">{}<br></ol>",
    [["inserthtml","<ul id=\"new\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ul>"]],
    "<ol id=\"old\"><li id=\"li1\">abc</li><li id=\"li2\">def</li></ol>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["f[o]o",
    [["defaultparagraphseparator","div"],["inserthtml","<li>abc</li>"]],
    "f<div>abc</div>{}o",
    [true,true],
    {"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["f[o]o",
    [["defaultparagraphseparator","p"],["inserthtml","<li>abc</li>"]],
    "f<p>abc</p>{}o",
    [true,true],
    {"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<nobr>f[o]o</nobr>",
    [["inserthtml","<nobr>abc</nobr>"]],
    "<nobr>f</nobr><nobr>abc</nobr>{}<nobr>o</nobr>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["f[o]o",
    [["inserthtml","<nobr>abc</nobr>"]],
    "f<nobr>abc</nobr>{}o",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<font color=blue>foo[]bar</font>",
    [["stylewithcss","true"],["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<font color=\"blue\">foo</font><p><span style=\"color:rgb(0, 0, 255)\">abc</span></p>{}<font color=\"blue\">bar</font>",
    [true,true,true],
    {"stylewithcss":[false,false,"",false,true,""],"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<font color=blue>foo[]bar</font>",
    [["stylewithcss","false"],["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<font color=\"blue\">foo</font><p><font color=\"#0000ff\">abc</font></p>{}<font color=\"blue\">bar</font>",
    [true,true,true],
    {"stylewithcss":[false,true,"",false,false,""],"defaultparagraphseparator":[false,false,"div",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<font color=blue>foo[]bar</font>",
    [["stylewithcss","true"],["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<font color=\"blue\">foo</font><p><span style=\"color:rgb(0, 0, 255)\">abc</span></p>{}<font color=\"blue\">bar</font>",
    [true,true,true],
    {"stylewithcss":[false,false,"",false,true,""],"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<font color=blue>foo[]bar</font>",
    [["stylewithcss","false"],["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<font color=\"blue\">foo</font><p><font color=\"#0000ff\">abc</font></p>{}<font color=\"blue\">bar</font>",
    [true,true,true],
    {"stylewithcss":[false,true,"",false,false,""],"defaultparagraphseparator":[false,false,"p",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=color:blue>foo[]bar</span>",
    [["stylewithcss","true"],["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<span style=\"color:rgb(0, 0, 255)\">foo</span><p><span style=\"color:rgb(0, 0, 255)\">abc</span></p>{}<span style=\"color:rgb(0, 0, 255)\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,false,"",false,true,""],"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=color:blue>foo[]bar</span>",
    [["stylewithcss","false"],["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<span style=\"color:rgb(0, 0, 255)\">foo</span><p><font color=\"#0000ff\">abc</font></p>{}<span style=\"color:rgb(0, 0, 255)\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,true,"",false,false,""],"defaultparagraphseparator":[false,false,"div",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=color:blue>foo[]bar</span>",
    [["stylewithcss","true"],["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<span style=\"color:rgb(0, 0, 255)\">foo</span><p><span style=\"color:rgb(0, 0, 255)\">abc</span></p>{}<span style=\"color:rgb(0, 0, 255)\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,false,"",false,true,""],"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=color:blue>foo[]bar</span>",
    [["stylewithcss","false"],["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<span style=\"color:rgb(0, 0, 255)\">foo</span><p><font color=\"#0000ff\">abc</font></p>{}<span style=\"color:rgb(0, 0, 255)\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,true,"",false,false,""],"defaultparagraphseparator":[false,false,"p",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=font-variant:small-caps>foo[]bar</span>",
    [["stylewithcss","true"],["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<span style=\"font-variant:small-caps\">foo</span><p>abc</p>{}<span style=\"font-variant:small-caps\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,false,"",false,true,""],"defaultparagraphseparator":[false,false,"p",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=font-variant:small-caps>foo[]bar</span>",
    [["stylewithcss","false"],["defaultparagraphseparator","div"],["inserthtml","<p>abc"]],
    "<span style=\"font-variant:small-caps\">foo</span><p>abc</p>{}<span style=\"font-variant:small-caps\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,true,"",false,false,""],"defaultparagraphseparator":[false,false,"div",false,false,"div"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=font-variant:small-caps>foo[]bar</span>",
    [["stylewithcss","true"],["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<span style=\"font-variant:small-caps\">foo</span><p>abc</p>{}<span style=\"font-variant:small-caps\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,false,"",false,true,""],"defaultparagraphseparator":[false,false,"div",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<span style=font-variant:small-caps>foo[]bar</span>",
    [["stylewithcss","false"],["defaultparagraphseparator","p"],["inserthtml","<p>abc"]],
    "<span style=\"font-variant:small-caps\">foo</span><p>abc</p>{}<span style=\"font-variant:small-caps\">bar</span>",
    [true,true,true],
    {"stylewithcss":[false,true,"",false,false,""],"defaultparagraphseparator":[false,false,"p",false,false,"p"],"inserthtml":[false,false,"",false,false,""]}],
["<p>[foo]</p>",
    [["inserthtml"," "]],
    "<p> {}<br></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p>[foo]</p>",
    [["stylewithcss","true"],["inserthtml","<span style=display:none></span>"]],
    "<p><span style=\"display:none\"></span>{}<br></p>",
    [true,true],
    {"stylewithcss":[false,false,"",false,true,""],"inserthtml":[false,false,"",false,false,""]}],
["<p>[foo]</p>",
    [["stylewithcss","false"],["inserthtml","<span style=display:none></span>"]],
    "<p><span style=\"display:none\"></span>{}<br></p>",
    [true,true],
    {"stylewithcss":[false,true,"",false,false,""],"inserthtml":[false,false,"",false,false,""]}],
["<p>[foo]</p>",
    [["inserthtml","<!--abc-->"]],
    "<p><!--abc-->{}<br></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p>{}<br></p>",
    [["inserthtml","abc"]],
    "<p>abc{}</p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p>{}<br></p>",
    [["inserthtml","<!--abc-->"]],
    "<p><!--abc-->{}<br></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><!--foo-->{}<span><br></span><!--bar--></p>",
    [["inserthtml","abc"]],
    "<p><!--foo-->abc{}<!--bar--></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><!--foo-->{}<span><br></span><!--bar--></p>",
    [["inserthtml","<!--abc-->"]],
    "<p><!--foo--><!--abc-->{}<!--bar--><br></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p>{}<span><!--foo--><br><!--bar--></span></p>",
    [["inserthtml","abc"]],
    "<p>abc{}</p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p>{}<span><!--foo--><br><!--bar--></span></p>",
    [["inserthtml","<!--abc-->"]],
    "<p><!--abc-->{}<br></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><br>{}</p>",
    [["inserthtml","abc"]],
    "<p><br>abc{}</p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><br>{}</p>",
    [["inserthtml","<!--abc-->"]],
    "<p><br><!--abc-->{}</p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><!--foo--><span><br></span>{}<!--bar--></p>",
    [["inserthtml","abc"]],
    "<p><!--foo--><span><br></span>abc{}<!--bar--></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><!--foo--><span><br></span>{}<!--bar--></p>",
    [["inserthtml","<!--abc-->"]],
    "<p><!--foo--><span><br></span><!--abc-->{}<!--bar--></p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><span><!--foo--><br><!--bar--></span>{}</p>",
    [["inserthtml","abc"]],
    "<p><span><!--foo--><br><!--bar--></span>abc{}</p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}],
["<p><span><!--foo--><br><!--bar--></span>{}</p>",
    [["inserthtml","<!--abc-->"]],
    "<p><span><!--foo--><br><!--bar--></span><!--abc-->{}</p>",
    [true],
    {"inserthtml":[false,false,"",false,false,""]}]
]
