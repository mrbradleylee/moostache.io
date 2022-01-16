/*! For license information please see c4f5d8e4.e9da6c69.js.LICENSE.txt */
(self.webpackChunkmoostache_info=self.webpackChunkmoostache_info||[]).push([[195],{5239:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var r=a(7462),n=a(7294),o=a(4184),i=a.n(o),s=a(7019),l=a(9960),c=a(2263),u=a(4996),m={heroBanner:"heroBanner_4JBe",buttons:"buttons_TK4-",features:"features_ENLn",featureImage:"featureImage_fOUF"},h=[{title:n.createElement(n.Fragment,null,"</ What >"),imageUrl:"img/responsive.svg",description:n.createElement(n.Fragment,null,"We are 100% vegan, no animals were harmed in the creation of this website. Except maybe the can of SPAM\u2122 I ate the other day. But really, if you made it this far, you're somewhat curious as to what you're reading. This is an ever evolving experiment, and a use case as I learn about front end development, and in particular, responsive web development. Being an experiment, things are ever changing, so reader beware...")},{title:n.createElement(n.Fragment,null,"</ Why >"),imageUrl:"img/dev.svg",description:n.createElement(n.Fragment,null,"Most of the why has already been covered, but honestly, cause I had an rPi laying around and wanted to put it to good use and learn some stuff. I always found myself creating docs to store links for resources that I need, might as well make a project out of it to document progress and expand the junk in my brain. This site initially started as a Wordpress site to host random information as I learned more about Docker, but in the process, evolved into what we are now. From Wordpress, we went to hosting static pages built with HTML/CSS/love, to playing with static site generators as we move on to JavaScript.")},{title:n.createElement(n.Fragment,null,"</ How >"),imageUrl:"img/server.svg",description:n.createElement(n.Fragment,null,"The nerdy stuff... Again, two uses cases, the first being learning responsive web design. The second is the rPi. Let's talk about the architecture: Front end written completely in VSCode/neovim as I go back to my old school vi roots. Versioning and commits are managed through GitHub via VSCode. New builds are deployed automagically through CI pipelines. Back end technologies include the host machine, a Raspberry Pi 2 running Raspbian Stretch. We're served using nginx, with a reverse proxy HTTPS redirect, and SSL certs are managed automatically through certbot and letsencrypt. Both are leveraging Docker containers, managed with Compose for easy configuration changes. To keep track of general server health, a TIG stack (Telegraf, InfluxDB, Grafana) is also being managed through Docker Compose.")}];function g(e){var t=e.imageUrl,a=e.title,r=e.description,o=(0,u.Z)(t);return n.createElement("div",{className:i()("col col--4",m.feature)},o&&n.createElement("div",{className:"text--center"},n.createElement("img",{className:m.featureImage,src:o,alt:a})),n.createElement("h3",null,a),n.createElement("p",null,r))}var d=function(){var e=(0,c.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(s.Z,{title:""+t.title,description:"Project website"},n.createElement("header",{className:i()("hero hero--primary",m.heroBanner)},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},t.title),n.createElement("p",{className:"hero__subtitle"},t.tagline),n.createElement("div",{className:m.buttons},n.createElement(l.Z,{className:i()("button button--outline button--secondary button--lg",m.getStarted),to:(0,u.Z)("projects/")},"See My Work")))),n.createElement("main",null,h&&h.length>0&&n.createElement("section",{className:m.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},h.map((function(e,t){return n.createElement(g,(0,r.Z)({key:t},e))})))))))}},4184:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var s in a)r.call(a,s)&&a[s]&&e.push(s);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}}]);