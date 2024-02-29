import{e as l,n as g,K as A,an as _e,p as e,D as se,a1 as _,a3 as I,b9 as oe,r as re,i as ne,j as ie,u as k,c3 as ce,bh as ae,q as S,c4 as Ie,U as ue,b as de,d as Ae,aa as Re,aq as ze,cK as Ee,ap as me,W as qe,B as H,o as $e,J as V,cE as M,k as P,N as je,ao as Be}from"./index-7d748782.js";import{d as Ve,a as He}from"./LockOpen-8ca849c8.js";import{i as R,L as Me,T as L,S as w,h as z}from"./LocationAutocomplete-c88a4e92.js";import{b as Pe}from"./totalUtils-1788cdff.js";import{B as Ne}from"./Help-21e3fc62.js";import{b as he,a as We}from"./StarDisplay-ad283288.js";import{S as fe,s as Ge}from"./sortByRarityAndName-0570b2fa.js";import{a as pe}from"./Artifact-ff9959fb.js";import{S as be,g as Fe}from"./index-0f2ee152.js";import{a as Je,s as Ue}from"./index-c8699fbe.js";import{I as Qe}from"./ColoredText-509d8aeb.js";import{S as Xe}from"./SlotIcon-e5ef4748.js";function Ye({levelLow:d,levelHigh:s,setLow:n,setHigh:b,setBoth:u,dark:i=!1,disabled:m=!1,showLevelText:h=!1}){const[o,a]=l.useState(d),[y,v]=l.useState(s),C=l.useCallback((x,f)=>{if(typeof f=="number")throw new TypeError;const[r,p]=f;a(r),v(p)},[a,v]);return l.useEffect(()=>a(d),[a,d]),l.useEffect(()=>v(s),[v,s]),g(oe,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:i?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[g(A,{sx:{width:h?100:55,height:32,display:"flex"},children:[h?g(_e,{children:[e("span",{style:{padding:0,width:"55%",borderRadius:"4px 0 0 4px",display:"flex",justifyContent:"center",alignItems:"center",color:"rgba(255,255,255,0.9)",backgroundColor:"rgb(30,120,200)"},children:"Level"}),e(se,{orientation:"vertical",flexItem:!0})]}):void 0,e(I,{value:o,onChange:x=>n(_(x??0,0,s)),sx:{px:1,width:h?"45%":"100%",borderRadius:h?0:"4px 0 0 4px"},inputProps:{sx:{textAlign:h?"right":"center"}},disabled:m})]}),e(fe,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact Level Range",value:[o,y],onChange:C,onChangeCommitted:(x,f)=>u(f[0],f[1]),valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:m}),e(I,{value:y,onChange:x=>b(_(x??0,d,20)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:m})]})}var W={},Ze=ne;Object.defineProperty(W,"__esModule",{value:!0});var ge=W.default=void 0,De=Ze(re()),Oe=ie,et=(0,De.default)((0,Oe.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");ge=W.default=et;var G={},tt=ne;Object.defineProperty(G,"__esModule",{value:!0});var xe=G.default=void 0,at=tt(re()),le=ie,lt=(0,at.default)([(0,le.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,le.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");xe=G.default=lt;function st({mainStatKeys:d,setMainStatKeys:s,totals:n}){const{t:b}=k("artifact"),{t:u}=k("statKey_gen"),i=l.useMemo(()=>ce.map(a=>({key:a,label:`${u(a)}${pe(a)}`,variant:ae.getVariant(a)})),[u]),m=l.useCallback(a=>e(be,{statKey:a,iconProps:{sx:{ml:1,color:ae.getVariant(a)}}}),[]),h=l.useCallback(a=>e("strong",{children:n[a]}),[n]),o=l.useCallback(a=>e(S,{size:"small",label:n[a]}),[n]);return e(R,{options:i,valueKeys:d,onChange:s,toImg:m,toExLabel:h,toExItemLabel:o,label:b("autocompleteLabels.mainStats")})}function ot({artSetKeys:d,setArtSetKeys:s,totals:n}){const{t:b}=k(["artifact","artifactNames_gen"]),u=l.useCallback(o=>e(Qe,{src:Je(o),size:3}),[]),i=l.useCallback(o=>e("strong",{children:n[o]}),[n]),m=l.useCallback(o=>e(S,{size:"small",label:n[o]}),[n]),h=l.useMemo(()=>Object.entries(Ue).flatMap(([o,a])=>a.map(y=>({key:y,grouper:+o,label:b(`artifactNames_gen:${y}`)}))).sort(Ge),[b]);return e(R,{options:h,valueKeys:d,label:b("artifact:autocompleteLabels.sets"),toImg:u,toExLabel:i,toExItemLabel:m,onChange:s,groupBy:o=>{var a;return((a=o.grouper)==null?void 0:a.toString())??""},renderGroup:o=>o.group&&g(Ie,{component:A,children:[g(Me,{sx:{top:"-1em"},children:[o.group," ",e(he,{stars:+o.group,inline:!0})]},`${o.group}Header`),o.children]},o.group)})}function rt({substatKeys:d,setSubstatKeys:s,totals:n}){const{t:b}=k("artifact"),{t:u}=k("statKey_gen"),i=l.useMemo(()=>ue.map(a=>({key:a,label:`${u(a)}${pe(a)}`})),[u]),m=l.useCallback(a=>e(be,{statKey:a,iconProps:{sx:{ml:1}}}),[]),h=l.useCallback(a=>e("strong",{children:n[a]}),[n]),o=l.useCallback(a=>e(S,{size:"small",label:n[a]}),[n]);return e(R,{options:i,toImg:m,toExLabel:h,toExItemLabel:o,valueKeys:d,onChange:s,label:b("autocompleteLabels.substats")})}function nt({locations:d,setLocations:s,totals:n,disabled:b}){const{t:u}=k(["artifact","sillyWisher_charNames","charNames_gen"]),i=de(),{gender:m}=Ae(),{silly:h}=l.useContext(Re),o=l.useCallback((r,p)=>u(`${p?"sillyWisher_charNames":"charNames_gen"}:${ze(i.chars.LocationToCharacterKey(r),m)}`),[i,m,u]),a=l.useCallback(r=>e(We,{characterKey:i.chars.LocationToCharacterKey(r)}),[i]),y=l.useCallback(r=>e("strong",{children:n[r]}),[n]),v=l.useCallback(r=>e(S,{size:"small",label:n[r]}),[n]),C=l.useCallback(r=>r==="Traveler"?Ee.some(p=>i.charMeta.get(p).favorite):r?i.charMeta.get(r).favorite:!1,[i]),x=l.useCallback(r=>Fe(i.chars.LocationToCharacterKey(r),m).elementKey??void 0,[i,m]),f=l.useMemo(()=>me.filter(r=>i.chars.get(i.chars.LocationToCharacterKey(r))).map(r=>({key:r,label:o(r,h),favorite:C(r),color:x(r),alternateNames:[o(r,!1)]})).sort((r,p)=>r.favorite&&!p.favorite?-1:!r.favorite&&p.favorite?1:r.label.localeCompare(p.label)),[i.chars,C,x,h,o]);return e(l.Suspense,{fallback:e(qe,{variant:"text",width:100}),children:e(R,{disabled:b,options:f,valueKeys:d,onChange:r=>s(r),toImg:a,toExLabel:y,toExItemLabel:v,label:u`artifact:filterLocation.location`,chipProps:{variant:"outlined"}})})}function it({rvLow:d,rvHigh:s,useMaxRV:n,switchFilter:b,setLow:u,setHigh:i,setBoth:m,dark:h=!1,disabled:o=!1}){const[a,y]=l.useState(n),[v,C]=l.useState(d),[x,f]=l.useState(s),r=l.useCallback((p,T)=>{if(typeof T=="number")throw new TypeError;const[E,q]=T;C(E),f(q)},[C,f]);return l.useEffect(()=>C(d),[C,d]),l.useEffect(()=>f(s),[f,s]),l.useEffect(()=>y(n),[y,n]),g(oe,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:h?"contentNormal.main":"contentLight.main",overflow:"visible"},children:[g(A,{sx:{width:100,height:32,display:"flex"},children:[e(H,{onClick:()=>b(!n),sx:{p:0,minWidth:0,width:"55%",borderRadius:"4px 0 0 4px",fontWeight:400,fontSize:"16px",display:"inline",textAlign:"center",color:"rgba(255,255,255,0.9)"},children:a?"MRV":"RV"}),e(se,{orientation:"vertical",flexItem:!0}),e(I,{value:v,onChange:p=>u(_(p??0,0,x)),sx:{pr:1,width:"45%"},inputProps:{sx:{textAlign:"right"}},disabled:o})]}),e(fe,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>`Arifact ${a?"Max RV":"RV"} Range`,value:[v,x],onChange:r,onChangeCommitted:(p,T)=>m(T[0],T[1]),valueLabelDisplay:"auto",min:0,max:900,disabled:o}),e(I,{value:x,onChange:p=>i(_(p??0,v,900)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:o})]})}const N=["locked","unlocked"],ct=z([...M]),ut=z([...P]),dt=z([...N]),mt=z([1,2,3,4]);function ht({filterOption:d,filterOptionDispatch:s,filteredIds:n,disableSlotFilter:b=!1}){const{t:u}=k(["artifact","ui"]),i=l.useMemo(()=>$e(n,t=>!0),[n]),{artSetKeys:m=[],mainStatKeys:h=[],rarity:o=[],slotKeys:a=[],levelLow:y=0,levelHigh:v=20,substats:C=[],locations:x,showEquipped:f,showInventory:r,locked:p=[...N],rvLow:T=0,rvHigh:E=900,useMaxRV:q=!1,lines:F=[]}=d,J=de(),{rarityTotal:ye,slotTotal:ve,lockedTotal:Ce,linesTotal:Se,equippedTotal:U,setTotal:Te,mainStatTotal:ke,subStatTotal:Ke,locationTotal:Le}=l.useMemo(()=>{const t={rarityTotal:M,slotTotal:P,lockedTotal:["locked","unlocked"],linesTotal:[0,1,2,3,4],equippedTotal:["equipped","unequipped"],setTotal:Be,mainStatTotal:ce,subStatTotal:ue,locationTotal:[...me,""]};return Pe(t,c=>Object.entries(J.arts.data).forEach(([Q,K])=>{const{rarity:X,slotKey:Y,location:$,setKey:Z,mainStatKey:D,substats:we}=K,O=K.lock?"locked":"unlocked",ee=K.substats.filter(j=>j.value).length,te=$?"equipped":"unequipped";(!b||K.slotKey===d.slotKeys[0])&&(c.rarityTotal[X].total++,c.slotTotal[Y].total++,c.lockedTotal[O].total++,c.linesTotal[ee].total++,c.equippedTotal[te].total++,c.setTotal[Z].total++,c.mainStatTotal[D].total++,we.forEach(j=>{const B=j.key;B&&(c.subStatTotal[B].total++,i[Q]&&c.subStatTotal[B].current++)}),c.locationTotal[$].total++),i[Q]&&(c.rarityTotal[X].current++,c.slotTotal[Y].current++,c.lockedTotal[O].current++,c.linesTotal[ee].current++,c.equippedTotal[te].current++,c.setTotal[Z].current++,c.mainStatTotal[D].current++,c.locationTotal[$].current++)}))},[J,b,i,d]);return g(V,{container:!0,spacing:1,children:[g(V,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[e(w,{fullWidth:!0,value:o,size:"small",children:M.map(t=>g(L,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({rarity:ct(o,t)}),children:[e(he,{stars:t,inline:!0}),e(S,{label:ye[t],size:"small"})]},t))}),e(w,{fullWidth:!0,value:a,size:"small",disabled:b,children:P.map(t=>g(L,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({slotKeys:ut(a,t)}),children:[e(Xe,{slotKey:t}),e(S,{label:ve[t],size:"small"})]},t))}),e(w,{fullWidth:!0,value:p,size:"small",children:N.map((t,c)=>g(L,{value:t,sx:{display:"flex",gap:1},onClick:()=>s({locked:dt(p,t)}),children:[c?e(Ve,{}):e(He,{}),e(je,{i18nKey:`ui:${t}`,t:u}),e(S,{label:Ce[c?"unlocked":"locked"],size:"small"})]},t))}),e(w,{fullWidth:!0,value:F,size:"small",children:[1,2,3,4].map(t=>g(L,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>s({lines:mt(F,t)}),children:[e(A,{whiteSpace:"nowrap",children:u("sub",{count:t})}),e(S,{label:Se[t],size:"small"})]},t))}),g(H,{startIcon:e(xe,{}),color:f?"success":"secondary",onClick:()=>s({showEquipped:!f}),children:[u`equippedArt`," ",e(S,{sx:{ml:1},label:U.equipped,size:"small"})]}),g(H,{startIcon:e(ge,{}),color:r?"success":"secondary",onClick:()=>s({showInventory:!r}),children:[u`artInInv`," ",e(S,{sx:{ml:1},label:U.unequipped,size:"small"})]}),e(Ye,{showLevelText:!0,levelLow:y,levelHigh:v,setLow:t=>s({levelLow:t}),setHigh:t=>s({levelHigh:t}),setBoth:(t,c)=>s({levelLow:t,levelHigh:c})}),e(it,{showLevelText:!0,rvLow:T,rvHigh:E,useMaxRV:q,switchFilter:t=>s({useMaxRV:t}),setLow:t=>s({rvLow:t}),setHigh:t=>s({rvHigh:t}),setBoth:(t,c)=>s({rvLow:t,rvHigh:c})})]}),g(V,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[e(ot,{totals:Te,artSetKeys:m,setArtSetKeys:t=>s({artSetKeys:t})}),e(st,{totals:ke,mainStatKeys:h,setMainStatKeys:t=>s({mainStatKeys:t})}),e(rt,{totals:Ke,substatKeys:C,setSubstatKeys:t=>s({substats:t})}),e(l.Suspense,{fallback:null,children:e(Ne,{title:f?u`locationsTooltip`:"",placement:"top",children:e("span",{children:e(nt,{totals:Le,locations:f?[]:x,setLocations:t=>s({locations:t}),disabled:f})})})})]})]})}const Lt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"}));export{ht as A,Ye as a,Lt as b};
