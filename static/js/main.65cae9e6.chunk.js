(this.webpackJsonpaulas=this.webpackJsonpaulas||[]).push([[0],{41:function(e,a,t){e.exports=t(53)},53:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(33),c=t.n(r),i=t(7),l=t(9),s=t(12),d=t(13),m=t(15),u=t(14),p=t(16),v=t(5),h=t(6);function f(){var e=Object(v.a)(["\n  padding: 0 10px;\n"]);return f=function(){return e},e}var g=h.a.div(f()),b=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement(g,{className:"nav-wrapper blue darken-4"},o.a.createElement(i.b,{className:"brand-logo",to:"/"},"Quadrinhos Avenida")))}}]),a}(n.Component),E=t(27),y=t.n(E),O=t(18),w=t(38),N=t(8);t(22);function j(){var e=Object(v.a)(["\n  height: 200px;\n  padding: 10px;\n"]);return j=function(){return e},e}var k=h.a.img(j()),S=function(e){return o.a.createElement("div",{className:"col s6"},o.a.createElement("div",{className:"card horizontal"},o.a.createElement("div",{className:"card-image"},o.a.createElement(k,{className:"card-img-top",src:"".concat(e.foto),alt:"Tela"})),o.a.createElement("div",{className:"card-stacked"},o.a.createElement("div",{className:"card-content"},o.a.createElement("p",{className:"header"},o.a.createElement("b",null,e.nome)),o.a.createElement("p",null,"G\xeanero: ",e.genero),o.a.createElement("p",null,"P\xe1ginas: ",e.paginas),o.a.createElement("p",null,"Volumes: ",e.volumes),o.a.createElement("p",null,"Pre\xe7o de Capa: R$ ",e.preco.toLocaleString("pt-BR")),o.a.createElement("p",null,"Editora: ",e.editora)),o.a.createElement("div",{className:"card-action"},o.a.createElement(i.b,{to:"/detalhes/".concat(e.id)},"Ver Detalhes")))))};function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(t,!0).forEach((function(a){Object(O.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var _=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={quadrinhos:[]},t.loadQuadrinhos=Object(w.a)(y.a.mark((function e(){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],!navigator.onLine){e.next=5;break}N.firestore().collection("quadrinhos").orderBy("nome").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&a.push(P({id:e.doc.id},e.doc.data())),"modified"===e.type&&(a=a.map((function(a){return a.id===e.doc.id?P({id:e.doc.id},e.doc.data()):a}))),"removed"===e.type&&(a=a.filter((function(a){return a.id!==e.doc.id})))})),t.setState({quadrinhos:a}),localStorage.setItem("quadrinhos",JSON.stringify(a))})),e.next=10;break;case 5:return e.next=7,JSON.parse(localStorage.getItem("quadrinhos"));case 7:n=e.sent,a=n,t.setState({quadrinhos:a});case 10:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.loadQuadrinhos()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.state.quadrinhos.map((function(e){return o.a.createElement(S,{key:e.id,id:e.id,editora:e.editora,foto:e.foto,genero:e.genero,nome:e.nome,paginas:e.paginas,preco:e.preco,volumes:e.volumes})}))))}}]),a}(n.Component);function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(t,!0).forEach((function(a){Object(O.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function q(){var e=Object(v.a)(["\n  input:focus {\n    & + label::after {\n      color: #0d47a1;\n      border-bottom: 1px solid #0d47a1;\n    }\n  }\n  \n  & .prefix.active {\n    color: #0d47a1;\n  }\n"]);return q=function(){return e},e}function D(){var e=Object(v.a)(["\n  height: 200px;\n  padding: 10px;\n"]);return D=function(){return e},e}function I(){var e=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n"]);return I=function(){return e},e}function L(){var e=Object(v.a)(["\n  padding: 10px;\n"]);return L=function(){return e},e}var R=h.a.div(L()),B=h.a.div(I()),W=h.a.img(D()),z=h.a.div(q()),T=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={id:0,editora:"",foto:"",genero:"",nome:"",paginas:"",preco:"",volumes:"",avaliacao_avaliador:"",avaliacao_comentario:"",avaliacao_avaliacao:"",avaliacoes:[],aviso:""},t.handleChange=function(e){t.setState(Object(O.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var a={avaliador:t.state.avaliacao_avaliador,comentario:t.state.avaliacao_comentario,avaliacao:t.state.avaliacao_avaliacao},n=N.firestore();try{n.collection("quadrinhos").doc(t.state.id).collection("avaliacoes").add(a),t.setState({aviso:"Ok! avalia\xe7\xe3o cadastrada com sucesso",avaliacao_avaliador:"",avaliacao_comentario:"",avaliacao_avaliacao:""})}catch(o){t.setState({aviso:"Erro: "+o})}t.tempoAviso()},t.loadAvaliacoes=function(){var e=t.props.match.params,a=[];N.firestore().collection("quadrinhos").doc(e.id).collection("avaliacoes").orderBy("avaliador").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&a.push(A({id:e.doc.id},e.doc.data())),"modified"===e.type&&(a=a.map((function(a){return a.id===e.doc.id?A({id:e.doc.id},e.doc.data()):a}))),"removed"===e.type&&(a=a.filter((function(a){return a.id!==e.doc.id})))})),t.setState({avaliacoes:a})}))},t.tempoAviso=function(){setTimeout((function(){t.setState({aviso:""})}),5e3)},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params;N.firestore().collection("quadrinhos").doc(a.id).get().then((function(a){a.exists?e.setState(A({id:a.id},a.data())):console.log("Erro...")})).catch((function(e){console.log("Erro de conex\xe3o: ",e)})),this.loadAvaliacoes()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s6"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s12"},o.a.createElement("div",{className:"card horizontal"},o.a.createElement("div",{className:"card-image"},o.a.createElement(W,{className:"card-img-top",src:"".concat(this.state.foto),alt:"Tela"})),o.a.createElement("div",{className:"card-stacked"},o.a.createElement("div",{className:"card-content"},o.a.createElement("p",{className:"header"},o.a.createElement("b",null,this.state.nome)),o.a.createElement("p",null,"G\xeanero: ",this.state.genero),o.a.createElement("p",null,"P\xe1ginas: ",this.state.paginas),o.a.createElement("p",null,"Volumes: ",this.state.volumes),o.a.createElement("p",null,"Pre\xe7o de Capa: R$ ",this.state.preco.toLocaleString("pt-BR")),o.a.createElement("p",null,"Editora: ",this.state.editora)))))),o.a.createElement("div",{className:"row"},this.state.avaliacoes.map((function(e){return o.a.createElement("div",{className:"col s12",key:e.id},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s10"},o.a.createElement("span",{className:"card-title left-align"},e.avaliador)),o.a.createElement("div",{className:"col s2"},o.a.createElement("span",{className:"card-title right-align"},e.avaliacao))),o.a.createElement("p",null,e.comentario))))})))),o.a.createElement("div",{className:"col s6"},o.a.createElement(R,{className:"card"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement(z,{className:"input-field col s12"},o.a.createElement("i",{className:"material-icons prefix"},"account_circle"),o.a.createElement("input",{id:"icon_prefix",type:"text",className:"validate",name:"avaliacao_avaliador",onChange:this.handleChange,value:this.state.avaliacao_avaliador}),o.a.createElement("label",{htmlFor:"icon_prefix"},"Avaliador")),o.a.createElement(z,{className:"input-field col s12"},o.a.createElement("i",{className:"material-icons prefix"},"description"),o.a.createElement("input",{id:"icon_telephone",type:"text",className:"validate",name:"avaliacao_comentario",onChange:this.handleChange,value:this.state.avaliacao_comentario}),o.a.createElement("label",{htmlFor:"icon_telephone"},"Descri\xe7\xe3o")),o.a.createElement(z,{className:"input-field col s12"},o.a.createElement("i",{className:"material-icons prefix"},"score"),o.a.createElement("input",{id:"icon_telephone",type:"number",className:"comentario",name:"avaliacao_avaliacao",onChange:this.handleChange,value:this.state.avaliacao_avaliacao}),o.a.createElement("label",{htmlFor:"icon_telephone"},"Pontua\xe7\xe3o"))),o.a.createElement(B,null,o.a.createElement("button",{className:"btn waves-effect waves-light  blue darken-4",type:"submit",name:"action"},"Enviar Avalia\xe7\xe3o",o.a.createElement("i",{className:"material-icons right"},"send")),"\xa0\xa0",o.a.createElement(i.b,{to:"/",className:"waves-effect waves-light btn  blue darken-3"},"Retornar"))))),""!==this.state.aviso?o.a.createElement("div",null,this.state.aviso):""))}}]),a}(n.Component);var J=function(){return o.a.createElement(i.a,{basename:"/"},o.a.createElement(b,null),o.a.createElement(l.a,{path:"/",exact:!0,component:_}),o.a.createElement(l.a,{path:"/detalhes/:id",component:T}))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}N.initializeApp({apiKey:"AIzaSyCvH2wmhLLrMtYxeIwvy58lzgdubp9rMlA",authDomain:"quadrinhos-avenida.firebaseapp.com",databaseURL:"https://quadrinhos-avenida.firebaseio.com",projectId:"quadrinhos-avenida",storageBucket:"quadrinhos-avenida.appspot.com",messagingSenderId:"115883473019",appId:"1:115883473019:web:e98876987d5e8cb3a74ade",measurementId:"G-PS95K80YXL"}),c.a.render(o.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/quadrinhos-avenida",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/quadrinhos-avenida","/custom-service-worker.js");M?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(a,e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.65cae9e6.chunk.js.map