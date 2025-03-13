import{a as F,S as f,i as n}from"./assets/vendor-DsdExPLz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(i){return F.get("https://pixabay.com/api/",{params:{key:"49254828-2c532cb2bf49660d4021e7362",q:encodeURIComponent(i),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>[])}const u=document.querySelector(".gallery"),p=new f(".gallery a",{captionsData:"alt",captionDelay:300});function d(){u.innerHTML=""}function y(i){const r=i.map(o=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
              <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
            </a>
            <div class="container-image-info">
              <div class="sub-container">
                <p class="info-caption">Likes</p>
                <p class="info-numbers">${o.likes}</p>
              </div>
              <div class="sub-container">
                <p class="info-caption">Views</p>
                <p class="info-numbers">${o.views}</p>
              </div>
              <div class="sub-container">
                <p class="info-caption">Comments</p>
                <p class="info-numbers">${o.comments}</p>
              </div>
              <div class="sub-container">
                <p class="info-caption">Downloads</p>
                <p class="info-numbers">${o.downloads}</p>
              </div>
            </div>
          </li>`).join("");u.insertAdjacentHTML("beforeend",r),p.refresh()}const l=document.querySelector("form");document.querySelector(".gallery");const a=document.querySelector(".loader");l.addEventListener("submit",i=>{i.preventDefault();const r=l.search.value.trim();if(r===""){n.error({title:" Error",titleColor:"#FFFFFF",icon:"material-icons",iconText:"error",iconColor:"#FFFFFF",message:"Please, fill in the field",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"bottomRight",close:!1,layout:2,timeout:1e4});return}a.style.display="block",d(),m(r).then(o=>{if(a.style.display="none",o.length===0){n.error({title:"No images",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"bottomRight",icon:"material-icons",iconText:"error",iconColor:"#FFFFFF",messageColor:"#FFFFFF",close:!1,layout:2,timeout:1e4});return}y(o)}).catch(o=>{a.style.display="none",n.error({title:"Error",titleColor:"#FFFFFF",message:"Something went wrong!",backgroundColor:"#EF4040",position:"bottomRight",icon:"material-icons",iconText:"error",iconColor:"#FFFFFF",messageColor:"#FFFFFF",close:!1,layout:2,timeout:1e4})}).finally(()=>{l.reset()})});
//# sourceMappingURL=index.js.map
