def calcular_gravidade(massa_planeta, raio_planeta, massa_objeto):
    # Constante gravitacional
    G = 6.674 * (10**-11)

    # Calcula a força gravitacional
    forca_gravitacional = (G * massa_planeta * massa_objeto) / (raio_planeta**2)

    # Calcula a aceleração devido à gravidade
    gravidade = forca_gravitacional / massa_objeto

    return gravidade

def obter_dados_planeta(planeta):
    dados_planetas = {
        "Mercurio": {"massa": 3.3011e23, "raio": 2439700},
        "Venus": {"massa": 4.8675e24, "raio": 6051800},
        "Terra": {"massa": 5.972e24, "raio": 6371000},
        "Marte": {"massa": 6.4171e23, "raio": 3389500},
        "Jupiter": {"massa": 1.898e27, "raio": 71492000},
        "Saturno": {"massa": 5.683e26, "raio": 60268000},
        "Urano": {"massa": 8.681e25, "raio": 25559000},
        "Netuno": {"massa": 1.024e26, "raio": 24764000},
    }

    planeta = planeta.capitalize()  # Garante que a capitalização não seja um problema
    if planeta in dados_planetas:
        return dados_planetas[planeta]
    else:
        raise ValueError("Planeta não reconhecido.")

# Exemplo de uso
planeta_escolhido = input("Digite o nome do planeta (por exemplo, Terra): ")
try:
    dados_planeta = obter_dados_planeta(planeta_escolhido)
    massa_objeto = float(input("Digite a massa do objeto em kg: "))

    gravidade = calcular_gravidade(dados_planeta["massa"], dados_planeta["raio"], massa_objeto)
    print(f"A aceleração devido à gravidade em {planeta_escolhido} é aproximadamente {gravidade:.2f} m/s².")
except ValueError as e:
    print(e)
