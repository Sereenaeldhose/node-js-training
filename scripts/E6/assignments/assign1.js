var student1 = {
  rollNo: 1,
  course: "Btech",
  duration: "4 Years",
  startDate: "05-05-2014",
  endDate: "05-05-2018",
  grade: "A",
  get studentData() {
    // getStudentDate : function() {}   this is another way without using getter.
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
  getCourceAndDuration: function () {
    return `Selected course is ${this.course} with duration ${this.duration}`;
  },
  get cource() {
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

let student2 = Object.create(student1); // Object.assign({}, student1) also supported
student2.setRollNo = 2;
student2.getStudentData = function () {
  return (
    "\n Student Details are : \n Roll No = " +
    student2.rollNo +
    "\n Course = " +
    student2.course +
    "\n Duration = " +
    student2.duration +
    "\n Start Date = " +
    student2.startDate +
    "\n End Date = " +
    student2.endDate +
    "\n Grade = " +
    student2.grade +
    "\n"
  );
};

console.log(`First ${student1.studentData}`);
console.log(`Second ${student2.getStudentData()}`);
console.log(`Selected course is ${student1.cource}`);
console.log(student1.getCourceAndDuration());

// -------- Comparing 2 Objects

let student3 = Object.assign(student1);

let student4 = Object.assign(student1);
student4.address = { houseName: "house name", city: "city" };
let student5 = Object.assign(student1);
student5.address = { houseName: "house name", city: "city" };

let comparision = (s1, s2) => {
  var keys1 = Object.keys(s1);
  var keys2 = Object.keys(s2);
  if (keys1.length != keys2.length) {
    return false;
  }
  keys1.forEach((k) => {
    if (!s1.hasOwnProperty(k) && !s2.hasOwnProperty(k)) {
      return false;
    }
    if (typeof s1[k] === "object") {
      comparision(s1[k], s2[k]);
    } else if (s1[k] != s2[k]) {
      return false;
    }
  });

  return true;
};

console.log(
  `The given 2 objects are ${
    comparision(student1, student2) == true ? "same" : "not same"
  } `
);

console.log(
  `The given 2 objects are ${
    comparision(student1, student3) == true ? "same" : "not same"
  } `
);

console.log(
  `The given 2 objects are ${
    comparision(student4, student5) == true ? "same" : "not same"
  } `
);
