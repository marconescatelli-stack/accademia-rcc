/* KC-BUILD: scegli.js v1.0 · 2026-09-14 · Barra di scelta per età condivisa (Marco 14 set):
   UN file per ordine, etichette e stile di tutte le pagine percorso. Le pagine hanno solo
   <div class="scegli" data-scegli></div> + <script src="/assets/js/scegli.js" defer>.
   La voce corrente si riconosce dal pathname. Genitori → blocco #corso-genitori (nella
   stessa pagina su bambini/ragazzi, altrimenti sulla pagina bambini). */
(function () {
  var VOCI = [
    { href: '/corsi-arrampicata-bambini/', label: 'Bambini 6–11' },
    { href: '/corsi-arrampicata-ragazzi/', label: 'Ragazzi 12–17' },
    { href: 'GENITORI',                    label: 'Genitori' },
    { href: '/corso-giovani-18-24/',       label: 'Giovani 18–24' },
    { href: '/percorsi-arrampicata-adulti/', label: 'Adulti' },
    { href: '/corso-senior-over-60/',      label: 'Senior 60+' },
    { href: '/veterani-accademia/',        label: 'Veterani RCC' }
  ];
  var CSS = '.scegli{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 6px}' +
    '.scegli a{font-size:13px;letter-spacing:.06em;text-transform:uppercase;font-weight:600;padding:8px 14px;border:1px solid rgba(255,255,255,.8);border-radius:999px;color:#fff;background:rgba(0,0,0,.32);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);text-decoration:none;text-shadow:0 1px 2px rgba(0,0,0,.4)}' +
    '.scegli a.qui{background:var(--terracotta);border-color:var(--terracotta);color:#fff;text-shadow:none}' +
    '.scegli a:hover{background:#fff;border-color:#fff;color:var(--terracotta);text-shadow:none}' +
    '.scegli a.qui:hover{background:var(--terracotta);color:#fff}';

  var path = location.pathname.replace(/index\.html$/, '');
  if (path.charAt(path.length - 1) !== '/') path += '/';
  var isMinori = path === '/corsi-arrampicata-bambini/' || path === '/corsi-arrampicata-ragazzi/';

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var html = '';
  for (var i = 0; i < VOCI.length; i++) {
    var v = VOCI[i];
    var href = v.href === 'GENITORI' ? (isMinori ? '#corso-genitori' : '/corsi-arrampicata-bambini/#corso-genitori') : v.href;
    var qui = v.href === path ? ' class="qui"' : '';
    html += '<a href="' + href + '"' + qui + '>' + v.label + '</a>';
  }
  var slots = document.querySelectorAll('[data-scegli]');
  for (var j = 0; j < slots.length; j++) slots[j].innerHTML = html;
})();
