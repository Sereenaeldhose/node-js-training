class Student {
  // if we need a constructor for this class then the keyword constructor is used. no class name is used for creating constructor like java.
  constructor(name) {
    this.name = name;
  }

  displayStudentName() {
    console.log("Student Name : " + this.name);
  }
}

// Object creation and accesing the fun written inside the class.
const student1 = new Student("Anu");
student1.displayStudentName();

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

console.log(" +++++++++++++ Class with getters and setters ++++++++++++++++");

class Parent {
  constructor(fatherName, motherName) {
    this.fatherName = fatherName;
    this.motherName = motherName;
  }
  get getFatherName() {
    return this.fatherName;
  }
  get getMotherName() {
    return this.motherName;
  }
  set setFatherName(fName) {
    this.fatherName = fName;
  }
  set getMotherName(mName) {
    this.motherName = mName;
  }
}
// by default no arg constuctor is there
const parent = new Parent();
// setter just assign the value to the setterfn name no () needed.
parent.setFatherName = "Jack";
// getter just call the getter method name no need of ().
console.log("Father Name is " + parent.getFatherName);

const parent1 = new Parent("John", "Marry");

// access value using  getter
console.log(
  "Parents are " + parent1.getFatherName + " and " + parent1.getMotherName
);
// access value directly
console.log("Parents are " + parent1.fatherName + " and " + parent1.motherName);

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------

console.log("++++++++++++ Class with Inheritance ++++++++++++++++++++++");

class Parent1 {
  constructor(fatherName, motherName) {
    this.fatherName = fatherName;
    this.motherName = motherName;
  }
  names() {
    return this.fatherName + " and " + this.motherName;
  }
}

class Child extends Parent1 {
  constructor(fatherName, motherName, childName) {
    super(fatherName, motherName);
    this.childName = childName;
  }

  getParentNames() {
    // we can call a method in the parent class and access the variables.
    console.log("Parents of " + this.childName + " are :" + this.names());

    // we can directly access the parent class variables.
    console.log(
      "Parents of " +
        this.childName +
        " are :" +
        this.fatherName +
        " and " +
        this.motherName
    );
  }
}
const child = new Child("John", "Anu", "Manu");
child.getParentNames();
