document.addEventListener('DOMContentLoaded', function() {
    const catalog = document.getElementById('catalog');
    
    const flowers = [
        {
            id: 1,
            name: "Розы",
            image: "розы.jpg",
            price: "10000 руб.",
            composition: "51 роза",
            description: "Элегантный букет из 51 свежей розы. Идеально подходит для особых случаев."
        },
        {
            id: 2,
            name: "Ромашки",
            image: "ромашки.jpg",
            price: "15000 руб.",
            composition: "15 ромашек, 4 пиона, 2 лилии",
            description: "Свежий и яркий букет с ромашками, пионами и лилиями."
        },
        {
            id: 3,
            name: "Фиалки",
            image: "фиалки.jpg",
            price: "16000 руб.",
            composition: "41 фиалка",
            description: "Нежный букет из 41 фиалки. Прекрасный выбор для романтического подарка."
        },
        {
            id: 4,
            name: "Розовый букет",
            image: "розовый букет.jpg",
            price: "25000 руб.",
            composition: "61 розовая роза",
            description: "Роскошный букет из 61 розовой розы. Выглядит потрясающе и изысканно."
        },
        {
            id: 5,
            name: "Розовые розы",
            image: "розовые розы.jpg",
            price: "15000 руб.",
            composition: "21 розовая роза",
            description: "Небольшой, но очень элегантный букет из 21 розовой розы."
        },
        {
            id: 6,
            name: "Пионы",
            image: "пионы.jpg",
            price: "19000 руб.",
            composition: "19 пионов",
            description: "Пышный букет из 19 свежих пионов. Идеален для весенних праздников."
        },
        {
            id: 7,
            name: "Красные розы",
            image: "красные розы.jpg",
            price: "99000 руб.",
            composition: "101 красная роза",
            description: "Эксклюзивный букет из 101 красной розы. Королевский подарок для особых случаев."
        }
    ];

    flowers.forEach(flower => {
        const flowerCard = document.createElement('div');
        flowerCard.className = 'flower-card';
        flowerCard.innerHTML = `
            <a href="/flower/${flower.id}" style="text-decoration: none; color: inherit;">
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
});