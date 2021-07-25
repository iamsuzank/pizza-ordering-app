(this["webpackJsonppizza-ordering-app"]=this["webpackJsonppizza-ordering-app"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(20),n=c.n(s),a=c(5),i=c(2),l=c(8),r=c(3),o=c(10),j=c(16),d=c.n(j),b=c(21),m=Object(i.createContext)(null),u=c(11),x=c(1),O=function(e){var t=e.name,c=e.price,s=e.image,n=e.size,r=e._id,j=Object(i.useContext)(m),d=j.cart,b=j.setCart,O=Object(i.useState)(!1),f=Object(a.a)(O,2),h=f[0],p=f[1],g=Object(i.useState)(!1),v=Object(a.a)(g,2),N=v[0],y=v[1];return Object(x.jsx)(l.b,{to:"/products/".concat(r),children:Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:s,alt:t}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("h2",{className:"text-lg font-bold py-2",children:t}),Object(x.jsx)("span",{className:"bg-pink-200 py-1 rounded-full text-sm px-4",children:n})]}),Object(x.jsxs)("div",{className:"flex justify-between items-center mt-4",children:[Object(x.jsxs)("span",{onClick:function(e){e.preventDefault()},children:["\u0930\u0941 ",c]}),Object(x.jsx)("button",{disabled:h,onClick:function(e){return function(e,t){e.preventDefault();var c=Object(o.a)({},d);c.items||(c.items={}),c.items[t]?c.items[t]+=1:c.items[t]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,b(c),p(!0),y(!0),setTimeout((function(){p(!1)}),1e3)}(e,r)},className:"".concat(h?"bg-green-500 py-1 px-4 rounded-full font-bold":"bg-yellow-500 py-1 px-4 rounded-full font-bold"," "),children:Object(x.jsxs)("span",{className:"flex",children:[h?"ADDED":"ADD",N?Object(x.jsx)(u.d,{}):""]})})]})]})})},f=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(""),l=Object(a.a)(n,2),r=l[0],j=l[1],m=Object(i.useState)(!0),u=Object(a.a)(m,2),f=u[0],h=u[1];Object(i.useEffect)((function(){p()}),[]);var p=function(){var e=Object(b.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products");case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent)&&h(!1),s(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container mx-auto pb-24  ",children:[Object(x.jsx)("h1",{className:"text-lg font-bold my-8 ",children:"Our Foods "}),Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault()},className:"search-bar",children:Object(x.jsx)("div",{className:"flex items-center ",children:Object(x.jsx)("input",{className:" justify-center shadow appearance-none \r focus:bg-white focus:border-yellow-500\r max-w-md \r border rounded w-full py-2 px-3 text-gray-700 \r\nleading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Search Food",value:r,onChange:function(e){j(e.target.value)}})})}),Object(x.jsx)("div",{className:"grid grid-cols-5 my-8 gap-24",children:f?Object(x.jsx)("img",{src:"/images/loading.gif",className:" mx-auto w-1/2 mt-12 min-w-max min-w-max ",alt:"loading..."}):c.filter((function(e){return""===r||e.name.toLowerCase().includes(r.toLowerCase())?e:void 0})).map((function(e){return Object(x.jsx)(O,Object(o.a)({},e),e._id)}))})]})},h=(c(36),[{image:"/images/img1.svg"},{image:"/images/img2.svg"},{image:"/images/img3.svg"},{image:"/images/img4.svg"},{image:"/images/img5.svg"},{image:"/images/img6.svg"},{image:"/images/img7.svg"}]),p=function(e){var t=e.slides,c=Object(i.useState)(0),s=Object(a.a)(c,2),n=s[0],l=s[1],r=t.length;setTimeout((function(){l(n===r-1?0:n+1)}),7e3);return!Array.isArray(t)||t.length<=0?null:Object(x.jsxs)("section",{className:"slider",children:[Object(x.jsx)(u.b,{className:"left-arrow",onClick:function(){l(0===n?r-1:n-1)}}),Object(x.jsx)(u.c,{className:"right-arrow",onClick:function(){l(n===r-1?0:n+1)}}),h.map((function(e,t){return Object(x.jsx)("div",{className:t===n?"slide active":"slide",children:t===n&&Object(x.jsx)("img",{src:e.image,alt:"travel ",className:"image"})},t)}))]})},g=c(23),v=c(24),N=function(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(g.a)(e.current,{startDelay:500,showCursor:!0,backDelay:1e3,backSpeed:80,strings:[" Havana  Pizza","Chicken mushroom Pizza","Caramel pineapple pizza","and many Delicious Foods!!"]})}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"hero py-16",children:Object(x.jsxs)("div",{className:"container mx-auto flex items-center justift-between",children:[Object(x.jsxs)("div",{className:"w-1/2",children:[Object(x.jsx)("h6",{className:"text-lg",children:Object(x.jsx)("em",{children:"Are you hungry?"})}),Object(x.jsx)("h1",{className:"text-3xl md:text-6xl font-bold",children:"Don't wait !"}),Object(x.jsx)(l.b,{to:"/Products",children:Object(x.jsxs)("button",{className:"px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 \r hover:bg-yellow-600 mb-5 flex",children:["Order Now",Object(x.jsx)(v.a,{className:"ml-2",size:28})]})}),Object(x.jsx)("div",{className:"w-1/3",children:Object(x.jsx)("em",{className:"text-yellow-500 font-bold ",ref:e})})]}),Object(x.jsx)("div",{className:"w-1/2",children:Object(x.jsx)(p,{className:"w-4/5 ",slides:h})})]})}),Object(x.jsx)("div",{className:"pb-24",children:Object(x.jsx)(f,{})})]})},y=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Hello from About pages"})})},w=function(){var e=Object(i.useContext)(m).cart;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("nav",{className:" z-40   container mx-auto flex items-center justify-between ",children:[Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)("img",{style:{height:45},src:"/images/logo.png",alt:"logo"})}),Object(x.jsxs)("ul",{className:"flex items-center",children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{className:"ml-6",children:Object(x.jsx)(l.b,{to:"/products",children:"Products"})}),Object(x.jsx)("li",{className:"ml-6",children:Object(x.jsx)(l.b,{to:"/cart",children:Object(x.jsxs)("div",{style:{background:"#F59E0D",display:"flex",padding:"6px 12px",borderRadius:"50px"},children:[Object(x.jsx)("span",{className:"text-white ",children:e.totalItems?e.totalItems:0}),Object(x.jsx)("img",{className:"ml-2",src:"/images/cart.png",alt:"cart-icon"})]})})})]})]})})},C=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(f,{})})},k=function(){var e=0,t=Object(i.useContext)(m),c=t.cart,s=t.setCart,n=Object(i.useState)([]),l=Object(a.a)(n,2),r=l[0],j=l[1],d=Object(i.useState)(!1),b=Object(a.a)(d,2),u=b[0],O=b[1];Object(i.useEffect)((function(){c.items&&(u||fetch("/api/products/cart-items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:Object.keys(c.items)})}).then((function(e){return e.json()})).then((function(e){j(e),O(!0)})))}),[c,u]);var f=function(e){return c.items[e]},h=function(t,c){var s=c*f(t);return e+=s,s};return r.length?Object(x.jsxs)("div",{className:"container mx-auto lg:w-1/2 w-full pb-24",children:[Object(x.jsx)("h1",{className:"my-12 font -bold",children:"Cart Items"}),Object(x.jsx)("ul",{children:r.map((function(e){return Object(x.jsx)("li",{className:"mb-12",children:Object(x.jsxs)("div",{className:" flex items-center justify-between",children:[Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)("img",{className:"h-16",src:e.image,alt:e.name}),Object(x.jsx)("span",{className:"font-bold ml-4 w-48",children:e.name})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(){!function(e){var t=c.items[e],n=Object(o.a)({},c);1!==t&&(n.items[e]=t-1,n.totalItems-=1,s(n))}(e._id)},className:" font-extrabold bg-yellow-500 px-4 py-2 rounded-full leading-none",children:"-"}),Object(x.jsx)("b",{className:"px-4",children:f(e._id)}),Object(x.jsx)("button",{onClick:function(){!function(e){var t=c.items[e],n=Object(o.a)({},c);n.items[e]=t+1,n.totalItems+=1,s(n)}(e._id)},className:" font-extrabold bg-yellow-500 px-4 py-2 rounded-full leading-none",children:"+"})]}),Object(x.jsxs)("span",{children:["\u0930\u0941 ",h(e._id,e.price)]}),Object(x.jsx)("button",{onClick:function(){!function(e){var t=Object(o.a)({},c),n=t.items[e];delete t.items[e],t.totalItems-=n,s(t);var a=r.filter((function(t){return t._id!==e}));j(a)}(e._id)},className:"bg-red-500 px-4 py-2 rounded-full leading-none text-white",children:"Delete"})]})},e._id)}))}),Object(x.jsx)("hr",{className:"my-3"}),Object(x.jsxs)("div",{className:"text-right",children:[Object(x.jsx)("b",{children:"Grand Total "}),": \u0930\u0941 ",e]}),Object(x.jsx)("hr",{className:"my-3"}),Object(x.jsx)("div",{className:"text-right",children:Object(x.jsx)("button",{onClick:function(){window.alert("Order Placed Successfully"),j([]),s({})},className:"bg-yellow-500 px-4 py-2  mt-1 rounded-full leading-none",children:"Order Now"})})]}):Object(x.jsx)("img",{className:"mx-auto w-1/2 mt-12",src:"/images/empty-cart.png",alt:""})},S=function(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(r.g)(),l=Object(r.f)(),j=Object(i.useState)(!1),d=Object(a.a)(j,2),b=d[0],O=d[1],f=Object(i.useContext)(m),h=f.cart,p=f.setCart;Object(i.useEffect)((function(){fetch("/api/products/".concat(n._id)).then((function(e){return e.json()})).then((function(e){s(e)}))}),[n._id]);return Object(x.jsxs)("div",{className:"container mx-auto mt-0 ",children:[Object(x.jsx)("button",{onClick:function(){l.goBack()},className:"mb-12 font-bold mt-20",children:Object(x.jsx)(u.a,{size:32,className:"bg-yellow-500"})}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("img",{src:c.image,alt:c.name}),Object(x.jsxs)("div",{className:"ml-16",children:[Object(x.jsx)("h1",{className:"text-xl font-bold",children:c.name}),Object(x.jsx)("div",{className:"text-md",children:Object(x.jsx)("button",{className:"rounded-full bg-pink-200 px-2",children:c.size})}),Object(x.jsxs)("div",{className:"font-bold mt-2",children:["\u0930\u0941 ",c.price]}),Object(x.jsxs)("button",{onClick:function(e){return function(e,t){e.preventDefault();var c=Object(o.a)({},h);c.items||(c.items={}),c.items[t]?c.items[t]+=1:c.items[t]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,p(c),O(!0),setTimeout((function(){O(!1)}),1e3)}(e,c._id)},className:" hover:bg-purple-200  flex  bg-yellow-500 py-1 px-4 rounded-full font-bold mt-4",disabled:b,children:[Object(x.jsx)("span",{children:"Add to Cart"}),Object(x.jsx)(u.e,{size:25,className:"ml-2"})]})]})]})]})};var z=function(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){var e=window.localStorage.getItem("cart");s(JSON.parse(e))}),[]),Object(i.useEffect)((function(){window.localStorage.setItem("cart",JSON.stringify(c))}),[c]),Object(x.jsx)("div",{children:Object(x.jsx)(l.a,{children:Object(x.jsxs)(m.Provider,{value:{cart:c,setCart:s},children:[Object(x.jsx)(w,{}),Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{path:"/",exact:!0,component:N}),Object(x.jsx)(r.a,{path:"/about",exact:!0,component:y}),Object(x.jsx)(r.a,{path:"/products",exact:!0,component:C}),Object(x.jsx)(r.a,{path:"/products/:_id",exact:!0,component:S}),Object(x.jsx)(r.a,{path:"/cart",exact:!0,component:k})]})]})})})};n.a.render(Object(x.jsx)(z,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.90111079.chunk.js.map