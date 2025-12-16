pseudocode on how to shuffle an array :DD 

pre-notes:
- there is no present function that can really just help us to effectively shuffle an array automatically, let alone with equal probability. i wish there was, to be very honest. it would make things so, so much easier thaan what it currently is.
- upon first thought I remembered the first concept of equal probability I learnt when doing the rock paper scissors project. i made use of (Math.floor(Math.random) * 90) + 1 such that the probability of getting 0-30 (rock), 31-60 (paper) and 61-90 (scissors) was the same for each round of the game.
- I could potentially use the same concept to finish up this project.

pseudocode:
- let arr = [1, 2, 3].
- make a function called shuffle that takes arr and shuffles the items within with equal probability.
- 