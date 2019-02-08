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

* True = OOGA	
* False = NOOGA

* Undefined = WHAT


Reference Types:
* Objects = THINGS
* Arrays = STUFFS
* Function = YABBADABBADO
* No prototypes, this, or new (Think Crockford Classless)

## Variables 

CONST = BEDROCK <br/>
LET = ROCK <br/>
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

* Chainable if, else if, else statements = OOF, OTHER OOF, AND LAST OOF

## Loops
* While Loops = WHILE

* For loops = FOR

## Functions

* function = YABBADABBADO
* return = GIVE
* Accept parameters
* Support Currying
* HUNTDOWN = replace

* Arrays (STUFFS) will have comprehensions
* \[ = CAVEIN
* ] = CAVEOUT
* Lazy Evaluation
* Support Pattern matching via Regular Expressions
* Do not allow async calls

# Example Programs

```
🦖OOGA WORLD 

SPEAK ( "OOOGA" )
```

```
// Hello World
console.log("Hello, World!")
```

<hr>

```
🦖BIG SPIRAL MATH PROBLEM 

ROCK FIB IS YABBADABBADO (N) PART
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
var fib = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};
```
<hr>

```
🦖MANY TIMES BIG SPIRAL MATH PROBLEM

YABBADABBADO BADFIB(n) PART

  OOF (n NOT SMASH OR IS 1) PART
    GIVE 1
    
  GIVE BADFIB (n RIP 1) SQUISH BADFIB (n RIP 2)
NOT PART
```

```
function badfib(n) {
  if (n <= 1) return 1;

  return badfib(n - 1) + badfib(n - 2);
}
```
<hr>

``` 

// 🦖MAKE CYLINDER

ROCK CYLINDER IS YABBADABBADOO(radius,height) PART
    BEDROCK surface_area is radius MANY height
    
    GIVE PART
    radius THINGIS radius THINGENDS
    height THINGIS height THINGENDS
    surface_area THINGIS surfaceArea THINGENDS
    NOTPART
    
    NOTPART
 
```

```
// Cylinder Object

let cylinder = function(radius, height) {
  const surface_area = radius * height
  
  return {
   radius: radius
   height: height
   surfaceArea: surface_area
   }
}

```
<hr>

```
// Little Array Declaration

let cavern = [1, 2, 4, 8 16, 32]
console.log (cavern)
// will say "[1, 2, 4, 8, 16, 32]"


```

```
🦖LIL CAVERN DECLARATION

ROCK CAVERN = CAVEIN 1, 2, 4, 8, 16, 32 CAVEOUT

SPEAK (CAVERN)

🦖WILL SAY (CAVEIN 1, 2, 4, 8, 16, 32 CAVEOUT)
```
<hr>

```
🦖HUNT QUOTES

YABBADABBADO stripQuotes(s) PART
 GIVE S FROM HUNTDOWN(/['"]/g '')
 
```

```

// Simple stripQuotes function
function stripQuotes(s) {
    return s.replace(/['"]/g, '');
}
```



# Contributors:
* Anthony Boyac 
* John Lopez
* Kevin Patterson
* Alex Richardson
