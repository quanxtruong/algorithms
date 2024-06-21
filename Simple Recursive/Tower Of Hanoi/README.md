# Tower Of Hanoi

The **Tower of Hanoi**  is a mathematical game or puzzle consisting of `3` rods and 
a `N` number of disks of various diameters, which can slide onto any rod. 
The puzzle begins with the disks stacked on one rod in order of decreasing size, 
the smallest at the top. In this case, each *rod* is represented by a *column of the 2D Array or Matrix*, 
with the original peg being the column indexed as `0` and the destination peg being column indexed as `2`. 
The objective of the puzzle is to move the entire stack to one of the other rods, obeying the following rules:

`1) `Only one disk may be moved at a time.

`2) `Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.

`3) `No disk may be placed on top of a disk that is smaller than it.

For example, the following is the steps of a solution for The Tower of Hanoi with `4` disks:

![Tower of Hanoi](https://www.numerit.com/samples/hanoi/fig3.gif)

The expected output is a matrix that has all of the disks in column `2`
in increasing order, that being the smallest valued disk and the top and the highest
valued disk at the bottom. 

For example, the following is the input and output matrix for a 4 disk Tower of Hanoi soluion.
```
Input                        Output
{ 1,  0,  0,  0}             { 0, 0, 0, 1}
{ 2,  0,  0,  0} ----------> { 0, 0, 0, 2}
{ 3,  0,  0,  0} ----------> { 0, 0, 0. 3}
{ 4,  0,  0,  0}             { 0, 0, 0, 4}
```

The visualizer provides assistance in visualizing the moves while simultaneously confirming all rules are abided by in each step.

---
