from flask import Flask, render_template, jsonify

app = Flask(__name__)

flowers = [
    {
        "id": 1,
        "name": "Розы",
        "image": "розы.jpg",
        "price": "10000 руб.",
        "composition": "51 роза",
        "description": "Элегантный букет из 51 свежей розы. Идеально подходит для особых случаев.",
        "count": 51
    },
    {
        "id": 2,
        "name": "Ромашки",
        "image": "ромашки.jpg",
        "price": "15000 руб.",
        "composition": "15 ромашек, 4 пиона, 2 лилии",
        "description": "Свежий и яркий букет с ромашками, пионами и лилиями.",
        "count": 21  # 15 + 4 + 2
    },
    {
        "id": 3,
        "name": "Фиалки",
        "image": "фиалки.jpg",
        "price": "16000 руб.",
        "composition": "41 фиалка",
        "description": "Нежный букет из 41 фиалки. Прекрасный выбор для романтического подарка.",
        "count": 41
    },
    {
        "id": 4,
        "name": "Розовый букет",
        "image": "розовый букет.jpg",
        "price": "25000 руб.",
        "composition": "61 розовая роза",
        "description": "Роскошный букет из 61 розовой розы. Выглядит потрясающе и изысканно.",
        "count": 61
    },
    {
        "id": 5,
        "name": "Розовые розы",
        "image": "розовые розы.jpg",
        "price": "15000 руб.",
        "composition": "21 розовая роза",
        "description": "Небольшой, но очень элегантный букет из 21 розовой розы.",
        "count": 21
    },
    {
        "id": 6,
        "name": "Пионы",
        "image": "пионы.jpg",
        "price": "19000 руб.",
        "composition": "19 пионов",
        "description": "Пышный букет из 19 свежих пионов. Идеален для весенних праздников.",
        "count": 19
    },
    {
        "id": 7,
        "name": "Красные розы",
        "image": "красные розы.jpg",
        "price": "99000 руб.",
        "composition": "101 красная роза",
        "description": "Эксклюзивный букет из 101 красной розы. Королевский подарок для особых случаев.",
        "count": 101
    }
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/flower/<int:flower_id>')
def flower_detail(flower_id):
    flower = next((f for f in flowers if f["id"] == flower_id), None)
    if flower:
        return render_template('flower_detail.html', flower=flower)
    return "Букет не найден", 404

@app.route('/api/flowers')
def get_flowers():
    return jsonify(flowers)

if __name__ == '__main__':
    app.run(debug=True)