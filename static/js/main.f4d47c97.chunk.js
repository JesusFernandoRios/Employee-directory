(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,,,function(e,a,n){},,function(e){e.exports=JSON.parse('[{"id":1,"name":"Zach Smith","email":"zachfake@email.com","phone":"230-232-2112"},{"id":2,"name":"Jenna Taylor","email":"Jenna02@email.com","phone":"548-565-4751"},{"id":3,"name":"David Zepeda","email":"Zepedafake@email.com","phone":"230-654-4554"},{"id":4,"name":"Anthony Williams","email":"anthonyW@email.com","phone":"230-784-5547"},{"id":5,"name":"Rick Sepulveda","email":"Rickyz@email.com","phone":"230-123-4654"},{"id":6,"name":"Carlos Vega","email":"Carlos2221@email.com","phone":"230-111-2697"},{"id":7,"name":"Michael Smith","email":"Michael009s@email.com","phone":"230-228-7954"},{"id":8,"name":"Stephanie Real","email":"Stephrules@email.com","phone":"546-445-5423"},{"id":9,"name":"Ramon Estrada","email":"RamonTrada@email.com","phone":"230-545-4654"},{"id":10,"name":"Monica Farzi","email":"Farzimo221@email.com","phone":"230-998-4315"},{"id":11,"name":"Esteban Ratoe","email":"EstebanRatoe@email.com","phone":"230-134-7985"},{"id":12,"name":"Sam Rambo","email":"Samsam12@email.com","phone":"230-468-4468"},{"id":13,"name":"Juan Molina","email":"juanoloco@email.com","phone":"230-132-7894"},{"id":14,"name":"Leonel Cuevas","email":"leodecuevas@email.com","phone":"230-484-1315"},{"id":15,"name":"George Maze","email":"George1255@email.com","phone":"230-232-4487"},{"id":16,"name":"Ashley Stone","email":"ashleystone2233@email.com","phone":"230-549-6458"}]')},function(e,a,n){e.exports=n(11)},,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),m=n(4),o=n.n(m),i=n(1);n(3);var r=function(e){var a=e.filtered;return l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"center"},"Name"),l.a.createElement("th",{className:"center"},"Email"),l.a.createElement("th",{className:"center"},"Phone")),a.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",{className:"center"},e.email),l.a.createElement("td",null,e.phone))}))))};var c=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"jumbotron jumbotron-fulid"},l.a.createElement("h1",{style:{textAlign:"center"}},"Employee Directory")))};var s=function(e){var a=e.setSearch,n=e.search,t=e.employee,m=e.setFilter;return l.a.createElement("section",null,l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search By Name Here","aria-label":"Search","aria-describedby":"button-addon2",onChange:function(e){var n=e.target.value;a(n),m(t.filter((function(e){return e.name.toLowerCase().includes(n)})))},value:n})))},h=n(5);var u=function(){var e=Object(t.useState)(h),a=Object(i.a)(e,2),n=a[0],m=a[1],o=Object(t.useState)(""),u=Object(i.a)(o,2),d=u[0],p=u[1],E=Object(t.useState)(n),y=Object(i.a)(E,2),v=y[0],b=y[1];return l.a.createElement("div",{className:"container"},l.a.createElement(c,null),l.a.createElement(s,{setSearch:p,search:d,setEmployee:m,employee:n,setFilter:b}),l.a.createElement(r,{filtered:v,setFilter:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.f4d47c97.chunk.js.map