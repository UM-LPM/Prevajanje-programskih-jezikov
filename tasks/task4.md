Pregledovalnik (scanner) ali leksikalni analizator predstavlja vmesnik med izvornim programom in razpoznavalnikom. Njegova naloga je, da vrne razpoznavalniku terminalne simbole. Njegova naloga je tudi, da izloči prazna mesta ter komentarje.

Pregledovalnik obravnava vhodno datoteko kot niz znakov, ki jih nato sestavlja v terminalne simbole. Za opis terminalnih simbolov uporabljamo končne avtomate, te pa najlažje implementiramo s tabelo.

Osnovni terminalni simboli:

$$
\begin{aligned}
    \text{real} &= \{\texttt{0}, \dots, \texttt{9}\}^+\,(\texttt{.}\,\{\texttt{0}, \dots, \texttt{9}\}^+)?\cr
    \text{variable} &= \{\texttt{A}, \dots, \texttt{Z}, \texttt{a}, \dots, \texttt{z}\}^+\,\{\texttt{0}, \dots, \texttt{9}\}^\ast\cr
    \text{plus} &= \texttt{+}\cr
    \text{minus} &= \texttt{-}\cr
    \text{times} &= \texttt{*}\cr
    \text{divides} &= \texttt{/}\cr
    \text{integer-divides} &= \texttt{//}\cr
    \text{pow} &= \texttt{\textasciicircum}\cr
    \text{lparen} &= \texttt{(}\cr
    \text{rparen} &= \texttt{)}\cr
    \text{skip} &= \{\texttt{␣}, \texttt{\textbackslash t}, \texttt{\textbackslash n}\}^+
\end{aligned}
$$

Program naj iz vhodne datoteke prebere izvorni program in izpišete tokene v izhodno datoteko v formatu: `terminal("leksem") terminal("leksem") ...`. Imeni datotek bo program dobil kot konzolna argumenta.
Uporaba knjižnic za regularne izraze ni dovoljena.

Nalogo oddajte na GitHub [link](https://classroom.github.com/a/YioRCPpp).
