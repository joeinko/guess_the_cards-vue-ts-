# Guess the Cards game

## Vue 3 + TypeScript

### Gameplay:
* Player starts with 100 seconds (time acts as life).
* Each round, 5 cards are dealt, and the time starts ticking down.
* Player is presented with 3 possible hand rankings (e.g., Straight Flush).
* Player must choose the correct hand ranking.
* A correct answer adds 5 seconds to the playerʼs time.
* The game ends when time runs out (reaches 0).

  
At the end of the game, a summary screen displays:

* Total correct answers.
* Previous attempts.

#### BONUS:
Random word after each round included

*Requirement* -> in order to run the random word call successfully, create a .env file locally with following env variable
```
VITE_RANDOM_WORD_KEY=//*your key*
```
create an account at https://www.api-ninjas.com/api/randomword and generate the API key
