// ---- live "uptime" counter, since first day at Yashida Tech ----
(function () {
  const startDate = new Date('2023-01-01T00:00:00');
  const el = document.getElementById('uptime-val');
  if (!el) return;

  function render() {
    const now = new Date();
    const diffMs = now - startDate;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const years = (days / 365.25).toFixed(1);
    el.textContent = `${years}y`;
    el.setAttribute('title', `${days} days since Jan 2023`);
  }

  render();
  // no need to tick every second for a "years" readout; refresh hourly is plenty
  setInterval(render, 1000 * 60 * 60);
})();

// ---- current year in footer ----
(function () {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// ---- reveal sections on scroll ----
(function () {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || targets.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((t) => io.observe(t));
})();
