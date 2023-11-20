# 옵셔널 체이닝 '?.'
>최근에 추가된 문법으로 구식 브라우저는 폴리필이 필요하다

<br><br>

옵셔널 체이닝(optional chaining)`?.`을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근 할 수 있습니다.

<br><br><br>

## 옵셔널 체이닝이 필요한 이유

<br>

사용자가 여러 명 있는데 그중 몇 명은 주소 정보를 가지고 있지 않다고 가정해보자.<br>
이럴 때 `user.address.street`를 사용해 주소 정보에 접근하면 에러가 발생할 수 있다.

```javascript
let user = {}; //주소 정보가 없는 사용자
alert(user.address.street); //TypeError: Cannot read property 'street' of undefined
```
<br>

또 다른 사례론 브라우저에서 동작하는 코드를 개발할 때 발생할 수 있는 문제가 있다.<br>
JS를 사용해 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오려 하면 문제가 발생한다.

```javascript
// querySelector(...) 호출 결과가 null인 경우 에러 발생
let html = document.querySelector('.my-element').innerHTML;
```

<br>

명세서에 `?.`이 추가되기 전엔 이런 문제들을 해결하기 위해 `&&` 연산사를 사용하곤 했다.

```javascript
let user = {}; // 주소 정보가 없는 사용자

alert( user && user.address && user.address.street ); // undefined, 에러가 발생하지 않습니다.
```

<br><br>

중첩 객체의 특정 프로퍼티에 접근하기 위해 거쳐야 할 구성요소들을 AND로 연결해 실제 해당 객체나 프로퍼티가 있는지 확인하는 방법을 사용했다.<br>
하지만 이렇게 AND를 연결해서 사용하면 코드가 아주 길어진다는 단점이 있음

<br><br><br>

## 옵셔널 체이닝의 등장

<br>

`?.`은 `?.`'앞'의 평가 대상이 `undefined`나 `null`이면 평가를 멈추고 `undefined`를 반환한다.<br>
**평가 후 결과가 `null`이나 `undefined`가 아닌 경우엔 값이 '있다' 혹은 '존재한다'**<br>
옵셔널 체이닝을 사용해 `user.address.street`에 안전하게 접근해 보자

```javascript
let user = {}; // 주소 정보가 없는 사용자

alert( user?.address?.street ); // undefined, 에러가 발생하지 않습니다
```
`user?.address`로 주소를 읽으면 아래와 같이 `user` 객체가 존재하지 않더라도 에러가 발생하지 않는다.

```javascript
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

<br>

위 예시를 통해 우리는 `?.`은`?.`'앞' 평가 대상에만 동작되고, 확장은 되지 않는다는 것을 볼 수 있다.<br>
참고로 위 예시에서 사용된 `user?.`는 `user`가 `null`이나 `undefined`인 경우만 처리할 수 있다.<br>
`user`가 `null`이나 `undefined`가 아니고 실제 값이 존재하는 경우엔 반드시 `user.address`프로퍼티는 있어야 한다.<br>
그렇지 않으면 `user?.address.street`의 두 번째 점 연산자에서 에러가 발생한다.

<br><br>

> ### **※ 옵셔널 체이닝을 남용하지 말자**
`?.`는 존재하지 않아도 괜찮은 대상에만 사용해야 한다.<br>
사용자 주소를 다루는 위 예시에서 논리상 `user`는 반드시 있어야 하는데 `address`는 필수값이 아니다.<br>
그러니 `user.address?.street`를 사용하는 것이 바람직 하다.<br>
실수로 인해 `user`에 값을 할당하지 않았다면 바로 알아낼 수 있도록 해야한다. 그렇지 않으면 오류를 조기에 발견하지 못하고 디버깅이 어려워짐

<br><br>

>### **※ `?.`앞의 변수는 꼭 선언되어 있어야 한다.**
변수 `user`가 선언되어 있지 않으면 `user?.anything`평가시 에러가 발생한다.
```javascript
//ReferenceError: user is not defined
user?.address
```
`user?.anything`을 사용하려면 `let`이나 `const`를 사용해 `user`를 정의하자. 이렇게 옵셔널 체이닝은 선언이 완료된 변수를 대상으로만 동작한다.

<br><br><br>

## 단락 평가

<br>

`?.`는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다. 참고로 이런 평가 방법을 단락 평가(short-circuit)라고 부른다. <br>
그렇기 때문에 함수 호출을 비롯한 `?.` 오른쪽에 있는 부가 동작은 `?.`의 평가가 멈췄을 때 더는 일어나지 않는다.

```javascript
let user = null;
let x = 0;

user?.sayHi(x++); // 아무 일도 일어나지 않습니다.

alert(x); // 0, x는 증가하지 않습니다.
```

<br><br><br>

### ?.()와 ?.[]

<br>

`?.`은 연산자가 아니다. `?.`은 함수나 대광호와 함께 동작하는 특별한 문법 구조체(syntax construct)입니다.<br>
함수 관련 예시와 함께 존재 여부가 확실치 않은 함수를 호출할 때 `?.()`를  어떻게 쓸 수 있는지 알아보자.<br>
한 객체엔 메서드 `admin`이 있지만 다른 객체엔 없는 상황
```javascript
let user1 = {
  admin() {
    alert("관리자 계정입니다.");
  }
}

let user2 = {};

user1.admin?.(); // 관리자 계정입니다.
user2.admin?.();
```
두 상황 모두에서 user 객체는 존재하기 때문에 `admin` 프로퍼니는 `.`만 사용해 접근했다.<br>
그리고 난 후 `?.()`를 사용해 `admin`의 존재 여부를 확인, `user1`엔 `admin`이 정의되어 있기 때문에 메서드가 제대로 호출 되었다.<br>
반면 `user2`엔 `admin`이 정의되어 있지 않았음에도 불구하고 메서드를 호출하면 에러 없이 그냥 평가가 멈추는 것을 확인할 수 있다.<br>
`.`대신 대괄호 `[]`를 사용해 객체 프로퍼티에 접근하는 경우엔 `?.[]`를 사용할 수 있다. <br>
위 예시와 마찬가지로 `?.[]`를 사용하면 객체 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다.

```javascript
let user1 = {
  firstName: "Violet"
};

let user2 = null; // user2는 권한이 없는 사용자라고 가정해봅시다.

let key = "firstName";

alert( user1?.[key] ); // Violet
alert( user2?.[key] ); // undefined

alert( user1?.[key]?.something?.not?.existing); // undefined
```
`?.`은 `delete`와 조합해 사용할 수도 있다.
```javascript
delete user?.name; // user가 존재하면 user.name을 삭제한다.
```

<br><br><br>

>### **※`?.`은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없다.**
`?.`은 할당 연산자 왼쪽에서 사용할 수 없다.
```javascript
// user가 존재할 경우 user.name에 값을 쓰려는 의도로 아래와 같이 코드를 작성해 보았습니다.

user?.name = "Violet"; // SyntaxError: Invalid left-hand side in assignment
// 에러가 발생하는 이유는 undefined = "Violet"이 되기 때문입니다.
```

<br><br><br>

## 요약
옵셔널 체이닝 문법 ?.은 세 가지 형태로 사용할 수 있습니다.

1.obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함<br>
2.obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함<br>
3.obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함<br><br>

여러 예시를 통해 살펴보았듯이 옵셔널 체이닝 문법은 꽤 직관적이고 사용하기도 쉽습니다. ?. 왼쪽 평가 대상이 null이나 undefined인지 확인하고 null이나 undefined가 아니라면 평가를 계속 진행합니다.<br><br>

?.를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근할 수 있습니다.<br><br>

?.은 ?.왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용해야 합니다.<br><br>

꼭 있어야 하는 값인데 없는 경우에 ?.을 사용하면 프로그래밍 에러를 쉽게 찾을 수 없으므로 이런 상황을 만들지 말도록 합시다.<br>