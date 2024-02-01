var student1 = {
  rollNo: 1,
  course: "Btech",
  duration: "4 Years",
  startDate: "05-05-2014",
  endDate: "05-05-2018",
  grade: "A",
};
let student2 = new Object();
function getStudentData(studentData) {
  console.log(
    "\n Roll No = " +
      studentData.rollNo +
      "\n Course = " +
      studentData.course +
      "\n Duration = " +
      studentData.duration +
      "\n Start Date = " +
      studentData.startDate +
      "\n End Date = " +
      studentData.endDate +
      "\n Grade = " +
      studentData.grade +
      "\n"
  );
}

console.log("First Student = ");
getStudentData(student1);

function setStudentData() {
  (student2.rollNo = 2),
    (student2.course = "BCA"),
    (student2.duration = "3 Years"),
    (student2.startDate = "05-05-2015"),
    (student2.endDate = "05-05-2018"),
    (student2.grade = "A"),
    console.log("\n Second Student = ");

  getStudentData(student2);
}
setStudentData();

let comparision = () => {
  for (const s1 of Object.values(student1)) {
    for (const s2 of Object.values(student2)) {
      if (Object.is(s1, s2)) console.log(s1 + " and " + s2 + " are same");
    }
  }
};
comparision();
