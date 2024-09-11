// 1. 객체 생성하기
const person = { name: "홍길동", age: 25 };

// 2. 객체 속성 접근하기
const car = { brand: "Toyota", model: "Corolla" };
console.log(car.brand);  

// 3. 객체 메소드 호출하기
const personWithMethod = {
  name: "Alice",
  sayHello: function() {
    console.log("Hello, I am " + this.name + ".");
  }
};
personWithMethod.sayHello();  

// 4. 객체에 메소드 추가하기
const personWithGreet = { name: "Bob" };
personWithGreet.greet = function() {
  console.log("Hi, I'm " + this.name);
};
personWithGreet.greet();  

// 5. 생성자 함수로 객체 만들기
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const john = new Person("John", 30);
console.log(john);

// 6. 객체 배열 필터링하기
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "Paul", age: 15 },
  { name: "Mark", age: 25 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);

// 7. 배열 생성하기
const fruits = ["Apple", "Banana", "Orange"];

// 8. 배열 요소 접근하기
console.log(fruits[1]);  

// 9. 배열에 요소 추가하기 (push)
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);  

// 10. 배열에서 요소 제거하기 (pop)
const colors = ["Red", "Green", "Blue"];
colors.pop();
console.log(colors);  

// 11. 배열 첫 번째 요소 제거하기 (shift)
const days = ["Monday", "Tuesday", "Wednesday"];
days.shift();
console.log(days);  

// 12. 배열 앞에 요소 추가하기 (unshift)
const names = ["Bob", "Charlie"];
names.unshift("Alice");
console.log(names);  

// 13. 배열 순회하며 값 출력하기 (forEach)
numbers.forEach(num => console.log(num));  

// 14. 배열을 두 배로 변환하기 (map)
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  

// 15. 배열 필터링하기 (filter)
const ages = [12, 18, 20, 14, 25];
const adultsAges = ages.filter(age => age >= 18);
console.log(adultsAges);  

// 16. 배열 합계 구하기 (reduce)
const prices = [10, 20, 30, 40];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);  

// 17. 배열에 특정 값이 있는지 확인하기 (includes)
const fruitsCheck = ["Apple", "Orange", "Grapes"];
console.log(fruitsCheck.includes("Banana"));  

// 18. 배열 정렬하기 (sort)
const unsortedNumbers = [5, 2, 8, 1, 3];
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers);  

// 19. 배열 뒤집기 (reverse)
const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters);  

// 20. 배열 일부 잘라내기 (slice)
const animals = ["Cat", "Dog", "Elephant", "Lion"];
const slicedAnimals = animals.slice(0, 2);
console.log(slicedAnimals);  

// 21. 배열 요소 추가 및 제거하기 (splice)
const fruitsSplice = ["Apple", "Banana", "Orange"];
fruitsSplice.splice(1, 0, "Strawberry");
console.log(fruitsSplice);  

// 22. 배열 두 개 합치기 (concat)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = arr1.concat(arr2);
console.log(combinedArr);  

// 23. 조건을 만족하는 첫 번째 요소 찾기 (find)
const products = [
  { name: "Shirt", price: 50 },
  { name: "Shoes", price: 120 },
  { name: "Hat", price: 80 }
];
const expensiveProduct = products.find(product => product.price >= 100);
console.log(expensiveProduct);  

// 24. 모든 요소가 조건을 만족하는지 확인하기 (every)
const allEven = [2, 4, 6, 8].every(num => num % 2 === 0);
console.log(allEven);  

// 25. 배열 요소 중 하나라도 조건을 만족하는지 확인하기 (some)
const agesCheck = [16, 20, 18, 19];
const hasAdult = agesCheck.some(age => age >= 21);
console.log(hasAdult);  

// 26. 배열에 중복된 값이 있는지 확인하기
const numsWithDuplicates = [1, 2, 3, 4, 2, 5];
const hasDuplicates = numsWithDuplicates.some((item, index) => numsWithDuplicates.indexOf(item) !== index);
console.log(hasDuplicates);  

// 27. 객체 배열의 속성 값을 기준으로 정렬하기
const peopleSort = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mark", age: 35 }
];
peopleSort.sort((a, b) => a.age - b.age);
console.log(peopleSort);  

// 28. 조건을 만족하는 요소의 인덱스 찾기 (findIndex)
const agesFindIndex = [16, 18, 22, 20];
const index = agesFindIndex.findIndex(age => age >= 21);
console.log(index);  

// 29. 배열을 문자열로 변환하기 (join)
const words = ["Hello", "World", "JavaScript"];
const joinedWords = words.join(", ");
console.log(joinedWords);  

// 30. 중첩된 배열 평탄화하기 (flat)
const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);  