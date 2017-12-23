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

let dataObject;
// Temporary until we
$.get("scorigami.json", function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    dataObject = JSON.parse(data);
});



//console.log('success is ' + success);

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
