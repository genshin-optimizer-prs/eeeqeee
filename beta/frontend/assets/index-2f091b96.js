import{r as w,i as b,j as E,b as j,X as B,aE as k,e as o,Q as _,aH as J,n as s,p as t,K as d,U as O,J as x,B as m,aA as A,D as H,C as M,T as N,aI as U,aJ as $}from"./index-b6e89ba9.js";import{s as P,S as R,T as W}from"./StarDisplay-b65a0355.js";import{T as q,d as F}from"./TeamCard-a9f5492a.js";import{C as K}from"./CardHeader-75526952.js";import"./DropdownButton-eae0b9ed.js";import"./ColoredText-d0f2b2eb.js";import"./index-85f26cad.js";import"./SqBadge-3680593f.js";import"./BootstrapTooltip-a6e82c53.js";import"./FieldDisplay-34e592d8.js";import"./Groups-8a793719.js";import"./index-d59a3e2e.js";import"./index-361f2a95.js";import"./Artifact-e427f336.js";import"./SlotIcon-27cd119e.js";import"./useWeapon-2e8feb4b.js";import"./CardActionArea-a34ae2e1.js";var c={},z=b;Object.defineProperty(c,"__esModule",{value:!0});var p=c.default=void 0,G=z(w()),Q=E,X=(0,G.default)((0,Q.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload");p=c.default=X;function L(){return{name:a=>a.name??"",lastEdit:a=>a.lastEdit??0}}const V={name:["name","lastEdit"],lastEdit:["lastEdit"]},Y={xs:1,sm:2,md:3,lg:4,xl:4};function ge(){const a=j(),[u,f]=B(),h=k();o.useEffect(()=>a.teams.followAny((e,r)=>(r==="new"||r==="remove"||r==="update")&&f()),[f,a]);const y=()=>{const e=a.teams.new();h(e)},[v,C,g]=_(),[n,I]=o.useState(""),T=()=>{try{const e=JSON.parse(n);a.teams.import(e)||window.alert("Data verification failed."),g()}catch(e){window.alert(`Data Import failed. ${e}`);return}},{sortType:i,ascending:l}=J(a.displayTeam),S=o.useMemo(()=>u&&a.teams.keys.sort((e,r)=>P(V[i],l,L())(a.teams.get(e),a.teams.get(r))),[u,a.teams,i,l]),D={sortKeys:[...$],value:i,onChange:e=>a.displayTeam.set({sortType:e}),ascending:l,onChangeAsc:e=>a.displayTeam.set({ascending:e})};return s(d,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(d,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:t(R,{...D})}),s(d,{sx:{display:"flex",gap:1},children:[t(m,{fullWidth:!0,onClick:y,color:"info",startIcon:t(F,{}),children:"Add Team"}),t(U,{open:v,onClose:g,children:s(A,{children:[t(K,{title:"Import Team"}),t(H,{}),s(M,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t(N,{children:"Import a team in JSON form below."}),t(W,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:n,onChange:e=>I(e.target.value),multiline:!0,rows:4}),t(m,{startIcon:t(p,{}),disabled:!n,onClick:T,children:"Import"})]})]})}),t(m,{fullWidth:!0,onClick:C,color:"info",startIcon:t(p,{}),children:"Import Team"})]}),t(o.Suspense,{fallback:t(O,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(x,{container:!0,spacing:1,columns:Y,children:S.map(e=>t(x,{item:!0,xs:1,children:t(q,{teamId:e,bgt:"light",onClick:r=>h(`${e}${r?`/${r}`:""}`)})},e))})})]})}export{ge as default};