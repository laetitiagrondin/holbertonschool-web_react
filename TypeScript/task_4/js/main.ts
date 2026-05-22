/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};

const jTeacher: Subjects.Teacher = {
    firstName: "Bob",
    lastName: "Brown",
    experienceTeachingJava: 0,
};

const rTeacher: Subjects.Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    experienceTeachingReact: 5,
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(cTeacher);

const java = new Subjects.Java();
java.setTeacher(jTeacher);

const react = new Subjects.React();
react.setTeacher(rTeacher);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
