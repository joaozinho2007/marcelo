import requests

def get_stars_from_api():
    url = "http://127.o.0.1:5000/stars"
    response = requests.get(url)

    if response.status_code == 200:
        stars_data = response.json()
        return stars_data
    else:
        print(f"Falha ao obter dados do API. Código de status: {response.status_code}")
        return None

if __name__ == "__main__":
    stars = get_stars_from_api()

    if stars:
        print("Dados das Estrelas:")
        for star in stars:
            print(f"ID: {star['id']}, Nome: {star['name']}, Magnitude: {star['magnitude']}")
    else:
        print("Erro ao obter dados das etrelas")