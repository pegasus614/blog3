// Confirm JS is connected
console.log("Football Pulse JS is connected ✅");
// const carousel = new bootstrap.Carousel('#myCarousel')

// Smooth scroll for nav + headlines
document.querySelectorAll('a[href^="#"], .nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


 // ===== NAV MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');      // open / close menu
  menuToggle.classList.toggle('open');      // turn ☰ into X
});




  // Date & Time
  function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("datetime").textContent = now.toLocaleString('en-GB', options);
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();


// Back to top button
const backTop = document.createElement("button");
backTop.innerText = "⬆️";
backTop.className = "back-to-top";
document.body.appendChild(backTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Live date in footer
const footerCopy = document.querySelector(".footer-copy");
if (footerCopy) {
  const year = new Date().getFullYear();
  footerCopy.innerText = `© ${year} Football Pulse | All Rights Reserved`;
}

// Auto-update year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
// Live Date & Time with AM/PM
(() => {
  const dtEl = document.getElementById('datetime');
  if (!dtEl) return;

  // Choose timezone:
  const tz = 'Africa/Lagos'; // or replace with browser timezone if you prefer

  const options = {
    weekday: 'short',   // Mon
    year: 'numeric',
    month: 'short',     // Sep
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,       // ✅ AM/PM format
    timeZone: tz
  };

  function updateDateTime() {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
    dtEl.textContent = `${formatted}`;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
})();
