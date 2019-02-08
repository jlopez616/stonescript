# Problem 4

#### a. 
Since both "and" and "or" are declared in the same rule, "and" takes precendence over "or" because it is listed first so a program will evaluate "and" before "or". They are also the lowest precedence operators out of all the expression operators.

#### b. 
"X and Y or Z" is not possible because Exp can't lead back to Exp after it goes to Exp1. Since the rules for "and" and "or" lead to the next grammar rule with no return to Exp at any point in the next rule and later on in the grammar, it can only parse statements with either "and" or "or" but not both. In creating an AST the same problem was enountered.

#### c.
Addops are both left and right associative, while relops are left associative.

#### d.
The not operator is right associative because the term must be to the right of the not operator to be negated properly.

#### e.
The negation operator was given lower precedence because multiplication carries negation to the product so that if either multiplier is negated the produt will have the same sign.

#### f. 
```
Negate { Multiply { numlit 8} { numlit 5} }
```
#### g. 
```
Multiply { { Negate { numlit 8}} { numlit 5} }
```
