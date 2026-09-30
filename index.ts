// 1-MASALA

const arr: number[] = [8, 13, 20, 7, 16, 25, 4, 11, 30];

const result1 = arr.map((num) => {
  if (num < 10) return num;
  if (num % 2 === 0 && num % 5 === 0) return num + 50;
  if (num % 2 === 0) return num + 10;
  return num - 3;
});

console.log(result1);


// 2-MASALA

interface Student {
  name: string;
  age: number;
  score: number;
}

const students: Student[] = [
  { name: "Ali", age: 18, score: 76 },
  { name: "Vali", age: 19, score: 91 },
  { name: "Hasan", age: 17, score: 64 },
  { name: "Husan", age: 20, score: 88 },
];

const result2 = students
  .filter((student) => student.age >= 18)
  .map((student) => {
    let newScore = student.score;
    if (newScore >= 90) {
      newScore += 5;
    } else if (newScore >= 70 && newScore < 90) {
      newScore += 10;
    } else {
      newScore += 20;
    }
    return { ...student, score: newScore };
  });

console.log(result2);


// 3-MASALA

type Status = "active" | "blocked" | "pending";

interface User {
  id: number;
  name: string;
  status: Status;
  balance: number;
}

const users: User[] = [
  { id: 1, name: "Ali", status: "active", balance: 500 },
  { id: 2, name: "Vali", status: "blocked", balance: 1200 },
  { id: 3, name: "Hasan", status: "pending", balance: 300 },
  { id: 4, name: "Husan", status: "active", balance: 900 },
];

const result3 = users
  .filter((user) => user.status !== "blocked")
  .map((user) => {
    let newBalance = user.balance;

    if (user.status === "active") {
      newBalance += 100;
    } else if (user.status === "pending") {
      newBalance += 50;
    }

    if (newBalance >= 800) {
      newBalance += 200;
    }

    return { ...user, balance: newBalance };
  });

console.log(result3);


// 4-MASALA

const numbers: number[] = [2, 5, 8, 11, 14];

const words: string[] = [
  "apple",
  "banana",
  "cat",
  "developer"
];

function transform<T>(arr: T[]): T[] {
  return arr.map((item) => {
    if (typeof item === "number") {
      if (item % 2 === 0) {
        return (item * 2) as unknown as T;
      } else {
        return (item + 10) as unknown as T;
      }
    } else if (typeof item === "string") {
      if (item.length > 5) {
        return item.toUpperCase() as unknown as T;
      }
    }
    return item;
  });
}

console.log(transform(numbers));
console.log(transform(words));


// 5-MASALA

interface Product {
  id: number;
  name: string;
  price: number;
  category: "phone" | "laptop" | "accessory";
}

const products: Product[] = [
  { id: 1, name: "iPhone", price: 1200, category: "phone" },
  { id: 2, name: "MacBook", price: 2000, category: "laptop" },
  { id: 3, name: "AirPods", price: 200, category: "accessory" },
  { id: 4, name: "Samsung", price: 900, category: "phone" }
];

const result5 = products
  .map((product) => {
    let newPrice = product.price;

    if (product.category === "phone") {
      newPrice -= 100;
    } else if (product.category === "laptop") {
      newPrice -= 200;
    } else if (product.category === "accessory") {
      newPrice += 50;
    }

    if (product.price > 1000) {
      newPrice -= 100;
    }

    return { ...product, price: newPrice };
  })
  .filter((product) => product.price > 500);

console.log(result5);