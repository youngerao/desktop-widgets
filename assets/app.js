(() => {
  const nav = document.getElementById("nav");
  const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  const sha = "7ffe5e4efc03b6978cad04116206cd762d23d1a37fa3fd30dd7ecad0d183d8ae";
  const copyBtn = document.getElementById("copySha");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(sha);
        copyBtn.textContent = "已复制 SHA-256";
      } catch {
        copyBtn.textContent = "复制失败，请手动选择";
      }
      setTimeout(() => copyBtn.textContent = "复制 SHA-256", 2200);
    });
  }

  // Initial hash navigation should account for the sticky nav as well.
  if (location.hash) {
    setTimeout(() => {
      const el = document.querySelector(location.hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 78;
        window.scrollTo({ top, behavior: "auto" });
      }
    }, 80);
  }

  // Smooth anchor offset for the sticky nav.
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();
