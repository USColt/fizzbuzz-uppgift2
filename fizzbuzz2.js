function fizzBuzz(input) {
    // Försök att konvertera input till ett nummer
    let num = parseFloat(input);
    
    // Kolla om input inte kan konverteras till ett nummer
    if (isNaN(num)) {
      console.log("Ogiltig inmatning! Ange ett giltigt nummer.");
      return;
    }
  
    // Om input är ett decimaltal, avrunda det till närmaste heltal
    num = Math.round(num);
  
    // Kolla om num fortfarande inte är giltigt (negativt eller för litet)
    if (num <= 10) {
      console.log("Inmatningen måste vara ett heltal större än 10.");
      return;
    }
  
    // FizzBuzz-logik
    for (let i = 0; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  // Testar med olika typer av inmatning
  fizzBuzz("1453");   // Sträng som konverteras till ett nummer
  fizzBuzz(75.5);     // Decimaltal som avrundas till närmaste heltal
  fizzBuzz("109");    // Sträng som kan omvandlas direkt till ett heltal
  fizzBuzz("Hej");    // Ogiltig inmatning