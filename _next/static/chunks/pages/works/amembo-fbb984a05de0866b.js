(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{4651:function(g,b,a){"use strict";a.d(b,{Ee:function(){return f}});var c=a(6052),d=a(5031),e=a(7294),h=a(4697);function i(){return(i=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function j(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var k=["htmlWidth","htmlHeight","alt"],l=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],m=e.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,f=a.alt,g=j(a,k);return e.createElement("img",i({width:c,height:d,ref:b,alt:f},g))}),f=(0,c.Gp)(function(a,B){var b,o,f,p,q,r,s,t,g,k,n,C,D,u,E,v=a.fallbackSrc,w=a.fallback,F=a.src,G=a.srcSet,H=a.align,I=a.fit,x=a.loading,J=a.ignoreFallback,K=a.crossOrigin,y=j(a,l),z=null!=x||J|| void 0===v&& void 0===w,L=(o=(b=i({},a,{ignoreFallback:z})).loading,f=b.src,p=b.srcSet,q=b.onLoad,r=b.onError,s=b.crossOrigin,t=b.sizes,g=b.ignoreFallback,k=(0,e.useState)("pending"),n=k[0],C=k[1],(0,e.useEffect)(function(){C(f?"loading":"pending")},[f]),D=(0,e.useRef)(),u=(0,e.useCallback)(function(){if(f){E();var a=new Image;a.src=f,s&&(a.crossOrigin=s),p&&(a.srcset=p),t&&(a.sizes=t),o&&(a.loading=o),a.onload=function(a){E(),C("loaded"),null==q||q(a)},a.onerror=function(a){E(),C("failed"),null==r||r(a)},D.current=a}},[f,s,p,t,q,r,o]),E=function(){D.current&&(D.current.onload=null,D.current.onerror=null,D.current=null)},(0,h.a)(function(){if(!g)return"loading"===n&&u(),function(){E()}},[n,u,g]),g?"loaded":n),A=i({ref:B,objectFit:I,objectPosition:H},z?y:(0,d.CE)(y,["onError","onLoad"]));return"loaded"!==L?w||e.createElement(c.m$.img,i({as:m,className:"chakra-image__placeholder",src:v},A)):e.createElement(c.m$.img,i({as:m,src:F,srcSet:G,crossOrigin:K,loading:x,className:"chakra-image"},A))});d.Ts&&(f.displayName="Image")},491:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/amembo",function(){return c(2629)}])},8598:function(e,b,a){"use strict";a.d(b,{Et:function(){return l},P4:function(){return k},Pg:function(){return m}});var f=a(5893),c=a(1664),g=a.n(c),d=a(5675),h=a.n(d),i=a(8527),j=a(917),k=function(a){var c=a.children,d=a.href,b=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:b,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,f.jsx)(i.AB,{href:d,target:"_blank",children:(0,f.jsx)(i.xv,{mt:2,children:b})}),(0,f.jsx)(i.xv,{fontSize:14,children:c})]})})},l=function(a){var d=a.children,b=a.id,c=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsx)(g(),{href:"/works/".concat(b),passHref:!0,scroll:!1,children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:c,className:"grid-item-thumbnail",placeholder:"blur"}),(0,f.jsx)(i.AB,{href:"/works/".concat(b),children:(0,f.jsx)(i.xv,{mt:2,fontSize:20,children:c})}),(0,f.jsx)(i.xv,{fontSize:14,children:d})]})})})},m=function(){return(0,f.jsx)(j.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},951:function(d,b,a){"use strict";var e=a(5893),f=a(2763),c=a(9008),g=a.n(c);a(7294);var h=a(8598),i={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(b){var d=b.children,c=b.title,a="".concat(c," - Vishal Gupta");return(0,e.jsx)(f.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:i,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,e.jsxs)(e.Fragment,{children:[c&&(0,e.jsxs)(g(),{children:[(0,e.jsx)("title",{children:a}),(0,e.jsx)("meta",{name:"twitter:title",content:a}),(0,e.jsx)("meta",{property:"og:title",content:a})]}),d,(0,e.jsx)(h.Pg,{})]})})}},5930:function(f,a,b){"use strict";var c=b(5934);function d(){var a,b,c=(a=["\n  text-align: justify;\n  text-indent: 1em;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var e=c.Z.p(d());a.Z=e},8971:function(d,b,a){"use strict";a.d(b,{Dx:function(){return j},WZ:function(){return k},h_:function(){return l}});var e=a(5893),c=a(1664),f=a.n(c),g=a(8527),h=a(4651),i=a(9876),j=function(a){var b=a.children;return(0,e.jsxs)(g.xu,{children:[(0,e.jsx)(f(),{href:"/works",passHref:!0,children:(0,e.jsx)(g.rU,{children:"Works"})}),(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(i.XC,{})," "]}),(0,e.jsx)(g.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},k=function(a){var b=a.src,c=a.alt;return(0,e.jsx)(h.Ee,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},l=function(a){var b=a.children;return(0,e.jsx)(g.Ct,{colorScheme:"green",mr:2,children:b})}},2629:function(c,b,a){"use strict";a.r(b);var d=a(5893),e=a(8527),f=a(4651),g=a(951),h=a(9876),i=a(8971),j=a(5930);b.default=function(){return(0,d.jsx)(g.Z,{title:"amembo",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsxs)(i.Dx,{children:["amembo ",(0,d.jsx)(e.Ct,{children:"2005-2008"})]}),(0,d.jsx)(e.M5,{my:6,children:(0,d.jsx)(f.Ee,{src:"/images/works/amembo_icon.png",alt:"icon"})}),(0,d.jsx)(j.Z,{children:"P2P private file sharing tool with MSN Messenger integration for Windows"}),(0,d.jsx)(j.Z,{children:"\u300CMSN Messenger\u300D\u3068\u9023\u4FC2\u3057\u3066\u7279\u5B9A\u30E6\u30FC\u30B6\u30FC\u3068P2P\u30D5\u30A9\u30EB\u30C0\u5171\u6709\u3067\u304D\u308B\u300CAmembo\u300D"}),(0,d.jsxs)(e.QI,{ml:4,my:4,children:[(0,d.jsx)(e.HC,{children:"\u30D5\u30A1\u30A4\u30EB\u8EE2\u9001\u304C\u30B5\u30A4\u30BA\u5236\u9650\u7121\u304F\u9AD8\u901F\u306B\u51FA\u6765\u307E\u3059\u3002"}),(0,d.jsx)(e.HC,{children:"\u8907\u6570\u306E\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u9593\u3067\u540C\u6642\u306B\u901A\u4FE1\u304C\u51FA\u6765\u307E\u3059\u3002"}),(0,d.jsx)(e.HC,{children:"\u7C21\u5358\u63A5\u7D9A\u6A5F\u80FD\u306B\u3088\u308A\u3001\u9762\u5012\u306A\u63A5\u7D9A\u4F5C\u696D\u3092\u81EA\u52D5\u3067\u884C\u3044\u307E\u3059\u3002"}),(0,d.jsx)(e.HC,{children:"\u4E00\u3064\u306E\u30DD\u30FC\u30C8\u958B\u653E\u3060\u3051\u3067\u3001\u69D8\u3005\u306A\u901A\u4FE1\u304C\u51FA\u6765\u308B\u5F37\u529B\u306A\u30D7\u30ED\u30C8\u30B3\u30EB\u3002"}),(0,d.jsx)(e.HC,{children:"IM\u6A5F\u80FD\u3092\u88C5\u5099\u3057\u3066\u3044\u307E\u3059\u3002\u4F1A\u8A71\u4E2D\u306B\u5199\u771F\u3092\u8868\u793A\u3057\u305F\u308A\u3082\u3067\u304D\u307E\u3059\u3002"}),(0,d.jsx)(e.HC,{children:"\u30D5\u30A1\u30A4\u30EB\u5171\u6709\u6A5F\u80FD\u3067\u3001\u8A2D\u5B9A\u3057\u305F\u516C\u958B\u30D5\u30A9\u30EB\u30C0\u3092\u76F8\u624B\u306B\u898B\u305B\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002"}),(0,d.jsx)(e.HC,{children:"MSN/Windows\u30E1\u30C3\u30BB\u30F3\u30B8\u30E3\u30FC\u304B\u3089\u306E\u62DB\u5F85\u3067\u63A5\u7D9A\u3067\u304D\u307E\u3059\u3002"}),(0,d.jsx)(e.HC,{children:"\u753B\u9762\u8EE2\u9001\u6A5F\u80FD\u3067\u3001\u76F8\u624B\u306B\u81EA\u5206\u306E\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7\u3092\u898B\u305B\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002"})]}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(i.h_,{children:"Platform"}),(0,d.jsx)("span",{children:"Windows 2000/XP"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(i.h_,{children:"Stack"}),(0,d.jsx)("span",{children:"Delphi"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(i.h_,{children:"Download"}),(0,d.jsx)(e.rU,{href:"http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip",children:"v0.5.15.123"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(i.h_,{children:"Last update"}),(0,d.jsx)("span",{children:"2008/03/23"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(i.h_,{children:"Manual"}),(0,d.jsx)(e.rU,{href:"https://w.atwiki.jp/amembo/",children:"\u4F7F\u3044\u65B9wiki"})]})]}),(0,d.jsx)(e.X6,{as:"h4",fontSize:16,my:6,children:(0,d.jsx)(e.M5,{children:"Media coverage"})}),(0,d.jsx)(e.QI,{my:4,children:(0,d.jsx)(e.HC,{children:(0,d.jsxs)(e.rU,{href:"https://forest.watch.impress.co.jp/article/2006/01/18/amembo.html",children:[(0,d.jsx)(e.Ct,{mr:2,children:"\u7A93\u306E\u675C"}),"\u300CMSN Messenger\u300D\u3068\u9023\u4FC2\u3057\u3066\u7279\u5B9A\u30E6\u30FC\u30B6\u30FC\u3068P2P\u30D5\u30A9\u30EB\u30C0\u5171\u6709\u3067\u304D\u308B\u300CAmembo\u300D"," ",(0,d.jsx)(h.h0,{mx:"2px"})]})})}),(0,d.jsxs)(e.MI,{columns:2,gap:2,children:[(0,d.jsx)(i.WZ,{src:"/images/works/amembo_01.gif",alt:"amembo"}),(0,d.jsx)(i.WZ,{src:"/images/works/amembo_02.gif",alt:"amembo"})]}),(0,d.jsx)(i.WZ,{src:"/images/works/amembo_03.jpg",alt:"amembo"}),(0,d.jsx)(i.WZ,{src:"/images/works/amembo_04.jpg",alt:"amembo"})]})})}}},function(a){a.O(0,[675,774,888,179],function(){return a(a.s=491)}),_N_E=a.O()}])