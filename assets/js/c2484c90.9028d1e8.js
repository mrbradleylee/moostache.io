(self.webpackChunkmoostache_info=self.webpackChunkmoostache_info||[]).push([[103],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return a}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return i},Z:function(){return o}});var r=t(2263),a=t(3919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,d=i.absolute,s=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return n+t;var c=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+c:c}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},7929:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=t(4996),l=["components"],d={id:"flower-breeding-guide",title:"Flower Breeding Guide",sidebar_label:"Flower Breeding Guide"},s=void 0,c={unversionedId:"animal-crossing/flower-breeding-guide",id:"animal-crossing/flower-breeding-guide",isDocsHomePage:!1,title:"Flower Breeding Guide",description:"_Want to breed flowers and get those fancy colors? Here's what colors make what for all the different flower types. If you prefer visual aids, the infographic can be found at the end of the guide._",source:"@site/docs/animal-crossing/flower-breeding-guide.md",sourceDirName:"animal-crossing",slug:"/animal-crossing/flower-breeding-guide",permalink:"/moostache.io/docs/animal-crossing/flower-breeding-guide",editUrl:"https://github.com/mrbradleylee/moostache.io/docs/animal-crossing/flower-breeding-guide.md",version:"current",frontMatter:{id:"flower-breeding-guide",title:"Flower Breeding Guide",sidebar_label:"Flower Breeding Guide"},sidebar:"sidebar",previous:{title:"New This Month",permalink:"/moostache.io/docs/animal-crossing/new-this-month"},next:{title:"Turnip Mania",permalink:"/moostache.io/docs/animal-crossing/turnip-mania"}},u=[{value:"Lily",id:"lily",children:[]},{value:"Cosmo",id:"cosmo",children:[]},{value:"Tulip",id:"tulip",children:[]},{value:"Mum",id:"mum",children:[]},{value:"Rose",id:"rose",children:[]},{value:"Hyacinth",id:"hyacinth",children:[]},{value:"Pansy",id:"pansy",children:[]},{value:"Windflower",id:"windflower",children:[]},{value:"Lily Of The Valley",id:"lily-of-the-valley",children:[]},{value:"Infographic",id:"infographic",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("img",{alt:"Flower Breeding Guide",src:(0,o.Z)("img/docs/acnh/flowers.jpg")}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Want to breed flowers and get those fancy colors? Here's what colors make what for all the different flower types. If you prefer visual aids, the ",(0,i.kt)("a",{parentName:"em",href:"#infographic"},"infographic")," can be found at the end of the guide."))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Flowers listed in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"( )"))," are hybrid flowers, which need to be bred."))),(0,i.kt)("h2",{id:"lily"},"Lily"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Red + Yellow = Orange;\nRed + White = Pink;\nRed + Red = Black;\n")),(0,i.kt)("h2",{id:"cosmo"},"Cosmo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Red + Yellow = Orange;\nRed + White = Pink;\nRed + Red = Black;\n")),(0,i.kt)("h2",{id:"tulip"},"Tulip"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Red + Yellow = Orange;\nRed + White = Pink;\nRed + Red = Black;\nOrange + Orange = Purple;\n")),(0,i.kt)("h2",{id:"mum"},"Mum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"White + White = Purple;\nRed + White = Pink;\nPurple + Purple = Green;\n")),(0,i.kt)("h2",{id:"rose"},"Rose"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Red + White = Pink\nRed + Yellow = Orange\nRed + Red = Black\nWhite + White = Purple\nWhite + Orange = (Red)\n(Red) + (Red) = Blue\nBlack + Gold Can = Gold\n")),(0,i.kt)("h2",{id:"hyacinth"},"Hyacinth"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Red + Yellow = Orange;\nRed + White = Pink;\nWhite + White = Blue;\nOrange + Orange = Purple;\n")),(0,i.kt)("h2",{id:"pansy"},"Pansy"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Orange pansies are red outside and yellow in the center :)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Red + Yellow = Orange;\nWhite + White = Blue;\nRed + Blue = Red;\nOrange + Blue = Orange;\n(Red) + Red = Purple;\n(Orange) + Orange = Purple;\n")),(0,i.kt)("h2",{id:"windflower"},"Windflower"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Red + White = Pink;\nWhite + White = Blue;\nBlue + Blue = Purple;\n")),(0,i.kt)("h2",{id:"lily-of-the-valley"},"Lily Of The Valley"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"5 star island rating;\nAlso unlocks the Gold Watering Can recipe from Isabelle, used for the Gold rose.\n")),(0,i.kt)("h2",{id:"infographic"},"Infographic"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZUheKz3.jpg",alt:"flower info graphic"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"img credit: u/karasophe on reddit. ",(0,i.kt)("a",{href:"https://www.reddit.com/r/AnimalCrossing/comments/fu5s1a/a_guide_for_creating_hybrid_flowers_in_animal/",target:"_blank"},"source"))),(0,i.kt)("p",null,"Do you prefer code blocks or tables? Code blocks look better, but tables are functional..."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Base"),(0,i.kt)("th",{parentName:"tr",align:null},"Base"),(0,i.kt)("th",{parentName:"tr",align:null},"Result"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Red"),(0,i.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,i.kt)("td",{parentName:"tr",align:null},"Orange")))))}m.isMDXComponent=!0}}]);