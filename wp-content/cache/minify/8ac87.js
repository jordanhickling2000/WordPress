/*! This file is auto-generated */
!function(e,t){if("function"==typeof define&&define.amd)define("hoverintent",["module"],t);else if("undefined"!=typeof exports)t(module);else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};e.exports=function(e,n,o){function i(e,t){return y&&(y=clearTimeout(y)),b=0,p?void 0:o.call(e,t)}function r(e){m=e.clientX,d=e.clientY}function u(e,t){if(y&&(y=clearTimeout(y)),Math.abs(h-m)+Math.abs(E-d)<x.sensitivity)return b=1,p?void 0:n.call(e,t);h=m,E=d,y=setTimeout(function(){u(e,t)},x.interval)}function s(t){return L=!0,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1!==b&&(h=t.clientX,E=t.clientY,e.addEventListener("mousemove",r,!1),y=setTimeout(function(){u(e,t)},x.interval)),this}function c(t){return L=!1,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1===b&&(y=setTimeout(function(){i(e,t)},x.timeout)),this}function v(t){L||(p=!0,n.call(e,t))}function a(t){!L&&p&&(p=!1,o.call(e,t))}function f(){e.addEventListener("focus",v,!1),e.addEventListener("blur",a,!1)}function l(){e.removeEventListener("focus",v,!1),e.removeEventListener("blur",a,!1)}var m,d,h,E,L=!1,p=!1,T={},b=0,y=0,x={sensitivity:7,interval:100,timeout:0,handleFocus:!1};return T.options=function(e){var n=e.handleFocus!==x.handleFocus;return x=t({},x,e),n&&(x.handleFocus?f():l()),T},T.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",c,!1),l())},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",c,!1)),T}});

;/*! This file is auto-generated */
!function(l,u,d){function m(e){27===e.which&&(e=w(e.target,".menupop"))&&(e.querySelector(".menupop > .ab-item").focus(),y(e,"hover"))}function f(e){var t;13!==e.which||w(e.target,".ab-sub-wrapper")||(t=w(e.target,".menupop"))&&(e.preventDefault(),(o(t,"hover")?y:b)(t,"hover"))}function p(e){var t;13===e.which&&(t=e.target.getAttribute("href"),-1<d.userAgent.toLowerCase().indexOf("applewebkit")&&t&&"#"===t.charAt(0)&&setTimeout(function(){var e=l.getElementById(t.replace("#",""));e&&(e.setAttribute("tabIndex","0"),e.focus())},100))}function h(e,t){w(t.target,".ab-sub-wrapper")||(t.preventDefault(),(t=w(t.target,".menupop"))&&(o(t,"hover")?y:(E(e),b))(t,"hover"))}function v(e){var t,n=e.target.parentNode;if(t=n?n.querySelector(".shortlink-input"):t)return e.preventDefault&&e.preventDefault(),e.returnValue=!1,b(n,"selected"),t.focus(),t.select(),!(t.onblur=function(){y(n,"selected")})}function g(){if("sessionStorage"in u)try{for(var e in sessionStorage)-1<e.indexOf("wp-autosave-")&&sessionStorage.removeItem(e)}catch(e){}}function o(e,t){return e&&(e.classList&&e.classList.contains?e.classList.contains(t):e.className&&-1<e.className.split(" ").indexOf(t))}function b(e,t){e&&(e.classList&&e.classList.add?e.classList.add(t):o(e,t)||(e.className&&(e.className+=" "),e.className+=t))}function y(e,t){var n,r;if(e&&o(e,t))if(e.classList&&e.classList.remove)e.classList.remove(t);else{for(n=" "+t+" ",r=" "+e.className+" ";-1<r.indexOf(n);)r=r.replace(n,"");e.className=r.replace(/^[\s]+|[\s]+$/g,"")}}function E(e){if(e&&e.length)for(var t=0;t<e.length;t++)y(e[t],"hover")}function L(e){if(!e.target||"wpadminbar"===e.target.id||"wp-admin-bar-top-secondary"===e.target.id)try{u.scrollTo({top:-32,left:0,behavior:"smooth"})}catch(e){u.scrollTo(0,-32)}}function w(e,t){for(u.Element.prototype.matches||(u.Element.prototype.matches=u.Element.prototype.matchesSelector||u.Element.prototype.mozMatchesSelector||u.Element.prototype.msMatchesSelector||u.Element.prototype.oMatchesSelector||u.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});e&&e!==l;e=e.parentNode)if(e.matches(t))return e;return null}l.addEventListener("DOMContentLoaded",function(){var n,e,t,r,o,a,s,i,c=l.getElementById("wpadminbar");if(c&&"querySelectorAll"in c){n=c.querySelectorAll("li.menupop"),e=c.querySelectorAll(".ab-item"),t=l.getElementById("wp-admin-bar-logout"),r=l.getElementById("adminbarsearch"),o=l.getElementById("wp-admin-bar-get-shortlink"),a=c.querySelector(".screen-reader-shortcut"),s=/Mobile\/.+Safari/.test(d.userAgent)?"touchstart":"click",y(c,"nojs"),"ontouchstart"in u&&(l.body.addEventListener(s,function(e){w(e.target,"li.menupop")||E(n)}),c.addEventListener("touchstart",function e(){for(var t=0;t<n.length;t++)n[t].addEventListener("click",h.bind(null,n));c.removeEventListener("touchstart",e)})),c.addEventListener("click",L);for(i=0;i<n.length;i++)u.hoverintent(n[i],b.bind(null,n[i],"hover"),y.bind(null,n[i],"hover")).options({timeout:180}),n[i].addEventListener("keydown",f);for(i=0;i<e.length;i++)e[i].addEventListener("keydown",m);r&&((s=l.getElementById("adminbar-search")).addEventListener("focus",function(){b(r,"adminbar-focused")}),s.addEventListener("blur",function(){y(r,"adminbar-focused")})),a&&a.addEventListener("keydown",p),o&&o.addEventListener("click",v),u.location.hash&&u.scrollBy(0,-32),t&&t.addEventListener("click",g)}})}(document,window,navigator);
;/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);function t(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1}C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);e=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return e}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(d=g(b.commentReplyTitleId))&&d.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),t=t&&t.firstChild.textContent,n=this,d=m(n,"belowelement"),o=m(n,"commentid"),i=m(n,"respondelement"),r=m(n,"postid"),n=m(n,"replyto")||t;d&&o&&i&&r&&!1===v.addComment.moveForm(d,o,i,r,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i,r,l,a,m,c,s,e=g(e),n=(h=g(n),g(b.parentIdFieldId)),y=g(b.postIdFieldId),p=g(b.commentReplyTitleId),u=(p=p&&p.firstChild)&&p.nextSibling;if(e&&h&&n){void 0===o&&(o=p&&p.textContent),a=h,m=b.temporaryFormId,c=g(m),s=(s=g(b.commentReplyTitleId))?s.firstChild.textContent:"",c||((c=E.createElement("div")).id=m,c.style.display="none",c.textContent=s,a.parentNode.insertBefore(c,a)),d&&y&&(y.value=d),n.value=t,I.style.display="",e.parentNode.insertBefore(h,e.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(i=C.elements[f],r=!1,"getComputedStyle"in v?l=v.getComputedStyle(i):E.documentElement.currentStyle&&(l=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===l.visibility)&&(r=!0),"hidden"!==i.type&&!i.disabled&&!r){i.focus();break}}catch(e){}return!1}}}}(window);