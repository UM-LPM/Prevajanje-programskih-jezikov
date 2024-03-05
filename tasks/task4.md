Pregledovalnik (scanner) ali leksikalni analizator predstavlja vmesnik med izvornim programom in razpoznavalnikom. Njegova naloga je, da vrne razpoznavalniku terminalne simbole. Njegova naloga je tudi, da izloči prazna mesta ter komentarje.

Pregledovalnik obravnava vhodno datoteko kot niz znakov, ki jih nato sestavlja v terminalne simbole. Za opis terminalnih simbolov uporabljamo končne avtomate, te pa najlažje implementiramo s tabelo.

Osnovni terminalni simboli:
$$
\begin{aligned}
    \text{real} &= \{\mathtt{0}, \dots, \mathtt{9}\}^+\,(\mathtt{.}\,\{\mathtt{0}, \dots, \mathtt{9}\}^+)?\cr
    \text{variable} &= \{\mathtt{A}, \dots, \mathtt{Z}, \mathtt{a}, \dots, \mathtt{z}\}^+\,\{\mathtt{0}, \dots, \mathtt{9}\}^\ast\cr
    \text{plus} &= \mathtt{+}\cr
    \text{minus} &= \mathtt{-}\cr
    \text{times} &= \mathtt{\ast}\cr
    \text{divides} &= \mathtt{/}\cr
    \text{integer-divides} &= \mathtt{//}\cr
    \text{lparen} &= \mathtt{(}\cr
    \text{rparen} &= \mathtt{)}\cr
    \text{skip} &= \{\mathtt{␣}, \mathtt{\\t}, \mathtt{\\n}\}^+
\end{aligned}
$$

Program naj kot argument prejme ime vhodne datoteke in izpiše tokene na standardni izhod v formatu: `terminal("leksem") terminal("leksem") ...`
Uporaba knjižnic za regularne izraze ni dovoljena.


