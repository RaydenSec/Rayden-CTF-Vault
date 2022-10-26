# Robot Maze

## Authors
- @RaydenSec

## Category
- Web

## Description
Enter the not so mazy robot maze, who knows, maybe you'll find something cool.. 

## Difficulty
- Easy

## Points
30

## Hints

## Files

## Solution
<details>
<summary>Spoiler</summary>

### Idea
Learning about common directories like robots.txt, and using the links inside

### Walkthrough
1. A common file in websites is the "robots.txt" file, which tell search engine crawlers what directories can be indexed. 
2. To access this file, simply add "/robots.txt" to the end of the URL at the root of the site (robot-maze.ctf.secso.cc/robots.txt)
3. Here you'll find that "/pandora.html/" and "/sitemap.xml/" are Disallowed. Access these two pages by adding the directory to the end of the URL at the root of the site. (robot-maze.ctf.secso.cc/pandora.html/ and robot-maze.ctf.secso.cc/sitemap.xml). You'll find the flag commented in sitemap.xml. 

### Flag
`BEGINNER{N0t_Rob0t_j5wr}`
</details>
