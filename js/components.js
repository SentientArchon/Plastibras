/* ============================================================
   PLASTIBRAS — SHARED COMPONENTS (Nav + Footer)
   ============================================================ */

(function() {
  'use strict';

  const NAV_HTML = `
<nav class="nav" role="navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img src="images/logo-transparent.png" alt="Plastibras" class="nav-logo-img">
      </a>
      <ul class="nav-links">
        <li><a href="index.html" class="nav-link">Início</a></li>
        <li><a href="empresa.html" class="nav-link">A Empresa</a></li>
        <li class="nav-dropdown">
          <a href="#" class="nav-link">Serviços ▾</a>
          <div class="nav-dropdown-menu">
            <a href="injecao.html" class="nav-dropdown-item"><span class="dot"></span>Injeção de Plásticos</a>
            <a href="vacuum-forming.html" class="nav-dropdown-item"><span class="dot"></span>Vacuum Forming</a>
            <a href="ferramentaria.html" class="nav-dropdown-item"><span class="dot"></span>Ferramentaria</a>
            <a href="impressao-3d.html" class="nav-dropdown-item"><span class="dot"></span>Impressão 3D</a>
          </div>
        </li>
        <li><a href="tabelas-tecnicas.html" class="nav-link">Tabelas Técnicas</a></li>
        <li><a href="blog.html" class="nav-link">Blog</a></li>
        <li><a href="localizacao.html" class="nav-link">Localização</a></li>
      </ul>
      <a href="contato.html" class="nav-cta">Solicitar Orçamento</a>
      <button class="nav-hamburger" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="mobile-menu" role="dialog" aria-label="Menu de navegação">
  <button class="mobile-close" aria-label="Fechar menu">✕</button>
  <a href="index.html" class="mobile-menu-link">Início</a>
  <a href="empresa.html" class="mobile-menu-link">A Empresa</a>
  <a href="injecao.html" class="mobile-menu-link">Injeção de Plásticos</a>
  <a href="vacuum-forming.html" class="mobile-menu-link">Vacuum Forming</a>
  <a href="ferramentaria.html" class="mobile-menu-link">Ferramentaria</a>
  <a href="impressao-3d.html" class="mobile-menu-link">Impressão 3D</a>
  <a href="tabelas-tecnicas.html" class="mobile-menu-link">Tabelas Técnicas</a>
  <a href="blog.html" class="mobile-menu-link">Blog</a>
  <a href="contato.html" class="mobile-menu-link">Contato</a>
  <a href="localizacao.html" class="mobile-menu-link">Localização</a>
</div>`;

  const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">PLASTI<span>BRAS</span></div>
        <p class="footer-tagline">Mais de 30 anos moldando o futuro do plástico brasileiro. Qualidade, precisão e parceria desde 1995 em Joinville, SC.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/plastibras" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://www.facebook.com/plastibrasplasticos" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://twitter.com/plastibras" target="_blank" rel="noopener" class="social-link" aria-label="Twitter/X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://www.youtube.com/@plastibras" target="_blank" rel="noopener" class="social-link" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#060810" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Serviços</div>
        <ul class="footer-links">
          <li><a href="injecao.html" class="footer-link">Injeção de Plásticos</a></li>
          <li><a href="vacuum-forming.html" class="footer-link">Vacuum Forming</a></li>
          <li><a href="ferramentaria.html" class="footer-link">Ferramentaria</a></li>
          <li><a href="impressao-3d.html" class="footer-link">Impressão 3D</a></li>
          <li><a href="tabelas-tecnicas.html" class="footer-link">Tabelas Técnicas</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Empresa</div>
        <ul class="footer-links">
          <li><a href="empresa.html" class="footer-link">A Empresa</a></li>
          <li><a href="blog.html" class="footer-link">Blog do Plástico</a></li>
          <li><a href="contato.html" class="footer-link">Contato</a></li>
          <li><a href="localizacao.html" class="footer-link">Localização</a></li>
          <li><a href="#" class="footer-link">Privacidade e LGPD</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contato</div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span class="footer-contact-text">Rua Tenente Antônio João, 4000<br>Jardim Sofia · Joinville, SC<br>CEP 89223-100</span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.79a16 16 0 0 0 6.29 6.29l1.85-1.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span class="footer-contact-text"><a href="tel:+554734730077">(47) 3473-0077</a></span>
        </div>
        <div class="footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span class="footer-contact-text"><a href="mailto:comercial@plastibras.com.br">comercial@plastibras.com.br</a></span>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-left">© 2026 Plastibras Indústria de Plásticos Ltda. · CNPJ 78.627.148/0001-48 · Todos os direitos reservados.</div>
      <div class="footer-bottom-right">
        <a href="#" class="footer-bottom-link">Privacidade e LGPD</a>
        <a href="contato.html" class="footer-bottom-link">Contato</a>
        <a href="localizacao.html" class="footer-bottom-link">Localização</a>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/5547997690917?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento." class="float-whatsapp" target="_blank" rel="noopener" aria-label="WhatsApp Plastibras">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
</a>`;

  document.addEventListener('DOMContentLoaded', function() {
    // Inject nav before main content
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = NAV_HTML;
    }
    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;
    }
  });
})();
