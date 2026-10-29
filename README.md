# Yoga-Danter – Website

Statische Website (HTML/CSS, etwas JavaScript), kein Build-Schritt nötig.
Zum Veröffentlichen einfach den ganzen Ordner auf den Webspace von `yoga-danter.at` hochladen.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite mit Angebot des Monats |
| `kurse.html` | Kurse & Termine, Kursaufbau, Bankverbindung |
| `original-yoga.html` | Goraksha, die vier Quelltexte, acht Kapitel |
| `ausbildung.html` | Original-Yoga-Lehrer & Yoga-Master |
| `angebote.html` | Qi Gong, Atem-Training, Bogenschießen |
| `medien.html` | Übungs-CDs und Musik-CDs |
| `texte.html` | Goraksha-Shataka und Patanjali-Sutras im Volltext |
| `kontakt.html` | Telefon, E-Mail, Anfrageformular (öffnet das E-Mail-Programm) |
| `impressum.html` | Impressum & Datenschutz |

## Termine aktualisieren

Termine und Preise stehen an **zwei** Stellen, jeweils mit dem Kommentar
`<!-- AKTUELL: ... -->` markiert:

- `index.html` → Abschnitt „Angebot des Monats“
- `kurse.html` → Abschnitt „Kurse im ANANDA-Institut“

## Vor dem Livegang

- `impressum.html`: gelb markierte Felder ausfüllen (Vereinsadresse, ZVR-Zahl, Vertretung, Vereinszweck, Hoster, Bildquellen).
- Termine prüfen – übernommen wurden die Angaben der alten Website (Jänner/März 2026).

## Gestaltung

Klar und ruhig, angelehnt an moderne Studio-Websites (z. B. bikramyoga.at):
großes Foto im Kopfbereich, viel Weiß, geteilte Abschnitte aus Bild + Farbfläche.

| Farbe | Wert | Verwendung |
|---|---|---|
| Schwarz | `#111111` | Text |
| Grau | `#6b6b6b` | Nebentext |
| Hellgrau | `#f4f3f0` | Seitenköpfe, ruhige Abschnitte |
| Safran | `#b8441c` | einzige Akzentfarbe: Buttons, Links, „Angebot des Monats“ |
| Indigo | `#26244f` | Infoleiste, Leitspruch, Fußzeile |

Schrift: **DM Sans** (eine Familie für alles, inkl. Kursiv für Sanskrit-Umschrift).

## Technik

- Farben, Schriften, Abstände: Variablen am Anfang von `assets/css/style.css`.
- Schriften liegen lokal in `assets/fonts` – keine Verbindung zu Google (DSGVO).
- Kopf- und Fußzeile sind in jeder HTML-Datei enthalten; Änderungen am Menü bitte in allen Dateien machen.
- Alte Adressen wie `/?q=node/62` werden per JavaScript auf die neuen Seiten umgeleitet (`assets/js/main.js`).
