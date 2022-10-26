# Cat Ball

## Authors
- @RaydenSec

## Category
- Forensics

## Description
Cats and yarn are really the best of friends.. I had made sure to compile my C program to only return my secret when the correct password was given, but I seem to have underestimated the friendship of the all-seeing cats and their fellow army of yarn.. 

## Difficulty
- Easy

## Points
40

## Hints

## Files
- [yarn](./_ctfd/files): Compiled C file

## Solution
<details>
<summary>Spoiler</summary>

### Idea
Introduction to the "strings" command unix

### Walkthrough
if you run the strings command on the compiled C file (strings cat_ball), you'll get a list of printable string in the file, and since the flag is stored as a string, you'll find the flag in the list. 

### Flag
`BEGINNER{cAts_g0_PuRR_h38q92}`
</details>