"use strict";(self.webpackChunkbeer_reciipes=self.webpackChunkbeer_reciipes||[]).push([[181],{7374:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var i,r,o,d,l,s,c,a,h,x,p,f,u,g,j,b,v,Z=t(2791),m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},w=t(168),y=t(4934),k=t(1087),_=t(6053),z=y.Z.div(i||(i=(0,w.Z)(["\n  display: flex;\n  width: 100%;\n  gap: 20px;\n  margin: 10px auto 30px 10px;\n  padding: 30px;\n"]))),B=((0,y.Z)(_.yDY)(r||(r=(0,w.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  opacity: 0.3;\n  &.active {\n    opacity: 1;\n    transform: scale(1.02)\n  }\n"]))),(0,y.Z)(_.XT_)(o||(o=(0,w.Z)(["\n  position: absolute;\n  top: 40px;\n  right: 16px;\n  opacity: 0.3;\n  &:hover {\n    animation: jelly 0.5s;\n  }\n"]))),(0,y.Z)(k.OL)(d||(d=(0,w.Z)(["\n  cursor: pointer;\ncolor: white;\n  &:hover {\n    color: #6f0d00;\n  }\n"])))),A=y.Z.div(l||(l=(0,w.Z)(["\n  position: absolute;\n  top: 24px;\n  right: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n  overflow: hidden;\n  width: calc(100% - 160px);\n  height: 160px;\n"]))),C=y.Z.div(s||(s=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n  border-radius: 8px;\n  padding: 274px  20px 20px 20px;\n  overflow: hidden;\n  background-color: white;\n  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px\n    rgba(0, 0, 0, 0.23);\n  width: 100%;\n\n  &.active {\n    background-color: #e8ffb1;\n    transform: scale(1.02)\n  }\n"]))),I=y.Z.h2(c||(c=(0,w.Z)(["\n  color: #320e00ed;\n  font-size: 24px;\n  font-weight: 700;\n  text-transform: uppercase;\n"]))),S=y.Z.div(a||(a=(0,w.Z)(["\n  position: absolute;\n  top: 260px;\n  width: 100%;\n  height: 10px;\n  background-image: linear-gradient(\n    to bottom,\n    #ffb800 33%,\n    #ff7300 33%,\n    #ff7300 66%,\n    #711e00 66%\n  );\n"]))),D=y.Z.div(h||(h=(0,w.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 20px;\n  left: 26px;\n  width: 120px;\n  height: 228px;\n  flex-shrink: 0;\n  overflow: hidden;\n"]))),E=y.Z.img(x||(x=(0,w.Z)(["\n  position: absolute;\n  top: 5px;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]))),L=y.Z.p(p||(p=(0,w.Z)(["\n  color: #320e00ed;\n  font-size: 16px;\n  font-weight: 500;\n"]))),O=y.Z.p(f||(f=(0,w.Z)(["\n  color: #320e00ed;\n  font-size: 14px;\n  font-weight: 500;\n  display: block;\n  height: 50px;\n\n"]))),R=y.Z.span(u||(u=(0,w.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  color: #320e00ed;\n"]))),U=y.Z.h3(g||(g=(0,w.Z)(["\n  font-weight: 700;\n  font-size: 16px;\n  color: #320e00ed;\n  align-self: flex-start;\n"]))),G=(y.Z.div(j||(j=(0,w.Z)(["\n  width: 120px;\n  padding: 8px;\n  gap: 6px;\n  border-radius: 4px;\n  background: #ff7300;\n  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px\n    rgba(0, 0, 0, 0.25);\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  &:hover {\n    background: #ea4f01;\n  }\n"]))),y.Z.div(b||(b=(0,w.Z)(["\n  align-self: flex-start;\n  width: 100%;\n  table {\n        width: 100%;\n        border-collapse: collapse;\n\n        th,\n        td {\n            padding: 8px;\n            border-bottom: 1px solid #e3bdaa;\n            color: #333;\n            font-weight: 500;\n        }\n\n        th {\n            text-align: left;\n            font-weight: 600;\n        }\n\n        tbody tr:hover {\n            background-color: #fff5ca;\n        }\n    }\n"])))),H=t(5076),M=t(3947),T=t(184),V=function(n,e){var t,i,r,o,d=(0,M.Z)((function(n){return n.fetchOneBeerData})),l=(0,M.Z)((function(n){return n.oneBeer})),s=(0,Z.useRef)(null!==(t=null===e||void 0===e||null===(i=e.state)||void 0===i?void 0:i.from)&&void 0!==t?t:"/");(0,Z.useEffect)((function(){d(n)}),[d,n]);var c=l.name,a=l.image_url,h=l.description,x=l.tagline,p=l.first_brewed,f=l.ingredients,u=l.food_pairing,g=l.brewers_tips,j=l.contributed_by;return(0,T.jsxs)(z,{children:[(0,T.jsx)(B,{to:s.current,onClick:function(){M.Z.setState((function(n){return{oneBeer:{}}}))},children:"\u2190 Go back"}),(0,T.jsxs)(C,{children:[(0,T.jsx)(S,{}),(0,T.jsx)(D,{children:(0,T.jsx)(E,{src:a,alt:c,onError:function(n){n.target.src="https://res.cloudinary.com/dj5smkin6/image/upload/v1689348096/BeerLogo_gych6g.jpg"}})}),(0,T.jsxs)(A,{children:[(0,T.jsx)(I,{children:c}),(0,T.jsx)(R,{children:x}),(0,T.jsxs)(L,{children:[(0,T.jsx)(R,{children:"first brewed: "})," ",p]}),(0,T.jsx)(H.$B,{style:{width:"100%",height:80},children:(0,T.jsx)(O,{children:h})})]}),(0,T.jsxs)(G,{children:[(0,T.jsx)(U,{children:"Ingredients :"}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h4",{children:"Malt"}),(0,T.jsxs)("table",{children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:"Ingredient"}),(0,T.jsx)("th",{children:"Amount"})]})}),(0,T.jsx)("tbody",{children:null===f||void 0===f||null===(r=f.malt)||void 0===r?void 0:r.map((function(n){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:n.name}),(0,T.jsxs)("td",{children:[n.amount.value,n.amount.unit]})]},m())}))})]})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("h4",{children:"Hops"}),(0,T.jsxs)("table",{children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:"Ingredient"}),(0,T.jsx)("th",{children:"Amount"}),(0,T.jsx)("th",{children:"Add"}),(0,T.jsx)("th",{children:"Attribute"})]})}),(0,T.jsx)("tbody",{children:null===f||void 0===f||null===(o=f.hops)||void 0===o?void 0:o.map((function(n){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:n.name}),(0,T.jsxs)("td",{children:[n.amount.value,n.amount.unit]}),(0,T.jsx)("td",{children:n.add}),(0,T.jsx)("td",{children:n.attribute})]},m())}))})]}),(0,T.jsx)("h4",{children:"food_pairing:"}),(0,T.jsx)("table",{children:(0,T.jsx)("tbody",{children:null===u||void 0===u?void 0:u.map((function(n){return(0,T.jsx)("tr",{children:(0,T.jsx)("td",{children:n})},m())}))})})]})]}),(0,T.jsxs)(L,{children:[(0,T.jsx)(R,{children:"Brewers tips: "})," ",g]}),(0,T.jsxs)(L,{children:[(0,T.jsx)(R,{children:"Contributed by: "})," ",j]})]})]})},X=y.Z.div(v||(v=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 55px;\n\n"]))),Y=function(){return(0,T.jsx)(X,{children:(0,T.jsx)(V,{})})}}}]);
//# sourceMappingURL=181.bb3fb217.chunk.js.map