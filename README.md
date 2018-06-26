# Environment variables test

test runtime vs compile-time environment variables

## Webpack development mode

- run `npm run build:webpack-dev`
- `dist/test.webpack-dev.js`의 마지막 부분
  - `eval("if (true) {\n  console.log(\"hi, this is development environment\");...`
- `process.env.NODE_ENV`가 compile time에 "development"로 치환됨

## Webpack production mode

- run `npm run build:webpack-prod`
- `dist/test.webpack-prod.js`의 마지막 부분
  - `function(e,t,n){console.log("hi, this is development environment")}`
- 치환에 더해 webpack 최적화로 `if (true)`문이 삭제됨

## Conclusion

- Babel이나 wepback으로 환경변수를 compile time에 고정할 수 있고, 고정된 변수에 따라 최적화도 가능하다.
