---
layout: default
title: Parcel 세팅
parent: Preferences
nav_order: 1
---

# Parcel - 20200106

> 불꽃 튀게 빠르고 설정이 필요 없는 웹 애플리케이션 번들러



공식 사이트:  [Linkl](https://ko.parceljs.org/)

공식 깃허브: [Link](https://github.com/parcel-bundler/parcel)



## Parcel With TypeScript

문서: [Link](https://ko.parceljs.org/typeScript.html)

내 저장소: [Link](https://github.com/snowkirin/parcel-typescript)



! Parcel은 타입 검사를 수행하지 않아 `tsc --noEmit`으로 파일 검사하게 설정함.



### 현재 폴더 구조

```
Project Folder
│   package.json
│   tsconfig.json
│   start.sh
│
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



```json
// package.json
{
  // ...
  "scripts": {
    // ...
    "start": "start.sh"
  },
  // ...
}
```



```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "importHelpers": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "tests/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```



### TODO

- [ ] tsconfig.json 설정
- [ ] tslint 설정
