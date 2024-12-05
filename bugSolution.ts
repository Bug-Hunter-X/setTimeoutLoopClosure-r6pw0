function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(10); // This now prints 1 to 10 correctly
