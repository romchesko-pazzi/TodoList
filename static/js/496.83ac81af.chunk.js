"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[496],{1496:function(n,e,t){t.r(e),t.d(e,{getCLS:function(){return S},getFCP:function(){return w},getFID:function(){return D},getINP:function(){return J},getLCP:function(){return Q},getTTFB:function(){return V},onCLS:function(){return S},onFCP:function(){return w},onFID:function(){return D},onINP:function(){return J},onLCP:function(){return Q},onTTFB:function(){return V}});var r,i,o,a,u,c=-1,f=function(n){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,n(e))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var n=s();return n&&n.activationStart||0},l=function(n,e){var t=s(),r="navigate";return c>=0?r="back-forward-cache":t&&(r=document.prerendering||d()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},v=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(n){Promise.resolve().then((function(){e(n.getEntries())}))}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch(n){}},p=function(n,e){var t=function t(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(n(r),e&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},m=function(n,e,t,r){var i,o;return function(a){e.value>=0&&(a||r)&&((o=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=o,e.rating=function(n,e){return n>e[1]?"poor":n>e[0]?"needs-improvement":"good"}(e.value,t),n(e))}},h=function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){return n()}))}))},g=function(n){document.prerendering?addEventListener("prerenderingchange",(function(){return n()}),!0):n()},y=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(n){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===n.type?n.timeStamp:0,L())},C=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},L=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},b=function(){return y<0&&(y=T(),C(),f((function(){setTimeout((function(){y=T(),C()}),0)}))),{get firstHiddenTime(){return y}}},w=function(n,e){e=e||{},g((function(){var t,r=[1800,3e3],i=b(),o=l("FCP"),a=v("paint",(function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(a.disconnect(),n.startTime<i.firstHiddenTime&&(o.value=Math.max(n.startTime-d(),0),o.entries.push(n),t(!0)))}))}));a&&(t=m(n,o,r,e.reportAllChanges),f((function(i){o=l("FCP"),t=m(n,o,r,e.reportAllChanges),h((function(){o.value=performance.now()-i.timeStamp,t(!0)}))})))}))},S=function(n,e){e=e||{},g((function(){var t,r=[.1,.25],i=l("CLS"),o=-1,a=0,u=[],c=function(e){o>-1&&n(e)},s=function(n){n.forEach((function(n){if(!n.hadRecentInput){var e=u[0],r=u[u.length-1];a&&n.startTime-r.startTime<1e3&&n.startTime-e.startTime<5e3?(a+=n.value,u.push(n)):(a=n.value,u=[n]),a>i.value&&(i.value=a,i.entries=u,t())}}))},d=v("layout-shift",s);d&&(t=m(c,i,r,e.reportAllChanges),w((function(n){o=n.value,i.value<0&&(i.value=0,t())})),p((function(){s(d.takeRecords()),t(!0)})),f((function(){a=0,o=-1,i=l("CLS",0),t=m(c,i,r,e.reportAllChanges),h((function(){return t()}))})))}))},I={passive:!0,capture:!0},P=new Date,A=function(n,e){r||(r=e,i=n,o=new Date,M(removeEventListener),F())},F=function(){if(i>=0&&i<o-P){var n={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(e){e(n)})),a=[]}},k=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,e){var t=function(){A(n,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,I),removeEventListener("pointercancel",r,I)};addEventListener("pointerup",t,I),addEventListener("pointercancel",r,I)}(e,n):A(e,n)}},M=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return n(e,k,I)}))},D=function(n,e){e=e||{},g((function(){var t,o=[100,300],u=b(),c=l("FID"),s=function(n){n.startTime<u.firstHiddenTime&&(c.value=n.processingStart-n.startTime,c.entries.push(n),t(!0))},d=function(n){n.forEach(s)},h=v("first-input",d);t=m(n,c,o,e.reportAllChanges),h&&p((function(){d(h.takeRecords()),h.disconnect()}),!0),h&&f((function(){var u;c=l("FID"),t=m(n,c,o,e.reportAllChanges),a=[],i=-1,r=null,M(addEventListener),u=s,a.push(u),F()}))}))},B=0,x=1/0,R=0,H=function(n){n.forEach((function(n){n.interactionId&&(x=Math.min(x,n.interactionId),R=Math.max(R,n.interactionId),B=R?(R-x)/7+1:0)}))},N=function(){return u?B:performance.interactionCount||0},O=function(){"interactionCount"in performance||u||(u=v("event",H,{type:"event",buffered:!0,durationThreshold:0}))},q=0,j=function(){return N()-q},_=[],z={},G=function(n){var e=_[_.length-1],t=z[n.interactionId];if(t||_.length<10||n.duration>e.latency){if(t)t.entries.push(n),t.latency=Math.max(t.latency,n.duration);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};z[r.id]=r,_.push(r)}_.sort((function(n,e){return e.latency-n.latency})),_.splice(10).forEach((function(n){delete z[n.id]}))}},J=function(n,e){e=e||{},g((function(){var t=[200,500];O();var r,i=l("INP"),o=function(n){n.forEach((function(n){n.interactionId&&G(n),"first-input"===n.entryType&&!_.some((function(e){return e.entries.some((function(e){return n.duration===e.duration&&n.startTime===e.startTime}))}))&&G(n)}));var e,t=(e=Math.min(_.length-1,Math.floor(j()/50)),_[e]);t&&t.latency!==i.value&&(i.value=t.latency,i.entries=t.entries,r())},a=v("event",o,{durationThreshold:e.durationThreshold||40});r=m(n,i,t,e.reportAllChanges),a&&(a.observe({type:"first-input",buffered:!0}),p((function(){o(a.takeRecords()),i.value<0&&j()>0&&(i.value=0,i.entries=[]),r(!0)})),f((function(){_=[],q=N(),i=l("INP"),r=m(n,i,t,e.reportAllChanges)})))}))},K={},Q=function(n,e){e=e||{},g((function(){var t,r=[2500,4e3],i=b(),o=l("LCP"),a=function(n){var e=n[n.length-1];if(e){var r=Math.max(e.startTime-d(),0);r<i.firstHiddenTime&&(o.value=r,o.entries=[e],t())}},u=v("largest-contentful-paint",a);if(u){t=m(n,o,r,e.reportAllChanges);var c=function(){K[o.id]||(a(u.takeRecords()),u.disconnect(),K[o.id]=!0,t(!0))};["keydown","click"].forEach((function(n){addEventListener(n,c,{once:!0,capture:!0})})),p(c,!0),f((function(i){o=l("LCP"),t=m(n,o,r,e.reportAllChanges),h((function(){o.value=performance.now()-i.timeStamp,K[o.id]=!0,t(!0)}))}))}}))},U=function n(e){document.prerendering?g((function(){return n(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return n(e)}),!0):setTimeout(e,0)},V=function(n,e){e=e||{};var t=[800,1800],r=l("TTFB"),i=m(n,r,t,e.reportAllChanges);U((function(){var o=s();if(o){var a=o.responseStart;if(a<=0||a>performance.now())return;r.value=Math.max(a-d(),0),r.entries=[o],i(!0),f((function(){r=l("TTFB",0),(i=m(n,r,t,e.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=496.83ac81af.chunk.js.map