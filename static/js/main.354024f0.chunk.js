(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,d,u,l,b,j,f,h,x,g,p,O,m,k,w=t(0),v=t.n(w),y=t(12),D=t.n(y),F=t(4),T=t(3),z=t(2),C=z.d.form(r||(r=Object(T.a)(["\n    display: flex;\n    background-color: ",";\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 10px;\n\n    ","\n"])),(function(n){return n.theme.color.white}),(function(n){return n.StyledForm&&Object(z.c)(o||(o=Object(T.a)(["\n        @media(max-width:",";) \n        {\n            grid-template-columns: 1fr;\n        }"])),(function(n){return n.theme.breakpoint.mobileMax}))})),S=z.d.input(c||(c=Object(T.a)(["\n    flex-basis: 75%;\n    flex-grow: 1;\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid ",";\n"])),(function(n){return n.theme.color.lightGrey})),B=z.d.button(i||(i=Object(T.a)(["\n    flex-grow: 1;\n    background-color: ",";\n    color: ",";\n    padding: 10px;\n    margin: 10px;\n    border: none;\n    transition: 1s;\n    cursor: pointer;\n        &:hover{\n            background-color: hsl(180, 100%, 30%);\n            transform: scale(1.1);\n            transition: 1s;\n        }\n        &:active{\n            background-color: hsl(180, 100%, 35%);\n        }\n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.white})),E=t(1),A=function(n){var e=n.addNewTask,t=Object(w.useState)(""),r=Object(F.a)(t,2),o=r[0],c=r[1],i=Object(w.useRef)(null);return Object(E.jsxs)(C,{onSubmit:function(n){n.preventDefault(),""!==o.trim()&&(e(o),c(""),i.current.focus())},children:[Object(E.jsx)(S,{ref:i,placeholder:"Co jest do zrobienia?",value:o,autoFocus:!0,onChange:function(n){var e=n.target;return c(e.value)}}),Object(E.jsx)(B,{children:"Dodaj zadanie"})]})},N=z.d.ul(a||(a=Object(T.a)(["\n    background-color: ",";\n    padding: 10px;\n    margin: auto;\n"])),(function(n){return n.theme.color.white})),H=z.d.li(s||(s=Object(T.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    border-bottom: 1px solid ",";\n    padding: 10px;\n    align-items: center;\n\n    ","\n"])),(function(n){return n.theme.color.lightGrey}),(function(n){return n.hidden&&Object(z.c)(d||(d=Object(T.a)(["\n        word-break: break-word;\n        flex-basis: 100%;\n        flex-wrap: wrap;\n        display: none;\n    "])))})),M=z.d.span(u||(u=Object(T.a)(["\n    ","\n"])),(function(n){return n.done&&Object(z.c)(l||(l=Object(T.a)(["\n        text-decoration: line-through;\n    "])))})),I=z.d.button(b||(b=Object(T.a)(["\n    text-align: center;\n    width: 30px;\n    height: 30px;\n    margin: 0 10px;\n    border: none;\n    color: ",";\n    font-size: 16px;\n    align-self: center;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.color.white}),(function(n){return n.done&&Object(z.c)(j||(j=Object(T.a)(["\n        background-color: ",";\n        cursor: pointer;\n        transition: 1s;\n        \n        &:hover {\n            filter: brightness(110%);\n        }\n    "])),(function(n){return n.theme.color.green}))}),(function(n){return n.remove&&Object(z.c)(f||(f=Object(T.a)(["\n        background-color: ",";\n        cursor: pointer;\n        transition: 1s;\n\n        &:hover {\n            filter: brightness(120%);\n        }\n    "])),(function(n){return n.theme.color.red}))})),J=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toggleTaskDone;return Object(E.jsx)(N,{children:e.map((function(n){return Object(E.jsxs)(H,{hidden:n.done&&t,children:[Object(E.jsx)(I,{done:!0,onClick:function(){return o(n.id)},children:n.done?"\u2714":""}),Object(E.jsx)(M,{done:n.done,children:n.content}),Object(E.jsx)(I,{remove:!0,onClick:function(){return r(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},L=z.d.div(h||(h=Object(T.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: transparent;\n    flex-wrap: wrap;\n"]))),G=z.d.button(x||(x=Object(T.a)(["\n    background-color: transparent;\n    color: ",";\n    margin: 5px;\n    border: none;\n    font-size: 15px;\n    transition: 1s;\n    cursor: pointer;\n        &:hover {\n            filter: brightness(110%);\n        }\n        &:active {\n            filter: brightness(120%);\n        }\n        &:disabled {\n            color: ",";\n            cursor: default;\n        } \n"])),(function(n){return n.theme.color.teal}),(function(n){return n.theme.color.grey})),P=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,o=n.setAllDone;return Object(E.jsx)(L,{children:e.length>0&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(G,{onClick:r,children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(E.jsx)(G,{onClick:o,disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})})},U=z.d.section(g||(g=Object(T.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px  ",";\n"])),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.silver})),R=z.d.header(p||(p=Object(T.a)(["\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid ",";\n    padding: 0 20px;\n    flex-wrap: wrap;\n\n    ","\n"])),(function(n){return n.theme.color.silver}),(function(n){return n.Header&&Object(z.c)(O||(O=Object(T.a)(["\n        @media (max-width: ",") {\n        flex-direction: column;\n  }"])),(function(n){return n.theme.breakpoint.mobileMax}))})),q=z.d.h2(m||(m=Object(T.a)(["\n    font-size: 20px;\n"]))),K=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(E.jsxs)(U,{children:[Object(E.jsxs)(R,{children:[Object(E.jsxs)(q,{children:[" ",e," "]}),r]}),t]})},Q=function(n){var e=n.title;return Object(E.jsx)("h1",{children:e})},V=z.d.main(k||(k=Object(T.a)(["\n    max-width: 800px;\n    margin: 20px auto;\n    padding: 0 20px;\n"]))),W=t(16),X=t(6),Y=function(){var n=localStorage.getItem("tasks");return n?JSON.parse(n):[]};var Z,$=function(){var n=Object(w.useState)(!1),e=Object(F.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(w.useState)(Y),e=Object(F.a)(n,2),t=e[0],r=e[1];return Object(w.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object(X.a)(Object(X.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){r((function(n){return n.map((function(n){return Object(X.a)(Object(X.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){r((function(e){return[].concat(Object(W.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}}}(),c=o.tasks,i=o.removeTask,a=o.toggleTaskDone,s=o.setAllDone,d=o.addNewTask;return Object(E.jsxs)(V,{children:[Object(E.jsx)(Q,{title:"Lista zada\u0144"}),Object(E.jsx)(K,{title:"Dodaj nowe zadanie",body:Object(E.jsx)(A,{addNewTask:d})}),Object(E.jsx)(K,{title:"Lista zada\u0144",body:Object(E.jsx)(J,{tasks:c,hideDone:t,removeTask:i,toggleTaskDone:a}),extraHeaderContent:Object(E.jsx)(P,{tasks:c,hideDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:s})})]})},_=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))},nn=Object(z.b)(Z||(Z=Object(T.a)(["\nhtml {\n    box-sizing: border-box;\n  }\n  \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  \n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.iron}));D.a.render(Object(E.jsx)(v.a.StrictMode,{children:Object(E.jsxs)(z.a,{theme:{color:{teal:"#008080",white:"#FFFFFF",green:"#2DBA26",red:"#FF0000",grey:"#CBCAB6",lightGrey:"#E8EBE0",silver:"#E8F2EB",iron:"#D4D7D9"},breakpoints:{mobileMax:767}},children:[Object(E.jsx)(nn,{}),Object(E.jsx)($,{})]})}),document.getElementById("root")),_()}},[[24,1,2]]]);
//# sourceMappingURL=main.354024f0.chunk.js.map