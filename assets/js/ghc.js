
(function(){
  try{
    if(localStorage.getItem('ghc_consent')==='1') return;
    var b=document.createElement('div');
    b.id='cookie-banner';
    b.innerHTML='<div class="container d-flex flex-wrap justify-content-between align-items-center gap-3"><span class="small">We use cookies and similar technologies to improve your experience and analyse traffic. See our <a href="/privacy.html" class="link-light">Privacy Policy</a>.</span><div class="d-flex gap-2"><button id="acceptCookies" class="btn btn-light btn-sm">Accept</button><button id="dismissCookies" class="btn btn-outline-light btn-sm">Dismiss</button></div></div>';
    document.body.appendChild(b);
    document.getElementById('acceptCookies').onclick=function(){localStorage.setItem('ghc_consent','1'); b.remove();};
    document.getElementById('dismissCookies').onclick=function(){b.remove();};
  }catch(e){}
})();