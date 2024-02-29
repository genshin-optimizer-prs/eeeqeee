import{b as R,aF as A,ah as O,e as s,aG as ue,u as me,aa as de,Z as fe,M as ge,d as ye,aq as Ce,n as d,p as t,C as $,J as h,K as C,t as B,B as v,W as xe,an as we,D as Te,a1 as be,h as Se,f as ve,aH as ke}from"./index-d177a7f9.js";import{u as De,P as G}from"./LocationAutocomplete-21d94352.js";import{f as We,s as Ke,T as Me}from"./StarDisplay-ce0f820b.js";import{d as L,C as Pe}from"./TeamCard-79c54116.js";import{E as Ie,C as Ee,D as Ne,c as z,a as je,b as Fe,d as _e,e as $e}from"./CharacterRarityToggle-66d2e396.js";import{W as Be}from"./WeaponCard-e65d983e.js";import{g as k}from"./index-b41844d8.js";import{g as Ge}from"./index-99f42701.js";import{c as D}from"./totalUtils-ff47d4cb.js";import"./ColoredText-43b2a741.js";import"./DropdownButton-887dd144.js";import"./Help-97bf66f9.js";import"./SqBadge-faa1281e.js";import"./FieldDisplay-f8df429d.js";import"./Groups-29f57ed4.js";import"./index-3a1d70c1.js";import"./Artifact-5be11fa1.js";import"./SlotIcon-5319d002.js";import"./useWeapon-a4df8607.js";import"./CardActionArea-7e9098c3.js";import"./CloseButton-24f4c88c.js";import"./WeaponEditor-184aa190.js";import"./InfoTooltip-62ff2230.js";import"./CardHeader-32818782.js";import"./ArtifactSort-69359b01.js";import"./CheckBoxOutlineBlank-452e69df.js";import"./ChevronRight-c1454a4d.js";import"./WeaponSelectionModal-b12ebb02.js";function Le(){const a=R(),p=A(),{params:{tab:i=""}}=O({path:"/characters/:charKey/:tab",end:!1})??{params:{tab:""}};return s.useCallback(n=>{const u=a.chars.get(n);let m=i;u||(a.chars.getWithInitWeapon(n),m=""),p(`/characters/${n}/${m}`)},[p,a,i])}const Re={xs:1,sm:2,md:3,lg:4,xl:4},Ae={xs:6,sm:8,md:12,lg:16,xl:16},Oe=Object.keys(z);function Ca(){const a=R(),p=A(),{params:{characterKey:i}}=O({path:"/characters/:characterKey",end:!1})??{params:{}},x=s.useMemo(()=>i?ue.includes(i)?(a.chars.get(i)||a.chars.getWithInitWeapon(x),i):(p("/characters"),null):null,[i,p,a]),{t:n}=me(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=s.useContext(de),[m,W]=s.useState(()=>a.displayCharacter.get());s.useEffect(()=>a.displayCharacter.follow((e,r)=>W(r)),[a,W]);const[K,V]=s.useState(""),M=s.useDeferredValue(K),w=s.useRef(null),H=s.useCallback((e,r)=>{var c;(c=w.current)==null||c.scrollIntoView({behavior:"smooth"}),a.displayCharacter.set({pageIndex:r-1})},[a,w]),U=De(),f=Ae[U],[q,T]=s.useState(!1),[J,g]=fe();s.useEffect(()=>(ge.send({hitType:"pageview",page:"/characters"}),a.chars.followAny((e,r)=>(r==="new"||r==="remove")&&g())),[g,a]),s.useEffect(()=>a.charMeta.followAny(e=>g()),[g,a]);const{gender:b}=ye(),Q=s.useCallback(async e=>{let r=k(e,b).name;typeof r=="object"&&(r=n(`${u?"sillyWisher_charNames":"charNames_gen"}:${Ce(e,b)}`)),window.confirm(n("removeCharacter",{value:r}))&&a.chars.remove(e)},[a.chars,b,u,n]),Z=Le(),P=s.useDeferredValue(m),I=s.useDeferredValue(J),{charKeyList:o,totalCharNum:S}=s.useMemo(()=>{const r=a.chars.keys.length,{element:c,weaponType:l,rarity:y,sortType:ie,ascending:he}=P,pe=a.chars.keys.filter(We({element:c,weaponType:l,rarity:y,name:M},je(a,u))).sort(Ke(z[ie]??[],he,Fe(a,u),["new","favorite"]));return I&&{charKeyList:pe,totalCharNum:r}},[a,P,M,u,I]),{weaponType:X,element:Y,rarity:ee,sortType:ae,ascending:te,pageIndex:E=0}=m,{charKeyListToShow:N,numPages:j,currentPageIndex:re}=s.useMemo(()=>{const e=Math.ceil(o.length/f),r=be(E,0,e-1);return{charKeyListToShow:o.slice(r*f,(r+1)*f),numPages:e,currentPageIndex:r}},[o,E,f]),se=o.length!==S?`${o.length}/${S}`:`${S}`,ne=s.useMemo(()=>D(Se,e=>Object.entries(a.chars.data).forEach(([r,c])=>{const l=a.weapons.get(c.equippedWeapon);if(!l)return;const y=Ge(l.key).weaponType;e[y].total++,o.includes(r)&&e[y].current++})),[a,o]),oe=s.useMemo(()=>D(ve,e=>Object.entries(a.chars.data).forEach(([r,c])=>{const l=k(c.key,a.gender).elementKey;e[l].total++,o.includes(r)&&e[l].current++})),[a,o]),ce=s.useMemo(()=>D(ke,e=>Object.entries(a.chars.data).forEach(([r,c])=>{const l=k(c.key,a.gender).rarity;e[l].total++,o.includes(r)&&e[l].current++})),[a,o]),F={count:j,page:re+1,onChange:H},_={numShowing:N.length,total:se,t:n,namespace:"page_character"},le={sortKeys:[...Oe],value:ae,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:te,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return d(C,{my:1,display:"flex",flexDirection:"column",gap:1,children:[t(_e,{characterKey:x,onClose:()=>p("/characters")}),t(s.Suspense,{fallback:!1,children:t($e,{newFirst:!0,show:q,onHide:()=>T(!1),onSelect:Z})}),t(B,{ref:w,children:d($,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(h,{container:!0,spacing:1,children:[t(h,{item:!0,children:t(Be,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:X,totals:ne,size:"small"})}),t(h,{item:!0,children:t(Ie,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:Y,totals:oe,size:"small"})}),t(h,{item:!0,children:t(Ee,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:ee,totals:ce,size:"small"})}),t(h,{item:!0,flexGrow:1}),t(h,{item:!0,children:t(Me,{autoFocus:!0,value:K,onChange:e=>V(e.target.value),label:n("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(C,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:t(G,{paginationProps:F,showingTextProps:_,displaySort:!0,sortByButtonProps:le})})]})}),t(v,{fullWidth:!0,onClick:()=>T(!0),color:"info",startIcon:t(L,{}),children:n`addNew`}),t(s.Suspense,{fallback:t(xe,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(h,{container:!0,spacing:1,columns:Re,children:N.map(e=>t(h,{item:!0,xs:1,children:t(Pe,{characterKey:e,onClick:()=>p(`${e}`),footer:d(we,{children:[t(Te,{}),t(C,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:t(v,{fullWidth:!0,color:"error",onClick:()=>Q(e),startIcon:t(Ne,{}),children:n("delete")})})]})})},e))})}),j>1&&t(B,{children:d($,{sx:{display:"flex",flexDirection:"row",gap:1},children:[t(v,{onClick:()=>T(!0),color:"info",sx:{minWidth:0},children:t(L,{})}),t(C,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",flexGrow:1,children:t(G,{paginationProps:F,showingTextProps:_})})]})})]})}export{Ca as default};