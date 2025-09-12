(function(){
  const translations = {
    'nav.home': {en: 'Home', ko: '홈', zh: '主页'},
    'nav.about': {en: 'About', ko: '회사소개', zh: '关于'},
    'nav.strategies': {en: 'Strategies', ko: '전략', zh: '策略'},
    'nav.team': {en: 'Team', ko: '팀', zh: '团队'},
    'nav.insights': {en: 'Insights', ko: '인사이트', zh: '洞察'},
    'nav.contact': {en: 'Contact', ko: '문의', zh: '联系'},
    'nav.language': {en: 'Language', ko: '언어', zh: '语言'},
    'about.title': {en: 'About Good Hope Corp', ko: '굿 호프 코프 소개', zh: '关于Good Hope Corp'},
    'about.lead': {
      en: 'We are an independent investment manager focused on delivering consistent, compounding returns. Our philosophy is simple: protect the downside, let the upside take care of itself.',
      ko: '우리는 일관된 복리 수익을 제공하는 데 초점을 맞춘 독립적인 투자 운용사입니다. 우리의 철학은 간단합니다: 하방을 보호하고 상승은 스스로 해결되도록 합니다.',
      zh: '我们是一家专注于提供持续复利回报的独立投资管理公司。我们的理念很简单：控制下行，让上行自然而来。'
    }
  };
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  const current = (lang === 'ko' || lang === 'zh') ? lang : 'en';
  document.documentElement.setAttribute('lang', current);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = translations[key];
    if(t && t[current]){
      el.textContent = t[current];
    }
  });
})();
