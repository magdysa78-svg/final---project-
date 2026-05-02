// 1. تشغيل القائمة الجانبية للموبايل
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}
navSlide();

// 2. تفعيل التبديل بين الوضع المظلم والمضيء (Dark/Light Mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // تغيير الأيقونة بناءً على الوضع الحالي
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// 3. جعل رابط الـ Header فعالاً عند السكرول
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').slice(1) === current) {
            a.classList.add('active');
        }
    });
});

// 4. كود الساعة الرقمية
function updateClock() {
    const clockElement = document.getElementById('digital-clock');
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    const hoursStr = String(hours).padStart(2, '0');
    
    clockElement.textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

// 5. تفعيل رسالة تأكيد إرسال الفورم
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`شكراً لتواصلك يا ${name}! تم إرسال رسالتك بنجاح.`);
    contactForm.reset();
});

// ==========================================
// الأكواد البرمجية للمشاريع المصغرة التفاعلية
// ==========================================

// أ. المتجر
let cartCount = 0;
function addToCart() { cartCount++; document.getElementById('cart-count').innerText = cartCount; }

// ب. المهام
function addTodo() {
    const input = document.getElementById('todo-text');
    const list = document.getElementById('todo-list');
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"> ${input.value}`;
        list.appendChild(li); input.value = '';
    }
}

// ج. الفنادق
function searchHotel() {
    const res = document.getElementById('hotel-res');
    res.innerHTML = `<p style="color: #38bdf8;"><i class="fas fa-spinner fa-spin"></i> جاري البحث...</p>`;
    setTimeout(() => { res.innerHTML = `<p style="color: #22c55e;">تم العثور على 3 فنادق!</p>`; }, 1000);
}

// د. مشغل الموسيقى
const songs = ["الأغنية الأولى", "الأغنية الثانية", "الأغنية الثالثة"];
let songIndex = 0; let isPlaying = false;
function togglePlay() {
    const btn = document.getElementById('play-btn');
    const disc = document.querySelector('.disc');
    isPlaying = !isPlaying;
    if (isPlaying) { btn.innerHTML = '<i class="fas fa-pause"></i>'; disc.classList.add('disc-animation'); }
    else { btn.innerHTML = '<i class="fas fa-play"></i>'; disc.classList.remove('disc-animation'); }
}
function nextSong() { songIndex = (songIndex + 1) % songs.length; document.getElementById('song-title').innerText = songs[songIndex]; }
function prevSong() { songIndex = (songIndex - 1 + songs.length) % songs.length; document.getElementById('song-title').innerText = songs[songIndex]; }

// هـ. حاسبة المصاريف
let balance = 1000;
function addExpense() {
    const amount = document.getElementById('exp-amount').value;
    if (amount && amount > 0) {
        balance -= parseFloat(amount);
        document.getElementById('balance-val').innerText = `$${balance}`;
        document.getElementById('exp-amount').value = '';
    }
}

// و. تطبيق الطقس
const weatherData = { "القاهرة": { temp: "25°C", icon: "fa-sun" }, "الرياض": { temp: "38°C", icon: "fa-sun" }, "دبي": { temp: "32°C", icon: "fa-cloud-sun" } };
function getWeather() {
    const city = document.getElementById('city-select').value;
    const info = document.getElementById('weather-info');
    info.innerHTML = `<i class="fas ${weatherData[city].icon}"></i> ${weatherData[city].temp}`;
}

// ز. لعبة الذاكرة
let flippedCards = [];
function flipCard(card, value) {
    if (flippedCards.length < 2 && card.innerText === '❓') {
        card.innerText = value;
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            setTimeout(() => {
                if (flippedCards[0].innerText !== flippedCards[1].innerText) {
                    flippedCards[0].innerText = '❓';
                    flippedCards[1].innerText = '❓';
                }
                flippedCards = [];
            }, 1000);
        }
    }
}

// ح. مولد الألوان
function generateColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('color-box').style.backgroundColor = randomColor;
    document.getElementById('color-hex').innerText = randomColor;
}


// كود تشغيل زر العودة للأعلى
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    // إذا نزل المستخدم أكثر من 300 بكسل يظهر السهم، وإلا يختفي
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // حركة صعود ناعمة وسلسة
    });
}
