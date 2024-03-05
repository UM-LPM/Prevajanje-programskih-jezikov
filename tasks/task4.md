Pregledovalnik (scanner) ali leksikalni analizator predstavlja vmesnik med izvornim programom in razpoznavalnikom. Njegova naloga je, da vrne razpoznavalniku terminalne simbole. Njegova naloga je tudi, da izloči prazna mesta ter komentarje.

Pregledovalnik obravnava vhodno datoteko kot niz znakov, ki jih nato sestavlja v terminalne simbole. Za opis terminalnih simbolov uporabljamo končne avtomate, te pa najlažje implementiramo s tabelo.

\\[
\begin{aligned}
    real &= \\{0, \dots, 9\\}^+
\end{aligned}
\\]

\,(.\,\{0, \dots, 9\}^+)?
    \text{variable} &= \{\texttt{A}, \dots, \texttt{Z}, \texttt{a}, \dots, \texttt{z}\}^+\ \{\texttt{0}, \dots, \texttt{9}\}?\\
    \text{term} &= \texttt{;}\\
    \text{plus} &= \texttt{+}\\
    \text{minus} &= \texttt{-}\\
    \text{times} &= \texttt{\ast}\\
    \text{divides} &= \texttt{/}\\
    \text{integer-divides} &= \texttt{//}\\
    \text{lparen} &= \texttt{(}\\
    \text{rparen} &= \texttt{)}\\
    \text{assign} &= \texttt{=}\\
    \text{define} &= \texttt{var}\\
    \text{for} &= \texttt{for}\\
    \text{to} &= \texttt{,}\\
    \text{begin} &= \texttt{\{}\\
    \text{end} &= \texttt{\}}\\
    \text{print} &= \texttt{print}\\
    \text{skip} &= \{\texttt{␣}, \texttt{\\t}, \texttt{\\n}\}^+
