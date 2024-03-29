# Matrix Tic-Tac-Toe Solution Checker

Did you ever wonder what's the shortest way to verify a Tic-Tac-Toe solution? Probably not.

Anyways, here is a really short algorithm to verify winning solutions, by viewing the board as a 3x3 matrix
with each cell having (i, j) coordinates. 

```js
// expects selected cells like this:
// [topLeft, middle, botRight] -> [{i: 1 ,j: 1}, {i: 2 ,j: 2}, {i: 3 ,j: 3}]
const [a, b, c] = fields.sort((a, b) => a.j - b.j).sort((a, b) => a.i - b.i);
const isWin = (2 * b.i - a.i === c.i) && (2 * b.j - a.j === c.j);
```

Not the absolute shortest solution – character wise – 
since there exist completely unhinged solutions 
(i.e. https://www.reddit.com/r/codegolf/comments/ee7noo/tictactoe_challenge/).

This solution is still understandable if you think it through, starting
by the fact that the equation `(2 * b - a) === c` finds all correct solutions,
but includes some false positives (a, b, c being the selected – numerically labelled – cells in some sorted order).
Applying this criterion to both matrix indices, after sorting the entries by 
each index separately, filters out all false positives and only leaves the correct ones.

Character wise this solution still ends up pretty short if you go ham on variable names (~100 characters).

