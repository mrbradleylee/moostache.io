(self.webpackChunkmoostache_info=self.webpackChunkmoostache_info||[]).push([[205],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,h=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5887:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Quelle Surprise!",author:"moostache",author_title:"wishes he had a stache...",author_url:"https://moostache.io",tags:["smatterings"]},c=void 0,l={permalink:"/moostache.io/posts/2020/05/27/heyo",editUrl:"https://github.com/mrbradleylee/moostache.io/blog/2020-05-27-heyo.md",source:"@site/blog/2020-05-27-heyo.md",title:"Quelle Surprise!",description:"Look at us all fancy and new. We had a static site before, as I was working on CSS. Now that we're moving on to JS, Markdown, and frameworks, we obviously need to keep up the experiment.",date:"2020-05-27T00:00:00.000Z",formattedDate:"May 27, 2020",tags:[{label:"smatterings",permalink:"/moostache.io/posts/tags/smatterings"}],readingTime:.915,truncated:!1,prevItem:{title:"Oh look, updates",permalink:"/moostache.io/posts/2020/05/28/projects"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Look at us all fancy and new. We had a static site before, as I was working on CSS. Now that we're moving on to JS, Markdown, and frameworks, we obviously need to keep up the experiment."),(0,a.kt)("p",null,"A few more details on what we actually changed here, and some documentation for myself as to why I'm making these changes."),(0,a.kt)("p",null,"This entire site is created and being managed with ",(0,a.kt)("a",{href:"https://v2.docusaurus.io/",target:"_blank"},(0,a.kt)("strong",{parentName:"p"},"Docusaurus 2 alpha")),", through Node JS and Yarn.\nAgain, as I move on from straight CSS to JS and all that comes along with it, gaining exposure to things like Node and frameworks is critical. Even in a small page static site, I already felt the pain of managing multiple static pages and the common elements across them. In the first version of this site, built entirely on HTML and CSS we started experimenting with some static generators. Since the basis was super lightweight, I settled on Sergey just for some HTML replacement sections, including the ","<","header",">"," ","<","nav",">"," and ","<","footer",">"," sections. This very quickly evolved (or devolved) into what we're looking at today."))}m.isMDXComponent=!0}}]);