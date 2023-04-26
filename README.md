# express.js

## npm init
```bash
npm init
```

## 설치
> 아래 명령어 통해 설치
```bash
npm install express --save
```

## app.js 시작점 만들기

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## express 실행

```bash
node app.js
```