function getNumbersArray() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3, 4]);
        }, 500); // Adjusted to 0.5 seconds
      });
    }

    // Function to filter out odd numbers
    function filterEvenNumbers(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter(num => num % 2 === 0);
          document.getElementById('output').textContent = evenNumbers.join(', ');
          resolve(evenNumbers);
        }, 500); // Adjusted to 0.5 second
      });
    }

    // Function to multiply each even number by 2
    function multiplyNumbers(arr) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedNumbers = arr.map(num => num * 2);
          document.getElementById('output').textContent = multipliedNumbers.join(', ');
          resolve(multipliedNumbers);
        }, 2000); // Adjusted to 0.5 second
      });
    }

    // Execute the promise chain
    getNumbersArray()
      .then(filterEvenNumbers)
      .then(multiplyNumbers)
      .catch(error => {
        console.error("Error:", error);
      });