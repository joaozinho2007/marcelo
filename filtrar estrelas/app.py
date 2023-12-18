# Lista de registros de estrelas
registros_estrelas = [
    {"nome": "Sol", "tipo": "G", "massa": 1.0, "temperatura": 5778},
    {"nome": "Alpha Centauri A", "tipo": "G", "massa": 1.1, "temperatura": 5790},
    {"nome": "Alpha Centauri B", "tipo": "K", "massa": 0.9, "temperatura": 5260},
    {"nome": "Sirius", "tipo": "A", "massa": 2.0, "temperatura": 9940},
    {"nome": "Betelgeuse", "tipo": "M", "massa": 15.0, "temperatura": 3500},
    # Adicione mais registros conforme necessário
]

# Função para filtrar estrelas com base em critérios
def filtrar_estrelas(registros, tipo, temperatura_minima):
    estrelas_filtradas = []
    for estrela in registros:
        if estrela["tipo"] == tipo and estrela["temperatura"] >= temperatura_minima:
            estrelas_filtradas.append(estrela)
    return estrelas_filtradas

# Parâmetros de filtro
tipo_filtragem = "G"
temperatura_minima_filtragem = 5700

# Filtrar estrelas
estrelas_filtradas = filtrar_estrelas(registros_estrelas, tipo_filtragem, temperatura_minima_filtragem)

# Exibir resultados
print(f"Estrelas do tipo {tipo_filtragem} com temperatura acima de {temperatura_minima_filtragem} K:")
for estrela in estrelas_filtradas:
    print(f"Nome: {estrela['nome']}, Massa: {estrela['massa']}, Temperatura: {estrela['temperatura']} K")
