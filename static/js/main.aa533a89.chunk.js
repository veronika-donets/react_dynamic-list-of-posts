(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{173:function(e,t,n){e.exports=n(306)},179:function(e,t,n){},306:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),s=n.n(c),o=n(44),i=n.n(o),l=n(139),u=n(160),m=n(67),d=n(140),p=n(141),f=n(161),v=n(142),b=n(162),E=(n(179),function(e){return fetch(e).then(function(e){return e.json()})}),h=function(){var e=Object(m.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all([E("https://jsonplaceholder.typicode.com/posts"),E("https://jsonplaceholder.typicode.com/users"),E("https://jsonplaceholder.typicode.com/comments")]));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();var y=function(e){var t=e.user;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui small feed author"},t.name),r.a.createElement("div",{className:"ui small feed"},"\n          ".concat(t.email,", \n          ").concat(t.address.city,", ").concat(t.address.street," \n          ").concat(t.address.suite,", ").concat(t.address.zipcode,"\n        ")))};var w=function(e){var t=e.comment;return r.a.createElement("div",{className:"comments"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui small feed author"},"".concat(t.name,", ").concat(t.email)),r.a.createElement("div",{className:"text"},t.body)))};var O=function(e){var t=e.commentList;return r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui comments"},r.a.createElement("h3",{className:"ui dividing header"},"Comments"))),t.map(function(e){return r.a.createElement(w,{comment:e,key:e.id})}))};var g=function(e){var t=e.post;return r.a.createElement("div",{className:"ui card"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.title)),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"ui small feed"},t.body)),r.a.createElement(y,{user:t.user}),r.a.createElement(O,{commentList:t.comments}))};var j=function(e){var t=e.posts;return r.a.createElement("div",{className:"wrapper"},t.map(function(e){return r.a.createElement(g,{post:e,key:e.id})}))};var N=function(e){var t=e.showList;return r.a.createElement("button",{onClick:t,type:"submit",className:"ui blue button start"},"Load")},P=n(317),k=n(316);var T=function(e){var t=e.filtering;return r.a.createElement("div",{className:"input"},r.a.createElement(P.a,null,r.a.createElement(P.a.Input,{id:"form-input-control",onChange:function(e){t(e.target.value)},control:k.a,label:"Find posts",placeholder:"Please type what do you want to find"})))};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(v.a)(t).call(this,e))).showList=Object(m.a)(i.a.mark(function e(){var t,a,r,c,s,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.next=3,h();case 3:t=e.sent,a=Object(u.a)(t,3),r=a[0],c=a[1],s=a[2],o=r.map(function(e){return x({},e,{user:c.find(function(t){return t.id===e.userId}),comments:s.filter(function(t){return t.postId===e.id})})}),n.setState({initialTable:o,currentTable:o,posts:o,users:o.users,comments:o.comments});case 10:case"end":return e.stop()}},e)})),n.filtering=function(e){if(e){var t=n.state.currentTable.filter(function(t){return t.body.includes(e)||t.title.includes(e)});n.setState({currentTable:t})}else n.setState(function(e){return{currentTable:e.initialTable}})},n.rendering=function(){var e=n.state,t=e.posts,a=e.users,c=e.comments,s=e.loading;return null===a&&null===t&&null===c?s?r.a.createElement("button",{className:"ui loading primary button"},"Loading"):r.a.createElement(N,{showList:n.showList}):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{filtering:n.filtering}),r.a.createElement(j,{posts:n.state.currentTable}))},n.state={initialTable:null,currentTable:null,loading:!1,posts:null,users:null,comments:null},n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrap"},this.rendering())}}]),t}(a.Component);s.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.aa533a89.chunk.js.map