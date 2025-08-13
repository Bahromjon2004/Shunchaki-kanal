// Mobil menyu
const toggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');
toggle?.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.gap = '12px';
    menu.style.padding = '12px 0';
  }
});

// Yilni avtomatik qo'yish
document.getElementById('year').textContent = new Date().getFullYear();

// Forma (demo)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  // Bu yerda haqiqiy backend yoki Telegram bot API ulashingiz mumkin.
  console.log('Forma maʼlumotlari:', data);
  msg.textContent = "Xabaringiz qabul qilindi! Tez orada aloqaga chiqamiz.";
  form.reset();
});
