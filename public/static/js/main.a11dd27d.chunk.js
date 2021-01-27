(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c(2),a=c.n(s),r=c(34),l=c.n(r),i=(c(47),c(41)),j=c(19),u=c(6),h=c(11),b=c(22),d=c(59),o=c(18),m=c.n(o),x=c(35),O=c.n(x),g=c(23),p=c.n(g),_=function(e){var t=e.launch;return Object(n.jsx)("div",{className:"card card-body mb-3",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-9",children:[Object(n.jsxs)("h4",{children:["Mission:"," ",Object(n.jsx)("span",{className:p()({"text-success":t.launch_success,"text-danger":!t.launch_success}),children:t.mission_name})]}),Object(n.jsxs)("p",{children:["Date: ",Object(n.jsx)(O.a,{format:"YYYY-MM-DD HH:mm",children:t.launch_date_local})]})]}),Object(n.jsx)("div",{className:"col-md-3",children:Object(n.jsx)(j.b,{to:"/launch/".concat(t.flight_number),className:"btn btn-secondary",children:"Launch Details"})})]})})},f=function(){return Object(n.jsxs)("div",{className:"my-3",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})};function N(){var e=Object(b.a)(["\n\tquery LaunchesQuery {\n\t\tlaunches {\n\t\t\tflight_number\n\t\t\tlaunch_date_local\n\t\t\tlaunch_success\n\t\t\tmission_name\n\t\t}\n\t}\n"]);return N=function(){return e},e}var y=m()(N()),v=function(){var e,t=Object(d.a)(y),c=t.loading,s=t.error,a=t.data;return e=c?Object(n.jsx)("h4",{children:"Loading..."}):s?Object(n.jsx)("h4",{children:"Error"}):a.launches.map((function(e){return Object(n.jsx)(_,{launch:e},e.flight_number)})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(n.jsx)(f,{}),e]})};function k(){var e=Object(b.a)(["\n\tquery LaunchQuery($flight_number: Int!) {\n\t\tlaunch(flight_number: $flight_number) {\n\t\t\tflight_number\n\t\t\tmission_name\n\t\t\tlaunch_year\n\t\t\tlaunch_date_local\n\t\t\tlaunch_success\n\t\t\trocket {\n\t\t\t\trocket_id\n\t\t\t\trocket_name\n\t\t\t\trocket_type\n\t\t\t}\n\t\t}\n\t}\n"]);return k=function(){return e},e}var L=m()(k()),D=function(){var e,t=Object(u.e)().flight_number,c=Object(d.a)(L,{variables:{flight_number:parseInt(t)}}),s=c.loading,a=c.error,r=c.data;if(s)e=Object(n.jsx)("h4",{children:"Loading..."});else if(a)e=Object(n.jsx)("h4",{children:"Error"});else{var l=r.launch,i=l.mission_name,h=l.flight_number,b=l.launch_year,o=l.launch_success,m=l.rocket,x=m.rocket_id,O=m.rocket_name,g=m.rocket_type;e=Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{className:"display-4 my-3",children:[Object(n.jsx)("span",{className:"text-dark",children:"Mission: "}),i]}),Object(n.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",h]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",b]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Launch Successful:"," ",Object(n.jsx)("span",{className:p()({"text-success":o,"text-danger":!o}),children:o?"Yes":"No"})]})]}),Object(n.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(n.jsxs)("ul",{className:"list-group mb-3",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Rocket ID: ",x]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",O]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",g]})]}),Object(n.jsx)(j.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})}return Object(n.jsx)("div",{children:e})},F=(c(56),c.p+"static/media/logo.d1d867a7.png"),Y=new i.a({uri:"/graphql"});var w=function(){return Object(n.jsx)(h.a,{client:Y,children:Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("img",{src:F,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),Object(n.jsx)(u.a,{exact:!0,path:"/",component:v}),Object(n.jsx)(u.a,{exact:!0,path:"/launch/:flight_number",component:D})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),I()}},[[58,1,2]]]);
//# sourceMappingURL=main.a11dd27d.chunk.js.map