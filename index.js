function map(array, func) {
	for (var i = 0; i < array.length; i++) {
		array[i] = func(array[i])
	}
	return array
}

function reduce(array, func, starting ) {
	let starting_i = 0
	if (starting == undefined)
	{
		starting = array[0]
		starting_i = 1
	}
	for (var i = starting_i; i < array.length; i++) {
		starting = func(array[i], starting)
	}
	return starting
}