"use strict";(self.webpackChunkelliedocs_beta=self.webpackChunkelliedocs_beta||[]).push([[89],{2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7294),l=a(2263),n=a(8665),i=a(8902),m=a(5999),s=a(1750);var o=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(s.Z,{permalink:a,title:r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{permalink:l,title:r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))},c=a(5773);var g=function(e){var t=e.metadata,a=e.items,m=e.sidebar,s=(0,l.Z)().siteConfig.title,g=t.blogDescription,d=t.blogTitle,u="/"===t.permalink?s:d;return r.createElement(n.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:m},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},8902:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(7294),l=a(6010),n=a(3905),i=a(5999),m=a(9960),s=a(4996),o=a(5773),c=a(8780),g=a(8918),d=a(7462),u=a(3366),p="iconEdit_dcUD",v=["className"];var h=function(e){var t=e.className,a=(0,u.Z)(e,v);return r.createElement("svg",(0,d.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(p,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function E(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},r.createElement(h,null),r.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_rzP5",_="blogPostData_Zg1s",f="blogPostDetailsFull_h6_j",N=a(7774),Z="tags_XVD_",P="tag_JSN8";function k(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:P},r.createElement(N.Z,{name:t,permalink:a}))}))))}var T="image_o0gy";var w=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:T,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},y="authorCol_FlmR",M="imageOnlyAuthorRow_trpF",C="imageOnlyAuthorCol_S2np";function U(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?M:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?C:y),key:t},r.createElement(w,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var x=function(e){var t,a,d,u=(d=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return d(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,s.C)().withBaseUrl,v=e.children,h=e.frontMatter,N=e.assets,Z=e.metadata,P=e.truncated,T=e.isBlogPostPage,w=void 0!==T&&T,y=Z.date,M=Z.formattedDate,C=Z.permalink,x=Z.tags,L=Z.readingTime,R=Z.title,D=Z.editUrl,B=Z.authors,A=null!=(t=N.image)?t:h.image,F=!w&&P,I=x.length>0,O=w?"h1":"h2";return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:b,itemProp:"headline"},w?R:r.createElement(m.Z,{itemProp:"url",to:C},R)),r.createElement("div",{className:(0,l.Z)(_,"margin-vert--md")},r.createElement("time",{dateTime:y,itemProp:"datePublished"},M),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",u(L))),r.createElement(U,{authors:B,assets:N})),A&&r.createElement("meta",{itemProp:"image",content:p(A,{absolute:!0})}),r.createElement("div",{id:w?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:g.Z},v)),(I||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[f]=w,a))},I&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":F})},r.createElement(k,{tags:x})),w&&D&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(E,{editUrl:D})),F&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":I})},r.createElement(m.Z,{to:Z.permalink,"aria-label":"Read more about "+R},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1750:function(e,t,a){var r=a(7294),l=a(9960);t.Z=function(e){var t=e.permalink,a=e.title,n=e.subLabel;return r.createElement(l.Z,{className:"pagination-nav__link",to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}}}]);