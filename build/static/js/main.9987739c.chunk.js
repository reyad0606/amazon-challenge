(this["webpackJsonpamazon-challenge"]=this["webpackJsonpamazon-challenge"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(2),i=a(3),s=a.n(i),n=a(24),r=a.n(n),o=(a(47),a(37)),l=a(12),j=(a(48),a(49),a(38)),d=a.n(j),u=a(39),h=a.n(u),m=a(19),b=Object(i.createContext)(),p=function(e){var t=e.reducer,a=e.initialState,s=e.children;return Object(c.jsx)(b.Provider,{value:Object(i.useReducer)(t,a),children:s})},O=function(){return Object(i.useContext)(b)},g=a(30),_=(g.a.initializeApp({apiKey:"AIzaSyBtKC2TKRm_O_HDw1uaEAGK2rS-7avLDY4",authDomain:"challenge-aadd5.firebaseapp.com",projectId:"challenge-aadd5",storageBucket:"challenge-aadd5.appspot.com",messagingSenderId:"988779810314",appId:"1:988779810314:web:f2a41af778b63b2adcd9f3",measurementId:"G-T4MC6GB7Q7"}).firestore(),g.a.auth()),x=function(){var e=O(),t=Object(l.a)(e,2),a=t[0],i=a.basket,s=a.user;t[1];return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(m.b,{to:"/",children:Object(c.jsx)("img",{className:"header__logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(c.jsxs)("div",{className:"header__search",children:[Object(c.jsx)("input",{className:"header__searchInput",type:"text"}),Object(c.jsx)(d.a,{className:"header__searchIcon"})]}),Object(c.jsxs)("div",{className:"header__nav",children:[Object(c.jsx)(m.b,{to:!s&&"/login",children:Object(c.jsxs)("div",{onClick:function(){s&&_.signOut()},className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionLineOne",children:s?"Hello User":"Hello Guest"}),Object(c.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(c.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(c.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(c.jsx)(m.b,{to:"/checkout",children:Object(c.jsxs)("div",{className:"header__optionBasket",children:[Object(c.jsx)(h.a,{}),Object(c.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===i||void 0===i?void 0:i.length})]})})]})]})};a(58),a(59);var v=function(e){var t=e.id,a=e.title,i=e.image,s=e.price,n=e.rating,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(c.jsxs)("div",{className:"product",children:[Object(c.jsxs)("div",{className:"product__info",children:[Object(c.jsx)("p",{children:a}),Object(c.jsxs)("p",{className:"product__price",children:[Object(c.jsx)("small",{children:"$"}),Object(c.jsx)("strong",{children:s})]}),Object(c.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(c.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(c.jsx)("img",{src:i,alt:""}),Object(c.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:a,image:i,price:s,rating:n}})},children:"Add to Basket"})]})};var f=function(){return Object(c.jsx)("div",{className:"home",children:Object(c.jsxs)("div",{className:"home__container",children:[Object(c.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(v,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(c.jsx)(v,{id:"12321343",title:"Apple AirPods Pro, Engrave a mix of emoji, text, and numbers to make AirPods unmistakably yours. Only at Apple.",price:219.99,rating:5,image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5%2C0.5&.v=1591634795000"}),Object(c.jsx)(v,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})]}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(v,{id:"3254954345",title:"Silver Aluminum Case with Sport Loop. The case is made from 100 percent recycled aerospace-grade alloy.",price:399.99,rating:5,image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYA72_VW_34FR+watch-44-alum-silver-nc-6s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1599150083000,1599519889000"}),Object(c.jsx)(v,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}),Object(c.jsx)(v,{id:"4903850",title:"itbit Charge 4 Special Edition Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Granite Reflective",price:138.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(c.jsx)(v,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(c.jsx)("div",{className:"home__row",children:Object(c.jsx)(v,{id:"94329332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},k=a(9),N=(a(60),a(61),a(40)),S=a.n(N),C=a(31),A=a(21),w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},y=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),c=Object(C.a)(e.basket);return a>=0?c.splice(a,1):console.warn("Cant remove the product (id: ".concat(t.id," as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:c});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var E=function(){var e=O(),t=Object(l.a)(e,2),a=t[0].basket;return t[1],Object(c.jsxs)("div",{className:"subtotal",children:[Object(c.jsx)(S.a,{renderText:function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["Subtotal (",a.length," items): ",Object(c.jsx)("strong",{children:e})]}),Object(c.jsxs)("small",{className:"subtotal__gift",children:[Object(c.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:w(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(c.jsx)("button",{children:"Proceed to Checkout"})]})};a(63);var B=function(e){var t=e.id,a=e.image,i=e.title,s=e.price,n=e.rating,r=O(),o=Object(l.a)(r,2),j=(o[0].basket,o[1]);return Object(c.jsxs)("div",{className:"checkoutProduct",children:[Object(c.jsx)("img",{className:"checkoutProduct__image",src:a,alt:""}),Object(c.jsxs)("div",{className:"checkoutProduct__info",children:[Object(c.jsx)("p",{className:"checkoutProduct__title",children:i}),Object(c.jsxs)("p",{className:"checkoutProduct__price",children:[Object(c.jsx)("small",{children:"$"}),Object(c.jsx)("strong",{children:s})]}),Object(c.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(c.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(c.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var P=function(){var e=O(),t=Object(l.a)(e,2),a=t[0],i=a.basket,s=a.user;return t[1],Object(c.jsxs)("div",{className:"checkout",children:[Object(c.jsxs)("div",{className:"checkout__left",children:[Object(c.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(c.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),i.map((function(e){return Object(c.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(c.jsx)("div",{className:"checkout__right",children:Object(c.jsx)(E,{})})]})};a(64);var T=function(){var e=Object(k.f)(),t=Object(i.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(i.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)(m.b,{to:"/",children:Object(c.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("h1",{children:"Sign-in"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("h5",{children:"E-mail"}),Object(c.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)}}),Object(c.jsx)("h5",{children:"Password"}),Object(c.jsx)("input",{type:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(c.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(s,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(c.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(s,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};var L=function(){var e=O(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var a=t[1];return Object(i.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(c.jsx)(m.a,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(k.c,{children:[Object(c.jsx)(k.a,{path:"/login",children:Object(c.jsx)(T,{})}),Object(c.jsxs)(k.a,{path:"/checkout",children:[Object(c.jsx)(x,{}),Object(c.jsx)(P,{})]}),Object(c.jsxs)(k.a,{path:"/",children:[Object(c.jsx)(x,{}),Object(c.jsx)(f,{})]})]})})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{initialState:{basket:[],user:null},reducer:y,children:Object(c.jsx)(L,{})})}),document.getElementById("root")),I()}},[[66,1,2]]]);
//# sourceMappingURL=main.9987739c.chunk.js.map