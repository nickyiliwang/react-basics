(this.webpackJsonpbasic=this.webpackJsonpbasic||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),i=(n(18),n(1)),u=n(2),l=n(4),s=n(3),p=n(5),b=(n(19),n(7)),h=n.n(b);n(21),n(24);h.a.initializeApp({apiKey:"AIzaSyB-o1JcRDkKCc-UBo_dQDNVorrKyk8F89Q",authDomain:"practice-app-c6c48.firebaseapp.com",databaseURL:"https://practice-app-c6c48.firebaseio.com",projectId:"practice-app-c6c48",storageBucket:"practice-app-c6c48.appspot.com",messagingSenderId:"146157259458",appId:"1:146157259458:web:164dda805a7bf596b7495b",measurementId:"G-NG2TVENT5H"});var d=h.a.database().ref(),m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],currentUserInput:""},n.handelOnChange=function(e){n.setState({currentUserInput:e.target.value})},n.handelOnSubmit=function(e){e.preventDefault();var t=n.state.currentUserInput;""!==t&&(d.push(t),n.setState({currentUserInput:""}))},n.handleOnDelete=function(e){var t=n.state.books.filter((function(t){return t.bookId!==e}));n.setState({books:t}),d.child(e).remove()},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.on("value",(function(t){var n=t.val(),a=[];for(var o in n)a.push({bookId:o,bookTitle:n[o]});e.setState({books:a})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Rainy Day Bookshelf \ud83c\udf27"),o.a.createElement("ul",null,this.state.books.map((function(t){return o.a.createElement("li",{key:t.bookId},t.bookTitle,o.a.createElement("span",{className:"deleteBook",onClick:function(){return e.handleOnDelete(t.bookId)}},"X"))}))),o.a.createElement("form",{onSubmit:this.handelOnSubmit},o.a.createElement("label",{htmlFor:"bookTitle"}),o.a.createElement("input",{id:"bookTitle",type:"text",value:this.state.currentUserInput,onChange:this.handelOnChange}),o.a.createElement("button",{type:"submit"},"Add Book To the List")))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.d80cce63.chunk.js.map