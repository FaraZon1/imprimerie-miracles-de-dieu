// Smooth-scroll links (preserved)
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', function(e){
    const target=document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      // close mobile nav if open
      const nav=document.querySelector('.nav-links');
      if(nav && nav.classList.contains('open')) nav.classList.remove('open');
    }
  });
});

// Mobile nav toggle
const navToggle=document.getElementById('nav-toggle');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    const nav=document.querySelector('.nav-links');
    if(nav) nav.classList.toggle('open');
  });
}

// Gallery lightbox
const galItems=document.querySelectorAll('.gal-item');
const lightbox=document.getElementById('lightbox');
if(galItems && lightbox){
  const lbImg=lightbox.querySelector('img');
  const lbClose=lightbox.querySelector('.close');
  galItems.forEach(item=>{
    item.addEventListener('click', ()=>{
      const img=item.querySelector('img');
      lbImg.src = img.src;
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    });
    item.addEventListener('keypress', (e)=>{ if(e.key==='Enter') item.click(); });
  });
  lbClose.addEventListener('click', ()=>{ lightbox.setAttribute('aria-hidden','true'); document.body.style.overflow=''); });
  lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) { lightbox.setAttribute('aria-hidden','true'); document.body.style.overflow=''; } });
}
