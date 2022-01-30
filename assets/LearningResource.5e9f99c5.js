var O=Object.defineProperty,I=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))M.call(r,t)&&S(e,t,r[t]);if(b)for(var t of b(r))C.call(r,t)&&S(e,t,r[t]);return e},f=(e,r)=>I(e,R(r));import{o,c as i,t as n,e as d,b as a,F as w,f as T,a as v,n as m,M as A,m as H,i as z,r as g,q as N,d as p,w as F,s as X,g as j}from"./vendor.e1017258.js";import{_ as y,H as E,R as V,N as U,a as x,p as W,b as J}from"./index.37811f70.js";const P={name:"WrittenBy",props:{article:Object,showDate:Boolean,size:String},data(){return{}},methods:{isSingleAuthor(e){let r=this.article.by.data,t=r.map(c=>c.id).indexOf(e);return r[t+1]==null?"":" &"},getDate(e){let r=new Date(e);var t=r.getDate(),c=r.getUTCFullYear();r.getUTCDay();let s=r.getUTCMonth();switch(s){case 0:s="Jan";break;case 1:s="Feb";break;case 2:s="March";break;case 3:s="Apr";break;case 4:s="May";break;case 5:s="Jun";break;case 6:s="Jul";break;case 7:s="Aug";break;case 8:s="Sep";break;case 9:s="Oct";break;case 10:s="Nov";break;case 11:s="Dec";break}return s+" "+t+", "+c}},computed:{isNotEmpty(){try{return this.article.by.data.length>0}catch{return!1}}}},$={key:0},Y={key:1},q={key:0,class:"p-l-4"},G={class:"p-l-4"},K=v(" by "),Q=["href"],Z={key:1};function ee(e,r,t,c,s,l){return l.isNotEmpty?(o(),i("p",{key:0,class:m({"coral-Detail":!0,"coral-Detail--XL":t.size=="XL","coral-Detail--L":t.size=="L","coral-Detail--M":t.size=="M","coral-Detail--S":t.size=="S","text-details":!0})},[t.showDate?(o(),i("span",$,n(l.getDate(t.article.publishedAt)),1)):d("",!0),t.article.by?(o(),i("span",Y,[t.showDate?(o(),i("span",q," \u2022 ")):d("",!0),a("span",G,[K,(o(!0),i(w,null,T(t.article.by.data,u=>(o(),i("span",{class:"p-r-4",key:u.id},[u.attributes.url?(o(),i("a",{key:0,href:u.attributes.url},n(u.attributes.username),9,Q)):(o(),i("span",Z,n(u.attributes.username),1)),v(" "+n(l.isSingleAuthor(u.id)),1)]))),128))])])):d("",!0)],2)):d("",!0)}var te=y(P,[["render",ee]]);const re={name:"AboutBlock",props:{text:{}},data(){return{}},mounted(){},methods:{markItDown(e){return A(e)}},computed:{isNotEmpty(){return Object.keys(this.text).length>0}}},se={key:0,class:"about-block"},ae={key:0,class:"coral-Heading--XL resource-heading"},oe={key:1,class:"h3-description-body"},ie=["innerHTML"],le={key:1,class:"about-block skeleton-fill"};function ne(e,r,t,c,s,l){return l.isNotEmpty?(o(),i("div",se,[t.text.h3?(o(),i("h1",ae,[a("b",null,n(t.text.h3),1)])):d("",!0),t.text.description?(o(),i("div",oe,[a("p",{class:"coral-Body--L f-w-500",innerHTML:l.markItDown(t.text.description)},null,8,ie)])):d("",!0)])):(o(),i("div",le))}var ce=y(re,[["render",ne]]);const ue={name:"learningResource",components:{Header:E,ResourcesCard:V,NativeAd:U,H3Description:x,WrittenBy:te,AboutBlock:ce},metaInfo:{title:"Free icon templates resources for macOS Monterey, Big Sur.",description:"Resources and templates to help you design and showcase icons for macOS.",titleTemplate:"Learning resources | macOSicons",meta:[{property:"og:url",content:"https://macosicons.com/resources"},{property:"og:title",content:"Free icon templates resources and over 5000+ icons for macOS Monterey, Big Sur."},{property:"og:description",content:"Resources and templates to help you design and showcase icons for macOS. Over 5000+ free icons ready for Big Sur."},{property:"og:image",content:"https://raw.githubusercontent.com/elrumo/macOS_Big_Sur_icons_replacements/master/icons/Social/low-res/Resources-thumbnail.jpg"},{property:"twitter:url",content:"https://macosicons.com/resources"},{property:"twitter:description",content:"Resources and templates to help you design and showcase icons for macOS. Over 5000+ free icons ready for Big Sur."},{property:"twitter:title",content:"Free icon templates resources and over 5000+ icons for macOS Monterey, Big Sur."},{property:"twitter:image",content:"https://raw.githubusercontent.com/elrumo/macOS_Big_Sur_icons_replacements/master/icons/Social/low-res/Resources-thumbnail.jpg"}]},data(){return{isMobile:this.$isMobile(),tutorials:{},resource:{},coralIcons:{loading:W,placeholderImage:J},subscribe:{h3:"macOSicons.com",description:"Hi! I'm Elias, and I'm building an open platform for all things icons, where you can [download](https://macosicons.com) thousands of macOS ready icons, [resources](https://macosicons.com/resources) and [learn](https://macosicons.com/learn) how to make them.",isAd:!1,isCenter:!0,isButton:!0}}},mounted:async function(){const e=this.$route.params.learningResource;await this.getTutorialFromSlug(e),await this.fetchArticleTemplate({slug:"article-learn",state:"articleTemplate"}),this.fetchLearningResources()},methods:f(_({},H(["fetchLearningResources","getPageData","adClick","getTutorialFromSlug","fetchArticleTemplate"])),{setProp(e){return e||{}},markItDown(e){if(e)return A(e)},isSkeleton(e){try{return!(e.length>0)}catch{return!0}},isSingleAuthor(e){let r=this.getSingleTutorial.by.data,t=r.map(c=>c.id).indexOf(e);return r[t+1]==null?"":" &"}}),computed:f(_({},z(["getSingleTutorial","getLearningResources","getArticleTemplate"])),{getVideoUrl(){let e=this.getSingleTutorial.video;return e=e.substring(e.indexOf("?")+3),"https://www.youtube.com/embed/"+e}})},de={class:"content-wrapper-compact"},me={class:"blog-list-wrapper"},ge={class:"p-t-48 p-t-48"},pe={class:"article-entry"},he=a("hr",{class:"coral-Divider--S m-t-4 m-b-12"},null,-1),_e={class:"content-image-container"},fe={key:0,class:"post-full-image"},ye=["src"],ke={key:1,class:"post-full-image"},be={class:"post-full-content"},Se=["innerHTML"],we=a("div",{class:"p-t-24 p-b-24"},[a("hr",{class:"coral-Divider--S"})],-1),Te={class:"more-resources more-resources-list post-full-content"},ve={class:"resources-grid text-left card-grid"},Ae={key:0,class:"m-auto p-t-16",size:"L",indeterminate:""};function De(e,r,t,c,s,l){const u=g("router-link"),k=g("WrittenBy"),D=g("AboutBlock"),L=g("ResourcesCard"),B=N("lazy");return o(),i("div",de,[a("main",me,[a("div",ge,[a("div",pe,[p(u,{to:"/learn"},{default:F(()=>[a("p",{class:m({"coral-Link":!0,"coral-Detail":!0,"read-more":!0,"read-more-left":!!e.getArticleTemplate.backToAllArticles,"coral-Detail--XL":!0,"m-t-32":!0,skeleton:!e.getArticleTemplate.backToAllArticles,"skeleton-xxs":!e.getArticleTemplate.backToAllArticles})},n(e.getArticleTemplate.backToAllArticles),3)],void 0,!0),_:1}),a("h3",{class:m({"coral-Heading--XXL":!0,"coral-Heading--heavy":!0,"m-t-16":!0,skeleton:l.isSkeleton(e.getSingleTutorial.title)})},n(e.getSingleTutorial.title),3),a("p",{class:m({"coral-Body--XL":!0,skeleton:l.isSkeleton(e.getSingleTutorial.description)})},n(e.getSingleTutorial.description),3),he,p(k,{article:e.getSingleTutorial,size:"L",showDate:!0},null,8,["article"])]),a("div",_e,[e.getSingleTutorial.video?(o(),i("figure",fe,[a("iframe",{width:"100%",height:"515",src:l.getVideoUrl,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ye)])):(o(),i("figure",ke,[X(a("img",null,null,512),[[B,{src:e.getSingleTutorial.feature_image?e.getSingleTutorial.feature_image:s.coralIcons.placeholderImage,loading:s.coralIcons.placeholderImage,error:s.coralIcons.placeholderImage}]])]))])]),a("div",be,[a("div",{innerHTML:l.markItDown(e.getSingleTutorial.tutorialBody),class:"blog-post-wrapper"},null,8,Se),p(k,{class:"p-t-16",article:e.getSingleTutorial,size:"XL",showDate:!1},null,8,["article"])])]),p(D,{text:l.setProp(e.getArticleTemplate.aboutBlock)},null,8,["text"]),we,a("div",Te,[a("h3",{class:m({"text-left":!0,"coral-Heading--L":!0,"coral-Heading--heavy":!0,"m-0":!0,skeleton:l.isSkeleton(e.getArticleTemplate.moreArticles)})},n(e.getArticleTemplate.moreArticles),3),a("div",ve,[e.getLearningResources.length==0?(o(),i("coral-wait",Ae)):d("",!0),(o(!0),i(w,null,T(e.getLearningResources.slice(0,5),h=>(o(),j(L,{key:h.id,step:h,link:"/learn/"+h.slug},null,8,["step","link"]))),128))])])])}var Ie=y(ue,[["render",De]]);export{Ie as default};
