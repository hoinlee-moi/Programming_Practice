// Primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

// Primitives - 기본형

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types -배열과 객체

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  { name: "Max", age: 32 },
  { name: "Alice", age: 24 },
];

// Type inference -굳이 명시하지 않아도 추론 가능함

let course = "React - The Complete Guide";

// course = 12341; error;

// Union

let course_b: string | number = "React - The Complete Guide"; // 문자열 또는 숫자

course_b = 12341;

let userName_b: string | string[]; //문자열 또는 문자열 배열

userName = "Max";

// Type Aliases - 동일한 타입을 계속해서 정의하다 보면 코드 중복이 일어난다, 별칭을 붙여 사용가능(변수처럼)

type Person = {
  name: string;
  age: number;
};

let person_b: Person;
person_b = {
  name: "Max",
  age: 32,
};

let people_b: Person[];

// Functions & types

function add(a: number, b: number) {
  return a + b;
}
// 이 부분에서 함수의 반환 값을 통해 타입을 추론하게 된다. 마우스를 오버해보면 나온다
// 항상 반환 값의 타입을 신경쓰자

function printOutput(value: any) {
  console.log(value);
}
// js 자체에서 print란 함수가 있기 때문에 컴파일 시 충돌한다.
// 이경우엔 return 문이 없기 때문에 반환 값이 없다. 때문에 이럴 경우에 갖는 특별한 반환 타입이 바로 'void'이다
// 'void'는 null또는 'undefined'와 비슷하지만 항상 함수와 결합해서 사용한다.<-함수에 반환 값이 없다는 걸 뜻함

// Generics

/*
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value,...array];
  return newArray
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeginning(demoArray,-1) // [-1,1,2,3]

이 때 updatedArray 는 any[]를 가지고 있는데 추론된 배열이 any라는 것이다.
타입스크립트는 이 배열에 숫자만 들어있다고 추론하지 못한다. 이유는 위 함수에서 array에 any로 지정했기 때문
그렇다고 숫자형으로 타입을 지정할 수도 없다 (ex. number[]) 문자열 배열에 대해 이 유틸리티 함수를 사용할 수도 있기 때문
any타입이 필요하긴 한데 any를 사용하면 함수를 호출한 다음 TS로부터 어떤 서포트를 받을 수 없다.
ts는 배열에 들어있는 게 any 타입의 객체나 any 타입의 값이라고 색가하기 때문


updatedArray[0].split('') // 오류표시가 생기지 않지만 실행하려고 하면 오류가 생김! 숫자는 split()을 호출할 수 없기 때문
*/

// Generic 사용해보기 

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value,...array];
    return newArray
  }
  
  const demoArray = [1,2,3]
  
  const updatedArray = insertAtBeginning(demoArray,-1) // [-1,1,2,3]
  const stringArray = insertAtBeginning(['a','b','c'],'d')

  updatedArray[0].split('')// error
  stringArray[0].split('') // 정상 동작
  /*
  타입을 <T>를 사용해 T로 둘경우 인수의 정확한 값을 살펴봐야 한다고 보여준다
  제네릭 타입을 사용해 TS에게 any타입이 아니라는 걸 알려줬기 때문이다.
  대신 array배열과 value이 같은 타임을 가져야 한다고 알려준것이다.
  여기까지가 제네릭의 주요 기능이다.
  타입 안정성과 유연성을 줌, 자유롭게 어떤 타입이든 사용할 수 있지만, 특정 타입을 사용해 함수를 사용하면
  해당 타입으로 고정되어 동작한다
  */