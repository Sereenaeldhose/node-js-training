var student1 = {
  rollNo: 1,
  course: "Btech",
  duration: "4 Years",
  startDate: "05-05-2014",
  endDate: "05-05-2018",
  grade: "A",
  get getStudentData() {    // getStudentDate : function() {}   this is another way without using getter.
    return (
      "\n Student Details are : \n Roll No = " +
      student1.rollNo +
      "\n Course = " +
      student1.course +
      "\n Duration = " +
      student1.duration +
      "\n Start Date = " +
      student1.startDate +
      "\n End Date = " +
      student1.endDate +
      "\n Grade = " +
      student1.grade +
      "\n"
    );
  },
  getCourceAndDuration : function() {
    return `Selected course is ${this.course} with duration ${this.duration}`;
  },
  get getCource() {
    return this.course;
  },
  set setRollNo(rollno) {
    this.rollNo = rollno;
  },
  set setCourse(course) {
    this.course = course;
  },
  set setDuration(duration) {
    this.duration = duration;
  },
  set setStartDate(startDate) {
    this.startDate = startDate;
  },
  set setEndDate(endDate) {
    this.endDate = endDate;
  },
  set setGrade(grade) {
    this.grade = grade;
  },
};

let student2 = new Object();
student2 = student1;
student2.setRollNo = 2;

console.log(student1.getStudentData);
console.log(student2.getStudentData);
console.log(`Selected Course is ${student1.getCource}`);
console.log(student1.getCourceAndDuration());


// -------- Comparing 2 Objects

let student3 = new Object();
student2.rollNo = 3;
student2.course = "BCA";
student2.duration = "3 Years";
student2.dates = {
  startDate: "05-05-2015",
  endDate: "05-05-2018",
};
student2.grade = "A";
student2.isLateralEntry = "No";

let student4 = new Object();
student3.rollNo = 3;
student3.course = "BCA";
student3.duration = "3 Years";
student3.dates = {
  startDate: "05-05-2015",
  endDate: "05-05-2018",
};
student3.grade = "A";
student3.isLateralEntry = "No";

let comparision = (s2, s3) => {
  if (s2.length != s3.length) {
    return "No";
  }
  if (!s2 instanceof Object || !s3 instanceof Object) {
    return "No";
  }
  for (let i of Object.values(s2)) {
    for (let j of  Object.values(s3)) {
      if (typeof i != typeof j) {
        console.log(" type mismatch");
        return "No";
      }
      if (typeof i == "object" && typeof j == "object") {
        comparision(i, j);
      }
      if (i != j) {
        console.log(" not equal" + i , j);

        return "No";
      }
    }
  }
  return "Yes";
};

console.log(
  "Is the objects are same or any property of the  objects are same? " +
    comparision(student1, student2)
);
