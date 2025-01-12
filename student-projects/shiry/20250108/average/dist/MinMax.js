// Student stats
// * First ask the user which operation he want to perform: max, min
// * Read student grades using 2 prompts (full name then grade)
// * Validate grades (0 - 100)
// * Ask to fix invalid grades
// * Stop reading students when user clicks "cancel"
// * Display the student's name according to the requested operation
var operation = prompt("Which operation would you like to do ? \n (1) - minimum \n (2) - maximum");
var minResault = 100;
var maxResault = 0;
if (Number(operation) === 1 || Number(operation) === 2) {
    var FullName = prompt("Please enter your full name");
    var Grade = prompt("please enter your grades (0-100) (Click 'cancel' to finish input)");
    while (Grade != null) {
        if (Number(Grade) > 100 || Number(Grade) < 0) {
            Grade = prompt("Make sure your grade is between 0 and 100 (Click 'cancel' to finish input)");
        }
        switch (operation) {
            case "1":
                if (Number(Grade) < minResault) {
                    minResault = Number(Grade);
                }
                break;
            case "2":
                if (Number(Grade) > maxResault) {
                    maxResault = Number(Grade);
                }
                break;
        }
        Grade = prompt("please enter your grades (0-100) (Click 'cancel' to finish input)");
    }
}
else {
    alert("your operation is invalid");
}
switch (operation) {
    case "1":
        alert(FullName + ", your minimum grade is : " + minResault);
        break;
    case "2":
        alert(FullName + ", your maximun grade is : " + maxResault);
        break;
}
