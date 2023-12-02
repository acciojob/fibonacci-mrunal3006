function fibonacci(num) {
// your code here
	if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let temp;

    for (let i = 3; i <= num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }
}

module.exports = fibonacci;
