# Jack The Zipper

## Authors
- @RaydenSec

## Category
- Forensics

## Description

Seems like Jack the Ripper has travelled to the 21st century to conduct another wave of killing sprees! We've retrieved one of his letters in the form of a zip file, but it seems to be password protected.. I've heard that Jack's distant cousin, John, is willing to help us for curiosity's sake.. 

## Difficulty
- Easy

## Points
60

## Hints

## Files
- [jack_the_zipper.zip](./_ctfd/files/jack_the_zipper.zip): Encrypted zip file


## Solution
<details>
<summary>Spoiler</summary>

### Idea
Learning how to use John the Ripper or hashcat etc. to dictionary attack an encrypted zip file

### Walkthrough
1. For this challenge, you'll need a password cracker like "John the Ripper" or "Hashcat" etc.. Since the challenge name was Jack the Ripper, and his madeup brother John was hinted, we'll use the password cracking tool "John the Ripper" since it's always a popular tool. 
2. "John the Ripper" can crack hashed passwords, so we'll first need to find the hash of the zip file. To do this, we'll be using the inbuilt John the Ripper tool, "zip2John". We'll run "zip2john jack_the_zipper.zip > name.hashes" (name.hashes is the file you'll like to create and store the hashes in for ease of access). 
3. Next, we'll run a dictionary attack against "name.hashes" with "John the Ripper". Command: "john name.hashes", which'll use an inbuilt dictionary text file (or you can specify a dictionary list if desired) to try and crack the hash in "names.hashes". 
4. Once the password is found, you can go ahead and open the zip file and enter the password to find open the text file, which'll contain the flag. 

### Flag
`BEGINNER{dicTi0nar1_N3rd_uf71hs}`
</details>
