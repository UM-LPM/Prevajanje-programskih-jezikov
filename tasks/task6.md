Zapišite rekurzivni navzdolni razpoznavalnik za programski jezik iz naloge 4 z naslednjo gramatiko:

$$
\newcommand\Seq{\mathrel{}}
\newcommand\Union{\mathrel{|}}
\begin{alignedat}{3}
    \text{Expr}_{start} &&{}\Coloneqq{} &\text{Additive}\cr
    \text{Additive} &&{}\Coloneqq{} &\text{Multiplicative} \Seq \text{Additive'}\cr
    \text{Additive'} &&{}\Coloneqq{} &\text{plus} \Seq \text{Multiplicative} \Seq \text{Additive'}\cr
&&{}\Union{}& \text{minus} \Seq \text{Multiplicative} \Seq \text{Additive'}\cr
&&{}\Union{}& \epsilon\cr
    \text{Multiplicative} &&{}\Coloneqq{} &\text{Exponential} \Seq \text{Multiplicative'}\cr
    \text{Multiplicative'} &&{}\Coloneqq{} &\text{times} \Seq \text{Exponential} \Seq \text{Multiplicative'} \cr
&&{}\Union{}& \text{divide} \Seq \text{Exponential} \Seq \text{Multiplicative'}\cr
&&{}\Union{}& \text{integer-divide} \Seq \text{Exponential} \Seq \text{Multiplicative'}\cr
&&{}\Union{}& \epsilon\cr
    \text{Exponential} &&{}\Coloneqq{} &\text{Unary} \Seq \text{Exponential'}\cr
    \text{Exponential'} &&{}\Coloneqq{} &\text{pow} \Seq \text{Unary} \Seq \text{Exponential'}\cr
&&{}\Union{}& \epsilon\cr
    \text{Unary} &&{}\Coloneqq{} &\text{plus} \Seq \text{Primary} \Union \text{minus} \Seq \text{Primary} \Union \text{Primary}\cr
    \text{Primary} &&{}\Coloneqq{} &\text{real} \Union \text{variable} \Union \text{lparen} \Seq \text{Expr} \Seq \text{rparen}
\end{alignedat}
$$

Program naj loči med sintaktično veljavnimi: `10 & #FF + ( 3 * 4 + var123)`, in sintaktično nevaljavnimi programi: `5 * 6 + 7 8`.

Program naj iz vhodne datoteke prebere izvorni program in v izhodno datoteko izpiše `accept`, če je primer veljaven in `reject`, če je primer neveljaven.
Imeni datotek bo program dobil kot konzolna argumenta.

Nalogo oddajte na GitHub, [link](https://classroom.github.com/a/g9K1HbL4).
