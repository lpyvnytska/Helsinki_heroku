(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),c=(t(19),t(2)),l=function(e){var n=e.handleFilterChange,t=e.value;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{onChange:n,value:t}))},i=function(e){var n=e.handleNameChange,t=e.newName,a=e.handlePhoneChange,o=e.newPhone,u=e.addPersonIntoPhonebook;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:n,value:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:a,value:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:u},"add")))},s=function(e){var n=e.person,t=e.handleDeletePerson;return r.a.createElement("div",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete"))},m=function(e){var n=e.persons,t=e.handleDeletePerson;return n.map((function(e){return r.a.createElement(s,{handleDeletePerson:function(){return t(e.id,e.name)},person:e,key:e.id})}))},f=(t(20),function(e){var n=e.notification,t=n.message,a=n.is_error;if(null===t)return null;var o=a?"error-notification":"notification";return r.a.createElement("div",{className:o},t)}),d=t(3),h=t.n(d),b="//localhost:3001/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},g=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e){return h.a.delete(b+"/"+e).then((function(e){return e.data}))},E=function(e,n){return h.a.put(b+"/"+e,n).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),s=Object(c.a)(u,2),d=s[0],h=s[1],b=Object(a.useState)(""),w=Object(c.a)(b,2),P=w[0],C=w[1],O=Object(a.useState)(""),j=Object(c.a)(O,2),k=j[0],D=j[1],N=Object(a.useState)({message:null,is_error:!1}),S=Object(c.a)(N,2),y=S[0],I=S[1];Object(a.useEffect)((function(){v().then((function(e){o(e)}))}),[]);var T=k?t.filter((function(e){return~e.name.indexOf(k)})):t;return r.a.createElement("div",null,r.a.createElement(f,{notification:y}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(l,{handleFilterChange:function(e){D(e.target.value)},value:k}),r.a.createElement("h3",null,"add a new"),r.a.createElement(i,{handleNameChange:function(e){h(e.target.value)},newName:d,handlePhoneChange:function(e){C(e.target.value)},newPhone:P,addPersonIntoPhonebook:function(e){e.preventDefault();var n=d.trim().replace(/\s\s+/g," "),a=P.trim().replace(/\s\s+/g,"");if(""!==n&&""!==a){var r={name:n,number:a},u=t.find((function(e){return e.name===n}));if(console.log(u),u){if(!window.confirm("".concat(n," is already added to phonebook. Replace the old number with a new one?")))return;E(u.id,r).then((function(e){o(t.map((function(n){return n.id!==u.id?n:e}))),I({message:"Changed number for ".concat(e.name)}),setTimeout((function(){I({message:null})}),3e3)}))}else g(r).then((function(e){h(""),C(""),o(t.concat(e)),I({message:"Added ".concat(e.name)}),setTimeout((function(){I({message:null})}),3e3)}))}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:T,handleDeletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&p(e).then((function(){o(t.filter((function(n){return n.id!==e}))),I({message:"Deleted ".concat(n)}),setTimeout((function(){I({message:null})}),3e3)})).catch((function(){o(t.filter((function(n){return n.id!==e}))),I({message:"Information of ".concat(n," has already been removed from server"),is_error:!0}),setTimeout((function(){I({message:null})}),3e3)}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d4e31278.chunk.js.map