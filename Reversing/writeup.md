# Title

## Authors
- @RaydenSec

## Category
- Reversing

## Description
NULL

## Difficulty
- Easy

## Points
NULL

## Hints
1. ...
1. ...

## Files
- [stego.jpg](/password)

## Solution
<details>
<summary>Spoiler</summary>

### Idea
Introduction to the "strings" command unix

### Walkthrough
1. We can check that the file is a compile C program. 
2. If we run "password" with "./password", we'll be prompted to enter a password. 
3. Instead, of entering a password, we can check if the file has any strings, eg. variable = "flag" or printf("flag"). 
4. Let's run "strings password", and check the contents. 
5. Boom, we found the flag "TEST0{N0t_iT_;D}"! Hope you enjoyed this simple challenge ;D

### Flag
`TEST0{N0t_iT_;D}`
</details>