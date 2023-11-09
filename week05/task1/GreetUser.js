let fullName = prompt("Enter your full name:");
let courseGrade = prompt("Enter your course grade: ");
let courseLetter;

alert(`Hey, ${fullName}! Your grade is ${courseGrade}.`);
alert(
    (courseGrade > 60) ? "Congratulations! You passed the course." : "You failed the course."
);

if (courseGrade >= 60) {
    if (courseGrade < 70) {
        courseLetter = "D";    
    } else if (courseGrade < 80) {
        courseLetter = "C";
    } else if (courseGrade < 90) {
        courseLetter = "B";
    } else {
        courseLetter = "A";
    }
} else {
    courseLetter = "F";
}

alert(`Your grade is counted as ${courseLetter}!`);