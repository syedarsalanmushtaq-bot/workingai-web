(() => {
const article = document.querySelector('.article-body');
const links = [...document.querySelectorAll('.contents nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
const fill = document.querySelector('#progress-fill');
const label = document.querySelector('#progress-label');
let queued = false;
function update() {
  const rect = article.getBoundingClientRect();
  const distance = Math.max(1, rect.height - window.innerHeight);
  const progress = Math.max(0, Math.min(100, Math.round(-rect.top / distance * 100)));
  fill.style.width = progress + '%'; label.textContent = progress;
  let current = -1;
  sections.forEach((section, index) => { if (section.getBoundingClientRect().top <= 180) current = index; });
  links.forEach((link, index) => { if (index === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  queued = false;
}
window.addEventListener('scroll', () => {if (!queued) {queued = true; requestAnimationFrame(update);}}, {passive:true});
window.addEventListener('resize', update); update();
})();