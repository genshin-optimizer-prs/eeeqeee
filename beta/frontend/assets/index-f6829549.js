import{b as O,aE as _,ag as $,e as r,aF as ne,u as oe,a9 as ce,X as ie,M as le,n as x,p as a,C as he,J as i,K as F,t as pe,B as ue,U as j,h as me,f as de,aG as ge}from"./index-1f6d0833.js";import{u as fe,f as ye,s as Ce,a as we,T as Se,S as xe}from"./StarDisplay-1899bd35.js";import{d as Te,C as be}from"./TeamCard-32242fe3.js";import{E as ke,C as Ee,c as A,a as Ke,b as ve,d as Me,e as We}from"./CharacterRarityToggle-fb2a88aa.js";import{W as De}from"./WeaponCard-fb61b22d.js";import{g as I}from"./index-24f2d030.js";import{g as Ne}from"./index-ae3f17eb.js";import{c as T}from"./totalUtils-2e3ec844.js";import"./DropdownButton-9bf98474.js";import"./ColoredText-0f1eac33.js";import"./BootstrapTooltip-aed52876.js";import"./SqBadge-6a708f05.js";import"./FieldDisplay-e4823c54.js";import"./Groups-5f9ce7f4.js";import"./index-23f6dec0.js";import"./Artifact-4982a548.js";import"./SlotIcon-7f27dcc3.js";import"./useWeapon-aac9c58e.js";import"./CardActionArea-61c10d91.js";import"./CloseButton-f9cd7319.js";import"./WeaponEditor-8c488bf4.js";import"./LocationAutocomplete-1b7d1164.js";import"./InfoTooltip-9257d110.js";import"./CardHeader-1eab44e5.js";import"./ArtifactSort-f5acd064.js";import"./CheckBoxOutlineBlank-c692a757.js";import"./ChevronRight-b8842b5e.js";import"./WeaponSelectionModal-6a14aae5.js";function Fe(){const t=O(),l=_(),{params:{tab:c=""}}=$({path:"/characters/:charKey/:tab",end:!1})??{params:{tab:""}};return r.useCallback(h=>{const u=t.chars.get(h);let m=c;u||(t.chars.getWithInitWeapon(h),m=""),l(`/characters/${h}/${m}`)},[l,t,c])}const je={xs:1,sm:2,md:3,lg:4,xl:4},b={xs:5,sm:8,md:9,lg:12,xl:12},Ie=Object.keys(A);function ht(){const t=O(),l=_(),{params:{characterKey:c}}=$({path:"/characters/:characterKey",end:!1})??{params:{}},y=r.useMemo(()=>c?ne(c)?(t.chars.get(c)||t.chars.getWithInitWeapon(c),c):(l("/characters"),null):null,[c,l,t]),{t:h}=oe(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=r.useContext(ce),[m,k]=r.useState(()=>t.displayCharacter.get());r.useEffect(()=>t.displayCharacter.follow((e,n)=>k(n)),[t,k]);const[E,B]=r.useState(""),K=r.useDeferredValue(E),d=fe(),[P,v]=r.useState(!1),[R,g]=ie();r.useEffect(()=>(le.send({hitType:"pageview",page:"/characters"}),t.chars.followAny((e,n)=>(n==="new"||n==="remove")&&g())),[g,t]),r.useEffect(()=>t.charMeta.followAny(e=>g()),[g,t]);const z=Fe(),M=r.useDeferredValue(m),W=r.useDeferredValue(R),{charKeys:s,totalCharNum:C}=r.useMemo(()=>{const n=t.chars.keys.length,{element:p,weaponType:o,rarity:f,sortType:ae,ascending:re}=M,se=t.chars.keys.filter(ye({element:p,weaponType:o,rarity:f,name:K},Ke(t,u))).sort(Ce(A[ae]??[],re,ve(t,u),["new","favorite"]));return W&&{charKeys:se,totalCharNum:n}},[t,M,K,u,W]),{weaponType:G,element:U,rarity:V,sortType:H,ascending:q}=m,J=r.useMemo(()=>T(me,e=>Object.entries(t.chars.data).forEach(([n,p])=>{const o=t.weapons.get(p.equippedWeapon);if(!o)return;const f=Ne(o.key).weaponType;e[f].total++,s.includes(n)&&e[f].current++})),[t,s]),Q=r.useMemo(()=>T(de,e=>Object.entries(t.chars.data).forEach(([n,p])=>{const o=I(p.key,t.gender).elementKey;e[o].total++,s.includes(n)&&e[o].current++})),[t,s]),X=r.useMemo(()=>T(ge,e=>Object.entries(t.chars.data).forEach(([n,p])=>{const o=I(p.key,t.gender).rarity;e[o].total++,s.includes(n)&&e[o].current++})),[t,s]),[w,D]=r.useState(b[d]);r.useEffect(()=>{s&&D(b[d])},[s,d]);const[L,Y]=r.useState(),N=we(L)&&w<s.length;r.useEffect(()=>{N&&D(e=>e+b[d])},[N,d]);const S=r.useMemo(()=>s.slice(0,w),[s,w]),Z=s.length!==C?`${s.length}/${C}`:`${C}`,ee={numShowing:S.length,total:Z,t:h,namespace:"page_character"},te={sortKeys:[...Ie],value:H,onChange:e=>t.displayCharacter.set({sortType:e}),ascending:q,onChangeAsc:e=>t.displayCharacter.set({ascending:e})};return x(F,{my:1,display:"flex",flexDirection:"column",gap:1,children:[y&&a(Me,{characterKey:y,onClose:()=>l("/characters")}),a(r.Suspense,{fallback:!1,children:a(We,{newFirst:!0,show:P,onHide:()=>v(!1),onSelect:z})}),a(pe,{children:x(he,{sx:{display:"flex",flexDirection:"column",gap:1},children:[x(i,{container:!0,spacing:1,children:[a(i,{item:!0,children:a(De,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({weaponType:e}),value:G,totals:J,size:"small"})}),a(i,{item:!0,children:a(ke,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({element:e}),value:U,totals:Q,size:"small"})}),a(i,{item:!0,children:a(Ee,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({rarity:e}),value:V,totals:X,size:"small"})}),a(i,{item:!0,flexGrow:1}),a(i,{item:!0,children:a(Se,{autoFocus:!0,value:E,onChange:e=>B(e.target.value),label:h("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),a(F,{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",children:a(xe,{showingTextProps:ee,sortByButtonProps:te})})]})}),a(ue,{fullWidth:!0,onClick:()=>v(!0),color:"info",startIcon:a(Te,{}),children:h`addNew`}),a(r.Suspense,{fallback:a(j,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(i,{container:!0,spacing:1,columns:je,children:S.map(e=>a(i,{item:!0,xs:1,children:a(be,{characterKey:e,onClick:()=>l(`${e}`),hideStats:!0})},e))})}),s.length!==S.length&&a(j,{ref:e=>{e&&Y(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ht as default};
