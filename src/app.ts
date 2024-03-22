let variable = "hello";

variable = "hi";

// let age = 18

let ageWithType: number;

ageWithType = 18;

let testString: string;

testString = "hello";

let testBoolean: boolean;

testBoolean = false;

let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";
// testStringOrNumber = []

//ARRAY

let names = ["john", "jane", "tom"];

// names.push(16);
names.push("mike");

let numbers = [18, 19, 24];

// numbers.push(false);
numbers.push(52);

let testStringArray: string[];

testStringArray = ["trung", "doan", "tuan"];

let testNumberArray: number[];

// testNumberArray = [true, 18, "29"];
testNumberArray = [12, 41, 75]

let testStringOrNumberArray: (string | number)[]

testStringOrNumberArray = [1, "two", 3]

//OBJECTS

let user = {
    username: "john",
    age: 22,
    isAdmin: false
}

user.username = "jane";
// user.age = "nine"
user.age = 29;
// user.isAdmin = "no"
user.isAdmin = true;

// user.phone = "+123456789"

let userObj: {
    username: string;
    age: number;
    isAdmin: boolean;
};

userObj = {
    username: "john",
    age: 23,
    isAdmin: true,
    // phone:"+123456789"
};


let userObj2: {
    username: string;
    age: number;
    isAdmin: boolean;
    phone?: string
};

//Bắt buộc phải có đủ riêng phone thì không cần thiết
userObj2 = {
    username: "mike",
    age: 15,
    isAdmin: false,
    phone: "+123456789"
}

//ANY

let testAny;

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [1, 2, 3]
testAny = {}

let testAnyArray: any[]

testAnyArray = [1, "two", false, []];

//FUNCTIONS

let sayHi = () => {
    console.log("Hi, welcome");
}

// sayHi = "hi"

let funcReturnString = (): string => {
    return "Hung dep trai"
};

let multiple1 = (num: number) => {
    return num * 2;
};

let multiple2 = (num: number): number => {
    return num * 2;
};

let multiple3 = (num: number): void => {
    // return num * 2;
    //Do sth but don't return
};

let sum = (num1: number, num2: number, num3?: number) => {
    return num1 + num2;
};

sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => {
    console.log(user.username);
};

//TYPE ALIASES

type UserType = {
    username: string;
    age: number;
    phone?: string
}

let betterFunc = (user: UserType) => {
    console.log(user.username);
}

type myFunc = (a: number, b: string) => void

let write: myFunc = (num, str) => {
    console.log(num + " times " + str);
}

type UserType2 = {
    username: string;
    age: number;
    phone?: string;
    theme: "dark" | "light"
}

const userWithTheme: UserType2 = {
    username: "john",
    age: 41,
    theme: "dark"
};

// INTERFACES

interface IUser {
    username: string;
    email: string;
    age: number;
};

interface IEmployee extends IUser {
    employeeId: number
};

const emp: IEmployee = {
    username: "tom",
    email: "tom@gmail.com",
    age: 43,
    employeeId: 1
};

const client: IUser = {
    username: "mike",
    email: "mike@gmail.com",
    age: 17
}

//GENERICS

interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number,
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
    id: number,
    title: string;
    desc: string;
    extra: T[]
}

const testMe: IPostBetter<String> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: ["str1", "str2"]
}

interface IPostEvenBetter<T extends object> {
    id: number,
    title: string;
    desc: string;
    extra: T[]
}

//chỉ nhận Object
const testMe2: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, username: "john" }, { id: 2, username: "jack" }]
}

const testMe3: IPostEvenBetter<ICategory> = {
    id: 1,
    title: "post title",
    desc: "post desc",
    extra: [{ id: 1, title: "Cat" }, { id: 2, title: "Dog" }]
}