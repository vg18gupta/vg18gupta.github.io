(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{4651:function(g,b,a){"use strict";a.d(b,{Ee:function(){return f}});var c=a(6052),d=a(5031),e=a(7294),h=a(4697);function i(){return(i=Object.assign||function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function j(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var k=["htmlWidth","htmlHeight","alt"],l=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],m=e.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,f=a.alt,g=j(a,k);return e.createElement("img",i({width:c,height:d,ref:b,alt:f},g))}),f=(0,c.Gp)(function(a,B){var b,o,f,p,q,r,s,t,g,k,n,C,D,u,E,v=a.fallbackSrc,w=a.fallback,F=a.src,G=a.srcSet,H=a.align,I=a.fit,x=a.loading,J=a.ignoreFallback,K=a.crossOrigin,y=j(a,l),z=null!=x||J|| void 0===v&& void 0===w,L=(o=(b=i({},a,{ignoreFallback:z})).loading,f=b.src,p=b.srcSet,q=b.onLoad,r=b.onError,s=b.crossOrigin,t=b.sizes,g=b.ignoreFallback,k=(0,e.useState)("pending"),n=k[0],C=k[1],(0,e.useEffect)(function(){C(f?"loading":"pending")},[f]),D=(0,e.useRef)(),u=(0,e.useCallback)(function(){if(f){E();var a=new Image;a.src=f,s&&(a.crossOrigin=s),p&&(a.srcset=p),t&&(a.sizes=t),o&&(a.loading=o),a.onload=function(a){E(),C("loaded"),null==q||q(a)},a.onerror=function(a){E(),C("failed"),null==r||r(a)},D.current=a}},[f,s,p,t,q,r,o]),E=function(){D.current&&(D.current.onload=null,D.current.onerror=null,D.current=null)},(0,h.a)(function(){if(!g)return"loading"===n&&u(),function(){E()}},[n,u,g]),g?"loaded":n),A=i({ref:B,objectFit:I,objectPosition:H},z?y:(0,d.CE)(y,["onError","onLoad"]));return"loaded"!==L?w||e.createElement(c.m$.img,i({as:m,className:"chakra-image__placeholder",src:v},A)):e.createElement(c.m$.img,i({as:m,src:F,srcSet:G,crossOrigin:K,loading:x,className:"chakra-image"},A))});d.Ts&&(f.displayName="Image")},871:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/modetokyo",function(){return c(7120)}])},8598:function(e,b,a){"use strict";a.d(b,{Et:function(){return l},P4:function(){return k},Pg:function(){return m}});var f=a(5893),c=a(1664),g=a.n(c),d=a(5675),h=a.n(d),i=a(8527),j=a(917),k=function(a){var c=a.children,d=a.href,b=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:b,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,f.jsx)(i.AB,{href:d,target:"_blank",children:(0,f.jsx)(i.xv,{mt:2,children:b})}),(0,f.jsx)(i.xv,{fontSize:14,children:c})]})})},l=function(a){var d=a.children,b=a.id,c=a.title,e=a.thumbnail;return(0,f.jsx)(i.xu,{w:"100%",textAlign:"center",children:(0,f.jsx)(g(),{href:"/works/".concat(b),passHref:!0,scroll:!1,children:(0,f.jsxs)(i.fG,{cursor:"pointer",children:[(0,f.jsx)(h(),{src:e,alt:c,className:"grid-item-thumbnail",placeholder:"blur"}),(0,f.jsx)(i.AB,{href:"/works/".concat(b),children:(0,f.jsx)(i.xv,{mt:2,fontSize:20,children:c})}),(0,f.jsx)(i.xv,{fontSize:14,children:d})]})})})},m=function(){return(0,f.jsx)(j.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},951:function(d,b,a){"use strict";var e=a(5893),f=a(2763),c=a(9008),g=a.n(c);a(7294);var h=a(8598),i={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(b){var d=b.children,c=b.title,a="".concat(c," - Vishal Gupta");return(0,e.jsx)(f.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:i,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,e.jsxs)(e.Fragment,{children:[c&&(0,e.jsxs)(g(),{children:[(0,e.jsx)("title",{children:a}),(0,e.jsx)("meta",{name:"twitter:title",content:a}),(0,e.jsx)("meta",{property:"og:title",content:a})]}),d,(0,e.jsx)(h.Pg,{})]})})}},5930:function(f,a,b){"use strict";var c=b(5934);function d(){var a,b,c=(a=["\n  text-align: justify;\n  text-indent: 1em;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var e=c.Z.p(d());a.Z=e},8971:function(d,b,a){"use strict";a.d(b,{Dx:function(){return j},WZ:function(){return k},h_:function(){return l}});var e=a(5893),c=a(1664),f=a.n(c),g=a(8527),h=a(4651),i=a(9876),j=function(a){var b=a.children;return(0,e.jsxs)(g.xu,{children:[(0,e.jsx)(f(),{href:"/works",passHref:!0,children:(0,e.jsx)(g.rU,{children:"Works"})}),(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(i.XC,{})," "]}),(0,e.jsx)(g.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},k=function(a){var b=a.src,c=a.alt;return(0,e.jsx)(h.Ee,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},l=function(a){var b=a.children;return(0,e.jsx)(g.Ct,{colorScheme:"green",mr:2,children:b})}},7120:function(c,b,a){"use strict";a.r(b);var d=a(5893),e=a(8527),f=a(951),g=a(9876),h=a(8971),i=a(5930);b.default=function(){return(0,d.jsx)(f.Z,{title:"mode.tokyo",children:(0,d.jsxs)(e.W2,{children:[(0,d.jsxs)(h.Dx,{children:["mode.tokyo ",(0,d.jsx)(e.Ct,{children:"2016"})]}),(0,d.jsx)(i.Z,{children:"The mode magazine for understanding to personally enjoy Japan."}),(0,d.jsxs)(i.Z,{children:["It is one of the projects launched at"," ",(0,d.jsxs)(e.rU,{href:"https://innolab.jp/",target:"_blank",children:["Open Innovation Lab (\u96FB\u901A\u30A4\u30CE\u30E9\u30DC) ",(0,d.jsx)(g.h0,{mx:"2px"})]}),", aiming to visualize the impact of media contents on the visit of foreign high-intellect class to Japan, who are highly interested in Japanese culture. I joined the project to build its mobile app for iOS where you can read free articles of the magazine."]}),(0,d.jsx)(i.Z,{children:"\u96FB\u5B50\u7248\u3068\u3057\u3066iOS\u30A2\u30D7\u30EA\u3092\u62C5\u5F53\u3002\u65E5\u82F1\u4ECF\u5BFE\u5FDC\u3002 \u304D\u3085\u3093\u304F\u3093\u3084\u30E9\u30D6\u30EA\u30FC\u30B5\u30DE\u30FC\u3061\u3083\u3093\u306A\u3069\u3092\u8A8C\u9762\u3067\u53D6\u308A\u4E0A\u3052\u3066\u3044\u308B\u3002 \u672C\u96D1\u8A8C\u306FISID\u30A4\u30CE\u30E9\u30DC\u69D8\u3068\u89D2\u5DDD\u30A2\u30B9\u30AD\u30FC\u7DCF\u5408\u7814\u7A76\u6240\u69D8\u306E\u5171\u540C\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3059\u3002"}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Platform"}),(0,d.jsx)("span",{children:"iOS"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Stack"}),(0,d.jsx)("span",{children:"Swift"})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Press release"}),(0,d.jsxs)(e.rU,{href:"https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf",children:["ISID Starts a Research Project to Visualize Impact of Media Contents on Visit of Foreign High-Intellect Class to Japan"," ",(0,d.jsx)(g.h0,{mx:"2px"})]})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(h.h_,{children:"Press release"}),(0,d.jsxs)(e.rU,{href:"https://innolab.jp/news/achievement/335",children:["\u30E1\u30C7\u30A3\u30A2\u30B3\u30F3\u30C6\u30F3\u30C4\u304C\u8A2A\u65E5\u884C\u52D5\u306B\u4E0E\u3048\u308B\u5F71\u97FF\u3092\u53EF\u8996\u5316\u3059\u308B\u7814\u7A76\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u59CB\u52D5"," ",(0,d.jsx)(g.h0,{mx:"2px"})]})]})]}),(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_eyecatch.png",alt:"mode.tokyo"}),(0,d.jsxs)(e.MI,{columns:2,gap:2,children:[(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_01.png",alt:"mode.tokyo"}),(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_02.png",alt:"mode.tokyo"})]}),(0,d.jsx)(h.WZ,{src:"/images/works/modetokyo_03.jpg",alt:"mode.tokyo"})]})})}}},function(a){a.O(0,[675,774,888,179],function(){return a(a.s=871)}),_N_E=a.O()}])