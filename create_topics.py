import json

def create_topics_file():
    # Inicializace prázdných seznamů pro témata
    math_topics = []
    czech_topics = []

    print("Zadejte témata pro matematiku (napište 'konec' pro ukončení):")
    while True:
        topic = input("Téma z matematiky: ")
        if topic.lower() == "konec":
            break
        math_topics.append(topic)

    print("\nZadejte témata pro češtinu (napište 'konec' pro ukončení):")
    while True:
        topic = input("Téma z češtiny: ")
        if topic.lower() == "konec":
            break
        czech_topics.append(topic)

    # Vytvoření JSON struktury
    topics_data = {
        "mathematics": math_topics,
        "czech": czech_topics
    }

    # Uložení do souboru topics.json
    with open("topics.json", "w", encoding="utf-8") as file:
        json.dump(topics_data, file, ensure_ascii=False, indent=2)

    print("\nSoubor 'topics.json' byl úspěšně vytvořen!")

# Spuštění programu
if __name__ == "__main__":
    create_topics_file()