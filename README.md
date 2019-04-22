# StoneScript
The 10,000 Year Old Caveman Coding Language

![StoneScrippt Logo](https://i.imgur.com/dvywB1b.png)


# Introduction
The story of StoneScript, coloquially known as the "Caveman Coding Language", began 
approximately 10,000 years ago, as human ancestors began
writing programs on stone tablets. The purpose for creating these tablets and implementing
them remains a mystery that the StoneScript Project aims to solve through recreating the 
language with Ohm (link) and Javascript technologies. 


Our department belives if this language were developed today, it would have drawn 
inspiration from JavaScript, Haskell, and Python. 
The human ancestors that created this language may not have had the greatest 
understanding of types, only weakly supporting the simplest of types, but included 
currying and list comprehension having only recently discovered it, and thinking it 
was the coolest thing since fire. StoneScript is not a visually pleasing language, 
being particularly hard to read and write in, but we assert that it is the best 
language to yell at anything.

# Grammar

Full grammar may be found [here!](https://github.com/johnllopez616/stonescript/blob/master/syntax/stonescript.ohm)

# List of Features

## Comments
 🦖THIS IS HOW YOU DO <br/>
 🦖SINGLE LINE COMMENTS

🦕THIS IS A MULTI <br/>
LINE COMMENT 🦕

## Types

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
* Function = YABBADABBADOO
* No prototypes, this, or new (Think Crockford Classless)

## Variables 

* const = BEDROCK <br/>
* let = ROCK <br/>
* There will be variables you can change 

## Operators
### Arithmetic Operators
* \+ SQUISH
* \- RIP 
* \/ BREAK 
* \* MANY
* % LEFT

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

* Chainable if, else if, else statements = OOF, OOOF, OOFF

## Loops
* While Loops = WHILE

* For loops = FOR

## Functions

* function = YABBADABBADOO
* return = GIVE
* replace = HUNTDOWN
* \[ = CAVEIN
* ] = CAVEOUT

* Arrays = STUFFS (will have comprehensions)
* Accept parameters
* Support Currying
* Lazy Evaluation
* Support Pattern matching via Regular Expressions

# Example Programs

### Hello world

```
SPEAK ("OOOGA")!
```

```
console.log("Hello, World!")
```

<hr>

### Big spiral math problem

```
ROCK FIB IS YABBADABBADOO (N) PART
   ROCK A IS 0!
   ROCK B IS 1!
   ROCK F IS 1!
   FOR ( ROCK I IS 2; I NOT SMASH OR IS N; I IS I SQUISH 1) PART
     F IS A SQUISH B!
     A IS B!
     B IS F!
   NOT PART!
  GIVE F!
NOT PART!
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

### Cylinder Object

``` 
ROCK CYLINDER IS YABBADABBADOO(radius, height) PART
    BEDROCK surface_area IS radius MANY height!
    GIVE PART
      radius THINGIS radius!
      height THINGIS height !
      surface_area THINGIS surfaceArea !
    NOT PART!
NOT PART!
```

```
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

### Little Array Declaration

```
ROCK CAVERN IS CAVEIN 1, 2, 4, 8, 16, 32 CAVEOUT!
SPEAK (CAVERN)!
```

```
let cavern = [1, 2, 4, 8 16, 32]
console.log (cavern)

//output: "[1, 2, 4, 8, 16, 32]"
```
<hr>

### Simple yes no conditional

```
ROCK a IS OOGA!
OOF(a IS IS WORDER) PART
  GIVE SPEAK ("ROCK IS WORDER NOT YESNOS")!
NOT PART 
OOFF PART
  GIVE SPEAK ("ROCK IS YESNO")!
NOT PART!
```

```
let a = true
if(a == "WORDER") {
  return console.log("ROCK IS WORDER NOT YESNOS")
}
else {
  return console.log("ROCK IS YESNO")
}
```



# Contributors:
* Anthony Boyac 
* John Lopez
* Kevin Patterson
* Alex Richardson
