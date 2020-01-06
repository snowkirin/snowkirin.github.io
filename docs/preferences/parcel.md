---
layout: default
title: Parcel 세팅
parent: Preferences
nav_order: 1
---

[Parcel](https://ko.parceljs.org/)

2020-01-06 기준으로 아직 보고 있는중.



## Parcel With TypeScript

문서: [Link](https://ko.parceljs.org/typeScript.html)

내 저장소: [Link](https://github.com/snowkirin/parcel-typescript)



! Parcel은 타입 검사를 수행하지 않아 `tsc --noEmit`으로 파일 검사하게 설정함.



### 현재 폴더 구조

```
Project Folder
│   package.json
|   tsconfig.json
|   start.sh
|
└───src 
│   │   index.html
│   │   index.ts
│   
└───dist (output)
│   │   index.html
│   │   {hash}.js
```



### 실행 시키기

```shell
# start.sh
#!/bin/bash

set -e

"$(npm bin)/tsc" --noEmit --watch &
"$(npm bin)/parcel" ./src/index.html --open
```

OR

```json
// package.json
{
  // ...
  "scripts": {
    // ...
    "serve": "tsc --noEmit --watch & parcel ./src/index.html --open"
  },
  // ...
}
```



```json
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "strict": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "module": "ES6",
    "moduleResolution": "node",
    "target": "ES2015",
    "allowJs": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["./src/**/*"]
}
```



### TODO

- [ ] tsconfig.json 설정
- [ ] tslint 설정
