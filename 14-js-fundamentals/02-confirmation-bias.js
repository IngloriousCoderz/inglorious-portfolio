/**
 * Confirmation Bias game:
 * 
 * A sequence of three numbers follows a rule that only I know. The sequence is 2 4 8.
 * You can guess the rule that I have in mind, or give me another sequence of numbers (any numbers,
 * not only a continuation of my sequence), which should provide some insight on the solution.
 * 
 * - Bobby proposed 16 32 64, which follows my rule. His guess was "powers of 2",
 *   but that's not my rule. Similar rules such as "n2 = n1+n1" mean the same thing.
 * - São proposed 12 18 24 and 30 34 36, both following my rule. Her guess was correct, but unproven
 *   by the two proposed sequences, since they could also lead to the answer "multiples of 2".
 * - I proposed -6 -4 -2, which follows my rule but at least excludes that the numbers should be positive.
 * - Then I proposed 6 2 4, which doesn't follow my rule so it excludes numbers in any order.
 * - Finally Tiago proposed 3 2 1, which doesn't follow my rule and excludes numbers in descending order.
 * 
 * So the final answer (which São already guessed correctly) is: numbers in ascending order. But more
 * important than the solution is the process through which we arrived to it: the most useful experiments
 * were those that tried to disprove our assumptions, rather than proving them.
 */

/**
 * Why is this game so important?
 * 
 * 1. The scientific method is very useful in programming, especially when testing our software: we challenge
 *    the assumption that the code works properly and, after enough tests, we must admit that it works.
 * 2. In real life, questioning our own assumptions with an open mind keeps us away from Confirmation Bias,
 *    which is a dangerous human flaw at the root of conspiracy theories and pseudo-sciences.
 * 3. The experimental approach is put in practice in some algorithms, e.g. search algorithms: I challenge
 *    my assumption that 'x' doesn't exist, and if at least one experiment finds 'x' then I was wrong.
 */
