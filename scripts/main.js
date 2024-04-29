// Task 1: Print the first 10 square numbers
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
  
  // Task 2: Count down from 5 to 1 then say "Blastoff!"
  let count = 5;
  while (count >= 1) {
    console.log(count);
    count--;
  }
  console.log("Blastoff!");
  
  // Task 3: Print the even numbers from 1 to 50 (including 50)
  for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }
  
  // Task 4: Print the sum of 1 through 100
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
  
  // Task 5: Print the first 10 factorials
  function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  for (let i = 1; i <= 10; i++) {
    console.log(factorial(i));
  }