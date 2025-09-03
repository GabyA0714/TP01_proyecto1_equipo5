
const btnTema = document.getElementById('btnTema');
const btnSaludo = document.getElementById('btnSaludo');
const mensaje = document.getElementById('mensaje');

if (btnTema){
  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    
    const dark = document.body.classList.contains('theme-dark');
    localStorage.setItem('pref-tema', dark ? 'dark' : 'light');
  });
}

if (btnSaludo && mensaje){
  btnSaludo.addEventListener('click', () => {
    mensaje.hidden = !mensaje.hidden;
  });
}

(() => {
  const pref = localStorage.getItem('pref-tema');
  if (pref === 'dark'){
    document.body.classList.add('theme-dark');
  }
})();
