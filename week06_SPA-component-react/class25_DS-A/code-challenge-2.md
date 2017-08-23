Code Challenge: Convert Roman Numerals
===

Write a function that takes a roman numeral (a `String`) and returns the decimal value (as a `Number`). Assume valid input.

## Numbers

Roman | Decimal
:--:|:--:
I | 1
V | 5
X | 10
L | 50
C | 100
D | 500
M | 1000

## Decrementing the Next Value

Roman numerals are arranged most-to-least values from left-to-right. The exception
is that we only allow counting three places, then the fourth place is decremented from the next highest digit symbol.

Roman | Decimal
:--:|:--:
I, II, III, IV, V | 1, 2, 3, 4, 5
VI, VII, VIII, IX, X | 6, 7, 8, 9, 10
XI, XII, XII, XIV, XV | 11, 12, 13, 14, 15
XVI, XVII, XVIII, XIX, XX | 16, 17, 18, 19, 20
XXI, XXII, XXII, XXIV | 21, 22, 23, 24, 25
MCMXCIX | 1999