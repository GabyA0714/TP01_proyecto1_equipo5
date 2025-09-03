
document.addEventListener('click', (ev) => {
  const target = ev.target;
  if (!(target instanceof HTMLElement)) return;
  const action = target.dataset.action;
  if (!action) return;

  if (action === 'toggle-sobre-mi'){
    const p = document.getElementById('sobreMi');
    if (p){ p.hidden = !p.hidden; }
  }

  if (action === 'cambiar-color'){
    
    const acc = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    const opciones = ['#2563eb','#16a34a','#dc2626','#9333ea','#f59e0b','#0ea5e9'];
    let next = opciones[(opciones.indexOf(acc)+1) % opciones.length];
    document.documentElement.style.setProperty('--accent', next);
  }
});

(() => {
  const pref = localStorage.getItem('pref-tema');
  if (pref === 'dark'){
    document.body.classList.add('theme-dark');
  }
})();
