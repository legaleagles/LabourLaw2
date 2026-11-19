/* LawSticker AI visit counter: one small beacon per page view.
   Sends the page, the referring site, screen size, language and time zone,
   plus a random visitor id kept on this device. See /privacy.html. */
(function(){
  try{
    if(navigator.webdriver||/^(localhost|127\.)/.test(location.hostname))return;
    var rid=function(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4)};
    var v,s;
    try{v=localStorage.getItem('ls_vid');if(!v){v=rid();localStorage.setItem('ls_vid',v)}}catch(e){v=''}
    try{s=sessionStorage.getItem('ls_sid');if(!s){s=rid();sessionStorage.setItem('ls_sid',s)}}catch(e){s=''}
    var q=new URLSearchParams(location.search);
    var d={p:location.pathname+(q.get('src')?'?src='+q.get('src'):''),t:document.title.slice(0,150),
      r:document.referrer&&document.referrer.indexOf(location.host)<0?document.referrer:'',
      v:v,s:s,w:screen.width+'x'+screen.height,l:navigator.language||'',
      z:(Intl.DateTimeFormat().resolvedOptions().timeZone)||'',u:q.get('utm_source')||q.get('src')||''};
    var send=function(){var b=JSON.stringify(d),u='https://lawsticker-backend-494996217030.europe-west1.run.app/api/visit';
      if(navigator.sendBeacon){navigator.sendBeacon(u,new Blob([b],{type:'text/plain'}))}
      else{fetch(u,{method:'POST',body:b,keepalive:true,mode:'no-cors'})}};
    var uad=navigator.userAgentData;
    if(uad&&uad.getHighEntropyValues){uad.getHighEntropyValues(['model']).then(function(h){if(h.model)d.m=h.model;send()},send)}
    else send();
  }catch(e){}
})();
