// Массив цветов с проверенными путями
const flowers = [
    {
        id: 1,
        name: "Розы",
        image: "images/roses.jpg",
        price: "10 000 руб.",
        composition: "51 роза",
        description: "Элегантный букет из 51 свежей розы",
        count: 51
    },
    {
        id: 2,
        name: "Ромашки",
        image: "images/daisies.jpg",
        price: "15 000 руб.",
        composition: "15 ромашек, 4 пиона, 2 лилии",
        description: "Свежий и яркий букет",
        count: 21
    },
    {
        id: 3,
        name: "Фиалки",
        image: "images/violets.jpg",
        price: "16 000 руб.",
        composition: "41 фиалка",
        description: "Нежный романтический букет",
        count: 41
    },
    {
        id: 4,
        name: "Розовый букет",
        image: "images/pink-bouquet.jpg",
        price: "25 000 руб.",
        composition: "61 розовая роза",
        description: "Роскошный изысканный букет",
        count: 61
    },
    {
        id: 5,
        name: "Розовые розы",
        image: "images/pink-roses.jpg",
        price: "15 000 руб.",
        composition: "21 розовая роза",
        description: "Элегантный небольшой букет",
        count: 21
    },
    {
        id: 6,
        name: "Пионы",
        image: "images/peonies.jpg",
        price: "19 000 руб.",
        composition: "19 пионов",
        description: "Пышный весенний букет",
        count: 19
    },
    {
        id: 7,
        name: "Красные розы",
        image: "images/red-roses.jpg",
        price: "99 000 руб.",
        composition: "101 красная роза",
        description: "Королевский эксклюзивный букет",
        count: 101
    }
];

// Функция создания карточки цветка
function createFlowerCard(flower) {
    const card = document.createElement('div');
    card.className = 'flower-card';
    
    const img = new Image();
    img.src = flower.image;
    img.alt = flower.name;
    img.className = 'flower-img';
    img.onerror = function() {
        this.src = 'images/placeholder.jpg';
    };
    
    card.innerHTML = `
        <a href="flower.html?id=${flower.id}" style="text-decoration: none; color: inherit;">
            ${img.outerHTML}
            <div style="padding: 12px; text-align: center;">
                <div style="font-weight: bold; margin-bottom: 5px;">${flower.name}</div>
                <div style="color: #e75480; font-weight: bold;">${flower.price}</div>
            </div>
        </a>
    `;
    
    return card;
}

// Инициализация каталога
document.addEventListener('DOMContentLoaded', function() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    
    flowers.forEach(flower => {
        catalog.appendChild(createFlowerCard(flower));
    });
    
    // Инициализация Telegram WebApp
    if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
        Telegram.WebApp.expand();
    }
});
