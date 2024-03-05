Pregledovalnik (scanner) ali leksikalni analizator predstavlja vmesnik med izvornim programom in razpoznavalnikom. Njegova naloga je, da vrne razpoznavalniku terminalne simbole. Njegova naloga je tudi, da izloči prazna mesta ter komentarje.

Pregledovalnik obravnava vhodno datoteko kot niz znakov, ki jih nato sestavlja v terminalne simbole. Za opis terminalnih simbolov uporabljamo končne avtomate, te pa najlažje implementiramo s tabelo.

\\[
\begin{aligned}
    \text{real} &= \\{\mathtt{0}, \dots, \mathtt{9}\\}^+\,(\mathtt{.}\,\\{\mathtt{0}, \dots, \mathtt{9}\\}^+)?\\
    1 &= 1
\end{aligned}
\\]

