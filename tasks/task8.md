Pripravite abstraktno sintaktično drevo za programe iz nalog 4 in 6.

Gramatika abstraktne sintakse je:

$$
\newcommand\Seq{\mathrel{}}
\newcommand\Union{\mathrel{|}}
\begin{alignedat}{3}
    \text{Expr}_{start} &&{}\Coloneqq{} &\text{Expr} \Seq \text{plus} \Seq \text{Expr}\cr
&&{}\Union{}& \text{Expr} \Seq \text{minus} \Seq \text{Expr}\cr
&&{}\Union{}& \text{Expr} \Seq \text{times} \Seq \text{Expr}\cr
&&{}\Union{}& \text{Expr} \Seq \text{divides} \Seq \text{Expr}\cr
&&{}\Union{}& \text{Expr} \Seq \text{integer-divides} \Seq \text{Expr}\cr
&&{}\Union{}& \text{Expr} \Seq \text{pow} \Seq \text{Expr}\cr
&&{}\Union{}& \text{plus} \Seq \text{Expr}\cr
&&{}\Union{}& \text{minus} \Seq \text{Expr}\cr
&&{}\Union{}& \text{real}\cr
&&{}\Union{}& \text{variable}
\end{alignedat}
$$

Drevo izpelave za to gramatko je abstraktno sintaktično drevo, ki ga lahko predstavimo kot z naslednjo drevesno gramatiko:

$$
\newcommand\Seq{\mathrel{}}
\newcommand\Union{\mathrel{|}}
\begin{alignedat}{3}
    \text{Expr}_{start} &&{}\Coloneqq{} &\text{plus}(\text{Expr}, \text{Expr})\cr
&&{}\Union{}& \text{minus}(\text{Expr}, \text{Expr})\cr
&&{}\Union{}& \text{times}(\text{Expr}, \text{Expr})\cr
&&{}\Union{}& \text{divides}(\text{Expr}, \text{Expr})\cr
&&{}\Union{}& \text{integer-divides}(\text{Expr}, \text{Expr})\cr
&&{}\Union{}& \text{pow}(\text{Expr}, \text{Expr})\cr
&&{}\Union{}& \text{unary-plus}(\text{Expr})\cr
&&{}\Union{}& \text{unary-minus}(\text{Expr})\cr
&&{}\Union{}& \text{real}(\text{Double})\cr
&&{}\Union{}& \text{variable}(\text{String})
\end{alignedat}
$$

Vaša naloga je, da to drevesno gramatiko pretvorite v podatkovno strukturo. Dodajte metodo `toString()`, ki bo abstraktno sintaktično drevo pretvorila v veljaven program. Preverite pravilnost metode `toString()`, tako da preverite ali razpoznavalnik sprejme njen izhod za naslednje primere:

$$
\begin{aligned}
&\text{plus}(\text{times}(\text{real}(\texttt{1.0}), \text{real}(\texttt{2.0})), \text{real}(\texttt{3.0}))\\
&\text{times}(\text{real}(\texttt{1.0}), \text{plus}(\text{real}(\texttt{2.0}), \text{real}(\texttt{3.0})))\\
&\text{minus}(\text{minus}(\text{real}(\texttt{4.0}), \text{real}(\texttt{1.0})), \text{real}(\texttt{1.0}))\\
&\text{divides}(\text{real}(\texttt{4.0}), \text{plus}(\text{variable}(\texttt{x}), \text{unary-minus}(\texttt{1.0})))\\
&\text{integer-divides}(\text{plus}(\text{variable}(\texttt{x}), \text{variable}(\texttt{y})), \text{pow}(\text{real}(\texttt{2.0}), \text{real}(\text{real}(\texttt{2.0}))))\\
&\text{unary-minus}(\text{plus}(\text{real}(\texttt{1.0}), \text{real}(\texttt{2.0})))
\end{aligned}
$$

