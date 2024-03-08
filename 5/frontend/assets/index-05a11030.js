import{as as O,at as V,au as D,av as b,e as R,aw as U,ax as W,j as c,ay as N,az as P,c as l,u as B,M as Y,n,p as e,J as x,aA as f,C as y,K as v,T as a,N as s,aB as h,aC as r,w as $,aD as _,A,L as q,v as F}from"./index-daffa7d6.js";import{C}from"./CardActionArea-ac22682c.js";import{I as J,Y as Q}from"./YouTube-7d99ede5.js";import{L as M}from"./Link-7cebc522.js";function X(t){return O("MuiCardMedia",t)}V("MuiCardMedia",["root","media","img"]);const Z=["children","className","component","image","src","style"],ee=t=>{const{classes:i,isMediaComponent:d,isImageComponent:o}=t;return P({root:["root",d&&"media",o&&"img"]},X,i)},te=D("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:d}=t,{isMediaComponent:o,isImageComponent:p}=d;return[i.root,o&&i.media,p&&i.img]}})(({ownerState:t})=>b({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),ne=["video","audio","picture","iframe","img"],ae=["picture","img"],re=R.forwardRef(function(i,d){const o=U({props:i,name:"MuiCardMedia"}),{children:p,className:G,component:g="div",image:m,src:H,style:S}=o,K=W(o,Z),u=ne.indexOf(g)!==-1,L=!u&&m?b({backgroundImage:`url("${m}")`},S):S,z=b({},o,{component:g,isMediaComponent:u,isImageComponent:ae.indexOf(g)!==-1}),E=ee(z);return c.jsx(te,b({className:N(E.root,G),as:g,role:!u&&m?"img":void 0,ref:d,style:L,ownerState:z,src:u?m||H:void 0},K,{children:p}))}),I=re,se=l(c.jsx("path",{d:"M20 8v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.86 1.28-3.41 3-3.86V2h3v2h4V2h3v2.14c1.72.45 3 2 3 3.86zM6 12v2h10v2h2v-4H6z"}),"Backpack"),w=l(c.jsx("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Computer"),k=l(c.jsx("path",{d:"M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"}),"Gamepad"),ie=l([c.jsx("circle",{cx:"10",cy:"8",r:"4"},"0"),c.jsx("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch"),ce=l(c.jsx("path",{d:"M17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99L17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1zm5-5-4-4v3h-5v2h5v3l4-4z"}),"SendToMobile"),oe=l(c.jsx("path",{d:"m21.58 16.09-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"SportsEsports"),T=l(c.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),le=""+new URL("AdeptiScanner-edb84604.png",import.meta.url).href,de=""+new URL("GIScanner-1fdb979d.png",import.meta.url).href,he=""+new URL("artiscan-728d5901.png",import.meta.url).href;function xe(){const{t}=B("page_scanner");return Y.send({hitType:"pageview",page:"/scanner"}),n(v,{display:"flex",flexDirection:"column",gap:2,my:1,children:[e(f,{children:e(y,{children:n(s,{t,i18nKey:"intro",children:[e(a,{gutterBottom:!0,variant:"h5",children:"Scanners"}),e(a,{children:"Scanners are Genshin tools that can automatically scan game data from screenshots or directly from the game."}),e(a,{gutterBottom:!0,children:"Below are several scanners that have been tested with GO."}),n(a,{variant:"subtitle2",children:["To upload the exported file, go to the",e(M,{component:q,to:"/setting",children:"Settings"}),"page, and upload your file in the","<strong>Database Upload</strong>","section."]})]})})}),n(x,{container:!0,columns:{xs:1,md:2,lg:4},spacing:2,children:[e(x,{item:!0,xs:1,children:n(f,{sx:{height:"100%"},children:[e(C,{href:"https://artiscan.ninjabay.org/",target:"_blank",children:e(I,{component:"img",image:he})}),n(y,{children:[n(v,{display:"flex",gap:1,alignItems:"center",children:[e(a,{variant:"h5",flexGrow:1,children:e(s,{t,i18nKey:"nb.title",children:"Artiscan"})}),e(h,{href:"https://artiscan.ninjabay.org/",target:"_blank",children:e(J,{})}),e(h,{href:"https://youtu.be/_qzzunuef4Y",target:"_blank",children:e(Q,{})})]}),n(a,{variant:"subtitle2",sx:{display:"flex",gap:1,py:1,flexWrap:"wrap"},children:[n(r,{color:"success",sx:{display:"flex",alignItems:"center"},children:[e(k,{sx:{pr:.5}}),"4.4"]}),n(r,{sx:{display:"flex",alignItems:"center"},children:[e(w,{sx:{pr:.5}}),t("tags.pc")]}),n(r,{sx:{display:"flex",alignItems:"center"},children:[e(ce,{sx:{pr:.5}}),t("tags.mobile")]}),n(r,{sx:{display:"flex",alignItems:"center"},children:[e(oe,{sx:{pr:.5}}),t("tags.ps")]})]}),e(a,{gutterBottom:!0,children:t("nb.p1")}),e(a,{gutterBottom:!0,children:t("nb.p2")})]})]})}),e(x,{item:!0,xs:1,children:n(f,{sx:{height:"100%"},children:[e(C,{href:"https://github.com/Andrewthe13th/Inventory_Kamera",target:"_blank",children:e(I,{component:"img",image:de})}),n(y,{children:[n(v,{display:"flex",gap:1,alignItems:"center",children:[e(a,{variant:"h5",flexGrow:1,children:e(s,{t,i18nKey:"ik.title",children:"Inventory Kamera"})}),e(h,{href:"https://discord.gg/zh56aVWe3U",target:"_blank",children:e($,{})}),e(h,{href:"https://github.com/Andrewthe13th/Inventory_Kamera",target:"_blank",children:e(_,{})})]}),n(a,{variant:"subtitle2",sx:{display:"flex",gap:1,py:1,flexWrap:"wrap"},children:[n(r,{color:"success",sx:{display:"flex",alignItems:"center"},children:[e(k,{sx:{pr:.5}}),"4.4"]}),n(r,{sx:{display:"flex",alignItems:"center"},children:[e(w,{sx:{pr:.5}}),t("tags.pc")]}),n(r,{sx:{display:"flex",alignItems:"center"},children:[e(ie,{sx:{pr:.5}}),t("tags.characters")]}),n(r,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e(A,{}),t("tags.weapons")]}),n(r,{sx:{display:"flex",alignItems:"center"},children:[e(se,{sx:{pr:.5}}),t("tags.materials")]}),e(j,{children:n(r,{color:"warning",sx:{display:"flex",alignItems:"center"},children:[e(T,{sx:{pr:.5}}),t("tags.gameMani")]})})]}),e(a,{gutterBottom:!0,children:e(s,{t,i18nKey:"ik.p1"})}),e(a,{gutterBottom:!0,children:n(s,{t,i18nKey:"seelieme",children:["This app can also scan materials for",e(M,{href:"https://seelie.me/",target:"_blank",rel:"noreferrer",children:"Seelie.me"})]})}),e(a,{gutterBottom:!0,children:n(s,{t,i18nKey:"goodeng",children:["This app only scans in English and exports to",e("code",{children:"GOOD"}),"format."]})})]})]})}),e(x,{item:!0,xs:1,children:n(f,{sx:{height:"100%"},children:[e(C,{href:"https://github.com/D1firehail/AdeptiScanner-GI",target:"_blank",children:e(I,{component:"img",image:le})}),n(y,{children:[n(v,{display:"flex",gap:1,alignItems:"center",children:[e(a,{variant:"h5",flexGrow:1,children:e(s,{t,i18nKey:"as.title",children:"AdeptiScanner"})}),e(h,{href:"https://github.com/D1firehail/AdeptiScanner-GI",target:"_blank",children:e(_,{})})]}),n(a,{variant:"subtitle2",sx:{display:"flex",gap:1,py:1,flexWrap:"wrap"},children:[n(r,{color:"success",sx:{display:"flex",alignItems:"center"},children:[e(k,{sx:{pr:.5}}),"4.4"]}),n(r,{sx:{display:"flex",alignItems:"center"},children:[e(w,{sx:{pr:.5}}),t("tags.pc")]}),n(r,{sx:{display:"flex",alignItems:"center",gap:.5},children:[e(A,{}),t("tags.weapons")]}),e(j,{children:n(r,{color:"warning",sx:{display:"flex",alignItems:"center"},children:[e(T,{sx:{pr:.5}}),t("tags.gameMani")]})})]}),e(a,{gutterBottom:!0,children:n(s,{t,i18nKey:"as.p1",children:["Scans all artifacts and weapons in your inventory. Has a manual scanning mode and can also import via",e(M,{href:"https://enka.network/",target:"_blank",rel:"noreferrer",children:"Enka.Network"}),"."]})}),e(a,{gutterBottom:!0,children:e(s,{t,i18nKey:"as.p2",children:"This scanner can also be configured for new artifacts in new game versions without needing an update."})}),e(a,{gutterBottom:!0,children:n(s,{t,i18nKey:"goodeng",children:["This app only scans in English and exports to",e("code",{children:"GOOD"}),"format."]})})]})]})})]})]})}function j({children:t}){const{t:i}=B("page_scanner");return e(F,{placement:"top",title:e(a,{children:n(s,{t:i,i18nKey:"tosWarn",children:["As any tools that indirectly interact with the game, although their usage is virtually undetectable,",e(M,{color:"inherit",href:"https://genshin.mihoyo.com/en/news/detail/5763",target:"_blank",rel:"noreferrer",children:"there could still be risk with using them."}),"Users discretion is advised."]})}),children:t})}export{xe as default};
