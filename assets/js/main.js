/* Yoga-Danter – kleine Helfer, die Seite funktioniert auch ohne JavaScript. */
(function () {
  "use strict";

  /* Alte Drupal-Adressen (z. B. /?q=node/62) auf die neuen Seiten umleiten,
     damit Lesezeichen und Google-Treffer weiter funktionieren. */
  var oldRoutes = {
    "node/1": "index.html",
    "node/62": "kurse.html",
    "node/49": "ausbildung.html",
    "node/42": "original-yoga.html",
    "node/9": "texte.html",
    "node/43": "medien.html",
    "node/44": "angebote.html#qigong",
    "node/35": "angebote.html#bogenschiessen",
    "node/2": "kontakt.html",
    "contact": "kontakt.html",
    "taxonomy/term/20": "angebote.html#atem",
    "taxonomy/term/25": "kurse.html",
    "taxonomy/term/10": "kurse.html",
    "taxonomy/term/5": "index.html#leo-danter"
  };
  var q = new URLSearchParams(window.location.search).get("q");
  if (q) {
    var target = oldRoutes[q] || (/^node\/1[0-9]$/.test(q) ? "medien.html" : "index.html");
    window.location.replace(target);
    return;
  }

  /* Mobiles Menü */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("hauptnavigation");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  /* Jahreszahl in der Fußzeile */
  var year = document.querySelectorAll("[data-year]");
  for (var i = 0; i < year.length; i++) {
    year[i].textContent = new Date().getFullYear();
  }

  /* Quelltexte: alle Kapitel auf- bzw. zuklappen */
  var expand = document.querySelector("[data-toggle-chapters]");
  if (expand) {
    expand.addEventListener("click", function () {
      var chapters = document.querySelectorAll(".chapter");
      var anyClosed = Array.prototype.some.call(chapters, function (d) { return !d.open; });
      for (var j = 0; j < chapters.length; j++) chapters[j].open = anyClosed;
      expand.textContent = anyClosed ? "Alle Kapitel zuklappen" : "Alle Kapitel aufklappen";
    });
  }

  /* Anmeldeformular: öffnet das E-Mail-Programm mit vorausgefüllter Nachricht */
  var form = document.querySelector("[data-mail-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var data = new FormData(form);
      var subject = "Anfrage: " + (data.get("kurs") || "Allgemein");
      var lines = [
        data.get("nachricht") || "",
        "",
        "---",
        "Name: " + data.get("name"),
        "E-Mail: " + data.get("email")
      ];
      if (data.get("telefon")) lines.push("Telefon: " + data.get("telefon"));
      window.location.href = "mailto:" + form.getAttribute("data-mail-form") +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      var status = form.querySelector(".form__status");
      if (status) status.hidden = false;
    });
  }
})();
