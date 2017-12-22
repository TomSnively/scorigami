// MAIN CODE IS HERE
// var maxWin = 73;
var maxWin = 73;
var maxLose = 73;
var rowMarkup;
var cellMarkup;

// Header Row
rowMarkup = "<tr><td></td>";				// start with 1 blank column
for (var x = 0; x <= maxWin; x++) {
	rowMarkup = rowMarkup + "<td><strong>" + x + "</strong></td>";
}
rowMarkup = rowMarkup + "</tr>"
$("table thead").append(rowMarkup);

// Check the JSON.
// What are the options?
//		It's black, a not possible score
//		It's green, a score that happened multiple times
//		It's white, a score that has never happened

var url = "scorigami.json";
var data;
var success;

$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});

console.log('success is ' + success);

for (x = 0; x <= maxWin; x++) {
	rowMarkup = "<tr>";
	
	for (var y = 0; y <= maxLose+1; y++) {
		if (x == y) {
			cellMarkup = "<td><strong>" + x + "</strong></td>";
		} else if (x > y){
			cellMarkup = "<td></td>";
		} else {
			var winScore = y - 1;
			cellMarkup = "<td>" + winScore + "-" + x + "</td>";
		}
		rowMarkup = rowMarkup + cellMarkup;
	}
	rowMarkup = rowMarkup + "</tr>";
	$("table tbody").append(rowMarkup);
}
