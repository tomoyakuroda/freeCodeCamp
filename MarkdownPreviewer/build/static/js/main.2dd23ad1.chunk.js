(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(31)},30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(10),i=t.n(r),s=t(13),l=t(11),d=t.n(l),c=t(12),u=t.n(c);t(30);function h(){var e=Object(a.useState)("\n  # Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n  "),n=Object(s.a)(e,2),t=n[0],r=n[1];return o.a.createElement("div",null,o.a.createElement(d.a,null),o.a.createElement("textarea",{id:"editor",onChange:e=>{r(e.target.value)},value:t}),o.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:u()(t,{breaks:!0})}}))}var m=document.getElementById("root");i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),m)}},[[14,1,2]]]);
//# sourceMappingURL=main.2dd23ad1.chunk.js.map