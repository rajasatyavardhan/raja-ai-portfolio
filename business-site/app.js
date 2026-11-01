(() => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const form = document.getElementById('contactForm');
  if(form){form.addEventListener('submit', event => {
    event.preventDefault();
    if(!form.reportValidity()) return;
    const name = form.elements.namedItem('name').value.trim();
    const email = form.elements.namedItem('email').value.trim();
    const idea = form.elements.namedItem('idea').value.trim();
    if(!name || !email || !idea) return;
    const subject = `Raja Builds enquiry from ${name}`;
    const body = `Hi Raja,\n\n${idea}\n\nName: ${name}\nEmail: ${email}\n\nThank you!`;
    window.location.href = `mailto:rajasatyavardhana.thippareddy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });}
})();

/* Accessible service enquiry shortcuts */
document.querySelectorAll('[data-service]').forEach(function(card){
 card.addEventListener('click',function(){
   var textarea=document.getElementById('idea');
   if(!textarea)return;
   textarea.value=card.getAttribute('data-service');
   document.getElementById('contact').scrollIntoView({behavior:'smooth',block:'start'});
   setTimeout(function(){textarea.focus({preventScroll:true})},250);
 });
});