/* ═══════════════════════════════════════════
   محبوب - Main JavaScript
   ═══════════════════════════════════════════ */

// ─── Book Data (with categories from sample_data) ───
const persianBooks = [
  // ادبیات و شعر
  {title:'دیوان عشق و معرفت ۴جلد',author:'آیت‌الله نکونام',badge:'',cat:'ادبیات و شعر',img:'https://nekooshop.com/wp-content/uploads/2025/04/6.All-Demo-Eshgh-Va-Marefat-1.jpg'},
  {title:'دیوان قرب یار',author:'آیت‌الله نکونام',badge:'',cat:'ادبیات و شعر',img:'https://nekooshop.com/wp-content/uploads/2025/04/24.Demo-GHorbe-Yar.jpg'},
  {title:'دیوان عروس دل',author:'آیت‌الله نکونام',badge:'',cat:'ادبیات و شعر',img:'https://nekooshop.com/wp-content/uploads/2025/04/3.Demo-Arose-Del-231x300.jpg'},
  {title:'دیوان لطف نازنین',author:'آیت‌الله نکونام',badge:'',cat:'ادبیات و شعر',img:'https://nekooshop.com/wp-content/uploads/2025/04/26.Demo-Lotfe-Nazanin-231x300.jpg'},
  {title:'دیوان غزل بهترین',author:'آیت‌الله نکونام',badge:'',cat:'ادبیات و شعر',img:'https://nekooshop.com/wp-content/uploads/2025/04/4.Demo-GHazale-Behtarin-231x300.jpg'},
  {title:'دیوان عاشق ترین',author:'آیت‌الله نکونام',badge:'',cat:'ادبیات و شعر',img:'https://nekooshop.com/wp-content/uploads/2025/04/27.Demo-Asheghtarin-231x300.jpg'},
  // موسیقی
  {title:'کتاب آموزش مقامات موسیقی ایرانی',author:'آیت‌الله نکونام',badge:'',cat:'موسیقی',img:'https://nekooshop.com/wp-content/uploads/2025/04/47.Demo-Amozeshe-Maghamate-Mosighi-Irani-Vaziri.jpg'},
  {title:'منطق موسیقی',author:'آیت‌الله نکونام',badge:'',cat:'موسیقی',img:'https://nekooshop.com/wp-content/uploads/2024/10/200.Demo-Mantegh-Mosighi-231x300.jpg'},
  {title:'تاریخ تحلیلی موسیقی',author:'آیت‌الله نکونام',badge:'',cat:'موسیقی',img:'https://nekooshop.com/wp-content/uploads/2024/10/182.Demo-Tarikh-Tahlili-Mosighi-Dar-Eslam-231x300.jpg'},
  {title:'رایج ترین مقامات موسیقی ایرانی',author:'آیت‌الله نکونام',badge:'',cat:'موسیقی',img:'https://nekooshop.com/wp-content/uploads/2024/10/47.Demo-Amozeshe-Maghamate-Mosighi-Irani-Roghee-231x300.jpg'},
  // زن و زندگی
  {title:'زن و آزادی',author:'آیت‌الله نکونام',badge:'',cat:'زن و زندگی',img:'https://nekooshop.com/wp-content/uploads/2024/10/184.Demo-Zan-Va-Azadmaneshi-Dini-231x300.jpg'},
  {title:'زن و آزادمنشی',author:'آیت‌الله نکونام',badge:'',cat:'زن و زندگی',img:'https://nekooshop.com/wp-content/uploads/2024/10/184.Demo-Zan-Va-Azadmaneshi-Dini-231x300.jpg'},
  {title:'غناخوانی زن',author:'آیت‌الله نکونام',badge:'',cat:'زن و زندگی',img:'https://nekooshop.com/wp-content/uploads/2024/10/183.Demo-GHana-KHanie-Zanan-231x300.jpg'},
  {title:'نابسامانی در پوشش دین مداری',author:'آیت‌الله نکونام',badge:'',cat:'زن و زندگی',img:'https://nekooshop.com/wp-content/uploads/2024/10/92.Demo-Dastani-Az-Nabesamani-Da-Posheshe-Din-Madari.jpg'},
  {title:'همسران و مدیران کارآمد',author:'آیت‌الله نکونام',badge:'',cat:'زن و زندگی',img:'https://nekooshop.com/wp-content/uploads/2024/10/144.Demo-Hamsaran-Va-modirane-Karamad.jpg'},
  {title:'زن و زندگی',author:'آیت‌الله نکونام',badge:'',cat:'زن و زندگی',img:'https://nekooshop.com/wp-content/uploads/2024/10/145.Demo-Zan-Va-Zendegi-231x300.jpg'},
  {title:'زندگی، عشق یا قانون',author:'آیت‌الله نکونام',badge:'',cat:'زن و زندگی',img:'https://nekooshop.com/wp-content/uploads/2024/10/143.Demo-Zendegi-Eshgh-ya-GHanoon.jpg'},
  // حقوق و سیاست
  {title:'نظام نامه روحانیت شیعه',author:'آیت‌الله نکونام',badge:'',cat:'حقوق و سیاست',img:'https://nekooshop.com/wp-content/uploads/2025/05/203.Demo-Nezam-Nameye-Rohaniyate-SHie.jpg'},
  {title:'قانون ولایت',author:'آیت‌الله نکونام',badge:'',cat:'حقوق و سیاست',img:'https://nekooshop.com/wp-content/uploads/2025/05/203.Demo-Velayat-Va-GHanoon-231x300.jpg'},
  {title:'قانون ۶ جلد',author:'آیت‌الله نکونام',badge:'',cat:'حقوق و سیاست',img:'https://nekooshop.com/wp-content/uploads/2024/10/217.All-Demo-GHanoon-Zaminehaye-Rahbari-231x300.jpg'},
  {title:'حقوق نو بنیاد',author:'آیت‌الله نکونام',badge:'',cat:'حقوق و سیاست',img:'https://nekooshop.com/wp-content/uploads/2024/10/197.All-Demo-Hoghogh-Nobonyad-J1-231x300.jpg'},
];

const audioBooks = [
  {title:'سخنرانی اخلاق — جلسه ۱',author:'آیت‌الله نکونام',badge:'',cat:'اخلاق'},
  {title:'درس خارج فقه — جلسه ۱۲',author:'آیت‌الله نکونام',badge:'',cat:'فقه'},
  {title:'تفسیر سوره بقره — قسمت ۳',author:'آیت‌الله نکونام',badge:'',cat:'تفسیر'},
  {title:'شرح دعای کمیل',author:'آیت‌الله نکونام',badge:'',cat:'دعا'},
  {title:'ویژه ماه مبارک رمضان',author:'آیت‌الله نکونام',badge:'',cat:'مناسبتی'},
  {title:'مبانی عقاید — جلسه ۵',author:'آیت‌الله نکونام',badge:'',cat:'عقاید'},
  {title:'مشاوره خانواده',author:'آیت‌الله نکونام',badge:'',cat:'مشاوره'},
  {title:'درس خارج فقه — جلسه ۱۳',author:'آیت‌الله نکونام',badge:'',cat:'درس'},
  {title:'سخنرانی اخلاق — جلسه ۲',author:'آیت‌الله نکونام',badge:'',cat:'اخلاق'},
  {title:'شرح زیارت عاشورا',author:'آیت‌الله نکونام',badge:'',cat:'دعا'},
];

const galleryBooks = [
  {title:'مراسم عید غدیر ۱۴۰۴',author:'مجموعه تصویری',badge:'',cat:'تصاویر'},
  {title:'مستند زندگی‌نامه',author:'واحد تصویری',badge:'',cat:'مستند'},
  {title:'پوستر ماه رمضان',author:'طراحی گرافیک',badge:'',cat:'پوستر'},
  {title:'خوشنویسی آیه نور',author:'استاد خوشنویس',badge:'',cat:'خوشنویسی'},
  {title:'اینفوگرافیک احکام روزه',author:'واحد محتوا',badge:'',cat:'اینفوگرافیک'},
  {title:'تصاویر سفر حج ۱۴۰۳',author:'مجموعه تصویری',badge:'',cat:'تصاویر'},
  {title:'ویدئوی سخنرانی عید فطر',author:'واحد تصویری',badge:'',cat:'ویدئو'},
  {title:'پوستر ولادت پیامبر',author:'طراحی گرافیک',badge:'',cat:'پوستر'},
];

const articleBooks = [
  {title:'ارزش صبر در قرآن کریم',author:'آیت‌الله نکونام',badge:'',cat:'اخلاق'},
  {title:'حکم شرعی معاملات دیجیتال',author:'آیت‌الله نکونام',badge:'',cat:'فقه'},
  {title:'توحید از منظر عقل و نقل',author:'آیت‌الله نکونام',badge:'',cat:'عقاید'},
  {title:'تفسیر آیه مباهله',author:'آیت‌الله نکونام',badge:'',cat:'تفسیر'},
  {title:'نقش مسجد در جامعه',author:'آیت‌الله نکونام',badge:'',cat:'اجتماعی'},
  {title:'پاسخ به شبهه تعدد زوجات',author:'آیت‌الله نکونام',badge:'',cat:'شبهات'},
  {title:'تربیت دینی در عصر دیجیتال',author:'آیت‌الله نکونام',badge:'',cat:'تربیتی'},
  {title:'فضیلت نماز شب',author:'آیت‌الله نکونام',badge:'',cat:'اخلاق'},
  {title:'احکام روزه مسافر',author:'آیت‌الله نکونام',badge:'',cat:'فقه'},
];

// ─── SVG Book Cover Generator (fallback for items without img) ───
const bookCovers = [
  {h:0,s:75,l:65},{h:200,s:70,l:55},{h:140,s:60,l:50},{h:30,s:80,l:60},
  {h:270,s:65,l:60},{h:340,s:70,l:55},{h:180,s:55,l:50},{h:50,s:75,l:55},
  {h:310,s:60,l:58},{h:10,s:80,l:55},{h:220,s:75,l:50},{h:100,s:55,l:48}
];

function generateBookCover(index, isAudio) {
  const c = bookCovers[index % bookCovers.length];
  const c2h = (c.h + 30) % 360;
  const h = isAudio ? 170 : 220;
  return `
    <svg viewBox="0 0 170 ${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg${index}${isAudio?'a':''}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${c.h},${c.s}%,${c.l}%)"/>
          <stop offset="100%" stop-color="hsl(${c2h},${c.s}%,${c.l-15}%)"/>
        </linearGradient>
      </defs>
      <rect width="170" height="${h}" fill="url(#bg${index}${isAudio?'a':''})"/>
      <rect x="20" y="${isAudio?25:35}" width="130" height="${isAudio?50:60}" rx="8" fill="rgba(255,255,255,0.15)"/>
      <rect x="30" y="${isAudio?90:115}" width="90" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="40" y="${isAudio?102:130}" width="60" height="5" rx="3" fill="rgba(255,255,255,0.12)"/>
      <circle cx="85" cy="${isAudio?140:175}" r="${isAudio?20:22}" fill="rgba(255,255,255,0.1)"/>
    </svg>`;
}

// ─── Create a single book card HTML ───
function createBookCard(book, index, isAudio) {
  const badgeHtml = book.cat
    ? `<span class="book-badge">${book.cat}</span>`
    : (book.badge ? `<span class="book-badge">${book.badge}</span>` : '');
  const rating = (3.5 + Math.random() * 1.5).toFixed(1);

  let coverImg;
  if (book.img) {
    coverImg = `<img class="book-cover-img" src="${book.img}" alt="${book.title}" style="width:100%;height:100%;object-fit:cover;">`;
  } else {
    const coverSvg = encodeURIComponent(generateBookCover(index, isAudio));
    coverImg = `<img class="book-cover-img" src="data:image/svg+xml,${coverSvg}" alt="${book.title}">`;
  }

  return `
    <a href="book-detail.html" class="book-card ${isAudio ? 'audio-card' : ''}" style="text-decoration:none;color:inherit">
      <div class="book-cover">
        ${coverImg}
        ${badgeHtml}
        <div class="book-overlay">
          <span class="book-overlay-btn">مشاهده کتاب</span>
        </div>
      </div>
      <div class="book-info">
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-meta">
          <span class="book-rating"><i class="bi bi-star-fill"></i> ${rating}</span>
          ${isAudio
            ? '<span><i class="bi bi-headphones"></i> صوتی</span>'
            : '<span><i class="bi bi-eye"></i> نوشته</span>'}
        </div>
      </div>
    </a>`;
}

// ─── Render books into a scroll container + wire arrows ───
function renderBooks(containerId, books, isAudio) {
  const wrapper = document.getElementById(containerId);
  if (!wrapper) return;
  const scrollEl = wrapper.querySelector('.book-scroll');
  const arrLeft = wrapper.querySelector('.arr-left');
  const arrRight = wrapper.querySelector('.arr-right');

  scrollEl.innerHTML = books.map((b, i) =>
    createBookCard(b, i + (isAudio ? 6 : 0), isAudio)
  ).join('');

  const scrollAmount = 360;

  function updateArrows() {
    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    const sl = Math.abs(scrollEl.scrollLeft);
    arrRight.classList.toggle('disabled', sl <= 2);
    arrLeft.classList.toggle('disabled', sl >= maxScroll - 2);
  }

  arrLeft.addEventListener('click', () => {
    scrollEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  arrRight.addEventListener('click', () => {
    scrollEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  scrollEl.addEventListener('scroll', updateArrows);
  requestAnimationFrame(updateArrows);
}

// ─── Initialize all book sections ───
document.addEventListener('DOMContentLoaded', () => {
  renderBooks('selectedBooks', persianBooks, false);
  renderBooks('audioBooks', audioBooks, true);
  renderBooks('galleryBooks', galleryBooks, false);
  renderBooks('articleBooks', articleBooks, false);

  const dataMap = {
    books: persianBooks,
    audio: audioBooks,
    gallery: galleryBooks,
    articles: articleBooks
  };

  document.querySelectorAll('.section-chips').forEach(chipGroup => {
    const target = chipGroup.dataset.target;
    const type = chipGroup.dataset.type;
    const isAudio = type === 'audio';

    chipGroup.querySelectorAll('.section-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chipGroup.querySelectorAll('.section-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const cat = chip.dataset.cat;
        const allData = dataMap[type] || [];
        const filtered = cat === 'all'
          ? allData
          : allData.filter(b => b.cat === cat);

        if (filtered.length > 0) {
          renderBooks(target, filtered, isAudio);
        } else {
          renderBooks(target, allData, isAudio);
        }
      });
    });
  });

  switchMegaTab(0, document.querySelector('.mega-sidebar-item'));
  initScrollAnimations();
});

// ═══════════════════════════════════════════
// MEGA MENU
// ═══════════════════════════════════════════
const megaData = [
  { cols: [
    {title:'ادبیات و شعر',links:['دیوان عشق و معرفت','دیوان قرب یار','دیوان عروس دل','دیوان لطف نازنین','دیوان غزل بهترین','دیوان عاشق ترین']},
    {title:'موسیقی',links:['آموزش مقامات موسیقی ایرانی','منطق موسیقی','تاریخ تحلیلی موسیقی','رایج ترین مقامات']},
    {title:'زن و زندگی',links:['زن و آزادی','زن و آزادمنشی','غناخوانی زن','همسران و مدیران کارآمد','زن و زندگی']},
    {title:'حقوق و سیاست',links:['نظام نامه روحانیت شیعه','قانون ولایت','قانون ۶ جلد','حقوق نو بنیاد']}
  ]},
  { cols: [
    {title:'اخلاق',links:['سخنرانی‌های اخلاقی','پند و اندرز','تزکیه نفس']},
    {title:'فقه و تفسیر',links:['درس خارج فقه','تفسیر قرآن','شرح روایات']},
    {title:'دعا و مناسبتی',links:['شرح ادعیه','شرح زیارات','ویژه ماه رمضان','ویژه محرم','اعیاد']},
    {title:'جلسات درس',links:['دروس حوزوی','مشاوره','عقاید','پرسش و پاسخ']}
  ]},
  { cols: [
    {title:'تصاویر',links:['مراسم و مناسبت‌ها','سفرها','جلسات درس','تصاویر شخصی']},
    {title:'ویدئو و مستند',links:['مستندها','ویدئوی سخنرانی','کلیپ کوتاه']},
    {title:'طراحی و هنر',links:['پوسترها','خوشنویسی','اینفوگرافیک','طرح‌های گرافیکی']}
  ]},
  { cols: [
    {title:'اخلاق و تربیت',links:['اخلاق اسلامی','تربیت فرزند','تربیت دینی','خانواده']},
    {title:'فقه و عقاید',links:['مسائل فقهی','پاسخ به شبهات','مباحث عقیدتی']},
    {title:'اجتماعی',links:['جامعه‌شناسی دینی','نقش مسجد','فضای مجازی','سبک زندگی']},
    {title:'تفسیر',links:['تفسیر آیات','تفسیر سوره‌ها','تفسیر موضوعی']}
  ]}
];

function switchMegaTab(index, el) {
  document.querySelectorAll('.mega-sidebar-item').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  const data = megaData[index];
  const mc = document.getElementById('megaContent');
  mc.innerHTML = data.cols.map(col => `
    <div class="mega-col">
      <h6>${col.title}</h6>
      ${col.links.map(l => `<a href="#">${l}</a>`).join('')}
    </div>
  `).join('');
}

function toggleMegaMenu() {
  document.getElementById('megaDropdown').classList.toggle('show');
}

document.addEventListener('click', (e) => {
  const mega = document.getElementById('megaDropdown');
  const trigger = document.getElementById('megaTrigger');
  if (mega && trigger && !mega.contains(e.target) && !trigger.contains(e.target)) {
    mega.classList.remove('show');
  }
});

// ═══════════════════════════════════════════
// THEME TOGGLE
// ═══════════════════════════════════════════
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    icon.className = 'bi bi-moon-stars';
    localStorage.setItem('mahboob-theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    icon.className = 'bi bi-sun-fill';
    localStorage.setItem('mahboob-theme', 'dark');
  }
}

(function() {
  const saved = localStorage.getItem('mahboob-theme');
  if (saved === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = 'bi bi-sun-fill';
  }
})();

// ═══════════════════════════════════════════
// MOBILE SIDEBAR
// ═══════════════════════════════════════════
function toggleSidebar() {
  document.getElementById('mobileSidebar').classList.toggle('show');
  document.getElementById('sidebarOverlay').classList.toggle('show');
  document.body.style.overflow =
    document.getElementById('mobileSidebar').classList.contains('show') ? 'hidden' : '';
}

function toggleSidebarCat(btn) {
  const section = btn.parentElement;
  const isOpen = section.classList.contains('open');
  document.querySelectorAll('.sidebar-mega-section').forEach(s => s.classList.remove('open'));
  if (!isOpen) section.classList.add('open');
}

// ═══════════════════════════════════════════
// HEADER SCROLL EFFECT
// ═══════════════════════════════════════════
window.addEventListener('scroll', () => {
  document.getElementById('mainHeader').classList.toggle('scrolled', window.scrollY > 20);
});

// ═══════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════
// MOBILE SEARCH
// ═══════════════════════════════════════════
(function() {
  const input = document.getElementById('mobileSearchInput');
  const placeholder = document.getElementById('searchPlaceholder');
  if (!input || !placeholder) return;
  function updatePlaceholder() {
    if (input.value.length > 0) { placeholder.classList.add('hidden'); }
    else { placeholder.classList.remove('hidden'); }
  }
  input.addEventListener('input', updatePlaceholder);
  input.addEventListener('blur', updatePlaceholder);
  placeholder.addEventListener('click', () => input.focus());
})();

// ═══════════════════════════════════════════
// BOTTOM NAV ACTIVE STATE
// ═══════════════════════════════════════════
document.querySelectorAll('.bottom-nav-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});