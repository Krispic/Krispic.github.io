const flowers = [
    {
        id: 1,
        name: "Розы",
        image: "roses.jpg",
        price: "10 000 руб.",
        composition: "51 роза",
        description: "Элегантный букет из 51 свежей розы. Идеально подходит для особых случаев.",
        count: 51
    },
    {
        id: 2,
        name: "Ромашки",
        image: "daisies.jpg",
        price: "15 000 руб.",
        composition: "15 ромашек, 4 пиона, 2 лилии",
        description: "Свежий и яркий букет с ромашками, пионами и лилиями.",
        count: 21
    },
    {
        id: 3,
        name: "Фиалки",
        image: "violets.jpg",
        price: "16 000 руб.",
        composition: "41 фиалка",
        description: "Нежный букет из 41 фиалки. Прекрасный выбор для романтического подарка.",
        count: 41
    },
    {
        id: 4,
        name: "Розовый букет",
        image: "pink-bouquet.jpg",
        price: "25 000 руб.",
        composition: "61 розовая роза",
        description: "Роскошный букет из 61 розовой розы. Выглядит потрясающе и изысканно.",
        count: 61
    },
    {
        id: 5,
        name: "Розовые розы",
        image: "pink-roses.jpg",
        price: "15 000 руб.",
        composition: "21 розовая роза",
        description: "Небольшой, но очень элегантный букет из 21 розовой розы.",
        count: 21
    },
    {
        id: 6,
        name: "Пионы",
        image: "peonies.jpg",
        price: "19 000 руб.",
        composition: "19 пионов",
        description: "Пышный букет из 19 свежих пионов. Идеален для весенних праздников.",
        count: 19
    },
    {
        id: 7,
        name: "Красные розы",
        image: "red-roses.jpg",
        price: "99 000 руб.",
        composition: "101 красная роза",
        description: "Эксклюзивный букет из 101 красной розы. Королевский подарок для особых случаев.",
        count: 101
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.expand();
    
    const catalog = document.getElementById('catalog');
    
    flowers.forEach(flower => {
        const flowerCard = document.createElement('div');
        flowerCard.className = 'flower-card';
        flowerCard.innerHTML = `
            <a href="flower.html?id=${flower.id}" style="text-decoration: none; color: inherit;">
                <img src="images/${flower.image}" alt="${flower.name}" class="flower-image">
                <div class="flower-info">
                    <div class="flower-name">${flower.name}</div>
                    <div class="flower-price">${flower.price}</div>
                </div>
                <div class="tooltip">
                    <strong>${flower.name}</strong><br>
                    Состав: ${flower.composition}<br>
                    Цена: ${flower.price}
                </div>
            </a>
        `;
        catalog.appendChild(flowerCard);
    });
    
    // Адаптация под Telegram
    if (tg.platform !== 'unknown') {
        document.body.classList.add('telegram-app');
        tg.BackButton.show();
        tg.BackButton.onClick(() => {
            window.history.back();
        });
    }
});