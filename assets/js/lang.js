(function(){
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  const root = document.documentElement;
  const targets = { ko: 'ko', zh: 'zh-CN' };
  if (lang && targets[lang]) {
    root.setAttribute('lang', lang);
    document.cookie = `googtrans=/en/${targets[lang]};path=/`;
    document.querySelectorAll('a[href^="/"]').forEach(a => {
      const url = new URL(a.getAttribute('href'), window.location.origin);
      url.searchParams.set('lang', lang);
      a.href = url.pathname + url.search;
    });
    const div = document.createElement('div');
    div.id = 'google_translate_element';
    div.style.display = 'none';
    document.body.appendChild(div);
    const s = document.createElement('script');
    s.src = 'https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(s);
    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ko,zh-CN'}, 'google_translate_element');
    };
  } else {
    root.setAttribute('lang', 'en');
    document.cookie = 'googtrans=/en/en;path=/';
  }
})();
