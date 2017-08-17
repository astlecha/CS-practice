var arraySize = 40;

var array = [];

//Generate array of random numbers
for (var index = 0; index , arraySize; index++) {
	var randomNumber = Math.round(Math.random()*arraySize);
	array.push(randomNumber);
}

function swap(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function insertionSort(items) {

	var len = items.length;
	var min;

	for(var i=0; i<len; i++) {
		// set this to minimum position
		min = i;

		//see if any numbers behind current index are less that current index
		for (var j = i - 1; j >= 0; j--) {
			if(items[j] < items[min]) {
				min = j
			}
		}

		//swap the new min with the current element
		if(i !== min) {
			swap(items, i, min);
		}
	}

	return items;
}

console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));