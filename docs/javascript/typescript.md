---
layout: default
title: TypeScript
parent: Javascript
nav_order: 1
---



# TypeScript - 20200107

> 마이크로소프트에서 구현한 JavaScript의 슈퍼셋(Superset) 프로그래밍 언어. 



공식 사이트: [Link](https://www.typescriptlang.org/index.html)

공식 문서: [Link](https://www.typescriptlang.org/docs/home.html)

비공식 한글 문서: [Link](https://typescript-kr.github.io/)



## 환경준비

```bash
$ mkdir <ProjectName>
$ cd <ProjectName>
$ npm init -y # 또는 yarn init -y
```



### tsconfig.json 생성하기

tsconfig.json 파일 생성

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

tsconfig.json 자동 생성

```bash
$ npm install -g typescript # 또는 yarn global add typescript 
$ tsc --init
```





## 기본타입

### 부울

```typescript
let isDone: boolean = false
```



### 숫자형

10진수 및 16진수, ECMA2015에 도입된 2진수 및 8진수 문자 지원

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```



### 문자열

```typescript
let color: string = 'blue'
```



### 배열

```typescript
let list: number[] = [1,2,3];
// 제네릭 배열 타입
let list: Array<number> = [1,2,3]
```



### 튜플

고정된 개수의 요소 타입을 알고 있지만 반드시 같은 필요는 없는 배열을 표현

```typescript
let x: [number, string];

x = [10, 'hello']; 
x = ['hello', 10];// 오류
```



### 열거

어쩌구 저쩌구 설명

```typescript
enum Color { Red, Green, Blue};
let c: Color = Color.Green; // output: 1

enum Color { Red = 1, Green, Blue};
let c: Color = Color.Green; // output: 2

enum Color { Red = 1, Green = 3, Blue = 4};
let c: Color = Color.Green; // output: 3

enum Color { Red = 1, Green, Blue};
let colorName: string = Color[2]; // output: Green;
```



### Any

어플리케이션을 작성할 때 알지 못하는 변수의 타입을 설명해야 할 수도 있습니다.
이러한 값은 사용자 또는 써드-파티 라이브러리와 같은 동적 컨텐츠에서 비롯될 수 있습니다.
이러한 경우에는, 타입 검사를 선택하지 않고 그 값이 컴파일-타임 검사를 통과하도록 하고 싶습니다.
이를 위해 다음과 같은 `any` 타입으로 지정합니다.

```typescript
let notSure: any = 4;
notSure = '문자열일수도';
notSure = false;
```



### Void

`void`는 `any`의 정반대이지만 조금 비슷합니다: 어떠한 타입의 부재도 전혀 없습니다.
일반적으로 반환 값을 반환하지 않는 함수의 반환 타입으로 볼 수 있습니다.

```typescript
function warnUser(): void {
  alert('This is Warning Message')
}
```



### Null & Undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```



### Nerver

좀더 지켜보기

### 타입 단언

```typescript
// angle-bracket (꺾쇠괄호) 구문
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

// as 구문
let someValue: any = 'this is a string';
let strLength: number = (someValue as string).length;
```



## 변수 선언

## 인터페이스

```typescript
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object'};

printLabel(myObj); // output: 'Size 10 Object'
```

### 선택적 프로퍼티

```typescript
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: 'black'}); // output: { color: black, area: 100 }
```

### 읽기 전용 프로퍼티

### 프로퍼티 초과 검사

### 함수 타입

### 인덱싱 가능 타입

### 클래스 타입

### 인터페이스 확장

## 클래스

Javascript Class는 ECMAScript 2015부 터 사용가능.

TypeScript에서는 개발자가 이 기술을 사용하고 다음 JavaScript 버전을 기다리지 않고도 모든 메이저 브라우저와 플랫폼에서 작동하는 JavaScript로 컴파일 해준다.



### 기본

```typescript
class Greeter {
    greeting: string; // <= 차이점. 프로퍼티
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello,' + this.greeting;
    }
}

let greeter = new Greeter('World'); // output: 'Hello, World'
```

새로운 클래스인 Greeter 선언.

이 클래스에는 3개의 멤버가 있다. `greeting` 프로퍼티, 생성자(constructor), `greet` 메서드

클래스의 멤버 중 하나를 참조할 때 클래스에서 `this` 를 앞에 접두어로 붙임.

`new`를 사용하여 `Greeter`클래스의 인스턴스를 만듬.

이것은 이전에 정의한 생성자를 호출하여 `Greeter`형태의 새 객체를 만들고 생성자를 실행하여 이를 초기화.





## 함수

## 제네릭

타입을 파라미터화 시킨다.

```typescript
function identity<T>(arg: T): T {
    return arg;
}
```

```typescript
// 타입 인수 명시적으로 정함.
let output = identity<string>('myString');
```

```typescript
// 타입 인수 추론
let output = identity('myString');
```



클래스정의할때 사용하는 제네릭 예제

```typescript
class LocalDB {
  constructor(private localStroageKey: string) {
  }
  add(v)  {
    localStorage.setItem(this.localStroageKey, JSON.stringify(v));
  }
  get() {
    const v = localStorage.getItem(this.localStroageKey);
    return (v) ? JSON.parse(v) : null
  }
}
```

```typescript
class LocalDB<T> {
  constructor(private localStroageKey: string) {
  }
  add(v: T)  {
    localStorage.setItem(this.localStroageKey, JSON.stringify(v));
  }
  get():T {
    const v = localStorage.getItem(this.localStroageKey);
    return (v) ? JSON.parse(v) : null
  }
}

interface User {
  name: string;
}

const userDB = new LocalDB<User>('user');
userDB.add({ name: 'jay' });
const getUser = userDB.get();
getUser.name;
```







## 열거형

## 타입 추론

## 타입 호환성

## 고급 타입

## 심볼

## 이터레이터와 제네레이터

## 모듈

## 네임스페이스

## 네임스페이스와 모듈

## 모듈 해석

## 선언 병합

## JSX

## 데코레이터

## 믹스인

## 트리플-슬래시 지시자

## JavaScript 파일 타입 검사