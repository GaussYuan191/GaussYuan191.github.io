!function o(r,i,c){function a(t,e){if(!i[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(n=new Error("Cannot find module'"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},r[t][0].call(n.exports,function(e){return a(r[t][1][e]||e)},n,n.exports,o,r,i,c)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<c.length;e++)a(c[e]);return a}({1:[function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){var t=document.querySelector("#brand"),n=document.querySelector("#name"),o=document.querySelector("#position"),r=document.querySelector("#date"),i=document.querySelector("#email"),c=document.querySelector("#phone"),a=document.querySelector("#address"),u=document.querySelector("#www"),s=document.querySelector("#linkedin"),l=document.querySelector("#github"),d=document.querySelector("#body"),m=document.querySelector("#signal");e.name&&(n.innerHTML=e.name),e.email&&(i.innerHTML=e.email),e.phone&&(c.innerHTML=e.phone),e.address&&(a.innerHTML=e.address),e.www&&((f=document.createElement("a")).target="_blank",f.innerText=f.href=e.www,u.appendChild(f)),e.linkedin&&((f=document.createElement("a")).target="_blank",f.innerText=f.href=e.linkedin,s.appendChild(f)),e.github&&((f=document.createElement("a")).target="_blank",f.innerText=f.href=e.github,l.appendChild(f)),t.querySelectorAll("[data-icon]").forEach(function(e){var t=document.createElement("i");t.className=e.getAttribute("data-icon"),e.appendChild(t)});var p,f=document.querySelector("html").lang,y="string"==typeof(t=f)?t.startsWith("zh")?"YYYY 年 MM 月 DD 日 ddd A h:mm:ss":"dddd, Do MMM. YYYY, h:mm:ss A":"";moment.locale(f),r.innerHTML=moment().format(y),window.setInterval(function(){r.innerHTML=moment().format(y)},1e3),e.position&&e.position.length&&((p=document.createElement("select")).onchange=function(e){var t,n;(t={url:this.value,success:function(e){d.contentEditable=!0,d.innerHTML=marked(e),d.style.display="inherit",m.style.display="inherit"}}).url&&((n=new XMLHttpRequest).open("get",t.url),n.responseType="text",n.addEventListener("readystatechange",function(){4===n.readyState&&200===n.status&&n.response&&t.success&&t.success(n.response)}),n.send())},o.appendChild(p),e.position.forEach(function(e,t){0===t&&((n=document.createElement("option")).text=o.getAttribute("data-placeholder"),n.disabled=!0,n.selected=!0,p.appendChild(n));var n=document.createElement("option");n.value=e.file,n.text=e.name,p.appendChild(n)}),m.onclick=function(){var t=2,n=2,o=window.scrollY,r=requestAnimationFrame(function e(){window.scrollY<d.offsetTop-n?(o+=t,t+=n,n*=1.2,window.scrollTo(0,o),r=requestAnimationFrame(e)):(window.scrollTo(0,d.offsetTop),cancelAnimationFrame(r))})})}var i,c;(i={url:"data.json",success:function(e){"object"===o(e)&&r(e)}}).url&&((c=new XMLHttpRequest).open("get",i.url),c.responseType="json",c.addEventListener("readystatechange",function(){4===c.readyState&&200===c.status&&c.response&&i.success&&i.success(c.response)}),c.send())},{}]},{},[1]);