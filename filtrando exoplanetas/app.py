from flask import Flask, render_template

app = Flask(__name__)

# Dados fictícios de exoplanetas
dados_exoplanetas = [
    {'nome': 'Exoplaneta A', 'massa': 2.5, 'raio': 1.2},
    {'nome': 'Exoplaneta B', 'massa': 1.8, 'raio': 1.5},
    {'nome': 'Exoplaneta C', 'massa': 4.2, 'raio': 2.0},
    {'nome': 'Exoplaneta D', 'massa': 3.1, 'raio': 1.8},
]

@app.route('/')
def exibir_dados():
    return render_template('exoplanetas.html', dados=dados_exoplanetas)

if __name__ == '__main__':
    app.run(debug=True)
