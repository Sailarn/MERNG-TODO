(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){e.exports=a(145)},128:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),o=a(0),l=a.n(o),i=a(42),c=a(109),m=a(111),s=a(22),u=a(107),d=a(38),p=a(41),g=(a(128),a(112)),E=a(16),v=a(51),f=a(97),b=a.n(f),h={user:null};if(localStorage.getItem("jwtToken")){var y=b()(localStorage.getItem("jwtToken"));1e3*y.exp<Date.now()?localStorage.removeItem("jwtToken"):h.user=y}var w=Object(o.createContext)({user:null,login:function(e){},logout:function(){}});function j(e,t){switch(t.type){case"LOGIN":return Object(v.a)({},e,{user:t.payload});case"LOGOUT":return Object(v.a)({},e,{user:null});default:return e}}function O(e){var t=Object(o.useReducer)(j,h),a=Object(E.a)(t,2),n=a[0],r=a[1];return l.a.createElement(w.Provider,Object.assign({value:{user:n.user,login:function(e){localStorage.setItem("jwtToken",e.token),r({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),r({type:"LOGOUT"})}}},e))}var T=function(e){var t=e.component,a=Object(g.a)(e,["component"]),n=Object(o.useContext)(w).user;return l.a.createElement(p.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(p.a,{to:"/"}):l.a.createElement(t,e)}}))},C=a(205),S=a(25),x=a(212),$=a(207),I=a(211),k=a(54),N=a(26),P=a(27),A=a.n(P);function L(){var e=Object(N.a)(["\n    {\n        getTodos{\n            id,\n            description,\n            title,\n            completed,\n            createdAt,\n            modifiedAt,\n            username,\n            priority,\n            privateTodo\n        }\n    }\n"]);return L=function(){return e},e}var B=A()(L()),D=a(84),R=a.n(D),U=a(209),F=a(210),q=a(208),M=a(206),G=a(103),Q=a.n(G),W=a(147);function z(){var e=Object(N.a)(["\n    mutation deleteTodo($todoId: ID!){\n        deleteTodo(todoId: $todoId)\n    }\n"]);return z=function(){return e},e}var H=A()(z()),J=function(e){var t=e.id,a=e.callback,n=Object(S.a)(H,{update:function(e){var n=e.readQuery({query:B});n.getTodos=n.getTodos.filter(function(e){return e.id!==t}),e.writeQuery({query:B,data:n}),a&&a()},variables:{todoId:t}}),r=Object(E.a)(n,1)[0];return l.a.createElement(W.a,{"aria-label":"Delete",onClick:r},l.a.createElement(Q.a,null))},_=a(195),K=a(194);function V(){var e=Object(N.a)(["\n    mutation switchCompleteTodo($todoId: ID!, $completed: Boolean!){\n        switchCompleteTodo(todoId: $todoId, completed: $completed){\n            id,\n            completed,\n            modifiedAt\n        }\n    }\n"]);return V=function(){return e},e}var X=A()(V()),Y=function(e){var t=e.options,a=t.completed,n=t.id,r=e.refetch,i=Object(o.useState)(a),c=Object(E.a)(i,2),m=c[0],s=c[1],u=Object(S.a)(X,{variables:{todoId:n,completed:!m},update:function(){r()}}),d=Object(E.a)(u,1)[0];return l.a.createElement(K.a,{control:l.a.createElement(_.a,{checked:m,name:"privateTodo",onChange:function(){return s(!m),d()},value:m}),label:m?"Completed":"Incompleted"})},Z=a(221),ee=a(204),te=a(203),ae=a(202),ne=a(110),re=a(196),oe=a(217),le=a(197),ie=a(148),ce=a(223),me=a(219),se=a(201),ue=a(57),de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(o.useState)(t),n=Object(E.a)(a,2),r=n[0],l=n[1];return{onChange:function(e){l(Object(v.a)({},r,Object(ue.a)({},e.target.name,e.target.value)))},onSubmit:function(t){t.preventDefault(),t.target.classList.add("was-validated"),e()},onSwitch:function(e){l(Object(v.a)({},r,Object(ue.a)({},e.target.name,e.target.checked)))},values:r}};function pe(){var e=Object(N.a)(["\n    mutation CreateTodo(\n        $title: String!\n        $description: String\n        $priority: String\n        $privateTodo: Boolean\n    ){\n        createTodo(\n            title: $title\n            description: $description\n            priority: $priority\n            privateTodo: $privateTodo\n        ){\n            title,\n            id,\n            description,\n            completed,\n            createdAt,\n            priority,\n            modifiedAt,\n            username,\n            privateTodo\n        }\n    }"]);return pe=function(){return e},e}function ge(){var e=Object(N.a)(["\n    mutation UpdateTodo(\n        $todoId: ID!\n        $title: String!\n        $description: String\n        $completed: Boolean\n        $priority: String\n        $privateTodo: Boolean){\n        updateTodo(\n            todoId: $todoId\n            title: $title\n            description: $description\n            completed: $completed\n            priority: $priority\n            privateTodo: $privateTodo\n        ){\n            id\n            title\n            description\n            completed\n            createdAt\n            modifiedAt\n            username\n            priority\n            privateTodo\n        }\n    }\n"]);return ge=function(){return e},e}function Ee(e){var t=e.query,a=e.name,n=e.initialState,r=e.close,o=e.refetch,i=de(function(){r&&r();return p()},n),c=i.values,m=i.onChange,s=i.onSubmit,u=i.onSwitch,d=Object(S.a)("CREATE"===t?fe:ve,{variables:c,update:function(e,t){var n=e.readQuery({query:B});a?n.getTodos=[t.data.createTodo].concat(Object(ne.a)(n.getTodos)):o(),e.writeQuery({query:B,data:n}),c.title="",c.description=""}}),p=Object(E.a)(d,1)[0];return l.a.createElement("form",{onSubmit:s,className:"create-todo-container"},l.a.createElement("div",{className:"create-todo-first"},!!a&&l.a.createElement(k.a,{variant:"h5",component:"h2"},"Create Todo"),l.a.createElement(re.a,{placeholder:"Title",name:"title",value:c.title,onChange:m,required:!0}),l.a.createElement(oe.a,{label:"Description",multiline:!0,margin:"normal",name:"description",value:c.description,onChange:m})),l.a.createElement("div",{className:"create-todo-second"},l.a.createElement(le.a,{component:"fieldset"},l.a.createElement(ie.a,{component:"legend"},"Priority"),l.a.createElement(ce.a,{className:"radio-group","aria-label":"Priority",name:"priority",value:c.priority,onChange:m},l.a.createElement(K.a,{value:"Low",control:l.a.createElement(me.a,null),label:"Low"}),l.a.createElement(K.a,{value:"Medium",control:l.a.createElement(me.a,null),label:"Medium"}),l.a.createElement(K.a,{value:"High",control:l.a.createElement(me.a,null),label:"High"}))),l.a.createElement(K.a,{control:l.a.createElement(_.a,{checked:c.privateTodo,name:"privateTodo",onChange:u,value:c.privateTodo}),label:c.privateTodo?"Private":"Not private"}),l.a.createElement(se.a,{variant:"contained",type:"submit",size:"small",style:{maxWidth:150},disabled:!c.title},a?"Create":"Update")))}var ve=A()(ge()),fe=A()(pe());function be(e){var t=e.id,a=e.todo,n=a.title,r=a.description,i=a.privateTodo,c=a.priority,m=e.refetch,s=Object(o.useState)(!1),u=Object(E.a)(s,2),d=u[0],p=u[1],g={todoId:t,title:n,description:r,privateTodo:i,priority:c};function v(){p(!1)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(W.a,{"aria-label":"Delete",style:{marginRight:10},onClick:function(){p(!0)}},l.a.createElement(ae.a,null,"edit_icon")),l.a.createElement(Z.a,{open:d,onClose:v,"aria-labelledby":"form-dialog-title",maxWidth:"sm",fullWidth:!0},l.a.createElement(te.a,{id:"form-dialog-title"},"Update Todo"),l.a.createElement(ee.a,null,l.a.createElement(Ee,{query:"UPDATE",name:!1,initialState:g,close:v,refetch:m}))))}var he=function(e){var t=e.todo,a=e.refetch,n=t.completed,r=t.id,o={completed:n,id:r};return l.a.createElement(C.a,{container:!0,item:!0,justify:"flex-start",alignItems:"center",xs:12},l.a.createElement(J,{id:r}),l.a.createElement(be,{id:r,todo:t,refetch:a}),l.a.createElement(Y,{options:o,refetch:a}))};var ye=function(e){var t=e.todo,a=e.refetch,n=Object(o.useContext)(w).user,r=t.description,i=t.title,c=t.completed,m=t.createdAt,s=t.modifiedAt,u=t.username,d=t.priority,p=t.privateTodo;return!!(!p||n&&p&&u===n.username)&&l.a.createElement(M.a,{maxWidth:"md"},l.a.createElement($.a,{style:{margin:"25px 0"}},l.a.createElement(q.a,null,l.a.createElement(U.a,null,l.a.createElement(k.a,{variant:"h4",component:"h2"},i),l.a.createElement(k.a,{variant:"h6",component:"h2"},"Created by: ",u),l.a.createElement(k.a,{variant:"subtitle1",gutterBottom:!0,color:"textSecondary",component:"p"},R()(m).fromNow()),s!==m&&l.a.createElement(k.a,{variant:"subtitle1",gutterBottom:!0,color:"textSecondary",component:"p"},"Modified at: ",R()(s).fromNow()),l.a.createElement(k.a,{variant:"subtitle1",color:"textSecondary",component:"p"},r?" Description: "+r:"No description"),l.a.createElement(k.a,null,"Status: ",c?l.a.createElement("span",{style:{color:"green"}},"Completed"):l.a.createElement("span",{style:{color:"red"}},"Incompleted")),l.a.createElement(k.a,null,"Priority: ",l.a.createElement("span",{style:{color:"Low"===d?"green":"Medium"===d?"orange":"red"}},d)))),!(!n||n.username!==u)&&l.a.createElement(F.a,null,l.a.createElement(he,{todo:t,refetch:a}))))},we=a(113);var je=function(){return!!Object(o.useContext)(w).user&&l.a.createElement(we.a,{style:{margin:25,padding:25}},l.a.createElement(Ee,{query:"CREATE",name:"Create Todo",initialState:{title:"",description:"",privateTodo:!1,priority:"Low"}}))};var Oe=function(){var e,t=Object(S.b)(B),a=t.loading,n=t.data,r=t.refetch,o=t.error;return o||(e=n.getTodos),l.a.createElement($.a,{style:{width:"100%",maxWidth:1e3,margin:20}},l.a.createElement(je,null),l.a.createElement(I.a,{title:"Recent todos",style:{textAlign:"center"},className:"title-todos"}),a||o?l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,null),!!o&&l.a.createElement(k.a,{variant:"h4",component:"h2",style:{textAlign:"center"}},o.message)):l.a.createElement(l.a.Fragment,null,e&&e.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(ye,{todo:e,refetch:r}))})))};var Te=function(){return l.a.createElement(C.a,{container:!0,item:!0,justify:"center",alignItems:"center",xs:12},l.a.createElement(Oe,null))},Ce=a(200),Se=a(198),xe=a(213),$e=a(220);function Ie(){var e=Object(N.a)(["\n    mutation login(\n        $username: String!\n        $password: String!\n    ){\n        login(\n            username: $username,\n            password: $password\n        ){\n            id email username createdAt token\n        }\n    }"]);return Ie=function(){return e},e}var ke=A()(Ie()),Ne=function(e){var t=Object(o.useContext)(w),a=Object(o.useState)({}),n=Object(E.a)(a,2),r=n[0],i=n[1],c=Object(o.useState)(""),m=Object(E.a)(c,2),s=m[0],u=m[1],d=Object(o.useState)(!1),p=Object(E.a)(d,2),g=p[0],v=p[1],f=de(function(){return T()},{username:"",password:""}),b=f.onChange,h=f.onSubmit,y=f.values,j=Object(S.a)(ke,{update:function(a,n){var r=n.data.login;t.login(r),e.history.push("/")},onError:function(e){e.graphQLErrors[0]?i(e.graphQLErrors[0].extensions.exception.errors):(u(e.message),v(!0))},variables:y}),O=Object(E.a)(j,2),T=O[0],x=O[1].loading;return l.a.createElement(C.a,{container:!0,item:!0,justify:"center",alignItems:"center",xs:12},l.a.createElement($.a,{style:{margin:25,width:"100%",maxWidth:"500px"}},l.a.createElement(U.a,null,l.a.createElement(k.a,{variant:"h4",component:"h2",gutterBottom:!0},"Sign in"),l.a.createElement("form",{onSubmit:h,className:"form-layout"},l.a.createElement(le.a,{error:!(!r.username&&!r.general),style:{width:"100%"}},l.a.createElement(Se.a,{htmlFor:"component-error"},"Username"),l.a.createElement(re.a,{name:"username",value:y.username,onChange:b,type:"text",placeholder:"Username..."}),l.a.createElement(Ce.a,null,r.username||r.general)),l.a.createElement(le.a,{error:!(!r.password&&!r.general),style:{width:"100%",margin:"10px 0"}},l.a.createElement(Se.a,{htmlFor:"component-error"},"Password"),l.a.createElement(re.a,{name:"password",value:y.password,onChange:b,type:"password",placeholder:"Password..."}),l.a.createElement(Ce.a,null,r.password)),l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(se.a,{variant:"contained",color:"primary",style:{margin:8},type:"submit",disabled:x},"Log in",!!x&&l.a.createElement(xe.a,{size:24,style:{color:"green",position:"absolute",top:"50%",marginTop:-12,marginBottom:-12}})),l.a.createElement($e.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:g,autoHideDuration:6e3,onClose:function(){return v(!1)},message:l.a.createElement("span",null,s)}))))))};function Pe(){var e=Object(N.a)(["\n    mutation register(\n        $username: String!\n        $email: String!\n        $password: String!\n        $confirmPassword: String!\n    ){\n        register(\n            registerInput: {\n                username: $username,\n                email: $email,\n                password: $password,\n                confirmPassword: $confirmPassword\n            }\n        ){\n            id email username createdAt token\n        }\n    }"]);return Pe=function(){return e},e}var Ae=A()(Pe()),Le=function(e){var t=Object(o.useContext)(w),a=Object(o.useState)({}),n=Object(E.a)(a,2),r=n[0],i=n[1],c=Object(o.useState)(""),m=Object(E.a)(c,2),s=m[0],u=m[1],d=Object(o.useState)(!1),p=Object(E.a)(d,2),g=p[0],v=p[1],f=de(function(){return T()},{username:"",email:"",password:"",confirmPassword:""}),b=f.onChange,h=f.onSubmit,y=f.values,j=Object(S.a)(Ae,{update:function(a,n){var r=n.data.register;t.login(r),e.history.push("/")},onError:function(e){e.message?(u(e.message),v(!0)):i(e.graphQLErrors[0].extensions.exception.errors)},variables:y}),O=Object(E.a)(j,2),T=O[0],x=O[1].loading;return l.a.createElement(C.a,{container:!0,item:!0,justify:"center",alignItems:"center",xs:12},l.a.createElement($.a,{style:{margin:25,width:"100%",maxWidth:"500px"}},l.a.createElement(U.a,null,l.a.createElement(k.a,{variant:"h4",component:"h2",gutterBottom:!0},"Register"),l.a.createElement("form",{onSubmit:h,className:"form-layout"},l.a.createElement(le.a,{error:!(!r.username&&!r.general),style:{width:"100%"}},l.a.createElement(Se.a,{htmlFor:"component-error"},"Username"),l.a.createElement(re.a,{name:"username",value:y.username,onChange:b,type:"text",placeholder:"Username..."}),l.a.createElement(Ce.a,null,r.username||r.general)),l.a.createElement(le.a,{error:!(!r.email&&!r.general),style:{width:"100%"}},l.a.createElement(Se.a,{htmlFor:"component-error"},"Email"),l.a.createElement(re.a,{name:"email",value:y.email,onChange:b,type:"email",placeholder:"Email..."}),l.a.createElement(Ce.a,null,r.email)),l.a.createElement(le.a,{error:!(!r.password&&!r.general),style:{width:"100%",margin:"10px 0"}},l.a.createElement(Se.a,{htmlFor:"component-error"},"Password"),l.a.createElement(re.a,{name:"password",value:y.password,onChange:b,type:"password",placeholder:"Password..."}),l.a.createElement(Ce.a,null,r.password)),l.a.createElement(le.a,{error:!(!r.confirmPassword&&!r.general),style:{width:"100%",margin:"10px 0"}},l.a.createElement(Se.a,{htmlFor:"component-error"},"Confirm Password"),l.a.createElement(re.a,{name:"confirmPassword",value:y.confirmPassword,onChange:b,type:"password",placeholder:"Confirm password..."}),l.a.createElement(Ce.a,null,r.confirmPassword)),l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(se.a,{variant:"contained",color:"primary",style:{margin:8},type:"submit",disabled:x},"Register",!!x&&l.a.createElement(xe.a,{size:24,style:{color:"green",position:"absolute",top:"50%",marginTop:-12,marginBottom:-12}})),l.a.createElement($e.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:g,autoHideDuration:6e3,onClose:function(){return v(!1)},message:l.a.createElement("span",null,s)}))))))},Be=a(215),De=a(216),Re=a(106),Ue=a.n(Re),Fe=a(214),qe=a(108),Me=a(222),Ge=Object(Fe.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});var Qe=function(){var e=Ge(),t=Object(o.useContext)(w),a=t.user,n=t.logout,r=window.location.pathname,i="/"===r?"home":r.substr(1),c=Object(o.useState)(i),m=Object(E.a)(c,2),s=m[0],u=m[1],p=function(e){return u(e)},g=Object(o.useState)(null),v=Object(E.a)(g,2),f=v[0],b=v[1];function h(){b(null)}function y(e){"logout"===e?(p(e),h()):(n(),h())}var j=l.a.createElement("div",{className:"phone-menu"},l.a.createElement(W.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:function(e){b(e.currentTarget)}},l.a.createElement(Ue.a,null)),a?l.a.createElement(qe.a,{anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:h},l.a.createElement(Me.a,{onClick:function(){return y("logout")}},"Logout")):l.a.createElement(qe.a,{anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:h},l.a.createElement(Me.a,{onClick:function(){return y("login")},component:d.b,to:"/login"},"Login"),l.a.createElement(Me.a,{onClick:function(){return y("register")},component:d.b,to:"/register"},"Register"))),O=a?l.a.createElement("div",null,l.a.createElement("div",{className:"normal-btns"},l.a.createElement(se.a,{onClick:n,color:"inherit"},"Logout")),j):l.a.createElement("div",null,l.a.createElement("div",{className:"normal-btns"},l.a.createElement(se.a,{variant:"login"===s?"outlined":"text",onClick:function(){return p("login")},component:d.b,to:"/login",color:"inherit"},"Login"),l.a.createElement(se.a,{variant:"register"===s?"outlined":"text",onClick:function(){return p("register")},component:d.b,to:"/register",color:"inherit"},"Register")),j);return l.a.createElement("div",{className:e.root},l.a.createElement(Be.a,{position:"static"},l.a.createElement(De.a,null,l.a.createElement(k.a,{onClick:function(){return p("home")},component:d.b,to:"/",variant:"h6",className:e.title},"MERNG Todo App"),O)))};var We=function(){return l.a.createElement(O,null,l.a.createElement(d.a,null,l.a.createElement(Qe,null),l.a.createElement(p.b,{exact:!0,path:"/",component:Te}),l.a.createElement(T,{exact:!0,path:"/login",component:Ne}),l.a.createElement(T,{exact:!0,path:"/register",component:Le})))},ze=Object(m.a)({uri:"http://localhost:5000"}),He=Object(u.a)(function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}}),Je=new i.c({link:He.concat(ze),cache:new c.a}),_e=l.a.createElement(s.a,{client:Je},l.a.createElement(We,null));r.a.render(_e,document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.25d7b045.chunk.js.map