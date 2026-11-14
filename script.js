/* =========================================================
   YV English — interações
   - Idioma do site (PT / ES)
   - Idioma das aulas nos planos (Inglês / Espanhol)
   - Links de WhatsApp com mensagem pronta
   - Menu, navbar, CTA fixo no mobile e animações
   ========================================================= */

const WHATSAPP = '5521965126480';

/* ---------- Traduções (o português fica no próprio HTML) ---------- */
const ES = {
  'meta.title': 'YV English | Clases Particulares de Inglés y Español',
  'meta.desc': 'Clases particulares de inglés y español, en vivo y online, con un plan hecho para tu objetivo y acompañamiento real. Agenda tu diagnóstico gratuito.',

  'nav.langs': 'Idiomas',
  'nav.method': 'Método',
  'nav.plans': 'Planes',
  'nav.faq': 'Preguntas',
  'nav.hub': 'Área del Alumno',
  'nav.cta': 'Diagnóstico gratuito',

  'hero.eyebrow': 'Clases particulares en vivo · Inglés y Español',
  'hero.title': 'Deja de bloquearte.<br><em>Empieza a hablar.</em>',
  'hero.sub': 'Clases particulares con Yasmin, un plan hecho para tu objetivo y acompañamiento de verdad entre una clase y otra. Sin memorizar sin sentido, sin estudiar solo.',
  'hero.cta': 'Agendar diagnóstico gratuito',
  'hero.cta2': 'Ver planes',
  'hero.micro': '✓ Gratis &nbsp;·&nbsp; ✓ Online &nbsp;·&nbsp; ✓ Sin compromiso',
  'common.student': 'alumna',

  'strip.1t': '100% en vivo',
  'strip.1': 'Clases particulares, solo tú y la profesora',
  'strip.2t': 'A tu medida',
  'strip.2': 'Contenido pensado para tu objetivo',
  'strip.3t': 'Hub del Alumno',
  'strip.3': 'Clases grabadas, material y repaso',
  'strip.4t': 'Certificado',
  'strip.4': 'Por cada módulo completado',

  'pain.label': 'Si llegaste hasta aquí…',
  'pain.title': 'No necesitas otra app. <em>Necesitas dirección.</em>',
  'pain.close': '<strong>El problema no es falta de capacidad.</strong> Es estudiar sin estructura, sin práctica y sin nadie que te acompañe de cerca. Eso es exactamente lo que resuelve YV.',
  'pain.1': 'Estudiaste años en la escuela y todavía te bloqueas al hablar.',
  'pain.2': 'Entiendes cuando lees, pero te pierdes cuando alguien habla rápido.',
  'pain.3': 'Ya empezaste apps, cursos y videos en YouTube… y lo dejaste a mitad de camino.',
  'pain.4': 'Ya dejaste pasar un trabajo, un viaje o una conversación por culpa del idioma.',
  'pain.5': 'Sabes la regla, pero en el momento clave la frase simplemente no sale.',

  'langs.label': 'Dos idiomas, un método',
  'langs.title': 'Para quien quiere vivir el mundo, <em>no solo visitarlo.</em>',
  'langs.sub': 'Elige tu idioma — o los dos. El método, el acompañamiento y el cuidado son los mismos.',
  'langs.en.tag': 'Inglés',
  'langs.en.text': 'El idioma de la carrera global, de internet, de las películas y las series.',
  'langs.en.1': 'Entrevistas, reuniones y trabajo remoto',
  'langs.en.2': 'Viajes sin depender de un traductor',
  'langs.en.3': 'Películas y series sin subtítulos',
  'langs.en.cta': 'Ver planes de inglés →',
  'langs.es.tag': 'Español',
  'langs.es.text': 'El idioma de nuestros vecinos — y de más de 20 países en el mundo.',
  'langs.es.1': 'Viajes por América Latina y España',
  'langs.es.2': 'Negocios y oportunidades en la región',
  'langs.es.3': 'Cultura, música y nuevas amistades',
  'langs.es.cta': 'Ver planes de español →',

  'method.label': 'Método YV',
  'method.title': 'Aquí <em>no estudias solo.</em>',
  'method.sub': 'Una profesora que conoce tu nivel, tus objetivos y tus puntos débiles — y un método pensado para que entiendas, practiques y no olvides.',
  'method.1t': 'Entiende, no memorices',
  'method.1': 'Aprendes por qué funciona la frase. Sin traducir palabra por palabra, sin memorizar sin sentido.',
  'method.2t': 'Explica para fijar',
  'method.2': 'Con la Técnica Feynman, repasas explicando con tus palabras. Si puedes explicarlo, lo aprendiste de verdad.',
  'method.3t': 'Repasa en el momento justo',
  'method.3': 'Con repetición espaciada, el contenido vuelve justo cuando lo ibas a olvidar. Así es como el idioma se queda.',
  'method.4t': 'A tu manera',
  'method.4': 'Tus series, tu trabajo y tus viajes se convierten en material de clase. Aprendes lo que vas a usar mañana.',

  'proof.label': 'Resultados reales',
  'proof.title': 'Quien ya se desbloqueó, <em>lo cuenta.</em>',
  'proof.cta': 'Quiero ser el próximo en desbloquearme',

  'photos.label': 'Dentro de las clases',
  'photos.title': 'Contenido real, <em>como a ti te gusta.</em>',
  'photos.1': 'Películas, series y noticias adaptadas a tu nivel y a tus intereses.',
  'photos.2': 'Lectura e interpretación para ampliar vocabulario y comprensión.',
  'photos.3': 'Escenas reales para aprender el idioma que la gente usa de verdad.',
  'photos.4': 'Actividades interactivas para practicar, probar y consolidar.',
  'photos.5': 'Un Hub personalizado para seguir aprendiendo fuera de clase.',

  'steps.label': 'Cómo empezar',
  'steps.title': 'Empezar es simple.',
  'steps.sub': 'Del primer contacto a la primera clase, en cuatro pasos.',
  'steps.1t': 'Completa el formulario',
  'steps.1': 'Cuéntanos rápido sobre ti, tu nivel y lo que quieres lograr.',
  'steps.2t': 'Diagnóstico gratuito',
  'steps.2': 'Un encuentro online y sin compromiso para entender tu nivel, tu rutina y tu objetivo.',
  'steps.3t': 'Tu plan a medida',
  'steps.3': 'Recibes la recomendación del plan ideal y el camino hacia tu objetivo.',
  'steps.4t': 'Empieza a avanzar',
  'steps.4': 'Clases en vivo, Hub del Alumno, repasos y acompañamiento continuo.',
  'steps.cta': 'Dar el primer paso ahora',

  'hub.label': 'Hub del Alumno YV',
  'hub.title': 'La clase termina. <em>Tu progreso, no.</em>',
  'hub.sub': 'Entre una clase y otra, todo lo que necesitas está organizado en un solo lugar — en el celular o en la computadora.',
  'hub.1': '<strong>Clases grabadas y material por semana</strong> para repasar cuando quieras.',
  'hub.2': '<strong>Smart Review:</strong> flashcards con repetición espaciada para no olvidar.',
  'hub.3': '<strong>Contenido real</strong> adaptado a tu nivel, como The Fluency Times.',
  'hub.4': '<strong>Certificado</strong> emitido por YV por cada módulo completado.',

  'about.badge': 'años estudiando idiomas',
  'about.label': 'Quién te va a acompañar',
  'about.title': 'Hola, soy <em>Yasmin.</em>',
  'about.1': 'Estudio inglés desde hace más de diez años, hablo inglés y español y actualmente estoy aprendiendo francés.',
  'about.2': 'Como apasionada por los idiomas, pasé por todas las fases de este proceso: entusiasmo, frustración, bloqueo, inseguridad y progreso. Por eso no vendo facilidad artificial.',
  'about.3': 'Aprender un idioma es un desafío — y por eso no deberías hacerlo solo. Mi papel es caminar contigo hasta que el idioma deje de ser un bloqueo y se convierta en una puerta abierta.',

  'plans.label': 'Planes',
  'plans.title': 'Elige tu <em>ritmo.</em>',
  'plans.sub': 'Todos los planes incluyen clases particulares en vivo, acompañamiento y acceso al Hub del Alumno YV. Lo que cambia es la intensidad.',
  'plans.tab.en': 'Inglés',
  'plans.tab.es': 'Español',
  'plans.scarcity': '📅 <strong>Agenda limitada:</strong> al ser clases particulares, los horarios se llenan por orden de inscripción.',
  'plans.per': '/mes',
  'plans.popular': 'Más elegido',
  'plans.intensive': 'Intensivo',
  'plans.best': 'Avance más rápido',
  'plans.foundation.for': 'Para quien está empezando y quiere aprender con ligereza y constancia.',
  'plans.foundation.freq': '1 hora por semana',
  'plans.foundation.cta': 'Quiero el Foundation',
  'plans.fluency.for': 'Para quien quiere avanzar con constancia y volver el idioma algo natural.',
  'plans.fluency.freq': '2 horas por semana',
  'plans.fluency.cta': 'Quiero el Fluency',
  'plans.performance.for': 'Para quien tiene prisa o un objetivo cercano y quiere hacer del idioma una ventaja.',
  'plans.performance.freq': '3 horas por semana',
  'plans.performance.cta': 'Quiero el Performance',
  'plans.es1.for': 'Para empezar el español con ligereza, a tu ritmo.',
  'plans.es1.freq': '1 clase por semana',
  'plans.es1.cta': 'Quiero el Esencial',
  'plans.es2.for': 'Para avanzar con constancia y empezar a conversar más rápido.',
  'plans.es2.freq': '2 clases por semana',
  'plans.es2.cta': 'Quiero el Fluidez',
  'plans.help': '¿Dudas sobre cuál elegir? <a href="https://yvenglish.github.io/yv_novo_aluno_form/" target="_blank" rel="noopener">En el diagnóstico gratuito decidimos juntos →</a>',

  'feat.1': 'Clases particulares en vivo',
  'feat.2': 'Materiales personalizados',
  'feat.3': 'Actividades extra mensuales',
  'feat.4': 'Contenido semanal de repaso',
  'feat.5m': 'Grupo de conversación mensual',
  'feat.5w': 'Grupo de conversación <strong>semanal</strong>',
  'feat.6': 'Entrenamiento extra de input y output',
  'feat.6s': 'Entrenamiento extra de input y output <small>(incluye shadowing)</small>',
  'feat.7': 'Contenido para repaso diario',
  'feat.8': 'Flexibilidad de horarios',
  'feat.8s': 'Flexibilidad de horarios <small>(ej.: 30 min de lun. a jue. y 1h el viernes)</small>',
  'feat.hub.basic': 'Hub del Alumno <small>(clases grabadas, materiales y biblioteca de contenido real)</small>',
  'feat.hub.full': 'Hub del Alumno completo <small>(+ flashcards con repetición espaciada)</small>',
  'feat.follow': 'Acompañamiento entre clases',
  'feat.hub': 'Acceso al Hub del Alumno YV',

  'faq.label': 'Preguntas frecuentes',
  'faq.title': 'Antes de empezar, <em>quizás te estés preguntando…</em>',
  'faq.more': '¿Te quedó alguna duda? <a href="https://wa.me/5521965126480" target="_blank" rel="noopener" data-wa>Escríbeme por WhatsApp.</a>',
  'faq.1q': 'Soy principiante total. ¿Es para mí?',
  'faq.1a': 'Sí. Las clases parten de tu nivel actual — los planes Foundation (inglés) y Esencial (español), por ejemplo, están pensados para quien está empezando.',
  'faq.2q': '¿Las clases son online?',
  'faq.2a': 'Sí. Son clases particulares en vivo y online, así que estudias desde donde estés. El material y las clases grabadas quedan en el Hub del Alumno, en el celular o en la computadora.',
  'faq.3q': '¿Cómo funciona el diagnóstico gratuito?',
  'faq.3a': 'Es un encuentro online y sin compromiso para entender tu nivel, tu rutina y tu objetivo. Al final sabes qué camino tiene más sentido — y solo entonces decides si quieres empezar.',
  'faq.4q': '¿En cuánto tiempo voy a poder hablar?',
  'faq.4a': 'Depende de tu punto de partida, de la frecuencia de las clases y de tu práctica entre ellas. No prometo fluidez en 30 días — prometo método, acompañamiento y un plan realista para tu objetivo.',
  'faq.5q': '¿Qué plan debo elegir?',
  'faq.5a': 'Si estás empezando, el Foundation (inglés) o el Esencial (español). Si quieres avanzar con constancia, el Fluency o el Fluidez. Si tienes prisa o un objetivo cercano — entrevista, viaje, mudanza —, el Performance (inglés). En el diagnóstico decidimos juntos.',
  'faq.6q': '¿Puedo estudiar inglés y español?',
  'faq.6a': 'Sí. En el diagnóstico gratuito vemos tu rutina y armamos la mejor forma de encajar los dos idiomas.',
  'faq.7q': '¿Recibo certificado?',
  'faq.7a': 'Sí. Al completar cada módulo, recibes un certificado de conclusión emitido por YV English.',

  'final.label': 'Próximo paso',
  'final.title': 'Dentro de seis meses, vas a agradecer <em>haber empezado hoy.</em>',
  'final.sub': 'Agenda tu diagnóstico gratuito: descubres tu nivel, entiendes el camino hacia tu objetivo y sales con claridad — aunque decidas no empezar ahora.',
  'final.cta': 'Agendar diagnóstico gratuito',
  'final.cta2': 'Resolver dudas por WhatsApp',

  'footer.tag': 'La fluidez no es un don, es método y acompañamiento.',
  'footer.links': 'Navegación',
  'footer.about': 'Sobre Yasmin',
  'footer.contact': 'Contacto',
  'footer.rights': '© 2026 YV English. Todos los derechos reservados.',

  'sticky.cta': 'Agendar diagnóstico gratuito',
};

/* Mensagens de WhatsApp */
const WA_TEXT = {
  pt: {
    general: 'Olá! Vim pelo site e gostaria de tirar uma dúvida sobre as aulas.',
    plan: (plan, lang) => `Olá! Vim pelo site e tenho interesse no plano ${plan} de ${lang === 'es' ? 'espanhol' : 'inglês'}.`,
  },
  es: {
    general: '¡Hola! Vengo del sitio web y me gustaría resolver una duda sobre las clases.',
    plan: (plan, lang) => `¡Hola! Vengo del sitio web y me interesa el plan ${plan} de ${lang === 'es' ? 'español' : 'inglés'}.`,
  },
};

const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

/* ---------- Estado ---------- */
let siteLang = 'pt';
let planLang = 'en';

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } },
};

/* ---------- Idioma do site ---------- */
const originals = new Map();
const PT_META = { title: document.title, desc: document.querySelector('meta[name="description"]').content };

function applySiteLang(lang) {
  siteLang = lang === 'es' ? 'es' : 'pt';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (!originals.has(el)) originals.set(el, el.innerHTML);
    const key = el.dataset.i18n;
    if (siteLang === 'es' && ES[key] == null) console.warn('[i18n] falta tradução:', key);
    el.innerHTML = siteLang === 'es' && ES[key] != null ? ES[key] : originals.get(el);
  });

  document.documentElement.lang = siteLang === 'es' ? 'es' : 'pt-BR';
  document.title = siteLang === 'es' ? ES['meta.title'] : PT_META.title;
  document.querySelector('meta[name="description"]').content = siteLang === 'es' ? ES['meta.desc'] : PT_META.desc;

  document.querySelectorAll('[data-site-lang]').forEach((b) => {
    const on = b.dataset.siteLang === siteLang;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on);
  });

  updateWhatsAppLinks();
  store.set('yv-lang', siteLang);
}

/* ---------- Idioma das aulas (planos) ---------- */
function applyPlanLang(lang) {
  planLang = lang === 'es' ? 'es' : 'en';
  document.querySelectorAll('[data-plan-lang]').forEach((b) => {
    const on = b.dataset.planLang === planLang;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
  });
  document.querySelectorAll('[data-plans]').forEach((grid) => {
    grid.hidden = grid.dataset.plans !== planLang;
  });
  updateWhatsAppLinks();
}

/* ---------- WhatsApp ---------- */
function updateWhatsAppLinks() {
  const t = WA_TEXT[siteLang];
  document.querySelectorAll('[data-wa]').forEach((a) => { a.href = waLink(t.general); });
  document.querySelectorAll('[data-plans]').forEach((grid) => {
    const lang = grid.dataset.plans;
    grid.querySelectorAll('.plan').forEach((card) => {
      const name = card.querySelector('h3').textContent.trim();
      const cta = card.querySelector('[data-plan-cta]');
      if (cta) cta.href = waLink(t.plan(name, lang));
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Idioma: ?lang=es > preferência salva > português
  const param = new URLSearchParams(location.search).get('lang');
  const initial = param || store.get('yv-lang') || 'pt';
  applySiteLang(initial);
  applyPlanLang('en');

  document.querySelectorAll('[data-site-lang]').forEach((b) => {
    b.addEventListener('click', () => applySiteLang(b.dataset.siteLang));
  });
  document.querySelectorAll('[data-plan-lang]').forEach((b) => {
    b.addEventListener('click', () => applyPlanLang(b.dataset.planLang));
  });
  // Cards de idioma levam aos planos já filtrados
  document.querySelectorAll('[data-pick-lang]').forEach((a) => {
    a.addEventListener('click', () => applyPlanLang(a.dataset.pickLang));
  });

  // Menu mobile
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('menu-toggle');
  const links = document.getElementById('nav-links');
  const closeMenu = () => {
    links.classList.remove('open');
    nav.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  toggle.addEventListener('click', () => {
    const open = !links.classList.contains('open');
    links.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  // Navbar + CTA fixo
  const sticky = document.getElementById('sticky-cta');
  const hero = document.getElementById('topo');
  const final = document.querySelector('.final');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    const pastHero = hero.getBoundingClientRect().bottom < 0;
    const atFinal = final.getBoundingClientRect().top < window.innerHeight;
    const show = pastHero && !atFinal;
    sticky.classList.toggle('show', show);
    document.body.classList.toggle('sticky-on', show);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Animações de entrada
  const items = document.querySelectorAll('.head, .pain-list li, .lang-card, .method-grid article, .quote, .steps-grid li, .hub-grid > *, .about-grid > *, .plan, .faq-list details, .final-box');
  if ('IntersectionObserver' in window) {
    items.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  }
});
