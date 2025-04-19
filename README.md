# Generátor Náhodných Témat

🎓 **Generátor Náhodných Témat** je webová aplikace, která umožňuje uživatelům vygenerovat náhodné téma z matematiky nebo češtiny. Aplikace také obsahuje časovač na 15 minut s možností ovládání (start, pauza, zastavení) a zvukovým upozorněním po vypršení času.

## Projektová Struktura

```
random-topic-generator
├── index.html        # Hlavní HTML dokument
├── js
│   └── script.js     # JavaScriptový kód pro generování náhodných témat a ovládání časovače
├── css
│   └── styles.css    # Vlastní styly pro webovou stránku
└── README.md         # Dokumentace projektu
```

## Funkce

- **Výběr tématu**: Uživatel si může vybrat mezi matematikou a češtinou a vygenerovat náhodné téma.
- **Časovač**: Časovač na 15 minut s ovládacími tlačítky:
  - **Start**: Spustí nebo obnoví časovač.
  - **Pauza**: Pozastaví časovač.
  - **Zastavit**: Zastaví časovač a resetuje jej na 15 minut.
- **Zvukové upozornění**: Po vypršení času se přehraje zvuk `done.ogg`.
- **Moderní design**: Aplikace využívá Glassmorphism efekt a responzivní design.

## Použité technologie

- **HTML5**: Struktura aplikace.
- **CSS3**: Stylování aplikace, včetně Glassmorphism efektu.
- **JavaScript**: Logika aplikace, generování témat a ovládání časovače.
- **Bootstrap 5**: Responzivní design a stylování komponent.

## Instalace

1. Naklonujte tento repozitář:
   ```bash
   git clone https://github.com/uzivatel/random-topic-generator.git
   ```

## Použití

1. Otevřete `index.html` ve webovém prohlížeči.
2. Klikněte na tlačítko "Generovat Téma" pro vygenerování náhodného tématu z matematiky nebo češtiny.
3. Použijte ovládací tlačítka časovače pro správu 15minutového časovače.
4. Po vypršení času se přehraje zvukové upozornění.

## Požadavky

- Moderní webový prohlížeč podporující HTML5 a JavaScript.

## Licence

Tento projekt je open-source a je k dispozici pro kohokoliv k použití a úpravám.
