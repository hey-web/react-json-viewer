(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);var c=n(1),s=n(2),i=n(4),p=n(3),u=n(5),d=n(8),m=n.n(d),h=n(9),k=n.n(h),f=function(e){var t=e.b;return r.a.createElement("span",{className:"bracket"},"\xa0",t,"\xa0")},b=function(e){var t=e.children;return r.a.createElement("section",null,t)},v=function(e){var t=e.children;return r.a.createElement("section",null,t)},E=function(e){var t=e.expanded,n=void 0!==t&&t,a=e.onClick;return r.a.createElement("button",{type:"button",className:"expand-btn",onClick:a},n?"-":"+")},y=function(e){var t=e.k;return r.a.createElement("label",null,'"'+t+'"',":")},_=function(e){var t=e.list;return r.a.createElement(b,null,t.map(function(e,n){return r.a.createElement(g,{key:n,val:e,last:n===t.length-1})}))},j=function(e){var t=e.map,n=Object.keys(t).length,a=0;return r.a.createElement(v,null,Object.keys(t).map(function(e){return a++,r.a.createElement(g,{key:e,k:e,val:t[e],last:a===n})}))},g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(p.a)(t).call(this,e))).handleToggle=function(){n.setState({expanded:!n.state.expanded})},n.state={expanded:!0},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.k,n=e.val,a=e.last,l=this.state.expanded;if("undefined"===typeof n||null===n)return null;var o=[];return"undefined"!=typeof t&&o.push(r.a.createElement(y,{key:0,k:t})),n instanceof Array?(o.push(r.a.createElement(f,{key:1,b:"["})),o.push(r.a.createElement(E,{key:2,expanded:l,onClick:this.handleToggle})),l&&o.push(r.a.createElement(_,{key:3,list:n})),o.push(r.a.createElement(f,{key:4,b:"]"}))):"object"===typeof n?(o.push(r.a.createElement(f,{key:1,b:"{"})),o.push(r.a.createElement(E,{key:2,expanded:l,onClick:this.handleToggle})),l&&o.push(r.a.createElement(j,{key:3,map:n})),o.push(r.a.createElement(f,{key:4,b:"}"}))):o.push(r.a.createElement("span",{key:1},"string"===typeof n?'"'+n+'"':n)),r.a.createElement("div",null,o,!a&&",")}}]),t}(a.Component),w=function(e){var t=e.json,n=void 0===t?{}:t;return r.a.createElement("section",{className:k.a.jsonViewer},r.a.createElement(g,{val:n,last:!0}))},A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(p.a)(t).call(this,e))).handleInput=function(e){var t=e.target.value;try{n.setState({json:JSON.parse(t)})}catch(e){}},n.state={json:null},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:m.a.App},r.a.createElement("textarea",{spellcheck:"false",onKeyUp:this.handleInput}),r.a.createElement(w,{json:this.state.json}))}}]),t}(a.Component);o.a.render(r.a.createElement(A,{initialCount:0}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports={App:"App_App__1bXz9","App-logo":"App_App-logo__2ppda","App-logo-spin":"App_App-logo-spin__1V6ys","App-header":"App_App-header__3HA-_","App-link":"App_App-link__2gWMN"}},9:function(e,t,n){e.exports={jsonViewer:"JsonViewer_jsonViewer__2c6E5",bracket:"JsonViewer_bracket__2EM2l","expand-btn":"JsonViewer_expand-btn__Sbg-F"}}},[[10,2,1]]]);
//# sourceMappingURL=main.b87810ad.chunk.js.map