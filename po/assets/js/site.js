/* v3.1 — the header slot shows where you are, not the time (F04, DR-066).
   Fallback with JS off: the static "Reading, UK" in the markup. Fails closed. */
(function(){
  var slot=document.getElementById('clock');
  if(!slot) return;
  try{
    var secs=[].slice.call(document.querySelectorAll('section[id], nav[id]'));
    if(!secs.length) return;
    var label=function(el){
      var h=el.querySelector('h2');
      return h? h.textContent.replace(/\s+/g,' ').trim().slice(0,42) : '';
    };
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          var t=label(e.target);
          if(t) slot.textContent=t;
        }
      });
    },{rootMargin:'-15% 0px -70% 0px'});
    secs.forEach(function(x){ io.observe(x); });
    window.addEventListener('scroll',function(){
      if((window.scrollY||0)<200) slot.textContent='Reading, UK';
    },{passive:true});
  }catch(e){}
})();
