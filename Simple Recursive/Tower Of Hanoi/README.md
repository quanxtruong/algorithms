# Tower Of Hanoi

The **Tower of Hanoi**  is a mathematical game or puzzle consisting of `3` rods and 
a `N` number of disks of various diameters, which can slide onto any rod. 
The puzzle begins with the disks stacked on one rod in order of decreasing size, 
the smallest at the top. In this case, each *rod* is represented by a *column of the 2D Array or Matrix*, 
with the original peg being the column indexed as `0` and the destination peg being column indexed as `2`. 
The objective of the puzzle is to move the entire stack to one of the other rods, obeying the following rules:

- Only one disk may be moved at a time.

- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.

- No disk may be placed on top of a disk that is smaller than it.

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

## Iterative Solution

The iterative solution is equivalent to the execution of the following sequence of steps repeatedly until the Tower of Hanoi is solved:

`1) `Move one disk from peg A to peg B or vice versa, whichever move is legal.

`2) `Move one disk from peg A to peg C or vice versa, whichever move is legal.

`3) `Move one disk from peg B to peg C or vice versa, whichever move is legal.

Following this approach, the stack will end up on peg B if the number of disks is odd and peg C if it is even.

Below is a visualization of the iterative solution with 6 disks:

![Iterative Solution](https://upload.wikimedia.org/wikipedia/commons/8/8d/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif)

---

## Recursive Solution

This is the solution used for this current iteration of the Tower of Hanoi algorithm visualizer.

The Tower of Hanoi is a puzzle that boils down to a collection of smaller sub-problems.
For the Towers of Hanoi:

- Label the pegs A, B, C.

- Let n be the total number of disks.

- Number the disks from 1 (smallest, topmost) to n (largest, bottom-most).

Assuming all n disks are distributed in valid arrangements among the pegs; assuming there are m top disks on a source peg, and all the rest of the disks are larger than m, so they can be safely ignored; to move m disks from a source peg to a target peg using a spare peg, without violating the rules:

`1)` Move m − 1 disks from the source to the spare peg, by the *same general solving procedure*. Rules are not violated, by assumption. This leaves the disk m as a top disk on the source peg.

`2)` Move the disk m from the source to the target peg, which is guaranteed to be a valid move, by the assumptions — a simple step.

`3)` Move the m − 1 disk that we have just placed on the spare, from the spare to the target peg by the same general solving procedure, so they are placed on top of the disk m without violating the rules.

The base case is to move 0 disks (in steps 1 and 3), that is, do nothing that does not violate the rules (which in this case is just a simple return statement).

The full Tower of Hanoi solution then moves n disks from the source peg A to the target peg C, using B as the spare peg.

Below is a general psuedo-code used to implement the recursive solution:
```
RecursiveHanoi(n, s, a, d) {
    // INPUT
    //    n = the number of disks
    //    s = the source rod
    //    a = the auxiliary rod
    //    d = the destination rod
    
    // Base Case
    if (n == 0) {
        return
    }
    
    // 1)
    RecursiveHanoi(n - 1, s, d, a)
    
    // 2)
    move from s peg to d peg
    
    // 3)
    RecursiveHanoi(n - 1, a, s, d)
}
```
---

## Time and Space Complexity
- **Time**: ![](https://latex.codecogs.com/svg.latex?O(2^N))
- **Space**: ![](https://latex.codecogs.com/svg.latex?O(N))

where  `N = number of disks`

## References
- [IIT Kanpur](https://www.iitk.ac.in/esc101/08Jan/lecnotes/lecture32.pdf)
- [GeeksForGeeks](https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/)
- [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi)


