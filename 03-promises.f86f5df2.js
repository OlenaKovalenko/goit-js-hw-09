var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form"),button:document.querySelector('button[type="submit"]')}).form.addEventListener("submit",(function(e){e.preventDefault();const t=e.target.elements.delay.value,o=e.target.elements.step.value,n=e.target.elements.amount.value;for(let e=1;e<=n;e+=1){r(e,t+o*(e-1)).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.f86f5df2.js.map
