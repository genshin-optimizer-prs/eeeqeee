import{r as w,i as b,j as B,b as E,Z as j,aF as k,e as o,V as _,aI as J,n as s,p as t,K as d,W as O,J as x,B as m,aB as M,D as N,C as W,T as $,aJ as A,aK as F}from"./index-d177a7f9.js";import{s as H,S as K,T as P}from"./StarDisplay-ce0f820b.js";import{T as R,d as U}from"./TeamCard-79c54116.js";import{C as q}from"./CardHeader-32818782.js";import"./DropdownButton-887dd144.js";import"./ColoredText-43b2a741.js";import"./index-b41844d8.js";import"./SqBadge-faa1281e.js";import"./Help-97bf66f9.js";import"./FieldDisplay-f8df429d.js";import"./Groups-29f57ed4.js";import"./index-3a1d70c1.js";import"./index-99f42701.js";import"./Artifact-5be11fa1.js";import"./SlotIcon-5319d002.js";import"./useWeapon-a4df8607.js";import"./CardActionArea-7e9098c3.js";var c={},z=b;Object.defineProperty(c,"__esModule",{value:!0});var p=c.default=void 0,G=z(w()),V=B,Z=(0,G.default)((0,V.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");p=c.default=Z;function L(){return{name:a=>a.name??"",lastEdit:a=>a.lastEdit??0}}const Q={name:["name","lastEdit"],lastEdit:["lastEdit"]},X={xs:1,sm:2,md:3,lg:4,xl:4};function ge(){const a=E(),[u,f]=j(),h=k();o.useEffect(()=>a.teams.followAny((e,r)=>(r==="new"||r==="remove"||r==="update")&&f()),[f,a]);const y=()=>{const e=a.teams.new();h(e)},[v,C,g]=_(),[n,I]=o.useState(""),T=()=>{try{const e=JSON.parse(n);a.teams.import(e)||window.alert("Data verification failed."),g()}catch(e){window.alert(`Data Import failed. ${e}`);return}},{sortType:i,ascending:l}=J(a.displayTeam),S=o.useMemo(()=>u&&a.teams.keys.sort((e,r)=>H(Q[i],l,L())(a.teams.get(e),a.teams.get(r))),[u,a.teams,i,l]),D={sortKeys:[...F],value:i,onChange:e=>a.displayTeam.set({sortType:e}),ascending:l,onChangeAsc:e=>a.displayTeam.set({ascending:e})};return s(d,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(d,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:t(K,{...D})}),s(d,{sx:{display:"flex",gap:1},children:[t(m,{fullWidth:!0,onClick:y,color:"info",startIcon:t(U,{}),children:"Add Team"}),t(A,{open:v,onClose:g,children:s(M,{children:[t(q,{title:"Import Team"}),t(N,{}),s(W,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t($,{children:"Import a team in JSON form below."}),t(P,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:n,onChange:e=>I(e.target.value),multiline:!0,rows:4}),t(m,{startIcon:t(p,{}),disabled:!n,onClick:T,children:"Import"})]})]})}),t(m,{fullWidth:!0,onClick:C,color:"info",startIcon:t(p,{}),children:"Import Team"})]}),t(o.Suspense,{fallback:t(O,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(x,{container:!0,spacing:1,columns:X,children:S.map(e=>t(x,{item:!0,xs:1,children:t(R,{teamId:e,bgt:"light",onClick:r=>h(`${e}${r?`/${r}`:""}`)})},e))})})]})}export{ge as default};