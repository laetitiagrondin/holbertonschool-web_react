interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York"
};

const teacher2: Teacher = {
    firstName: "Bob",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "Los Angeles"
};

const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(teacher1);
console.log(teacher2);

console.log(director1);
