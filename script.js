// Массив цветов с абсолютными путями
const flowers = [
    {
        id: 1,
        name: "Розы",
        image: "assets/images/roses.webp",
        price: "10 000 руб.",
        composition: "51 роза",
        description: "Элегантный букет из 51 свежей розы",
        count: 51
    },
    // Остальные цветы аналогично...
];

function initApp() {
    const catalog = document.getElementById('catalog');
    
    flowers.forEach(flower => {
        const card = document.createElement('div');
        card.className = 'flower-card';
        
        // Проверяем существование изображения
        checkImage(flower.image, exists => {
            const imgSrc = exists ? flower.image : 'assets/images/placeholder.webp';
            
            card.innerHTML = `
                <a href="flower.html?id=${flower.id}">
                    <img src="${imgSrc}" alt="${flower.name}" 
                         style="width:100%; height:180px; object-fit:cover;">
                    <div style="padding:10px; text-align:center;">
                        <div style="font-weight:bold;">${flower.name}</div>
                        <div style="color:#e75480;">${flower.price}</div>
                    </div>
                </a>
            `;
        });
        
        catalog.appendChild(card);
    });
}

// Инициализация при полной загрузке страницы
if (document.readyState === 'complete') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}

// Функция проверки изображения
function checkImage(url, callback) {
    const img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}
