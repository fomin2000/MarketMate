(this.webpackJsonpmarketmate=this.webpackJsonpmarketmate||[]).push([[0],{22:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var s,n,i,a,r,l=c(2),o=c.n(l),j=c(72),d=c.n(j),b=(c(82),c(26)),h=c(75),m=c(100),x=c(102),O=c(99),p=c(73),u=c(12),v=c(6),g=c(9),N=(c(83),c(0)),f=function(){document.getElementsByClassName("favortieBtn");var e=Object(l.useState)([]),t=Object(g.a)(e,2),c=t[0],s=t[1];Object(l.useEffect)((function(){fetch("/api/posts").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){s(e)})).catch((function(e){console.error("There was an error fetching posts:",e)})),console.log("posts",c)}),[]);var n=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"catagoryText",children:[Object(N.jsxs)("div",{className:"linksList",children:[Object(N.jsx)(u.b,{to:"/category/clothing",className:"link",children:"Clothing"}),"|",Object(N.jsx)(u.b,{to:"/category/garden",className:"link",children:"Garden"}),"|",Object(N.jsx)(u.b,{to:"/category/electronics",className:"link",children:"Electronics"}),"|",Object(N.jsx)(u.b,{to:"/category/toys",className:"link",children:"Toys"}),"|",Object(N.jsx)(u.b,{to:"/category/pet-supplies",className:"link",children:"Pet"}),"| ",Object(N.jsx)("br",{}),Object(N.jsx)(u.b,{to:"/category/kids",className:"link",children:"Kids"}),"|",Object(N.jsx)(u.b,{to:"/category/vehicles",className:"link",children:"Vehicles"}),"|",Object(N.jsx)(u.b,{to:"/category/health",className:"link",children:"Health"}),"|",Object(N.jsx)(u.b,{to:"/category/tickets",className:"link",children:"Tickets"}),"|",Object(N.jsx)(u.b,{to:"/category/hobbies",className:"link",children:"Hobbies"}),"|",Object(N.jsx)(u.b,{to:"/category/other",className:"link",children:"Other"})]}),Object(N.jsxs)("div",{className:"posts-container",children:[c.map((function(e){return Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:e.title}),Object(N.jsxs)("p",{className:"postPrice",children:["Price: ",e.price]})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:n,className:"favoriteBtn",children:"\u2729"})})]},e._id)})),!c&&Object(N.jsx)("h1",{children:"content"}),Object(N.jsxs)(u.b,{to:"/createPost",className:"floating-button",children:["Create ",Object(N.jsx)("br",{}),"Post"]})]})]})},C=c(8),y=c(16),k=c(14),S=c(95),P=c(38),w=c(101),T=Object(w.a)(s||(s=Object(P.a)(["\n\tmutation login($email: String!, $password: String!) {\n\t\tlogin(email: $email, password: $password) {\n\t\t\ttoken\n\t\t\tuser {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"]))),E=Object(w.a)(n||(n=Object(P.a)(["\n\tmutation addUser($username: String!, $email: String!, $password: String!) {\n\t\taddUser(username: $username, email: $email, password: $password) {\n\t\t\ttoken\n\t\t\tuser {\n\t\t\t\t_id\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"]))),B=(Object(w.a)(i||(i=Object(P.a)(["\n\tmutation CreatePost($title: String!, $price: Number!) {\n\t\tcreatePost(title: $title, price: $price) {\n\t\t\t_id\n\t\t\ttitle\n\t\t\tprice\n\t\t}\n\t}\n"]))),c(33)),I=c(32),D=c(62),$=new(function(){function e(){Object(B.a)(this,e)}return Object(I.a)(e,[{key:"getProfile",value:function(){return Object(D.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(D.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),_=function(){var e=Object(l.useState)({username:"",email:"",password:""}),t=Object(g.a)(e,2),c=t[0],s=t[1],n=Object(S.a)(E),i=Object(g.a)(n,2),a=i[0],r=i[1],o=r.error,j=r.data,d=function(e){var t=e.target,n=t.name,i=t.value;s(Object(b.a)(Object(b.a)({},c),{},Object(k.a)({},n,i)))},h=function(){var e=Object(y.a)(Object(C.a)().mark((function e(t){var s,n;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(c),e.prev=2,e.next=5,a({variables:Object(b.a)({},c)});case 5:s=e.sent,n=s.data,$.login(n.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"container d-flex justify-content-center align-items-center",style:{height:"500px",marginTop:"25%"},children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsx)("h4",{className:"card-header bg-black text-light p-2",children:"Sign Up"}),Object(N.jsxs)("div",{className:"card-body",children:[j?Object(N.jsxs)("p",{children:["Success! You may now head"," ",Object(N.jsx)(u.b,{to:"/",children:"back to the homepage."})]}):Object(N.jsxs)("form",{onSubmit:h,children:[Object(N.jsx)("input",{className:"form-input",placeholder:"Username",name:"username",type:"text",value:c.name,onChange:d}),Object(N.jsx)("input",{className:"form-input",placeholder:"Seller@gmail.com",name:"email",type:"email",value:c.email,onChange:d}),Object(N.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:c.password,onChange:d}),Object(N.jsx)("button",{className:"btn btn-block bg-white text-black",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),o&&Object(N.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})]})})},L=(c(86),function(e){var t=Object(l.useState)({email:"",password:""}),c=Object(g.a)(t,2),s=c[0],n=c[1],i=Object(S.a)(T),a=Object(g.a)(i,2),r=a[0],o=a[1],j=o.error,d=o.data,h=function(e){var t=e.target,c=t.name,i=t.value;n(Object(b.a)(Object(b.a)({},s),{},Object(k.a)({},c,i)))},m=function(){var e=Object(y.a)(Object(C.a)().mark((function e(t){var c,i;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(s),e.prev=2,e.next=5,r({variables:Object(b.a)({},s)});case 5:c=e.sent,i=c.data,$.login(i.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:n({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{display:"flex",alignItems:"center"},children:Object(N.jsxs)("div",{className:"card",id:"loginCard",children:[Object(N.jsx)("h4",{className:"card-header bg-black text-light p-2",children:"Login"}),Object(N.jsxs)("div",{className:"card-body",children:[d?Object(N.jsxs)("p",{children:["Success! You may now head"," ",Object(N.jsx)(u.b,{to:"/",children:"back to the homepage."})]}):Object(N.jsxs)("form",{onSubmit:m,children:[Object(N.jsx)("input",{className:"form-input",placeholder:"Seller@gmail.com",name:"email",type:"email",value:s.email,onChange:h}),Object(N.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:s.password,onChange:h}),Object(N.jsx)("button",{className:"btn btn-block bg-white text-black",style:{cursor:"pointer"},type:"submit",children:"Login"}),Object(N.jsxs)("div",{className:"mt-3 text-center",children:[Object(N.jsxs)("span",{children:["Don't have an account? ",Object(N.jsx)("br",{})," "]}),Object(N.jsx)(u.b,{to:"/signup",className:"btn btn-link",style:{color:"white",backgroundColor:"black"},children:"Register"})]})]}),j&&Object(N.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:j.message})]})]})})}),M=c(103),H=Object(w.a)(a||(a=Object(P.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n    }\n  }\n"]))),F=Object(w.a)(r||(r=Object(P.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n    }\n  }\n"]))),G=function(){var e=localStorage.getItem("title"),t=localStorage.getItem("price"),c=Object(v.p)().username,s=Object(M.a)(c?H:F,{variables:{username:c}}),n=s.loading,i=s.data,a=(null===i||void 0===i?void 0:i.me)||(null===i||void 0===i?void 0:i.user)||{};return $.loggedIn()&&$.getProfile().data.username===c?Object(N.jsx)(v.a,{to:"/me"}):n?Object(N.jsx)("div",{children:"Hol' up"}):null!==a&&void 0!==a&&a.username?Object(N.jsxs)("div",{style:{height:"500px"},children:[Object(N.jsxs)("main",{style:{paddingTop:"100px"},children:[Object(N.jsx)("h2",{children:"Recently Liked Items"}),Object(N.jsx)("div",{className:"card postsCard",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:e}),Object(N.jsx)("p",{className:"postPrice",children:t})]})})]}),Object(N.jsxs)("main",{style:{paddingTop:"100px"},children:[Object(N.jsx)("h2",{children:"Selling"}),Object(N.jsx)("div",{style:{border:"1px solid black",padding:"150px"},children:Object(N.jsxs)(u.b,{to:"/createpost",className:"floating-button",children:["Create ",Object(N.jsx)("br",{}),"Post"]})})]})]}):Object(N.jsx)("div",{style:{border:"2px solid black",textAlign:"center",marginTop:"50vh"},children:Object(N.jsx)("h1",{children:"You need to log in to see this shit"})})},q=function(){return Object(N.jsx)("header",{className:"bg-black text-light mb-4 py-0",style:{paddingLeft:"25px",position:"fixed",top:0,left:0,right:0},children:Object(N.jsxs)("div",{className:"mr-auto",children:[Object(N.jsx)(u.b,{className:"text-blue",to:"/",children:Object(N.jsx)("h1",{className:"m-0",style:{fontFamily:"Monospace",fontSize:"48px",fontWeight:"bold"},children:"MarketMate"})}),Object(N.jsx)("p",{className:"m-0",style:{fontFamily:"Monaco",fontSize:"18px",color:"white"},children:"Buy & Sell Today"})]})})},R=(c(87),function(){var e=Object(l.useState)(!1),t=Object(g.a)(e,2),c=t[0],s=t[1],n=Object(v.l)(),i=function(e){return n.pathname===e?"btn btn-outline-secondary active":"btn btn-outline-secondary"};return Object(N.jsx)("div",{className:"footer-wrapper",children:Object(N.jsx)("div",{className:"footer-content",children:Object(N.jsx)("div",{className:"footer-container fixed-bottom",children:Object(N.jsx)("div",{className:"container-fluid bg-hidden",children:Object(N.jsxs)("div",{className:"row justify-content-center",children:[Object(N.jsx)("div",{className:"col-3",children:Object(N.jsx)(u.b,{to:"/",className:i("/"),children:"Home"})}),Object(N.jsx)("div",{className:"col-3",children:Object(N.jsx)("button",{type:"button",className:i("/inbox"),children:"Inbox"})}),Object(N.jsx)("div",{className:"col-3 dropdown",children:Object(N.jsx)("div",{className:"dropup",children:Object(N.jsx)("button",{className:i("/me"),type:"button",id:"dropdownMenuButton",onClick:function(){s(!c)},children:Object(N.jsx)(u.b,{to:"/me",style:{color:"white"},children:"Profile"})})})}),Object(N.jsx)("div",{className:"col-3",children:$.loggedIn()?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("button",{className:i("/logout"),onClick:function(e){e.preventDefault(),$.logout()},children:"Logout"})}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(u.b,{to:"/login",className:i("/login"),children:"Login"})})})]})})})})})});c(88);var U=function(){var e=Object(l.useState)(""),t=Object(g.a)(e,2),c=t[0],s=t[1],n=Object(l.useState)(""),i=Object(g.a)(n,2),a=i[0],r=i[1],o=function(){var e=Object(y.a)(Object(C.a)().mark((function e(t){var s,n;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/api/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:c,price:a})});case 4:if((s=e.sent).ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(s.status));case 7:return e.next=9,s.json();case 9:n=e.sent,console.log(n),window.location.replace("/"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("form",{className:"form",onSubmit:o,children:[Object(N.jsx)("h2",{children:"Create a New Post"}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)("input",{type:"text",className:"form-control",id:"title",placeholder:"Title",value:c,onChange:function(e){return s(e.target.value)},required:!0})}),Object(N.jsx)("div",{className:"form-group",children:Object(N.jsx)("input",{type:"number",className:"form-control",id:"price",placeholder:"Price",value:a,onChange:function(e){return r(e.target.value)},required:!0})}),Object(N.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create Post \u2705"})]})})},V=(c(22),function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Clothing"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Shirt"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 35"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Pants"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 27"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Socks"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 12"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})}),K=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Garden"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Lawnmower"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 350"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Garden Hose"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 65"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Gardening Soil"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 12"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},W=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Electronics"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"iPad Pro 512 GB"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 1250"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"iMac Studio"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 2700"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Apple Airpods Max"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 450"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},z=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Toys"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Pokemon"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 5"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Kendama"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 27"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Cocomelon Doll"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 7"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},A=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Pet Supplies"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Chicken Coop"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 125"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Dog Food"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 27"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Leash"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 13"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},J=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Kids"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Bycicle"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 55"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Scooter"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 28"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Nintendo Wii"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 350"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},Y=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Vehicles"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"2022 Ford F-350"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 90,000"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"2023 BMW M3"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 85,000"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"2015 Dodge Ram 2500"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 37,500"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},Q=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Health"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Vitamin C"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 35"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Eucalyptus Oils"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 5"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Icy Hot"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 12"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},X=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Tickets"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Logan Paul vs KSI"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 120"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Seahawks vs Giants"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 83"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Clippers vs Warriors"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 67"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},Z=function(){var e=function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")};return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Hobbies"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Beach Volleyball"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 45"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Tennis Racket"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 85"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"FPV Racing Drone"}),Object(N.jsx)("p",{className:"postPrice",children:"Price: 1150"})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:e,className:"favoriteBtn",children:"\u2729"})})]})})]})},ee=function(){return Object(N.jsxs)("div",{className:"container",id:"categoryCont",children:[Object(N.jsx)("h2",{className:"title",id:"categoryTitle",children:"Other"}),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card postsCard",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{className:"postTitle",children:"Coming Soon!"}),Object(N.jsx)("p",{className:"postPrice",children:"......."})]}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{onClick:function(e){e.preventDefault();var t=e.target.parentElement.previousElementSibling.children[0].textContent,c=e.target.parentElement.previousElementSibling.children[1].textContent;localStorage.setItem("title",t),localStorage.setItem("price",c),e.target.style.backgroundColor="red",window.location.replace("/me")},className:"favoriteBtn",children:"\u2729"})})]})})]})},te=Object(h.a)({uri:"/graphql"}),ce=Object(p.a)((function(e,t){var c=t.headers,s=localStorage.getItem("id_token");return{headers:Object(b.a)(Object(b.a)({},c),{},{authorization:s?"Bearer ".concat(s):""})}})),se=new m.a({link:ce.concat(te),cache:new x.a});var ne=function(){return Object(N.jsx)(O.a,{client:se,children:Object(N.jsx)(u.a,{children:Object(N.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(N.jsx)(q,{}),Object(N.jsx)("div",{className:"container min-100-vh",children:Object(N.jsxs)(v.d,{children:[Object(N.jsx)(v.b,{path:"/",element:Object(N.jsx)(f,{})}),Object(N.jsx)(v.b,{path:"/login",element:Object(N.jsx)(L,{})}),Object(N.jsx)(v.b,{path:"/signup",element:Object(N.jsx)(_,{})}),Object(N.jsx)(v.b,{path:"/me",element:Object(N.jsx)(G,{})}),Object(N.jsx)(v.b,{path:"/profiles/:username",element:Object(N.jsx)(G,{})}),Object(N.jsx)(v.b,{path:"CreatePost",element:Object(N.jsx)(U,{})}),Object(N.jsx)(v.b,{path:"/category/clothing",element:Object(N.jsx)(V,{})}),Object(N.jsx)(v.b,{path:"/category/garden",element:Object(N.jsx)(K,{})}),Object(N.jsx)(v.b,{path:"/category/electronics",element:Object(N.jsx)(W,{})}),Object(N.jsx)(v.b,{path:"/category/toys",element:Object(N.jsx)(z,{})}),Object(N.jsx)(v.b,{path:"/category/pet-supplies",element:Object(N.jsx)(A,{})}),Object(N.jsx)(v.b,{path:"/category/kids",element:Object(N.jsx)(J,{})}),Object(N.jsx)(v.b,{path:"/category/vehicles",element:Object(N.jsx)(Y,{})}),Object(N.jsx)(v.b,{path:"/category/health",element:Object(N.jsx)(Q,{})}),Object(N.jsx)(v.b,{path:"/category/tickets",element:Object(N.jsx)(X,{})}),Object(N.jsx)(v.b,{path:"/category/hobbies",element:Object(N.jsx)(Z,{})}),Object(N.jsx)(v.b,{path:"/category/other",element:Object(N.jsx)(ee,{})})]})}),Object(N.jsx)(R,{})]})})})};d.a.render(Object(N.jsx)(o.a.StrictMode,{children:Object(N.jsx)(ne,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.87b56b34.chunk.js.map