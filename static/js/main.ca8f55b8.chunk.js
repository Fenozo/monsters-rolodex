(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),c=(n(13),n(3)),i=n(4),l=n(6),m=n(5),u=n(7),h=(n(14),n(15),n(16),n(17),n(18),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),o.a.createElement("h2",null,e.monster.name),o.a.createElement("p",null,e.monster.email),o.a.createElement("h1",null,e.monster.id),o.a.createElement("input",{type:"checkbox",className:"switch",name:"s".concat(e.monster.id),id:"s".concat(e.monster.id)}),o.a.createElement("label",{htmlFor:"s".concat(e.monster.id)},"Switch"))}),d=(n(19),function(e){return o.a.createElement("div",{className:"card-list"},!0===Array.isArray(e.monsters)?e.monsters.map((function(e,t){if("object"===typeof e)return o.a.createElement(h,{key:t,monster:e})})):null)}),f=(n(20),function(e){return o.a.createElement("input",{className:"search-box",type:"search",placeholder:e.placeholder,onChange:e.handleChange})}),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[{name:"Frankenstein",id:"asc1"},{name:"Dracula",id:"asc2"},{name:"Zombie",id:"as1w"}],searchField:"",action:!1},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){}},{key:"componentDidMount",value:function(){this.filteredMonsters()}},{key:"filteredMonsters",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){var n=e.state.monsters,a=Object.assign({monsters:n},{monsters:t});e.setState(a)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monsters Rolodex"),o.a.createElement(f,{placeholder:"search monster",handleChange:this.onSearchChange}),o.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ca8f55b8.chunk.js.map