Napišite semantični evaluator za razpoznavalnik iz naloge 7.
Razpoznavalnik iz naloge 7. nadgradite v razčlenjevalnik, tako da sproti gradite abstraktno sintaktično drevo iz naloge 9.
Abstraktnemu sintaktičnemu drevesu dodajte metodo `eval`, ki ga bo ovrednotila.

Program naj iz vhodne datoteke prebere izvorni program, ga razčleni, ovrednoti in rezultat izpiše v izhodno datoteko. Imeni datotek bo program dobil kot konzolna argumenta.

Rezultat naslednjega primera

```
stevilo := 10;
fakulteta:=1;
for (i := 1 to stevilo - 1) begin
     fakulteta:= fakulteta * i
end;
CONSOLE fakulteta
```

naj bo enak:

```
362880.0
```


