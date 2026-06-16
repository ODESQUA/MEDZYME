
const btn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>{btn.style.display=window.scrollY>300?'block':'none';});
btn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});});
