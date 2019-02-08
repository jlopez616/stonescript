# StoneScript
The 2.5 Million Year Old Caveman coding Language

![StoneScrippt Logo](https://i.imgur.com/dvywB1b.png)

<!-- Due by next time:
* Solidfy all features to have grammar ready
-->

# Introduction
StoneScript is the oldest known coding language in the world. It is believed to have originated over 2.5 million years ago and is coloquially know as the "Caveman Coding Language". Archaeologists believe if this language were developed today, it would have drawn inspiration from JavaScript, Haskell, and Python. The Stone Age engineers that created this language may not have had the greatest understanding of types, only weakly supporting the simplest of types, but included currying and list comprehension having only recently discovered it, and thinking it was the coolest thing since fire. StoneScript is not a visually pleasing language being particularly hard to read and write in, but it is the best language to yell at anything. 

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
* Number = COUNTERS
* String = WORDERS
* Boolean = YESNOS
* Undefined = WHAT


Reference Types:
* Objects = THINGS
* Arrays = STUFFS
* Function = YABBADABBADO
* No prototypes, this, or new (Think Crockford Classless)

## Variables 

CONST = BEDROCK
LET = ROCK
There will be variables you can change 

## Operators
### Arithmetic Operators
* \+ SQUISH
* \- RIP 
* \/ BREAK 
* \* MANY
* % LEFT
* ++ LITTLE SQUISH
* -- LITTLE RIP
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

## Control Flow

* Chainable if, else if, else statements = IF, OTHER IF, AND LAST IF

## Loops
* While Loops = WHILE

* For loops = FOR

## Functions

* YABBADABBADO
* return = GIVE
* Accept parameters
* Support Currying

* Arrays (STUFFS) will have comprehensions
* \[ = CAVEIN
* ] = CAVEOUT
* Lazy Evaluation
* Support Pattern matching via Regular Expressions
* Do not allow async calls

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
