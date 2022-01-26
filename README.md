# Crystal-Collector
### Deployed site found here: https://rhardin94.github.io/Crystal-Collector/
## Overview
Crystal-Collector is a single-page dynamic score matching game powered by jQuery. At the beginning of each round, the computer picks a number for the user to try to match via the gems below. Each gem is given a random score at the beginning of the round and each gem click updates the user's score. If the user matches the computer's score, they win, if they go over they lose.

## How to use

Upon first loading the site, the user is presented with the home page.

![home page](/assets/screenshots/home.jpg)

Each round, the computer picks a random score for the user to match.

![computer score](/assets/screenshots/goal.jpg)

The user attempts to match the computer score by clicking on the respective gems.

![game gems](/assets/screenshots/gems.jpg)

For every round, each gem is assigned a random value to help the user match the computer score.
When the user clicks on a gem, their score is updated below.

![user score](/assets/screenshots/score.jpg)

When the user matches the computer score, they win the round.

![wins: 1](/assets/screenshots/win.jpg)

Or if the user goes over the computer score, they lose the round.

![loss: 1](/assets/screenshots/loss.jpg)

Once a win or loss has been assigned, the computer picks a new score to match (and the gems are giving different values as well)

![new computer score](/assets/screenshots/new.jpg)

## Tech
* [jQuery](https://jquery.com/)
