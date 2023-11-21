# importando os módulos da biblioteca flask
from flask import Flask , render_template

# criando a instância da classe Flask, fornecendo a palavra-chave __name__ como argumento
app = Flask(__name__)

# escreva as rotas usando funções de decorador
# rota padrão ou 'URL'
@app.route("/")
def home():

    nome = "João Paulo" # escreva seu nome
    idade = "16" # escreva sua idade

    return render_template('index.html' , nome = nome , idade = idade)

# defina a rota para a página do pai
app.route("/pai")
def pagina_pai():
    return "Página do Pai"

# defina a rota para a página da mãe
app.route("/mãe")
def pagina_mae():
    return "Página da mãe"

# defina a rota para a página do amigo
app.route("/amigo")
def pagina_amigo():
    return "Página do amigo"

# adicione outras rotas, se você quiser




# execute o arquivo
if __name__  ==  '__main__':
    app.run(debug=True)
