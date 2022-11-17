# new 연산자와 생성자 함수

<br>
<br>

객체 리터럴 `{...}`을 사용하면 객체를 쉽게 만들 수 있다. <br>
그런데 개발을 하다보면 유사한 객체를 여러개 만들어야 할 때가 생기곤 한다.<br>
메뉴 내 다양한 아이템을 객체로 표현하려고 하는 경우가 그렇다.<br>
`'new'`연산자와 생성자 함수를 사용하면 유사한 객체 여러개를 쉽게 만들 수 있다.

<br>
<br>

## 생성자 함수

<br>

생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없다.다만 생성자 함수는 아래 두 관례를 따른다.<br>
1. 함수 이름의 첫 글자는 대문자로 시작 <br>
2. 반드시 `'new'`연산자를 붙여 실행한다.<br>

<br>

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

alert(user.name); // 보라
alert(user.isAdmin); // false
```
<br>

`new User(...)`를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작한다. <br>
1. 빈 객체를 만들어 `this`에 할당
2. 함수 본문을 실행. `this`에 새로운 프로퍼티를 추가해 `this`를 수정
3. `this`를 반환

<br>

예시를 이용해 `new User(...)`가 실행되면 무슨 일이 일어나는지 보자

```javascript
function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}
```

<br>

이제 `let user = new User("보라")`는 아래 코드를 입력한 것과 동일하게 동작 한다.
<br>

```javascript
let user = {
  name: "보라",
  isAdmin: false
};
```
<br>

 `new User("보라")` 이외에도 `new User("호진")`, `new User("지민")`등을 이용하여 손쉽게 사용자 객체를 만들 수 있다.<br>
 객체 리터럴 문법으로 일일이 객체를 만드는 방법보다 훨씬 간단하고 읽기 쉽게 객체를 만들 수 있게 됨<br>
 생성자의 의의는 바로 여기에 있다!. 재사용 할 수 있는 객체 생성 코드를 구현하는 것이다.<br>
 모든 함수는 생성자 함수가 될 수 있따는 점을 잊지 말자<br>
 `new`를 붙여 실행한다면 어떤 함수라도 위에 언급된 알고리즘이 실행된다<br>
 이름의 '첫 글자가 대문자'인 함수는 `new`를 붙여 실행해야 한다는 점도 공동의 약속으로 잊지 말자.

 <br>
 <br>

 > **※new function(){...}**
 재사용할 필요가 없는 복잡한 객체를 만들어야 한다고 해보자. 많은 양의 코그다 필요할 건데 이 때 아래와 같이 코드를 익명 생성자 함수로 감싸주는 방식을 사용할 수 있다.
 ```javascript
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // 사용자 객체를 만들기 위한 여러 코드.
  // 지역 변수, 복잡한 로직, 구문 등의
  // 다양한 코드가 여기에 들어갑니다.
};
 ```
 위 생성자 함수는 익명 함수이기 때문에 어디에도 저장되지 않는다. 처음 만들 때부터 단 한 번만 호출할 목적으로 만들었기 때문에 재사용이 불가능<br>
 이렇게 익명 생성자 함수를 이용하면 재사용은 막으면서 코드를 캡슐화 할 수 있다.

 <br>

 <br>

 >## ※심화 new.target 과 생성자 함수
 
 <br>
 <br>

 `new.target`프로퍼티를 사용하면 함수가 `new`와 함께 호출되었는지 아닌지를 알 수 있다.<br>
 일반적인 방법으로 함수를 호출했다면 `new.target`은 undefined를 반환한다. 반면 `new`와 함께 호출한 경우엔 `new.target`은 함수 자체를 반환해준다.

 ```javascript
 function User() {
  alert(new.target);
}

// 'new' 없이 호출함
User(); // undefined

// 'new'를 붙여 호출함
new User(); // function User { ... }
 ```
함수 본문에서 `new.target`을 사용하면 해당 함수가 `new`와 함께 호출되었는지 (in constructor mode) dkslswl (in regular mode)를 확인할 수 있다. <br>
이를 활용해 일반적인 방법으로 함수를 호출해도 `new`를 붙여 호출한 것과 같이 동작하도록 만들어보자.

```javascript
function User(name) {
  if (!new.target) { // new 없이 호출해도
    return new User(name); // new를 붙여줍니다.
  }

  this.name = name;
}

let bora = User("보라"); // 'new User'를 쓴 것처럼 바꿔줍니다.
alert(bora.name); // 보라
```
라이브러리를 분석하다 보면 위와 같은 방식이 쓰인 걸 발견할 때가 있는데 이런 방식을 사용하면 `new`를 붙여 함수를 호출하든 아니든 코드가 동일하게 동작하기 때문에, 좀 더 유연하게 코드를 작성할 수 있다.<br>
하지만 이 방법을 믿고 객체를 만드는 경우에도 `new`를 생략하면 코드가 정확히 무슨일을 하는지 알기 어렵다 <br>
`new`가 붙어있으면 새로운 객체를 만든다는 걸 누구나 알 수 있지만 `new`를 생략해서 객체를 만드는 것은 정말 필요한 경우에만 사용하고 남발하지 말자.

<br>

<br>

## 생성자와 return문

<br>

생성자 함수엔 보통 `return`문이 없다. 반환해야 할 것들은 모두 `this`에 저장되고, `this`는 자동으로 반환되기 때문에 반환문을 명시적으로 써 줄 필요가 없다.<br>
그런데 만약 `return`문이 있다면 어떤 일이 벌어질까? 
<br>

- 객체를 `return`한다면 `this`대신 객체가 반환된다.
- 원시형을 `return`한다면 `return`문이 무시된다.

<br>

`return`뒤에 객체가 오면 생성자 함수는 해당 객체를 반환해주고, 이 외의 경우는 `this`가 반환된다.<br>
아래 예시는 첫 번째 규칙이 적용돼 `return`은 `this`를 부시하고 객체를 반환한다.

```javascript
function BigUser() {

  this.name = "원숭이";

  return { name: "고릴라" };  // <-- this가 아닌 새로운 객체를 반환함
}

alert( new BigUser().name );  // 고릴라
```

<br>

아무것도 `return`하지 않는 예시를 살펴보자. 원시형을 반환하는 경우와 마찬가지로 두 번째 규칙이 적용된다.

```javascript
function SmallUser() {

  this.name = "원숭이";

  return; // <-- this를 반환함
}

alert( new SmallUser().name );  // 원숭이
```
<br>

`return`문이 있는 생성자 함수는 거의 없다. <br>

<br>

> **괄호 생략하기**
인수가 없는 생성자 함수는 괄호를 생략해 호출할 수 있다.<br>
```javascript
let user = new User; // <--괄호가 없음
//아래 코드는 위 코드와 똑같이 동작한다.
let user = new User();
```
명세서엔 괄호를 생략해도 된다고 정의되어 있지만, '좋은 스타일'은 아니다.

<br>

<br>

## 생성자 내 메서드

<br>

생성자 함수를 사용하면 매개변수를 이용해 객체 내부를 자유롭게 구성할 수 있다. 엄청난 유연성이 확보됨!<br>
지금까진 `this`에 프로퍼티를 더해주는 예시만 살펴 봤는데, 메서드를 더해주는 것도 가능하다<br>
아래 예시에서 `new User(name)`는 프로퍼티 `name`과 메서드 `sayHi`를 가진 객체를 만들어 준다.
<br>

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "제 이름은 " + this.name + "입니다." );
  };
}

let bora = new User("이보라");

bora.sayHi(); // 제 이름은 이보라입니다.

/*
bora = {
   name: "이보라",
   sayHi: function() { ... }
}
*/
```

class문법을 사용하면 생성자 함수를 사용하는 것과 마찬가지로 복잡한 개겣를 만들 수 있다!

<br>

## 요약

- 생성자 함수(짧게 줄여서 생성자)는 일반 함수입니다. 다만, 일반 함수와 구분하기 위해 함수 이름 첫 글자를 대문자로 씁니다.
- 생성자 함수는 반드시 new 연산자와 함께 호출해야 합니다. new와 함께 호출하면 내부에서 this가 암시적으로 만들어지고, 마지막엔 this가 반환됩니다.

<br>

생성자 함수는 유사한 객체를 여러 개 만들 때 유용합니다.<br>

자바스크립트는 언어 차원에서 다양한 생성자 함수를 제공합니다. <br>
날짜를 나타내는 데 쓰이는 Date, 집합(set)을 나타내는 데 쓰이는 Set 등의 내장 객체는 이런 생성자 함수를 이용해 만들 수 있습니다. 

