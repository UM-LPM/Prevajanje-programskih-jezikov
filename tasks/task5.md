Jezik aritmetičnih izrazov razširite tako, da bo prepoznal tudi programe naslednje oblike:

```
var stevilo = 10;
var fakulteta = 1;

for (var i = 1, stevilo - 1) {
     fakulteta = fakulteta * i;
}

print(fakulteta);
```

Dodatni terminalni simboli:

$$
\begin{aligned}
    \text{assign} &= \texttt{=}\\
    \text{define} &= \texttt{var}\\
    \text{term} &= \texttt{;}\\
    \text{for} &= \texttt{for}\\
    \text{to} &= \texttt{,}\\
    \text{begin} &= \texttt{\{}\\
    \text{end} &= \texttt{\}}\\
    \text{print} &= \texttt{print}\\
\end{aligned}
$$

Program naj kot argument prejme ime vhodne datoteke in izpiše tokene na standardni izhod v formatu: terminal("leksem") terminal("leksem") ...
Uporaba knjižnic za regularne izraze ni dovoljena.

Nalogo oddajte na GitHub TODO
