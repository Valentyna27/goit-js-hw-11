import{a as f,S as m,i as n}from"./assets/vendor-DsdExPLz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(s){return f.get("https://pixabay.com/api/",{params:{key:"49254828-2c532cb2bf49660d4021e7362",q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>[])}const d=new m(".gallery a",{captionsData:"alt",captionDelay:300});function F(){d.refresh()}const a=document.querySelector("form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader");a.addEventListener("submit",s=>{s.preventDefault();const t=a.search.value.trim();if(t===""){n.error({title:" Error",titleColor:"#FFFFFF",icon:"material-icons",iconText:"error",iconColor:"#FFFFFF",message:"Please, fill in the field",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"bottomRight",close:!1,layout:2,timeout:1e4});return}l.style.display="block",u.innerHTML="",p(t).then(o=>{l.style.display="none",o.length===0?n.error({title:"No images",titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again!",icon:"material-icons",iconText:"error",iconColor:"#FFFFFF",messageColor:"#FFFFFF",backgroundColor:"#EF4040",position:"bottomRight",close:!1,layout:2,timeout:1e4}):(g(o),F())}).catch(o=>{l.style.display="none",n.error({title:"Error",message:"Something went wrong!",backgroundColor:"#EF4040",position:"bottomRight",icon:"material-icons",iconText:"error",iconColor:"#FFFFFF",messageColor:"#FFFFFF",close:!1,layout:2,timeout:1e4})}).finally(()=>{a.reset()})});function g(s){const t=s.map(o=>`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>
        <div class="container-image-info">
        <div class="sub-container">
        <p class="info-caption">Likes</p>
          <p class="info-numbers">${o.likes}</p>
          </div>
          <div class="sub-container">
          <p class="info-caption">Views  </p>
          <p class="info-numbers">${o.views}</p>
          </div>
           <div class="sub-container"> 
           <p class="info-caption">Comments   </p>
           <p class="info-numbers">${o.comments}</p>
           </div>
           <div class="sub-container">
           <p class="info-caption">Downloads</p> 
           <p class="info-numbers">${o.downloads}</p>
           </div>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=index.js.map
