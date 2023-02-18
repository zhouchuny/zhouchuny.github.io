import{b as K,u as Y}from"./vue-router.b200a2e1.js";import{_ as j,b as E,c as F,u as y,H,F as Q,d as M,m as W,e as U,f as G}from"./index.ed91959e.js";import{n as x}from"./@element-plus.055c406a.js";import{a as P}from"./cart.5484cbe7.js";import{a as p}from"./element-plus.64ef7e17.js";import{d as g,H as D,af as N,o as c,c as i,W as u,a as s,Q as S,V as l,u as e,U as z,E as L,K as C,F as k,a5 as B,T as X,aw as Z,ax as $}from"./@vue.81368508.js";import"./pinia.d9db222a.js";import"./axios.7fb621f7.js";import"./@vueuse.35cfb4af.js";import"./pinia-plugin-persist.1f805131.js";import"./lodash-es.3b21de99.js";import"./@popperjs.db7aa398.js";import"./@ctrl.7c1038cf.js";import"./dayjs.4e3ecd0b.js";import"./crypto-js.1a995817.js";import"./async-validator.b01be3a9.js";import"./memoize-one.c70541e4.js";import"./escape-html.8a1e20fb.js";import"./normalize-wheel-es.14f1d88d.js";import"./@floating-ui.184cf960.js";var q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAXRJREFUOE+NlO1ZwzAMhF9lAdoNygTABHQDYIMyAK03oJ0AJwvQbgAbdIQwAWGDdIGIx46Tuvl66p+WfNLpThYmjhpWKBufoljJOIylSzeghkV4vAJmnXgJ7BFSsRRxrAVSwz3KB7Cc6jKKfSHsxJK7uzPQmiPC45UgdZryLRnPLVCg8zsIouz8vfA+GBduHU3fka6xSBhqN1uY+6uKAuGmB6akkmEaoHIk6SAZbuiu2Hakq1JS5hIk/mwrOSoJR6BsBtnEvCBOycoLYtriwqvomhzhrgVyl5b9pL/eMCRe4ebkfaB6sINgapihuO69UhGLnz61Jio8xNTUsPSUhtRzhcMge8OW9MJjloTcUdYN2unmJBmzYfmVP8lYBLc7KoWkvISil8a9kL/er9iQOep3ahvtW4F6Czg7nNcoNuRgpSnZWj90VsQDOY9UvuLTNRhuz0jY9pY2Mt2CCgOsem5XTv4bSbCj38hQF971NSjh8ahR/wGGKZMrx31XHQAAAABJRU5ErkJggg==";const t=f=>(Z("data-v-dba25004"),f=f(),$(),f),ss={class:"courseContainer"},es={class:"courseInfoTop"},ts={class:"info-container"},os={class:"route"},as={class:"route-item",style:{cursor:"pointer"}},cs={class:"route-item"},is={class:"route-item",style:{cursor:"pointer"}},ns={class:"route-item"},ls={class:"route-item"},rs={class:"name"},ds={class:"info"},_s=t(()=>s("div",{class:"Avat"},[s("img",{src:M,alt:""})],-1)),us={class:"teacherName"},hs={class:"name-item"},ms=t(()=>s("img",{src:q,alt:""},null,-1)),ps=t(()=>s("li",{class:"name-item"},"\u91D1\u724C\u8BB2\u5E08",-1)),vs={class:"access"},fs=t(()=>s("li",{class:"access-item"},"\u96BE\u5EA6",-1)),As={class:"access-item"},gs=t(()=>s("li",{class:"access-item"},"\xB7",-1)),Cs=t(()=>s("li",{class:"access-item"},"\u65F6\u957F",-1)),ks={class:"access-item"},bs=t(()=>s("li",{class:"access-item"},"\xB7",-1)),Is=t(()=>s("li",{class:"access-item"},"\u5B66\u4E60\u4EBA\u6570",-1)),ys={class:"access-item"},Ns=t(()=>s("li",{class:"access-item"},"\xB7",-1)),Ss=t(()=>s("li",{class:"access-item"},"\u7EFC\u5408\u8BC4\u5206",-1)),Bs=t(()=>s("li",{class:"access-item"},"10.00",-1)),Rs={class:"info-nav"},ws={class:"nav-container"},Us={key:0,class:"course"},xs={class:"main"},zs=t(()=>s("div",{class:"desc"}," \u8BE5\u8BFE\u7A0B\u6682\u65E0\u4ECB\u7ECD ",-1)),Ls=t(()=>s("button",{class:"btn-item active"},"\u7ACB\u5373\u8D2D\u4E70",-1)),Js={class:"chapterName"},Os={class:"chapterDesc"},Ts={class:"videos"},Vs=t(()=>s("div",{class:"video-itemIcon"},[s("i",{class:"el-icon-video-camera"})],-1)),Ks={class:"item-name"},Ys=t(()=>s("span",{class:"shipin"},"\u89C6\u9891\uFF1A",-1)),js={class:"chapterName"},Es={key:0,class:"free"},Fs=["onClick"],Hs=t(()=>s("div",{class:"clearfloat"},null,-1)),Qs={key:1},Ms={key:0},Ws={class:"source"},Gs={class:"downloadCourse"},Ps=["onClick"],Ds={key:1},Xs={__name:"CourseInfo",setup(f){let{courseTypeFn:J}=W(),R=K().params.id,n=g(!0),b=g([]),w=g([]),d=g({});D(()=>{E({courseId:R}).then(o=>{d.value=o.data.data,b.value=o.data.data.bizCourseAttachments,w.value=o.data.data.bizCourseChapters})});let I=Y();const O=o=>{if(!y().token){p.info({message:"\u8BF7\u5148\u767B\u5F55"}),I.push("/login");return}U({courseId:o.courseId}).then(r=>{if(!r.data.data.hasAuth){p.info({message:"\u8D2D\u4E70\u8BE5\u8BFE\u7A0B\u624D\u53EF\u4EE5\u4E0B\u8F7D\u8D44\u6599"});return}G({courseId:o.courseId,attachmentId:o.id}).then(h=>{const A=new Blob([h]);let v=o.attachmentName,a=o.attachmentUrl;const m=a.substring(a.lastIndexOf("."));v=v+m;const _=document.createElement("a");_.download=v,_.target="_blank",_.style.display="none",_.href=URL.createObjectURL(A),document.body.appendChild(_),_.click(),URL.revokeObjectURL(_.href),document.body.removeChild(_)})})},T=(o,r)=>{if(!y().token){p.info({message:"\u8BF7\u5148\u767B\u5F55"}),I.push("/login");return}U({courseId:o.courseId}).then(h=>{if(!h.data.data.hasAuth){p.info({message:"\u8D2D\u4E70\u8BE5\u8BFE\u7A0B\u624D\u53EF\u4EE5\u4E0B\u8F7D\u8D44\u6599"});return}I.push({path:"/course-play/"+o.courseId+"/"+r})})},V=()=>{F().then(o=>{let r=o.data.token;P({courseId:R,memberId:y().userInfo.id},r).then(h=>{if(h.meta.code=="200"){p.success({message:"\u52A0\u5165\u8D2D\u7269\u8F66\u6210\u529F\uFF5E"});return}else p.info({message:"\u6DFB\u52A0\u5931\u8D25\uFF5E\u8BE5\u8BFE\u7A0B\u5DF2\u7ECF\u5728\u8D2D\u7269\u8F66\u4E2D\u4E86!"})})})};return(o,r)=>{const h=N("router-link"),A=N("el-icon"),v=N("el-empty");return c(),i(k,null,[u(H),s("div",ss,[s("div",es,[s("div",ts,[s("ul",os,[s("li",as,[u(h,{to:"/course",style:{color:"#fff"}},{default:S(()=>[z("\u8BFE\u7A0B")]),_:1})]),s("li",cs,[u(A,null,{default:S(()=>[u(e(x))]),_:1})]),s("li",is,l(e(d).discountPrice==0?"\u514D\u8D39\u8BFE":"\u4F1A\u5458\u8BFE"),1),s("li",ns,[u(A,null,{default:S(()=>[u(e(x))]),_:1})]),s("li",ls,l(e(d).courseName),1)]),s("div",rs,l(e(d).courseName),1),s("div",ds,[_s,s("ul",us,[s("li",hs,[z(l(e(d).courseName)+" ",1),ms]),ps]),s("ul",vs,[fs,s("li",As,l(e(J)(e(d).courseLevel)),1),gs,Cs,s("li",ks,l(e(d).totalHour)+"\u4E2A\u5C0F\u65F6",1),bs,Is,s("li",ys,l(e(d).purchaseCounter+e(d).purchaseCnt)+"\u4EBA",1),Ns,Ss,Bs])])])]),s("div",Rs,[s("div",ws,[s("div",{class:"chapter-item",onClick:r[0]||(r[0]=a=>L(n)?n.value=!0:n=!0)},[s("div",{class:C(e(n)?"active1":"")},"\u7AE0\u8282",2),s("div",{class:C(["line",e(n)?"active2":""])},null,2)]),s("div",{class:"chapter-item",onClick:r[1]||(r[1]=a=>L(n)?n.value=!1:n=!1)},[s("div",{class:C(e(n)?"":"active1")},"\u4E0B\u8F7D\u8D44\u6599",2),s("div",{class:C(["line",e(n)?"":"active2"])},null,2)])])]),e(n)?(c(),i("div",Us,[s("div",xs,[s("div",{class:"introduction"},[zs,s("div",{class:"btn"},[Ls,s("button",{class:"btn-item",onClick:V},"\u52A0\u5165\u8D2D\u7269\u8F66")])]),(c(!0),i(k,null,B(e(w),a=>(c(),i("div",{class:"video",key:a.id},[s("div",Js,l(a.chapterName),1),s("div",Os,l(a.description),1),s("ul",Ts,[(c(!0),i(k,null,B(a.children,m=>(c(),i("li",{class:"video-item",key:m.id},[Vs,s("div",Ks,[Ys,s("span",js,l(m.chapterName),1),m.publicType==2?(c(),i("span",Es,"\u8BD5\u770B")):X("",!0)]),s("button",{class:"btn-learn",onClick:_=>T(a,m.id)},"\u5F00\u59CB\u5B66\u4E60",8,Fs),Hs]))),128))])]))),128))])])):(c(),i("div",Qs,[e(b).length>0?(c(),i("div",Ms,[(c(!0),i(k,null,B(e(b),a=>(c(),i("div",{class:"down",key:a.id},[s("div",Ws,[s("span",Gs,l(a.attachmentName),1),s("button",{class:"downloadbtn",onClick:m=>O(a)},"\u4E0B\u8F7D\u8D44\u6599",8,Ps)])]))),128))])):(c(),i("div",Ds,[u(v,{description:"\u8BE5\u8BFE\u7A0B\u6682\u65E0\u8D44\u6599"})]))]))]),u(Q)],64)}}};var Ae=j(Xs,[["__scopeId","data-v-dba25004"]]);export{Ae as default};
