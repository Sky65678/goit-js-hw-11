import{A as E,S,i as m}from"./assets/vendor-65e4e6bd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q=E.create({baseURL:"https://pixabay.com/api/",params:{key:"44691348-434c97a8e5e51442929a69f01",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function g(s,t){return(await q.get("",{params:{q:s,page:t}})).data}function P({comments:s,downloads:t,views:o,likes:i,largeImageURL:e,tags:r,webformatURL:n}){return`<li class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img src="${n}" alt="${r}" class="gallery-img">
      </a>
      <div class="info">
      <div class="info-container">
        <p class="key">Likes</p>
        <p class="value">${i}</p>
      <div class="info-container">
        <p class="key">Views</p>
        <p class="value">${o}</p>
      </div>
      <div class="info-container">
        <p class="key">Comments</p>
        <p class="value">${s}</p>
      </div>
      <div class="info-container">
        <p class="key">Downloads</p>
        <p class="value">${t}</p>
      </div>
      </div>
    </li>`}function y(s){return s.map(P).join("")}const v=new S(".gallery-item a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".search-form"),x=document.querySelector("#search-input"),L=document.querySelector(".loader"),a=document.querySelector(".gallery"),h=document.querySelector(".more-img-btn");let c=1,T=15,d=0,l="";function b(){L.classList.remove("hidden")}function u(){L.classList.add("hidden")}function w(){h.classList.add("hidden")}function $(){h.classList.remove("hidden")}p.addEventListener("submit",async s=>{if(c=1,s.preventDefault(),l=x.value.trim(),b(),l===""){a.innerHTML="",m.error({title:"",message:"Enter query to see rezults!",position:"topRight"}),u();return}try{const{hits:t,totalHits:o}=await g(l,c);if(d=Math.ceil(o/T),console.log(d),t.length===0){m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",color:"#ef4040"}),a.innerHTML="",f(),u(),p.reset();return}const i=y(t);a.innerHTML=i,v.refresh(),u(),p.reset()}catch{}f()});h.addEventListener("click",async()=>{c++,w(),b();try{const{hits:s}=await g(l,c),t=y(s);a.insertAdjacentHTML("beforeend",t),v.refresh(),B(),u()}catch{}f()});function f(){c>=d?(w(),d&&m.info({title:"",message:"We`re sorry, but you`ve reached the end of search results."})):$()}function B(){const t=a.children[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
