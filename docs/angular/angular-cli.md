---
layout: default
title: Angular CLI
parent: Angular
nav_order: 2
---



## Angular CLI

공식사이트 : [Link](https://cli.angular.io/)



### 기본 사용방법

```bash
npm install -g @angular/cli
ng new my-dream-app
cd my-dream-app
ng serve
```



### Angular CLI 명령어

- 컴포넌트 생성

  `ng generate component <ComponentName>`

- Angular Material

  `ng add @angular/material`

- Add Dependency

  `ng add ____`

- Run and Watch Tests

  `ng test`

- Build for Production

  `ng build --prod`



Command Overview

| COMMAND                                         | ALIAS | DESCRIPTION                                                  |
| :---------------------------------------------- | :---- | :----------------------------------------------------------- |
| [`add`](https://angular.kr/cli/add)             |       | Adds support for an external library to your project.        |
| [`analytics`](https://angular.kr/cli/analytics) |       | Configures the gathering of Angular CLI usage metrics. See https://v8.angular.io/cli/usage-analytics-gathering. |
| [`build`](https://angular.kr/cli/build)         | `b`   | Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory. |
| [`config`](https://angular.kr/cli/config)       |       | Retrieves or sets Angular configuration values in the angular.json file for the workspace. |
| [`doc`](https://angular.kr/cli/doc)             | `d`   | Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword. |
| [`e2e`](https://angular.kr/cli/e2e)             | `e`   | Builds and serves an Angular app, then runs end-to-end tests using Protractor. |
| [`generate`](https://angular.kr/cli/generate)   | `g`   | Generates and/or modifies files based on a schematic.        |
| [`help`](https://angular.kr/cli/help)           |       | Lists available commands and their short descriptions.       |
| [`lint`](https://angular.kr/cli/lint)           | `l`   | Runs linting tools on Angular app code in a given project folder. |
| [`new`](https://angular.kr/cli/new)             | `n`   | Creates a new workspace and an initial Angular app.          |
| [`run`](https://angular.kr/cli/run)             |       | Runs an Architect target with an optional custom builder configuration defined in your project. |
| [`serve`](https://angular.kr/cli/serve)         | `s`   | Builds and serves your app, rebuilding on file changes.      |
| [`test`](https://angular.kr/cli/test)           | `t`   | Runs unit tests in a project.                                |
| [`update`](https://angular.kr/cli/update)       |       | Updates your application and its dependencies. See https://update.angular.io/ |
| [`version`](https://angular.kr/cli/version)     | `v`   | Outputs Angular CLI version.                                 |
| [`xi18n`](https://angular.kr/cli/xi18n)         |       | Extracts i18n messages from source code.                     |