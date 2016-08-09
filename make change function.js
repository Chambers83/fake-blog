function makeChange(dollars) {
	var cents = dollars *100;
	// set up some variables to track number of each coin
	var quarters = 0,
		dimes = 0,
		nickels = 0,
		pennies =0;

	// Set up while loops to both decrement dollars and increment the respective coin variable
	while(cents >= 25) {
		cents -= 25;
		quarters += 1;
	}

	while(cents >= 10) {
		cents -= 10;
		quarters += 1;
	}
	
	while(cents >= 05) {
		cents -= 05;
		quarters += 1;
	}
	
	while(cents >= 01) {
		cents -= 01;
		quarters += 1;
	}

	//console.log ()
	//Return the final information
}

	makeChange(1.67);