import{a as e,j as l,F as v,c as w,R as N}from"./client-ad971829.js";import{u as b,a as u,b as p,c as m,R as y,d as c,e as S,f as h,g as P,N as d,O as x,A as R,m as A,H as k}from"./mockAuthClient-07d29188.js";function g(r){const{text:a,onSubmit:t}=r,{register:n,handleSubmit:i,formState:{errors:s}}=b();return console.log(s),e("main",{className:"form-signin w-100 m-auto",children:l("form",{onSubmit:i(t),children:[e("h1",{className:"h3 mb-3 fw-normal",children:a}),l("div",{className:"form-floating",children:[e("input",{required:!0,type:"email",className:"form-control",id:"floatingInput",placeholder:"name@example.com",...n("email",{required:!0})}),e("label",{htmlFor:"floatingInput",children:"Email address"})]}),l("div",{className:"form-floating",children:[e("input",{required:!0,type:"password",className:"form-control",id:"floatingPassword",placeholder:"Password",...n("password",{required:!0})}),e("label",{htmlFor:"floatingPassword",children:"Password"})]}),e("button",{className:"w-100 btn btn-lg btn-primary",type:"submit",children:a})]})})}function q(){var i,s;const r=u(),a=p(),{authClient:t}=m(),n=((s=(i=a.state)==null?void 0:i.from)==null?void 0:s.pathname)||"/";return e(g,{text:"Sign up",onSubmit:async o=>{const{data:f,error:I}=await t.signUp({email:o.email,password:o.password});console.log(f),t.signInWithPassword({email:o.email,password:o.password}),r(n,{replace:!0})}})}function C(){var i,s;const r=u(),a=p(),{authClient:t}=m(),n=((s=(i=a.state)==null?void 0:i.from)==null?void 0:s.pathname)||"/";return e(g,{text:"Sign in",onSubmit:async o=>{await t.signInWithPassword({email:o.email,password:o.password}),r(n,{replace:!0})}})}function F(){return e(y,{children:l(c,{element:e(L,{}),children:[e(c,{path:"/",element:e(S,{children:e("div",{children:"Main page"})})}),e(c,{path:"/signup",element:e(h,{children:e(q,{})})}),e(c,{path:"/login",element:e(h,{children:e(C,{})})}),e(c,{path:"*",element:e("div",{children:"Page Not Found"})})]})})}function L(){const{authClient:r}=m(),{user:a}=P(),t=u();return l(v,{children:[e("header",{className:"mb-auto",children:l("div",{children:[e("h3",{className:"float-md-start mb-0",children:e(d,{className:"nav-link",to:"/",children:"Bootstrap demo"})}),!a&&l("nav",{className:"nav nav-masthead justify-content-center float-md-end",children:[e(d,{className:"nav-link fw-bold py-1 px-0","aria-current":"page",to:"signup",children:"Sign up"}),e(d,{className:"nav-link fw-bold py-1 px-0",to:"/login",children:"Sign in"})]}),a&&e("nav",{className:"nav nav-masthead justify-content-center float-md-end",children:e("a",{className:"nav-link fw-bold py-1 px-0 active","aria-current":"page",href:"src#",onClick:async n=>{n.preventDefault(),await r.signOut(),t("/")},children:"Log out"})})]})}),e(x,{}),e("footer",{className:"mt-auto text-white-50",children:e("p",{})})]})}function j(){return e(R,{authClient:A,renderLoader:()=>e("div",{children:"loading..."}),children:e(k,{children:e(F,{})})})}w.createRoot(document.getElementById("root")).render(e(N.StrictMode,{children:e(j,{})}));
