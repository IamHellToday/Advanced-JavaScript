function drawTree(treeHeight) {
	for (let i = 0; i < treeHeight; i++) {
		let star = '';
		let whitespace = '';
		for (let j = 0; j < 2 * i + 1; j++) {
			star += '*';
		}
		for (let k = i; k < treeHeight; k++) {
			whitespace += " ";
		}
		console.log(whitespace + star);
	}
}

drawTree(prompt('Wpisz wysokość choinki:'));
