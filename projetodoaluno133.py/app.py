import pandas as pd

# Suponha que você tenha um conjunto de dados fictício chamado star_data
# Substitua isso pelos seus dados reais
star_data = [
    {"Star": "Sol", "Type": "G2V", "Mass": 1.0, "Temperature": 5778, "Metallicity": 0.0},
    {"Star": "Star1", "Type": "K1V", "Mass": 0.8, "Temperature": 5000, "Metallicity": -0.2},
    {"Star": "Star2", "Type": "G5V", "Mass": 1.1, "Temperature": 5500, "Metallicity": 0.1},
    # Adicione mais estrelas conforme necessário
]

# Converta os dados para um DataFrame do Pandas
df = pd.DataFrame(star_data)

# Defina os critérios de semelhança ao Sol
criteria = {
    "Type": "G2V",
    "Mass": 1.0,
    "Temperature": 5778,
    "Metallicity": 0.0,
}

# Encontre estrelas semelhantes ao Sol
similar_stars = df.copy()
for criterion, value in criteria.items():
    similar_stars = similar_stars[similar_stars[criterion] == value]

# Exiba as estrelas semelhantes ao Sol
print("Estrelas semelhantes ao Sol:")
print(similar_stars)
