"use strict";(self.webpackChunkmoostache_info=self.webpackChunkmoostache_info||[]).push([[701],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2291:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={title:'Some "CI" fixes',author:"moostache",author_title:"wishes he had a stache...",author_url:"https://moostache.io",tags:["smatterings"]},l=void 0,c={permalink:"/moostache.io/posts/2020/05/31/cicd",editUrl:"https://github.com/mrbradleylee/moostache.io/blog/2020-05-31-cicd.md",source:"@site/blog/2020-05-31-cicd.md",title:'Some "CI" fixes',description:"Today we implemented some changes to our deployment. Since everything is developed and hosted locally here, the Drone implementation was pretty heavy and overkill for what we're doing. It was an awesome learning experience, but was also a lot of overhead and management. For a while, I just built locally and deployed through SFTP before that, basically making GitHub just a repo. It was all well and good from a Wordpress perspective (maybe we'll go back to a CMS later...), but on static pages, I wanted to be able to deploy changes faster. I work a lot with this at an enterprise scale for a living, but implementing at this tiny scale has been super interesting as well. Can't say I've fully figured it out yet, but I offloaded the build process to the rPi to see how it would handle it, and while it takes a bit longer, having it be hands off is also pretty nice. Notice I put \"CI\" in quotes, cause the deployment now requires me to ssh to the server and execute a script. I haven't been too successful finding a lightweight solution, but I might look into some task runners in Node later. For now, we pull/build/rsync and it seems to be working well!",date:"2020-05-31T00:00:00.000Z",formattedDate:"May 31, 2020",tags:[{label:"smatterings",permalink:"/moostache.io/posts/tags/smatterings"}],readingTime:1.05,hasTruncateMarker:!1,authors:[{name:"moostache",title:"wishes he had a stache...",url:"https://moostache.io"}],frontMatter:{title:'Some "CI" fixes',author:"moostache",author_title:"wishes he had a stache...",author_url:"https://moostache.io",tags:["smatterings"]},prevItem:{title:"What's New In June",permalink:"/moostache.io/posts/2020/06/01/acnh-june"},nextItem:{title:"Oh look, updates",permalink:"/moostache.io/posts/2020/05/28/projects"}},u={authorsImageUrls:[void 0]},h=[],p={toc:h};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Today we implemented some changes to our deployment. Since everything is developed and hosted locally here, the Drone implementation was pretty heavy and overkill for what we're doing. It was an awesome learning experience, but was also a lot of overhead and management. For a while, I just built locally and deployed through SFTP before that, basically making GitHub just a repo. It was all well and good from a Wordpress perspective (maybe we'll go back to a CMS later...), but on static pages, I wanted to be able to deploy changes faster. I work a lot with this at an enterprise scale for a living, but implementing at this tiny scale has been super interesting as well. Can't say I've fully figured it out yet, but I offloaded the build process to the rPi to see how it would handle it, and while it takes a bit longer, having it be hands off is also pretty nice. Notice I put \"CI\" in quotes, cause the deployment now requires me to ssh to the server and execute a script. I haven't been too successful finding a lightweight solution, but I might look into some task runners in Node later. For now, we pull/build/rsync and it seems to be working well!"))}d.isMDXComponent=!0}}]);