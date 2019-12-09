let ROWS = document.querySelectorAll("tr");

// adding index in every cell of grid
let coloumn = 0;
ROWS.forEach(ROW => {
	cellsInRow = ROW.querySelectorAll("td input");
	for (let i = 0; i < 9; i++) {
		cellsInRow[i].setAttribute("col", coloumn);
		cellsInRow[i].setAttribute("row", i);
	}
	coloumn++;
});

// make DOM function to select rows and coloumns and sub-gird highlighted on hover

let CELLSd = document.querySelectorAll("td");
CELLSd.forEach(e => {
	e.addEventListener("mouseover", cell => {
		CELLSd.forEach(e => {
			e.style.background = "none";
		});
		e.style.background = "#f8f9bf";
	});
});

// Take input for partially filled sudoku
let CELLS = document.querySelectorAll("td input");
CELLS.forEach(c => {
	c.onkeyup = () => {
		i = Number(c.getAttribute("col"));
		j = Number(c.getAttribute("row"));

		grid[i][j] = Number(c.value);
	};
});

// print sudoku grid on console

function printSudokuOnLog() {
	numrow = 0;
	grid.forEach(row => {
		if (numrow % 3 == 0 && numrow != 0) {
			console.log(" ");
		}
		console.log(row.slice(0, 3), row.slice(3, 6), row.slice(6, 9));
		numrow += 1;
	});
}

// clear grid button
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
	let clearGridInput = document.querySelectorAll("td input");
	clearGridInput.forEach(cell => {
		cell.value = "";
	});

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			grid[i][j] = 0;
		}
	}
}

let solveBtn = document.querySelector("#solve");
solveBtn.addEventListener("click", () => {
	solveSudoku(grid);
	printSudoku(grid);
});

// console.log("Backtracks:", backtracks);
