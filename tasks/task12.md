Abstraktnemu sintaktičnemu drevesu iz naloge 9 dodajte metodo `toXML`, ki ga bo pretvorila v XML dokument skladen z eno izmed XSD shem: [https://ppj.lpm.feri.um.si/schemas/stmts.xsd](https://ppj.lpm.feri.um.si/schemas/stmts.xsd) ali [https://ppj.lpm.feri.um.si/schemas/stmts-alt.xsd](https://ppj.lpm.feri.um.si/schemas/stmts-alt.xsd) (katero shemo boste uporabili si izberite sami).

Pravlinost metode `toXML` preverite na enega od nalednjih načinov:
- S knjižnico za validacijo XML dokumentov na podlagi XSD shem, na primer [javax.xml.validation.Schema](https://docs.oracle.com/javase/8/docs/api/javax/xml/validation/Schema.html) ali [lxml](https://lxml.de/validation.html).
- S programom xmllint, `xmllint --shema SHEMA DOKUMENT`.
- Z online validatorjem, [link](https://www.liquid-technologies.com/online-xsd-validator).

Primer XML dokumenta:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<program>
    <seq>
        <definition variable="i">
            <real>1.0</real>
        </definition>
        <print>
            <variable>i</variable>
        </print>
    </seq>
</program>
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<program>
    <seq>
        <definition variable="i">
            <real>1.0</real>
        </definition>
        <seq>
            <print>
                <variable>i</variable>
            </print>
            <end />
        </seq>
    </seq>
</program>
```


Nalogo oddajte na GitHub, [link](https://classroom.github.com/a/lJdUzcvJ). Ta naloga nima avtomatskih testov.
