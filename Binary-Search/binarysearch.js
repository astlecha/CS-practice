var result = binarySearch([1,23,43,56,77,89,211,212,789,972,1001,4567,4599,83294],
//-------------------------^^This array MUST be *sorted*
 77);
//^This is the searchElement we are looking for. 

console.log(result);

function binarySearch(stuff, searchElement) {

	var currentElement;
	var currentIndex;
	var maxIndex = stuff.length - 1;
	var minIndex = 0;

	while (minIndex <= maxIndex) {

		// Get a middle index position
		currentIndex = Math.floor((minIndex + maxIndex) / 2);

		// Get the element of that index
		currentElement = stuff[currentIndex];
		// console.log('Start Index: ', minIndex)
  //   	console.log('End Index: ', maxIndex)
  //   	console.log('Current Element', stuff[currentIndex])

  		// If it's less that # we want, 
		if (currentElement < searchElement) {
			// Look above this value
			minIndex = currentIndex + 1;
		}
		// If it's more than the # we want,
		else if (currentElement > searchElement) {
			// Look below this value
			maxIndex = currentIndex - 1;
		}
		else {
			// console.log('Current Index: ', currentIndex)
	  //     	console.log('Current Element', stuff[currentIndex])
	  //     	console.log(" ------- ")

	      	// We found it! Return the index.
			return currentIndex;
		}
	}

	return false;
}