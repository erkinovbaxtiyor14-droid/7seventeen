// Elementlarni tanlab olamiz
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const header = document.querySelector('header');

// 1. Mobil menyu tugmasi bosilganda
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}

// 2. Sahifani pastga tushirganda (scroll) bo'ladigan o'zgarishlar
window.addEventListener('scroll', () => {
    // Scroll qilinganda menyuni yopish
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
    
    // Header ga ozgina qorayish (shaffoflik) qo'shish
    if(window.scrollY > 50) {
        header.style.background = 'rgba(1, 1, 3, 0.95)';
    } else {
        header.style.background = 'var(--bg)';
    }
});

// 3. Tugmalarga va formaga test xabari qo'shish
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Agar tugma form ichida bo'lsa (submit)
        if(btn.type === 'submit') {
            e.preventDefault();
            alert("Xabar muvaffaqiyatli yuborildi! (Test rejimida)");
        } 
        // Agar havola bo'lsa va sahifa ichiga yo'naltirmasa (masalan # bilan boshlanmasa)
        else if (btn.tagName === 'A' && !btn.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            alert("Ushbu tugma hozircha test rejimida. Tez orada ishga tushadi!");
        }
    });
});