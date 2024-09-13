//1. 템플릿 리터럴에서 변수를 문자열에 삽입하기 위해 사용되는 문법은 무엇인가요?
    
    // a) `${}`
    
//2. 아래 코드의 출력 결과는 무엇인가요?
    
    
    let name = 'Gyejin';
    console.log(`Hello, ${name}!`);
        
 //   a) `Hello, Gyejin!`
    
    
//3. 템플릿 리터럴을 사용하여 여러 줄의 문자열을 어떻게 작성할 수 있나요?
    
     //백틱(`)을 사용

//4. 배열 디스트럭처링을 사용하여 변수 `first`와 `second`에 `[10, 20]`을 할당하는 코드를 작성하세요.

const [first, second] = [10, 20];

//5. 객체 디스트럭처링을 사용하여 객체의 `name`과 `age` 속성을 변수로 추출하는 코드를 작성하세요.
    
    
    
    const person = { name: 'Gyejin', age: 28 };

    const { name, age } = person;
    
    
//6. 디스트럭처링 할당에서 기본값을 설정할 수 있나요? (예 or 아니요)

//예

//7. 스프레드 연산자를 사용하여 두 배열 `[1, 2]`와 `[3, 4]`를 결합하는 코드를 작성하세요.

const combined = [...[1, 2], ...[3, 4]];

//8. 스프레드 연산자를 사용하면 배열을 **깊은 복사**할 수 있다. (참 or 거짓)

//거짓 (얕은 복사 수행)

//9. 아래 코드를 실행했을 때 출력 결과는 무엇인가요?
    
    
    const arr = [1, 2];
    const newArr = [...arr, 3, 4];
    console.log(newArr);
    
    
   //a) `[1, 2, 3, 4]`
    
    
//10. 나머지 매개변수를 사용하여 여러 개의 숫자를 인자로 받아 그 합을 구하는 `sum` 함수를 작성하세요.

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

//11. 아래 함수의 결과는 무엇인가요?
    
    function printNumbers(first, ...rest) {
      console.log(first);
      console.log(rest);
    }
    
    printNumbers(1, 2, 3, 4);

//    a) `1`과 `[2, 3, 4]`
    

    
//12. 나머지 매개변수는 항상 함수의 마지막 매개변수로 사용되어야 한다. (참 or 거짓)

//참

//13. `math.js` 파일에서 `add` 함수를 기본 내보내기(default export)하고, `main.js` 파일에서 불러오는 코드를 작성하세요.
    
    
    // math.js:
    export default function add(a, b) {
      return a + b;
    }
    
    // main.js:
    import add from './math.js';
    
//14. 여러 함수를 ***명시적 내보내기(named export)***로 내보내는 예시 코드를 작성하세요.
    
    
    // 파일 이름: math.js:
    //export function add(a, b) {
    //return a + b;
    //}

    // export function subtract(a, b) {
    //return a - b;
    //}
    
//15. 아래 코드에서 `subtract` 함수를 ***별칭(alias)***으로 불러오는 코드를 작성하세요.
    
    // math.js:
    export function subtract(a, b) {
      return a - b;
    }
    
    // main.js:
    import { subtract as minus } from './math.js';
    
//16. 모듈 시스템에서 동적 import는 무엇을 위한 것인가요?
    
    
    //b) 파일을 비동기적으로 불러오기 위함

//### 6. **ES6 기능 관련 Recap (복습)**

//1. ES6 클래스에서 `constructor`는 언제 호출되나요?
    

    //b) 클래스 인스턴스를 생성할 때
    
    
//2. 클래스 `Person`을 정의하고, 이름을 출력하는 `greet` 메서드를 작성하세요.
    
    
    class Person {
      constructor(name) {
        this.name = name;
      }
    
      greet() {
        console.log(`Hello, ${this.name}`);
      }
    }
    
    const gyejin = new Person('홍길동');
    
    // greet 메서드 호출:
    gyejin.greet();
    
//3. ES6 클래스에서 ***상속***을 구현하기 위한 키워드는 무엇인가요?
    
    //a) `extends`
    
//4. 아래 코드에서 `Promise`의 출력 결과는 무엇인가요?
    
    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Success'), 1000);
    });
    
    promise.then(result => console.log(result));
    
    
    
    //b) 1초 후 `'Success'` 출력
    
//5. Promise의 세 가지 상태는 무엇인가요?

// 대기,이행,거부

//6. `Promise.all`은 언제 사용하나요?
    
  // b) 여러 Promise를 병렬로 처리하고 모두 완료되면 하나의 결과를 얻을 때
   
//7. 이터레이터의 기본 메서드는 무엇인가요? ***(난이도: Extra)***
     //b) `next`
    
    
//8. 제너레이터 함수를 정의하기 위한 키워드는 무엇인가요? ***(난이도: Extra)***
    
    //a) `function*`
    
    
//9. 아래 제너레이터 함수의 출력은 무엇인가요? ***(난이도: Extra)***
    
    
    function* generator() {
      yield 1;
      yield 2;
      return 3;
    }
    
    const gen = generator();
    
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
   
    
    //b) `1, 2, undefined`
    
    
//10. `Set`은 어떤 특징을 가지고 있나요? ***(난이도: Extra)***
    
    //a) 중복된 값을 허용하지 않는다
    
    
//11. 아래 코드의 출력 결과는 무엇인가요? ***(난이도: Extra)***
    
    
    const mySet = new Set([1, 2, 3, 3]);
    
    console.log(mySet);
    
    //a) `{1, 2, 3}`
    
    
//12. `Map` 객체는 어떤 자료 구조인가요? ***(난이도: Extra)***
    
    
    //c) 키-값 쌍을 저장하는 자료 구조
    
    
//13. `Map`의 메서드 중, 특정 키에 해당하는 값을 얻는 메서드는 무엇인가요? ***(난이도: Extra)***

// get