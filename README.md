# TypeScript setTimeout Loop Closure Issue

This repository demonstrates a common closure-related bug when using `setTimeout` within a loop in TypeScript.

## The Problem

The `printNumbers2` function intends to print numbers from 1 to `n` with a slight delay using `setTimeout`. However, due to how closures work in JavaScript, all the `setTimeout` callbacks end up using the final value of the loop variable `i`, which is `n + 1`.

## How to Reproduce

1. Clone this repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` to execute the compiled JavaScript.

You will observe that the output is not 1 to 10 as expected, but rather 11 printed multiple times.

## Solution

The solution involves using an immediately invoked function expression (IIFE) to create a new scope for each iteration of the loop, preserving the value of `i` for each callback.