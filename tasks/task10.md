Za XML dokument o okuženih z virusom zapišite strukturo v XML Shemah. Sintaksa XML dokumenta vsebuje naslednje elemente:

ID osebe,
ime in priimek,
datum rojstva,
izobrazba,
opis,
slike,
stopnja okuženosti.

Poleg teh elementov dodajte še vsaj 3 svoje elemente!

Pri definiranju zgoraj naštetih elementov v XML shemah, uporabljajte omejitve (npr. ID osebe : 1 - 1000) in vzorce (npr. datum rojstva). Podobno naredite tudi za ostale kompleksne/enostavne tipe.

Pravlinost sheme lahko preverite na enega od naslednjih načinov:
- S knjižnico za validacijo XML dokumentov na podlagi XSD shem, na primer [javax.xml.validation.Schema](https://docs.oracle.com/javase/8/docs/api/javax/xml/validation/Schema.html) ali [lxml](https://lxml.de/validation.html).
- S programom xmllint, `xmllint --shema SHEMA DOKUMENT`.
- Z online validatorjem, [link](https://www.liquid-technologies.com/online-xsd-validator).

Nekaj koristnih povezav:
- [XML jezik](https://en.wikipedia.org/wiki/XML)
- [XML tutorial](https://www.w3schools.com/xml/default.asp)
- [XSD vgrajeni podatkovni tipi](https://www.w3.org/TR/xmlschema-2/#built-in-datatypes)

Nalogo oddajte na tej spletni strani.
