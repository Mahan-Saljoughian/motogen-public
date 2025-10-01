// Get DOM Elements
const header = document.getElementById('siteHeader');
const year = document.getElementById('year');

// Setup Reveal Animation on Scroll
function setupReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
      }
    });
  }, { threshold: .15 });
  
  els.forEach(el => io.observe(el));
}

// Add Shadow to Header on Scroll
function setupHeaderShadow() {
  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Initialize Everything When DOM is Ready
document.addEventListener('DOMContentLoaded', () => {
  // Existing init
  setupReveal();
  setupHeaderShadow();
  year.textContent = new Date().getFullYear();

  const webAppBtn = document.getElementById('webAppBtn');
  if (!webAppBtn) return;

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  function isSafariIOS() {
    return isIOS() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  function isAndroid() {
    return /Android/.test(navigator.userAgent);
  }
  function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  }

  webAppBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!isMobile()) {
      alert('وب اپلیکیشن تنها از طریق تلفن همراه قابل دسترس است.');
      return;
    }

    if (isAndroid()) {
      alert('وب اپلیکیشن موتوژن تنها برای دستگاه‌های iOS در دسترس است.');
      return;
    }

    if (isIOS() && !isSafariIOS()) {
      alert('لطفاً برای دسترسی به وب اپلیکیشن موتوژن، مرورگر Safari را در دستگاه خود باز کنید.');
      return;
    }

    if (isSafariIOS()) {
      // Show Add to Home Screen guide — can be made into HTML modal
      showAddToHomeScreenGuide();
    }
  });

  function showAddToHomeScreenGuide() {
    const guide = document.createElement('div');
    guide.innerHTML = `
      <div style="position:fixed;top:0;left:0;width:100%;height:100%;
                  background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;
                  z-index:1000;">
        <div style="background:#fff;padding:20px;border-radius:10px;max-width:400px;font-size:14px;text-align:right;">
          <h3 style="margin-top:0;">افزودن به صفحه اصلی</h3>
          <ol>
            <li>روی دکمه Share در پایین مرورگر Safari بزنید.</li>
            <li>گزینه "Add to Home Screen" را انتخاب کنید.</li>
            <li>در مرحله بعد، بالای صفحه روی "Add" بزنید.</li>
          </ol>
          <button id="guideClose" style="margin-top:12px;padding:8px 12px;background:#fca311;color:#111;
                  border:none;border-radius:6px;font-weight:bold;cursor:pointer;">باشه</button>
        </div>
      </div>
    `;
    document.body.appendChild(guide);

  document.getElementById('guideClose').addEventListener('click', () => {
  guide.remove();
  window.location.href = 'https://mahan-saljoughian.github.io/motogen-webApp/';
});

  }
});
