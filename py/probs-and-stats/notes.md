# Intro
- A probability space is a triple (Ω, F, P) 
- Sample spaces may be *discrete* or *continuous*

## Sigma algebra
- Ω := {heads,tails} and F := {heads or tails, heads,tails, ∅} 
- If a set S ∈ F then S' ∈ F.
- if S1, S2,...,Sn ∈ F then S1 U S2 ... Sn ∈ F.
- Ω ∈ F
- F is the sigma algebra
- P (Ω) = 1

## Probabilty Measure
A probability measure is a function defined over the sets in a σ-algebra F such that:
- **Axiom 1:** P(S)>=0 for any event S ∈ F
- **Axiom 2:** Prob. of the union of all the possible events,S in F = the sum of the probability of each event - For disjoint sets
- **Axiom 3:**  P (Ω) = 1 

**Note:** A ⊆ B implies P (A) ≤ P (B)

# Conditional Probability
- A partition is a subspace where all events are mutually exclusive(disjoint) from each other. And Ω=union of all events 
- **(Law of total probability)**. Let (Ω, F, P) be a probability space and let the collection of disjoint sets A1, A2,... ∈ F be any partition of Ω. For any set S ∈ F
```
    P(A) = P(AnBi for Bi in F)=P(Bi for Bi in F) . P(A|Bi for Bi in F)
```

## Bayes Theory
It is crucial to realize that in general P (A|B) != P (B|A): most players in the NBA probably
own a basketball (P (owns ball|NBA) is large) but most people that own basketballs are not in
the NBA (P (NBA|owns ball) is small). The reason is that the prior probabilities are very different: P (NBA) is much smaller than P (owns ball). However, it is possible to invert conditional
probabilities, i.e. find P (A|B) from P (B|A), as long as we take into account the priors. This
straightforward consequence of the definition of conditional probability is known as Bayes’ rule.
```
P(A|B) = P(A).P(B|A) / P(B)
```

# Random Variables

The term *random variable* is not very descriptive. A better term is *measurable function*. In tossing a fair six-sided die. There are only six outcomes possible,

$$
\Omega=\lbrace 1,2,3,4,5,6 \rbrace
$$

if the die is fair, then the probability of each outcome is $1/6$. 
To say this formally, the measure  of each set (i.e., $\lbrace 1 \rbrace,\lbrace
2 \rbrace,\ldots,\lbrace 6 \rbrace$) is $\mu(\lbrace 1 \rbrace ) =\mu(\lbrace 2
\rbrace ) \ldots = \mu(\lbrace 6 \rbrace ) = 1/6$. In this case, the $\mu$
function is the usual *probability* mass function, denoted by
$\mathbb{P}$. The measurable function maps a set into a
number on the real line. For example, $ \lbrace 1 \rbrace \mapsto 1 $ is
one such uninteresting function.

Now, here's where things get interesting. Suppose you were asked to construct a
fair coin from the fair die. In other words, we want to throw the die and then
record the outcomes as if we had just tossed a fair coin. How could we do this?
One way would be to define a measurable function that says if the die comes up
`3` or less, then we declare *heads* and otherwise declare *tails*. This has
some strong intuition behind it, but let's articulate it in terms of formal
theory.  This strategy creates two different non-overlapping sets $\lbrace
1,2,3 \rbrace$ and $\lbrace 4,5,6 \rbrace$. Each set has the same probability
*measure*,

$$
\mathbb{P}(\lbrace 1,2,3 \rbrace) = 1/2 \\\
\mathbb{P}(\lbrace 4,5,6 \rbrace) = 1/2
$$

And the problem is solved. Everytime the die comes up
$\lbrace 1,2,3 \rbrace$, we record heads and record tails otherwise.

Alternatively, we could define the sets as $\lbrace 1 \rbrace$,
$\lbrace 2 \rbrace$, $\lbrace 3,4,5,6 \rbrace$. If we define the corresponding
measure for each set as the following

1.
$$
\mathbb{P}(\lbrace 1 \rbrace) = 1/2 \\\
\mathbb{P}(\lbrace 2 \rbrace) = 1/2 \\\
\mathbb{P}(\lbrace 3,4,5,6 \rbrace) = 0
$$
---
2.
$$
\Omega = \lbrace (1,1),(1,2),\ldots,(5,6),(6,6) \rbrace
$$

**Try to figure out what its definition** \
**[Then Try these Questions](./random-variables.ipynb)**