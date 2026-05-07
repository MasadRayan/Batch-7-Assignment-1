//PROBLEM-1
const filterEvenNumbers = (input : number[]) : number[] => {
    const result = input.filter((num : number) => num % 2 === 0);
    return result;
}



//Problem 2
const reverseString = (input : string) : string => {
    const length = input.length;
    let res = "";
    for (let i = length - 1; i >= 0; i--) {
        res += input[i];
    }
    return res;
}



//Problem 3 
type StringOrNumber = string | number;

const checkType = (input : StringOrNumber)  => {
    if (typeof input === "number") {
        return ("Number")
    }
    else if (typeof input === "string") {
        return ("String")
    }
}


//Problem 4
const getProperty = <T, K extends keyof T> (user : T , key: K) : T[K] => {
    return user[key];
}



//Problem 5
interface Book {
    title : string;
    author : string;
    publishedYear : number;
}

const toggleReadStatus = (input : Book, isRead?: boolean) => {
    const bookResult = { ...input , isRead : !isRead}
    return bookResult
}




//Problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }
    getDetails () {
        return (`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}


//Problem 7 
const getIntersection1 = (arr1: number[], arr2: number[]) => {
    const result = arr1.filter((num : number) => arr2.includes(num)) 
    return result
}
