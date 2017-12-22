// MAIN CODE IS HERE
// let maxWin = 73;
let maxWin = 73;
let maxLose = 73;
let rowMarkup;
let cellMarkup;

// Header Row
rowMarkup = "<tr><td></td>";				// start with 1 blank column
for (let x = 0; x <= maxWin; x++) {
	rowMarkup = rowMarkup + "<td><strong>" + x + "</strong></td>";
}
rowMarkup = rowMarkup + "</tr>";
$("table thead").append(rowMarkup);

// Check the JSON.
// What are the options?
//		It's black, a not possible score
//		It's green, a score that happened multiple times
//		It's white, a score that has never happened

let url = "scorigami.json";
let data;
let success;

$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});

console.log('success is ' + success);

for (x = 0; x <= maxWin; x++) {
	rowMarkup = "<tr>";
	
	for (let y = 0; y <= maxLose+1; y++) {
		if (x === y) {
			cellMarkup = "<td><strong>" + x + "</strong></td>";
		} else if (x > y){
			cellMarkup = "<td></td>";
		} else {
			let winScore = y - 1;
			cellMarkup = "<td>" + winScore + "-" + x + "</td>";
		}
		rowMarkup = rowMarkup + cellMarkup;
	}
	rowMarkup = rowMarkup + "</tr>";
	$("table tbody").append(rowMarkup);
}
