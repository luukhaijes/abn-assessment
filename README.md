# abn-assessment
Framework: Vue 3, as it was stated in the email and ABN AMRO works with it.

## Requirements
- [x] Eye catching UI
- [x] Add search
- [x] Add detail page for show
- [x] Responsive
- [x] Unit tests
- [x] use TVMaze API
- [x] Show popular list based on rating
- [x] Horizontal list with genre (made it random, makes it look like an algorithm)
- [x] Show details
- [x] Add search

I wanted to add some extra information, but I didn't have enough time.
I created a lambda function on AWS which proxies another api that needed a token.
Here is the link: https://p7z6exmwk3.execute-api.eu-central-1.amazonaws.com/default/extraShowInfo?t=tt0903747

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
