(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);var o=n(1),i=n(2),u=n(4),s=n(3),p=n(5),m=(n(16),n(18),function(e){var t=e.b;return r.a.createElement("span",{className:"bracket"},"\xa0",t,"\xa0")}),d=function(e){var t=e.children;return r.a.createElement("section",null,t)},h=function(e){var t=e.children;return r.a.createElement("section",null,t)},f=function(e){var t=e.expanded,n=void 0!==t&&t,a=e.onClick;return r.a.createElement("button",{type:"button",className:"expand-btn",onClick:a},n?"-":"+")},v=function(e){var t=e.k;return r.a.createElement("label",null,'"'+t+'"',":")},k=function(e){var t=e.list;return r.a.createElement(d,null,t.map(function(e,n){return r.a.createElement(y,{key:n,val:e,last:n===t.length-1})}))},E=function(e){var t=e.map,n=Object.keys(t).length,a=0;return r.a.createElement(h,null,Object.keys(t).map(function(e){return a++,r.a.createElement(y,{key:e,k:e,val:t[e],last:a===n})}))},y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleToggle=function(){n.setState({expanded:!n.state.expanded})},n.state={expanded:!0},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.k,n=e.val,a=e.last,c=this.state.expanded;if("undefined"===typeof n||null===n)return null;var l=[];return"undefined"!=typeof t&&l.push(r.a.createElement(v,{key:0,k:t})),n instanceof Array?(l.push(r.a.createElement(m,{key:1,b:"["})),l.push(r.a.createElement(f,{key:2,expanded:c,onClick:this.handleToggle})),c&&l.push(r.a.createElement(k,{key:3,list:n})),l.push(r.a.createElement(m,{key:4,b:"]"}))):"object"===typeof n?(l.push(r.a.createElement(m,{key:1,b:"{"})),l.push(r.a.createElement(f,{key:2,expanded:c,onClick:this.handleToggle})),c&&l.push(r.a.createElement(E,{key:3,map:n})),l.push(r.a.createElement(m,{key:4,b:"}"}))):l.push(r.a.createElement("span",{key:1},"string"===typeof n?'"'+n+'"':n)),r.a.createElement("div",null,l,!a&&",")}}]),t}(a.Component),b=function(e){var t=e.json,n=void 0===t?{}:t;return r.a.createElement("section",{className:"json-viewer"},r.a.createElement(y,{val:n,last:!0}))},j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).handleInput=function(e){var t=e.target.value;try{n.setState({json:JSON.parse(t)})}catch(e){}},n.state={},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement("textarea",{onKeyUp:this.handleInput}),r.a.createElement(b,{json:this.state.json}))}}]),t}(a.Component);l.a.render(r.a.createElement(j,{initialCount:0}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.26353113.chunk.js.map