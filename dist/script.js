const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.mobile-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));menu?.classList.toggle('open',!open)});
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const contactButton=document.getElementById('contact-button');
contactButton?.addEventListener('click',()=>{document.getElementById('contact-note').textContent='النسخة جاهزة لربط رقم واتساب وبريدك عند اعتماد الهوية.';contactButton.textContent='جاهز لربط بيانات التواصل ✓'});
