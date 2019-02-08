# Problem 4

#### a. 
Since both "and" and "or" are declared in the same rule, "and" takes precendence over "or" because ...

#### b. 
"X and Y or Z" is not possible because Exp can't lead back to Exp after it goes to "Exp1 ("and" Exp1)*" to deal with "and". Since the rules for "and" and "or" lead to the next grammar rule with no return to Exp at any point in the next rule and later on in the grammar, it can only parse statements with either "and" or "or" but not both.

#### f. 
```
Times { {Negate {numlit 8}} numlit 5 }
```
#### g. 
```
Negate { Times {numlit 8 numlit 5} }
```
