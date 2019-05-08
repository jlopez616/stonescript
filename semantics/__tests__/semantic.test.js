/*
 * Semantics Success Test
 *
 * These tests check that the semantic analyzer correctly accepts a program that passes
 * all of semantic constraints specified by the language.
 */

const parse = require('../../ast/parser');
const Context = require('../context');

// TODO!!!!!

const program = String.raw`
🦕
      Author: John, Anthony, Kevin, Alex
      Password: **********

      Introduction: Here are tests check to make this
      primitive language correctly accept this hideous
      program that happily passes the semantic
      constraints set by our language.
      PS: This is an elaborate copy paste of the first
      multiline comment of this file :D

      TODO: "Tablets" and "fields" are not currently
      implemented for the sake of this homework.
🦕

BEDROCK COUNTERS x IS 5!
ROCK WORDERS s IS "welcome"!
ROCK WORDERS intro IS "hello"!
ROCK COUNTERS count IS 0!
count SQUISH 5!
YABBADABBADOO () PART
    ROCK WORDERS intro IS "My name is "!
    ROCK COUNTERS count IS 10!
    🦖 Will loop ten times, printing "kratos" each time
    FOR (ROCK COUNTERS i IS 0! i NOT SMASH 10! i IS i SQUISH 1) PART
        SPEAK(kratos)!
    NOT PART!
    GIVE WHAT!
NOT PART!

ROCK COUNTERS score IS 80!
YABBADABBADOO () PART
    OOF (score SMASH OR IS 90) PART
    SPEAK("Great job!")!
    NOT PART OOOF (score SMASH OR IS 80) PART
    SPEAK("Not bad.")!
    NOT PART OOOF (score SMASH OR IS 70) PART
    SPEAK("You can do better.")!
    NOT PART OOOF (score SMASH OR IS 60) PART
    SPEAK("What are you doing here?")!
    NOT PART OOFF PART
    SPEAK("Better luck next semester!")!
    NOT PART!
NOT PART!

ROCK COUNTERS CAVE lottery IS CAVEIN 2, 5, 6 CAVEOUT!


ROCK WORDERS shoutout IS "Isn't STONESCRIPT rocking awesome?!"!
SPEAK(GOHIGH(shoutout))!

ROCK WORDERS waitASec IS "Wait, you want string length? Ah, whoops!"!
SPEAK(DALENGTH(waitASec))!

ROCK COUNTERS randomNum IS 100!
100 CUT 2!
🦖 TODO: Line below doesn't work!!!!!
🦖 ROCK COUNTERS bigop IS randomNum SQUISH 100 CUT 10 MANY 5 RIP 69 RIP 1 SQUISH 470 MANY 2 CUT 1000!
🦖 output: 1

ROCK YESNOS funbool IS OOGA!
WHILE (funbool NOT IS funbool) PART
    🦖 Infinite loop? Nahhhhhh
    RAGEQUIT!
NOT PART!

`;

describe('The semantic analyzer', () => {
  test('accepts the mega program with all syntactic forms', (done) => {
    const astRoot = parse(program);
    expect(astRoot).toBeTruthy();
    astRoot.analyze(Context.INITIAL);
    expect(astRoot).toBeTruthy();
    done();
  });
});

// TODO: add both lines in line 65 when ready to add 'CAVE' types
// ROCK CAVE characters IS CAVEIN "Mimir", "Laufey", "Atreus", "Fafnir" CAVEOUT!
// SPEAK(SIZE(characters))!
