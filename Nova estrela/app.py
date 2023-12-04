import random

class Star:
    def __init__(self, name, mass, luminosity, distance):
        self.name = name
        self.mass = mass  # em massas solares
        self.luminosity = luminosity  # em luminosidades solares
        self.distance = distance  # em anos-luz

def simulate_star_search():
    # Lista de estrelas fictícias
    stars = [
        Star("Estrela1", 1.5, 0.8, 10),
        Star("Estrela2", 2.0, 1.2, 8),
        Star("Estrela3", 0.5, 0.3, 15),
        # Adicione mais estrelas conforme necessário
    ]

    # Simulação de busca por uma estrela adequada
    print("Simulando a busca por uma nova estrela para a Terra...\n")
    
    # Critérios de seleção
    required_mass = 1.0
    required_luminosity = 1.0
    required_distance = 10

    # Encontrar estrela adequada
    suitable_star = None
    for star in stars:
        if (
            star.mass >= required_mass
            and star.luminosity >= required_luminosity
            and star.distance <= required_distance
        ):
            suitable_star = star
            break

    # Resultados da busca
    if suitable_star:
        print(f"Estrela adequada encontrada: {suitable_star.name}")
        print(f"Massa: {suitable_star.mass} massas solares")
        print(f"Luminosidade: {suitable_star.luminosity} luminosidades solares")
        print(f"Distância: {suitable_star.distance} anos-luz")
    else:
        print("Nenhuma estrela adequada encontrada. A busca continua...")

# Executar a simulação
simulate_star_search()
