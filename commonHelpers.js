import{i as c,S as d}from"./assets/vendor-8c59ed88.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=s=>fetch("https://pixabay.com/api/"+`?key=45275366-6244e97cf540ed2b53abd51ec&q=${s}&image_type=photo&safesearch=true&orientation=horizontal`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{console.log(t)});function p(s){return s.map(({webformatURL:n,largeImageURL:t,tags:o,likes:e,views:r,comments:a,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img
                    class="gallery-image"
                    src="${n}"
                    alt="${o}"
                    />
            </a>
            <div class="info">
                <div><span>Likes:</span> ${e}</div>
                <div><span>Views:</span> ${r}</div>
                <div><span>Comments:</span> ${a}</div>
                <div><span>Downloads:</span> ${u}</div>
            </div>
         </li>

`).join("")}const l=document.querySelector(".gallery"),i=document.querySelector(".js-search-form");i.addEventListener("submit",s=>{s.preventDefault();const n=i.elements.user_query.value,t=document.querySelector(".loader-container");i.reset(),l.innerHTML="";const o=document.createElement("span");o.className="loader",t.appendChild(o),m(n).then(({hits:e})=>{e.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),o.remove(),l.insertAdjacentHTML("beforeend",p(e)),new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>{o.remove(),c.error({message:"An error occurred while fetching images. Please try again!",position:"topCenter"}),console.error("Error fetching images:",e)})});
//# sourceMappingURL=commonHelpers.js.map
