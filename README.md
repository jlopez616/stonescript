# Stonescript
Ooooga

<!--  Logo will go here -->

<!-- Due by next time:
* Solidfy all features to have grammar ready
-->

# Introduction

# Grammar

# List of Features

## Comments
 🦖THIS IS HOW YOU DO <br/>
 🦖SINGLE LINE COMMENTS

🦕THIS IS A MULTI <br/>
LINE COMMENT🦕

## Types

WEAKLY TYPED, WILL BE TYPE INFERENCE

Primitive Types:
* Numbers 
* Strings (NO CHARACTERS)
* Booleans
* Undefined (Whut)


Reference Types:
* Objects (Things)
* Arrays (Stuffs) Homogenous Types
* Function (Be)

NO PROTOTYPES, NO 'THIS', NO 'NEW' (Think Crockford Classless)

## Variables 

BEDROCK = ROCK
LET = ROCK
There will be variables you can change 

## Operators
### Arithmetic Operators
* \+ SQUISH
* \- RIP | STEAL | TAKE
* \/ BREAK 
* \* MANY
* % LEFT
* ++ LITTLE SQUISH
* -- LITTLE STEAL /RIP
* ** MANY MANY

### Relational Operators
* == IS IS
* <= NOT SMASH OR IS
* \>= SMASH OR IS
* < NOT SMASH
* \> SMASH
* != NOT IS

### Logical Operator
* && AND
* || OR
* ! NOT

### Bitwise Operators
* &	Binary AND Operator copies a bit to the result if it exists in both operands.	(A & B) = 12, i.e., 0000 1100
* |	Binary OR Operator copies a bit if it exists in either operand.	(A | B) = 61, i.e., 0011 1101
* ^	Binary XOR Operator copies the bit if it is set in one operand but not both.	(A ^ B) = 49, i.e., 0011 0001
* ~	Binary One's Complement Operator is unary and has the effect of 'flipping' bits.	(~A ) = ~(60), i.e,. -0111101
* <<	Binary Left Shift Operator. The left operands value is moved left by the number of bits specified by the right operand.	
* \>\>	Binary Right Shift Operator. The left operands value is moved right by the number of bits specified by the right 


## Control Flow

* Chainable if, else if, else statements

* If, other if, other other if, other other other if, other other other other if, final if.

## Loops
* WHILE LOOP

* FOR LOOP

## Functions

* DO
* return is GIVE

* WILL HAVE PARAMETERS

* SUPPORTS CURRYING

* ARRAYS (STUFFS) WILL HAVE COMPREHENSIONS

[ = CAVEIN
] = CAVEOUT

* LAZY EVALUATION

* SUPPORTS PATTERN MATCHING VIA REGULAR EXPRESSIONS

* NO ASYNC

## Error Handling
To do next homework

# Example Programs

```
🦖OOGA WORLD 

SPEAK ( "OOOGA" )
```

```
🦖BIG SPIRAL MATH PROBLEM 

ROCK FIB IS BE (N) PART
   ROCK A IS 0
   ROCK B IS 1
   ROCK F IS 1
   FOR ( ROCK I IS 2; I NOT SMASH OR IS N; I LITTLE SQUISH) PART
     F IS A SQUISH B
     A IS B
     B IS F
  NOT PART
  GIVE F
NOT PART

```

```
var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
```

```
🦖MANY TIMES BIG SPIRAL MATH PROBLEM

BE BADFIB(n) PART

  OOF (n NOT SMASH OR IS 1) PART
    GIVE 1
    
  GIVE BADFIB (n RIP 1) SQUISH BADFIB (n RIP 2)
NOT PART
```

```
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

```
🦖HUNT QUOTES

BE stripQuotes(s) PART
 GIVE S FROM HUNTDOWN(/['"]/g '')
 
```
```
exports.stripQuotes = s => s.replace(/['"]/g, '');
```

🦖KIRKMAN'S OOO-GIRL PROBLEM

STUFFS X IS CAVEIN 0 1 8 2 6 14 3 4 13 5 7 11 9 10 12 CAVEOUT

FOR ( BE I IS 0 ; I NOT SMASH 7 ; I LITTLE SQUISH )
SPEAK ( DO  



# Contributors:
* Anthony Boyac 
* John Lopez
* Kevin Patterson
* Alex Richardson


var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
