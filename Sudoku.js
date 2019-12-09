var grid = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// this function finds next empty square to fill on the sudoku grid
function findNextCellToFill(grid) {
	// look for an unfilled grid location
	for (let x = 0; x < 9; x++) {
		for (let y = 0; y < 9; y++) {
			if (grid[x][y] == 0) return [x, y];
		}
	}
	return [-1, -1];
}

// This procedure checks if setting the (i,j) square to e is valid

function isValid(grid, i, j, e) {
	// check rows and columns
	RnC = true;

	for (let x = 0; x < 9; x++) {
		if (e == grid[i][x] || e == grid[x][j]) {
			RnC = false;
			return false;
		}
	}

	if (RnC) {
		secTopX = 3 * Math.floor(i / 3);
		secTopY = 3 * Math.floor(j / 3);

		for (let x = secTopX; x < secTopX + 3; x++) {
			for (let y = secTopY; y < secTopY + 3; y++) {
				if (grid[x][y] == e) {
					return false;
				}
			}
		}
		return true;
	}
}

// Main function to solve sudoku
var backtracks = 0;

function solveSudoku(grid, i = 0, j = 0) {
	// find the next cell to fill
	[i, j] = findNextCellToFill(grid);

	if (i == -1) return true;

	for (let e = 1; e < 10; e++) {
		// Try diffrent values in i,j location
		if (isValid(grid, i, j, e)) {
			grid[i][j] = e;
			if (solveSudoku(grid, i, j)) {
				return true;
			}
			// Undo the current cell for backtracking

			backtracks += 1;
			grid[i][j] = 0;
		}
	}
	return false;
}

// print sudoku on grid
function printSudoku() {
	let allCells = document.querySelectorAll("td input");
	allCells.forEach(cell => {
		i = cell.getAttribute("col");
		j = cell.getAttribute("row");
		cell.value = grid[i][j];
	});
}

// // print sudoku on console
// function printSudoku(grid) {
// 	numrow = 0;
// 	grid.forEach(row => {
// 		if (numrow % 3 == 0 && numrow != 0) {
// 			console.log(" ");
// 		}
// 		console.log(row.slice(0, 3), row.slice(3, 6), row.slice(6, 9));
// 		numrow += 1;
// 	});
// 	return;
// }

// // sample puzzles
// var puzzle2 = [
// 	[0, 0, 0, 0, 9, 0, 0, 7, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 9, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 2, 0],
// 	[0, 0, 0, 5, 4, 0, 0, 6, 2],
// 	[7, 0, 0, 6, 0, 9, 3, 0, 0],
// 	[1, 0, 0, 0, 2, 0, 0, 0, 8],
// 	[6, 0, 0, 1, 3, 2, 4, 8, 7],
// 	[2, 3, 8, 9, 7, 4, 0, 1, 0],
// 	[4, 0, 0, 8, 6, 5, 2, 0, 9]
// ];

// var puzzle = [
// 	[5, 1, 7, 6, 0, 0, 0, 3, 4],
// 	[2, 8, 9, 0, 0, 4, 0, 0, 0],
// 	[3, 4, 6, 2, 0, 5, 0, 9, 0],
// 	[6, 0, 2, 0, 0, 0, 0, 1, 0],
// 	[0, 3, 8, 0, 0, 6, 0, 4, 7],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 9, 0, 0, 0, 0, 0, 7, 8],
// 	[7, 0, 3, 4, 0, 0, 5, 6, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];
