/*Create a Student Result Sheet in a table. Write a JavaScript logic to validate the 3 subject
marks details and check if a student score less than 35 in any subject. If yes, then his
grade should be displayed as Fail.
Calculate the marks, the average and display the grade of a student. */

function DisplaytResult(mark1,mark2,mark3)
{
	var grade="Pass";
	var color="green";
	var totalMarks;
	var avgMarks;
	if (mark1 < 35 || mark2 < 35 || mark3 < 35) {
		grade="Fail";
		color="red";
	}

	totalMarks= mark1+mark2+mark3;
	avgMarks = Math.round(totalMarks/3);

	var paraResult= document.getElementById("result");
	paraResult.innerHTML="Total Marks: "+ totalMarks + " out of 300<br> Average Marks: "+ avgMarks +"<br> Grade: " + grade;
	paraResult.style.display="block";
	paraResult.style.backgroundColor=color;
}