Implementirajte preprost HTTP/1.1 strežnik.

Ko odjemalec želi komunicirati s strežnikom se zgodijo naslednji koraki:

1. Odpre se TCP povezava.

2. Odjemalec pošlje HTTP povpraševanje, ki je sestavljeno iz začetne vrstice, poljubnega števila glav, prazne vrstice in poljubne vsebine. Začetna vrstica je sestavljena iz metode (`GET`, `POST`), presledka, poti, presledka, HTTP-verzije (v našem primeru bomo podprli samo `HTTP/1.1`). Vsaka glava je sestavljena iz imena, dvopičja, poljubnega števila presledkov ali tabulatorjev, vrednosti, poljubnega števila presledkov ali tabulatorjev. Imena glav so *case-insensitive*. Nato sledi prazna vrstica. Vsaki vrstici sledi končnica CR LF (`\r\n`). Za tem lahko sledi vsebina povpraševanja. V primeru, da je prisotna bosta zraven poslani glavi `Content-Length`, katere vrednost je velikost vsebine v bajtih, in `Content-Type`, katere vrednost je format vsebine v obliki tipa MIME. Tipi MIME so *case-insensitive*.

    ![request](request.svg)

3. Strežnik vrne HTTP odgovor, ki je sestavljen enako kot HTTP povpraševanje, edina razlika je, da je začetna vrstica sestavljena iz HTTP-verzije, presledka, statusne kode (`200`, `400`, `404`), presledka in razloga (`OK`, `Bad request`, `Not found`).

    ![response](response.svg)

4. TCP povezava se zapre.

Za testiranje bomo namesto TCP povezave uporabili vhodno in izhodno datoteko. Imeni datotek bo program dobil kot konzolna argumenta. Vaša naloga je, da iz vhodne datoteke preberete HTTP povpraševanje vrstico za vrstico in z regularnimi izrazi izluščite metodo, pot in glave, nato preberete še vsebino. Nato na podlagi teh informacij izberete primeren način procesiranja, in pripravite HTTP odgovor, ki ga zapišete v izhodno datoteko.

Podpreti morate naslednje možnosti (za ujemanje poti uporabite regularne izraze):

* GET /echo/**message**

  Prejmite **message** kot del poti.
  Dekodirate URL kodiranje.
  Vrnite vsebino `echo.html` s statusom `200 OK`, kjer `${message}` zamenjate z **message**.

* GET /form

  Vrnite vsebino `form.html` s statusom `200 OK`.

* POST /form-response

  Prejmite **message** znotraj vsebine, ki je v formatu `x-www-form-urlencoded`:

  message=**message**

  Dekodirate URL kodiranje.
  Vrnite vsebino `form-response.html` s statusom `200 OK`, kjer `${message}`zamenjate z **message**.

* V primeru, da pot ne obstaja vrnite vsebino `404.html` s statusom `404 Not found`.

* V primeru, da povpraševanje ni pravilne oblike vrnite vsebino `400.html` s statusom `400 Bad request`.

Datoteke, ki jih morate vrniti so v mapi `templates`. Vsebino lahko preberete iz datoteke ali pa jo prilepite v izvorno kodo. V slednjem primeru bodite pozorni, da vsaki vrstici sledi končnica LF (`\n`), zadnja vrstica v datoteki je prazna. Vrednost glave `Content-Type` za HTML datoteke je `text/html`.

Za dekodiranje URL kodiranja lahko uporabite poljubno knjižnico ali podprite vsaj dekodiranje presledkov, ki so v testih vedno kodirani kot `%20` (torej vse `%20` zamenjajte s presledkom).

Več si lahko preberete tukaj:

* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#http_flow)
* [HTTP standard](https://datatracker.ietf.org/doc/html/rfc7230#section-3)
* [`x-www-form-urlencoded`](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1)
* [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

Na voljo imate dve obliki naloge, pri prvi so končnice mešane, tako kot je opisano zgoraj, pri drugi pa so kot poenostavitev prilagojene vašemu operacijskemu sistemu (torej na Windows bo povsod sledila končnica CR LF, na Linux in macOS LF). Katero boste reševali si lahko izberete sami, za pravilno rešitev v obeh primerih dobite polne točke.

Nalogo oddajte na GitHub, [original](https://classroom.github.com/a/CyLW5wt2), [poenostavljena](https://classroom.github.com/a/UJizGScm).
