(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),u=t.n(o),i=(t(19),t(2)),c=function(e){var n=e.handleFilterChange,t=e.value;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{onChange:n,value:t}))},l=function(e){var n=e.handleNameChange,t=e.newName,a=e.handlePhoneChange,o=e.newPhone,u=e.addPersonIntoPhonebook;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:n,value:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:a,value:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:u},"add")))},s=function(e){var n=e.person,t=e.handleDeletePerson;return r.a.createElement("div",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete"))},m=function(e){var n=e.persons,t=e.handleDeletePerson;return n.map((function(e){return r.a.createElement(s,{handleDeletePerson:function(){return t(e.id,e.name)},person:e,key:e.id})}))},f=(t(20),function(e){var n=e.notification,t=n.message,a=n.is_error;if(null===t)return null;var o=a?"error-notification":"notification";return r.a.createElement("div",{className:o},t)}),d=t(3),h=t.n(d),g="/api/persons",b=function(){return h.a.get(g).then((function(e){return e.data}))},p=function(e){return h.a.post(g,e).then((function(e){return e.data}))},v=function(e){return h.a.delete(g+"/"+e).then((function(e){return e.data}))},E=function(e,n){return h.a.put(g+"/"+e,n).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),d=s[0],h=s[1],g=Object(a.useState)(""),w=Object(i.a)(g,2),O=w[0],P=w[1],C=Object(a.useState)(""),j=Object(i.a)(C,2),k=j[0],N=j[1],S=Object(a.useState)({message:null,is_error:!1}),y=Object(i.a)(S,2),D=y[0],T=y[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var _=k?t.filter((function(e){return~e.name.indexOf(k)})):t;return r.a.createElement("div",null,r.a.createElement(f,{notification:D}),r.a.createElement("h2",null,"Phonebook"),r.a.createElement(c,{handleFilterChange:function(e){N(e.target.value)},value:k}),r.a.createElement("h3",null,"add a new"),r.a.createElement(l,{handleNameChange:function(e){h(e.target.value)},newName:d,handlePhoneChange:function(e){P(e.target.value)},newPhone:O,addPersonIntoPhonebook:function(e){e.preventDefault();var n=d.trim().replace(/\s\s+/g," "),a=O.trim().replace(/\s\s+/g,"");if(""!==n&&""!==a){var r={name:n,number:a},u=t.find((function(e){return e.name===n}));if(u){if(!window.confirm("".concat(n," is already added to phonebook. Replace the old number with a new one?")))return;E(u.id,r).then((function(e){o(t.map((function(n){return n.id!==u.id?n:e}))),T({message:"Changed number for ".concat(e.name)}),setTimeout((function(){T({message:null})}),3e3)})).catch((function(e){T({message:JSON.stringify(e.response.data),is_error:!0}),setTimeout((function(){T({message:null})}),3e3)}))}else p(r).then((function(e){h(""),P(""),o(t.concat(e)),T({message:"Added ".concat(e.name)}),setTimeout((function(){T({message:null})}),3e3)})).catch((function(e){T({message:JSON.stringify(e.response.data),is_error:!0}),setTimeout((function(){T({message:null})}),3e3)}))}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:_,handleDeletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&v(e).then((function(){o(t.filter((function(n){return n.id!==e}))),T({message:"Deleted ".concat(n)}),setTimeout((function(){T({message:null})}),3e3)})).catch((function(){o(t.filter((function(n){return n.id!==e}))),T({message:"Information of ".concat(n," has already been removed from server"),is_error:!0}),setTimeout((function(){T({message:null})}),3e3)}))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.98ca4a36.chunk.js.map