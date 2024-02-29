import{l as T,m as W,p as e,ag as L,n as t,q as S,K as r,h as z,as as v,cz as B,u as U,b as V,e as h,W as q,aC as J,T as c,bV as P,C as Q,v as Y,B as k,Y as E,s as X}from"./index-d177a7f9.js";import{d as Z,C as ee,b as ae,L as ne}from"./StarDisplay-ce0f820b.js";import{T as I,S as M,h as _,e as se,f as te,g as oe,d as ie}from"./LocationAutocomplete-21d94352.js";import{I as A,i as j}from"./ColoredText-43b2a741.js";import{v as re,w as le,u as y,x as pe,n as ce}from"./index-b41844d8.js";import{u as de}from"./useWeapon-a4df8607.js";import{g as ue}from"./index-99f42701.js";import{C as me}from"./CardActionArea-7e9098c3.js";const he=_([...L]);function We({value:a,totals:s,onChange:d,...u}){const g=T(),p=!W(g.breakpoints.up("sm"));return e(M,{exclusive:!0,value:a,...u,children:L.map(o=>e(I,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(he(a,o)),children:t(r,{display:"flex",children:[e("strong",{children:o}),e(Z,{}),e(S,{label:s[o],size:"small"})]})},o))})}const ge=_([...z]);function Le({value:a,totals:s,onChange:d,...u}){const g=T(),p=!W(g.breakpoints.up("sm"));return e(M,{exclusive:!0,value:a,...u,children:z.map(o=>{var m;return t(I,{value:o,sx:{p:p?1:void 0,minWidth:p?0:"6em",display:"flex",gap:p?0:1},onClick:()=>d(ge(a,o)),children:[e(A,{src:(m=j.weaponTypes)==null?void 0:m[o],size:2,sideMargin:!0}),e(S,{label:s[o],size:"small"})]},o)})})}function Se(){return{level:a=>a.level*(a.ascension+1),rarity:a=>v.weapon.data[a.key].rarity,name:a=>B.t(`weaponNames_gen:${a.key}`)}}function ze(){return{rarity:(a,s)=>s.includes(v.weapon.data[a.key].rarity),weaponType:(a,s)=>s.includes(v.weapon.data[a.key].weaponType),name:(a,s)=>B.t(`weaponNames_gen:${a.key}`).toLowerCase().includes(s.toLowerCase())}}const Be={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function Ie({weaponId:a,onClick:s,onEdit:d,onDelete:u,canEquip:g=!1,extraButtons:p}){const{t:o}=U(["page_weapon","ui"]),m=V(),l=de(a),i=l!=null&&l.key?ue(l.key):void 0,D=h.useCallback(n=>n.weaponTypeKey===(i==null?void 0:i.weaponType),[i]),K=h.useCallback(n=>e(me,{onClick:()=>s==null?void 0:s(a),children:n}),[s,a]),N=h.useCallback(n=>e(r,{children:n}),[]),$=h.useCallback(n=>a&&m.weapons.set(a,{location:n}),[m,a]),f=h.useMemo(()=>i&&l&&re([i.data,le(l)]),[i,l]);if(!l||!i||!f)return null;const{level:F,ascension:C,refinement:O,id:x,location:b="",lock:w}=l,R=f.get(y.weapon.type).value,G=[y.weapon.main,y.weapon.sub,y.weapon.sub2].map(n=>f.get(n)),H=pe(l.key,C>=2);return e(h.Suspense,{fallback:e(q,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:t(X,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t(ee,{condition:!!s,wrapper:K,falseWrapper:N,children:[t(r,{className:`grad-${i.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!s&&e(J,{color:"primary",onClick:()=>m.weapons.set(x,{lock:!w}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:w?e(se,{}):e(te,{})}),t(r,{sx:{position:"relative",zIndex:1},children:[t(r,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e(A,{size:2,src:j.weaponTypes[R]}),e(c,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:e("strong",{children:i.name})})]}),t(c,{component:"span",variant:"h5",children:["Lv. ",F]}),t(c,{component:"span",variant:"h5",color:"text.secondary",children:["/",P[C]]}),t(c,{variant:"h6",children:["Refinement ",e("strong",{children:O})]}),e(ae,{stars:i.rarity,colored:!0})]}),e(r,{sx:{height:"100%",position:"absolute",right:0,top:0},children:e(r,{component:"img",src:H??"",width:"auto",height:"100%",sx:{float:"right"}})})]}),e(Q,{children:G.map(n=>n.info.name?t(r,{sx:{display:"flex"},children:[t(c,{flexGrow:1,children:[n.info.icon," ",n.info.name]}),e(c,{children:ce(n)})]},JSON.stringify(n.info)):null)})]}),t(r,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[e(r,{sx:{flexGrow:1},children:g?e(oe,{location:b,setLocation:$,filter:D,autoCompleteProps:{getOptionDisabled:n=>!n.key}}):e(ne,{location:b})}),t(r,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!d&&e(Y,{title:e(c,{children:o`page_weapon:edit`}),placement:"top",arrow:!0,children:e(k,{color:"info",size:"small",onClick:()=>d(x),children:e(ie,{})})}),!!u&&e(k,{color:"error",size:"small",onClick:()=>u(x),disabled:!!b||w,children:e(E,{})}),p]})]})]})})}export{Le as W,We as a,Ie as b,ze as c,Se as d,Be as w};
