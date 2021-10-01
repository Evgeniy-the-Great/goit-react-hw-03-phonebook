(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,a){t.exports={filterInput:"Filter_filterInput__3X-5z",filterLabel:"Filter_filterLabel__1C1O_"}},13:function(t,e,a){},2:function(t,e,a){t.exports={form:"ContactForm_form__1NMzA",contactName:"ContactForm_contactName__DP1YI",label:"ContactForm_label__3cf-d"}},20:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(11),o=a.n(c),r=a(12),s=a(14),i=a(4),l=a(5),u=a(7),d=a(6),b=a(22),m=a(3),h=a(2),f=a.n(h),j=a(0),p=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleChange=function(e){var a=e.target,n=a.name,c=a.value;t.setState(Object(m.a)({},n,c))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.isThereThisContact(t.state.name)?alert("".concat(t.state.name," is already in contacts")):(t.props.addContact(t.state),t.reset())},t.reset=function(){return t.setState({name:"",number:""})},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.onHandleSubmit,className:f.a.form,children:[Object(j.jsxs)("label",{className:f.a.label,children:["Name",Object(j.jsx)("input",{placeholder:"Jacob Mercer",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.onHandleChange,className:f.a.contactName})]}),Object(j.jsxs)("label",{className:f.a.label,children:["Number",Object(j.jsx)("input",{placeholder:"+38(093)223-77-88",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.onHandleChange,className:f.a.contactName})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),a}(n.Component),C=p,O=a(8),x=a.n(O),_=function(t){var e=t.findContact,a=t.deleteContact;return Object(j.jsx)("ul",{className:x.a.contactList,children:e().map((function(t){return Object(j.jsxs)("li",{className:x.a.contactItem,children:[Object(j.jsxs)("p",{className:x.a.contactText,children:[t.name,": ",t.number]}),Object(j.jsx)("button",{type:"button",id:t.id,onClick:a,children:"Delete"})]},t.id)}))})},v=a(10),g=a.n(v),N=function(t){var e=t.filter,a=t.addToFilterState;return Object(j.jsxs)("label",{className:g.a.filterLabel,children:["Find contact by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:a,className:g.a.filterInput})]})},y=a(13),S=a.n(y),T=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){return t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[Object(r.a)({id:Object(b.a)()},e)])}}))},t.isThereThisContact=function(e){return t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},t.deleteContact=function(e){var a=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==a}))}}))},t.addToFilterState=function(e){var a=e.target.value;t.setState({filter:a})},t.findContact=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:S.a.box,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(C,{isThereThisContact:this.isThereThisContact,addContact:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(N,{addToFilterState:this.addToFilterState,filter:this.state.filter}),Object(j.jsx)(_,{findContact:this.findContact,deleteContact:this.deleteContact})]})})}}]),a}(n.Component),L=T;o.a.render(Object(j.jsx)(L,{}),document.getElementById("root"))},8:function(t,e,a){t.exports={contactList:"ContactList_contactList__2tXlA",contactItem:"ContactList_contactItem__1IP9P",contactText:"ContactList_contactText__1aG99"}}},[[20,1,2]]]);
//# sourceMappingURL=main.1833d2c9.chunk.js.map