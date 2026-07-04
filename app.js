// Elementlarni tanlab olamiz
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
const header = document.querySelector('header');

// Mobil menyu tugmasi bosilganda
menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Sahifani pastga tushirganda (scroll) bo'ladigan o'zgarishlar
window.addEventListener('scroll', () => {
    // Scroll qilinganda menyuni yopish
    navbar.classList.remove('active');
    
    // Header ga ozgina qorayish (shaffoflik) qo'shish
    if(window.scrollY > 50) {
        header.style.background = 'rgba(1, 1, 3, 0.95)';
    } else {
        header.style.background = 'var(--bg)';
    }
});

// Tugmalarga va formaga test xabari qo'shish
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Agar btn submit tugmasi bo'lsa formani yuborishni to'xtatamiz va alert chiqaramiz
        if(e.target.type === 'submit') {
            e.preventDefault();
            alert("Xabar muvaffaqiyatli yuborildi! (Test rejimida)");
        } 
        // Agar havola bo'lsa va faqat sahifa ichiga yo'naltirmasa xabar chiqarish
        else if (e.target.tagName === 'A' && !e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            alert("Ushbu tugma hozircha test rejimida. Tez orada ishga tushadi!");
        }
    });
});