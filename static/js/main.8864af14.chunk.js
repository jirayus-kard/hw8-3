(this["webpackJsonpreact-expenses-v2"]=this["webpackJsonpreact-expenses-v2"]||[]).push([[0],{40:function(e,t,a){e.exports=a(72)},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),c=a.n(l),o=a(10),i=a(11),s=a(14),m=a(12),u=a(15),d=a(75),p=(a(45),a(13)),E=a(8),b=a(19),h=a.n(b),f=(a(62),a(64),a(73),{apiKey:"AIzaSyB34xmYlm9wTtk50XY6eQKqu7dM-XOSnCI",authDomain:"lab8hw-330e7.firebaseapp.com",databaseURL:"https://lab8hw-330e7.firebaseio.com",projectId:"lab8hw-330e7",storageBucket:"lab8hw-330e7.appspot.com",messagingSenderId:"824700935136",appId:"1:824700935136:web:1b197a880f716a95fde985",measurementId:"G-7T43PGPVTH"});h.a.apps.length||h.a.initializeApp(f);var v=h.a;function y(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 text-center"},r.a.createElement(p.b,{to:"/about"},r.a.createElement("i",{className:"fas fa-dollar-sign text-primary"})," My ",r.a.createElement("span",{className:"text-primary"},"Expenses"))))}var g=a(39),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",amount:""},a.onChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addTransaction(a.state.name,a.state.amount),a.setState({name:"",amount:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{id:"add-transaction_form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Transaction Name:"),r.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Expense detail ...",onChange:this.onChange,value:this.state.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"amount"},"Amount (+:income / -:expense)"),r.a.createElement("input",{type:"number",name:"amount",className:"form-control",placeholder:"0.00",onChange:this.onChange,value:this.state.amount})),r.a.createElement("input",{type:"submit",value:"Add Transaction",className:"btn btn-primary btn-block"})))}}]),t}(n.Component);function N(e){var t=e.transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0),a=t<0?"-":"+";return 0===t&&(a=""),r.a.createElement("div",{className:"container mt-5 text-center"},r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},a,"\u0e3f",Math.abs(t)))}function j(e){var t=e.transactions.map((function(e){return e.amount})),a=t.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-1*t.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return console.log(a+", "+n),r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"\u0e3f",a)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"\u0e3f",n)))}var O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.transaction,t=e.name,a=e.amount,n=e.date,l=new Date(n),c=l.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][l.getMonth()]+" "+(l.getYear()+1900);return r.a.createElement("tr",{className:a<0?"minus":"plus"},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,a<0?"expense":"income"),r.a.createElement("td",null,c))}}]),t}(n.Component);function T(e){var t=e.transactions;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Transaction History")),r.a.createElement("table",{className:"table table-striped mt-3"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",{id:"transaction-list"},t.map((function(e){return r.a.createElement(O,{key:e.id,transaction:e})})))),r.a.createElement("button",{id:"clear-history",className:"btn btn-danger btn-block",onClick:e.clearTransactions},"Clear History"))}function D(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/jirayus-kard/hw8-2/head.jpg",className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("b",null,"Developer information")," "),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"/jirayus-kard/hw8-2/pf.jpg",alt:"",width:"150"})),r.a.createElement("td",null,r.a.createElement("p",null," \xa0 \xa0 Jirayus Kardviset (610610575)"),r.a.createElement("p",null," \xa0 \xa0 This app use Google Firebase as backend.")))),r.a.createElement("br",null),r.a.createElement(p.b,{to:"/hw8-3/"},r.a.createElement("h3",null,"+",r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Home")))))))}a(71);var x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:[]},a.loadData=function(){var e=[{id:Object(d.a)(),name:"Dinner with family",amount:-1250,date:new Date(2020,1,28)},{id:Object(d.a)(),name:"Movie",amount:-200,date:new Date(2020,1,29)},{id:Object(d.a)(),name:"Lottery",amount:1500,date:new Date(2020,2,2)},{id:Object(d.a)(),name:"Salary",amount:6500,date:new Date(2020,1,25)}];a.setState({transactions:e})},a.loadJsonData=function(){v.firestore().collection("data").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),a.setState({transactions:t})}))},a.validateForm=function(e,t){return e&&t?isNaN(e)?0!==+t||(window.alert("Amount CANNOT be zero!"),!1):(window.alert("Please fill only TEXT detail in transaction name."),!1):(window.alert("Please fill in ALL data fields."),!1)},a.addTransaction=function(e,t){if(!a.validateForm(e,t))return!1;var n={id:Object(d.a)(),name:e,amount:+t,date:(new Date).getTime()};v.firestore().collection("data").add(n),a.state.transactions.unshift(n),a.setState({transactions:a.state.transactions})},a.clearTransactions=function(){window.confirm("You are going to clear all transaction history!!!")&&(v.firestore().collection("data").get().then((function(e){e.forEach((function(e){e.ref.delete()}))})),a.setState({transactions:[]}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadJsonData()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container mt-4 mb-5"},r.a.createElement(y,null),r.a.createElement(E.a,{exact:!0,path:"/hw8-3/",render:function(t){return r.a.createElement("div",null,r.a.createElement(w,{addTransaction:e.addTransaction}),r.a.createElement(N,{transactions:e.state.transactions}),r.a.createElement(j,{transactions:e.state.transactions}),r.a.createElement(T,{transactions:e.state.transactions,clearTransactions:e.clearTransactions}))}}),r.a.createElement(E.a,{path:"/about",component:D})))}}]),t}(n.Component);c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8864af14.chunk.js.map