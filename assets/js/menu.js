/* KC-BUILD: menu.js v1.0 · 2026-10-21 · Menu a iscrizione con tendine (Marco 21–23 ott).
   - Tasto MENU (solo telefono): apre e chiude il menu.
   - Voci con ▾: aprono la tendina al clic o al tocco; su desktop anche al passaggio del mouse (CSS).
   - Clic fuori o tasto Esc: chiude tutto. Senza JavaScript il desktop funziona lo stesso (hover e tastiera). */
(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  var header = document.querySelector('header.site-nav');
  if (!header) return;
  var toggle = header.querySelector('.nav-toggle');
  var subs = header.querySelectorAll('.has-sub');

  function chiudiTendine(tranne) {
    for (var i = 0; i < subs.length; i++) {
      if (subs[i] === tranne) continue;
      subs[i].classList.remove('open');
      var b = subs[i].querySelector('.stone-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  }
  function chiudiMenu() {
    header.classList.remove('menu-aperto');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var aperto = header.classList.toggle('menu-aperto');
      toggle.setAttribute('aria-expanded', aperto ? 'true' : 'false');
      if (!aperto) chiudiTendine();
    });
  }
  for (var i = 0; i < subs.length; i++) {
    (function (li) {
      var btn = li.querySelector('.stone-btn');
      if (!btn) return;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var aperta = !li.classList.contains('open');
        chiudiTendine(li);
        li.classList.toggle('open', aperta);
        btn.setAttribute('aria-expanded', aperta ? 'true' : 'false');
      });
    })(subs[i]);
  }
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) { chiudiTendine(); chiudiMenu(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { chiudiTendine(); chiudiMenu(); }
  });
})();
