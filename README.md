# StoneScript
The 2.5 Million Year Old Caveman coding Language

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

```
StoneScript {
  Program          =  (Statement)*
  Statement        =  ForLoop "!"
                   |  WhileLoop "!"
                   |  Conditional "!"
                   |  Declaration "!"
                   |  Assignment "!"
                   |  Call "!"
                   |  Return "!"
                   |  Exp "!"
                   |  comment ""
  Primary          =  Func | Exp | intlit | strlit | boollit | Call | Array | id
  Func             =  "YABBADABBADOO" "(" listOf<id, ", "> ")" "PART" Statement* "NOT PART"
  Exp              =  Exp "OR" Exp1                          -- or
                   |  Exp "AND" Exp1                         -- and
                   |  Exp1
  Exp1             =  Exp1 mulop Exp2                        -- binary
                   |  Exp2
  Exp2             =  Exp2 addop Exp3                        -- binary
                   |  Exp3
  Exp3             =  Exp3 relop Exp4                        -- binary
                   |  Exp4
  Exp4             =  "NOT" Exp4                                -- unary
                   |  Exp5
  Exp5             =  Func
                   |  Exp6
  Exp6             =  Array                                  -- list
                   |  Exp7
  Exp7             =  Obj                                    -- list
                   |  Call
                   |  boollit
                   |  intlit
                   |  strlit
                   |  Paren
                   |  id
  Paren            = "(" Exp ")"
  ExpList          =  Exp ("," Exp)*
  Return           =  "GIVE" Primary
  Array            =  "CAVEIN" ListOf<Primary, ","> "CAVEOUT"
  Declaration      =  ("ROCK" | "BEDROCK") id "IS" Exp
  Assignment       = id "IS" Exp
  Call             =  ("SPEAK" | id) "(" listOf<Primary, ","> ")"

  Obj              =  "PART" Field* "NOT" "PART"
  Field            =  id "THINGIS" Exp "!"
  Conditional      =  "OOF" "(" Exp ")" "PART" Body "NOT PART"
                      ("OOOF" "(" Exp ")" "PART" Body "NOT PART" )*
                      ("OOFF" "PART" Body "NOT PART" )?
  Setup            =  Declaration | Assignment
  ForLoop          =  "FOR" "(" Setup ";" Exp3 ";" Assignment ")"	 "PART" Body "NOT PART"
  WhileLoop        =  "WHILE" "(" RelExp ")" "PART" Body "NOT PART"
  RelExp           =  id relop Primary
  Body             =  Program
  keyword          =  ("YESNOS" | "OOF" | "OOOF" | "OOFF" |  "FOR"  | "GIVE" |  "WHAT" | "WHILE"
                   | "SQUISH" | "RIP" | primtype | "THINGIS"
                   | "OOGA" | "WORDERS" |  "YABBADABBADO" |  "NOOGA" | "SPEAK" | "PART"
                   | "NOT PART") ~idrest
  funckeyword      =  "SPEAK"
  boollit          =  "OOGA"
                   |  "NOOGA"
  intlit           =  digit+ ("." digit+)?
  strlit           =  "\"" (~"\\" ~"\"" ~"\n" any)* "\""
  nothing          =  "WHAT"
  id               =  ~keyword letter idrest*
  idrest           =  "_" | alnum
  addop            =  "SQUISH" | "RIP"
  relop            =  "NOT SMASH OR IS" | "NOT SMASH" | "IS IS" | "NOT IS" | "SMASH OR IS" | "SMASH"
  mulop            =  "MANY" | "BREAK" | "LEFT"
  primtype         =  "YESNOS" | "COUNTERS" | "WORDERS" | "WHAT"
  newline          =  "\n"+
  comment          = "🦖" ~"🦖" (~newline ~"🦖" any)* ~"🦖"                      -- comment
                   | multiLineComment
  multiLineComment = "🦕" (~"🦕" any)* "🦕"
}

```
# List of Features

## Comments
 🦖THIS IS HOW YOU DO <br/>
 🦖SINGLE LINE COMMENTS

🦕THIS IS A MULTI <br/>
LINE COMMENT 🦕

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
* Function = YABBADABBADOO
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

* function = YABBADABBADOO
* return = GIVE
* Accept parameters
* Support Currying
* HUNTDOWN = replace

* Arrays (STUFFS) will have comprehensions
* \[ = CAVEIN
* ] = CAVEOUT
* Lazy Evaluation
* Support Pattern matching via Regular Expressions

# Example Programs

```
SPEAK ("OOOGA")!
```

```
// Hello World

console.log("Hello, World!")
```

<hr>

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
// Big spiral math problem

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
ROCK CAVERN IS CAVEIN 1, 2, 4, 8, 16, 32 CAVEOUT!
SPEAK (CAVERN)!
```

```
// Little Array Declaration

let cavern = [1, 2, 4, 8 16, 32]
console.log (cavern)

// will say "[1, 2, 4, 8, 16, 32]"
```
<hr>

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

// Simple yes no conditional

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
