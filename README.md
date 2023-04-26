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

## mysql 설치 및 연결

```bash
npm install --save mysql
```

```javascript
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3509',
  port: 3306,
  database: 'blog',
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected');
});

```
## Database config 구조

```
├─root
│  ├─config
│  │      database.js // 데이터베이스 접속정보 
│  │      dev.js // dev 데이터베이스 정보
│  │      prod.js // prod 데이터베이스 접속 정보
```

```javascript
//database.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}

```

```javascript
//dev.js
module.exports = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '3509',
  database: 'blog',
  connectionLimit: 30,
};

```
```javascript
//prod.js
module.exports = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '3509',
  database: 'blog',
  connectionLimit: 30,
};
```

### app.js 데이터베이스 연결

```javascript
const dbconfig = require('./config/database');
const mysql = require('mysql');

const connection = mysql.createConnection(dbconfig);
connection.connect(err => {
  if (err) throw err;
  console.log('connected');
});


```

## connection pool 세팅

src > db 아래에 connection.js(디비연결확인), poolconnection.js(커넥션 풀) 만든다.

```javascript
//connection.js
const mysql = require('mysql');
const dbconfig = require('../../config/database');
const connection = mysql.createConnection(dbconfig);

module.exports = connection;
```

```javascript
//poolconnection.js
const mysql = require('mysql');
const dbconfig = require('../../config/database');
const pool = mysql.createPool(dbconfig);

module.exports = pool;
```

```javascript
//app.js
const conn = require('./src/db/connection');

conn.connect(err => {
  if (err) throw err;
  console.log('connected');
});

```

## router
> 업무 및 주제에 맞게 로직을 한곳에 모을 수 있도록 경로를 구분하기 위해사용

### 폴더구조
```
├─root
│  ├─src
│     ├─router
│          │ main.js // 경로가 root인 경우 처리
│          │ users.js // 경로가 /users으로 들어올경우 처리
```

### 각 라우터 파일 생성
```javascript
//main.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('main')
});

module.exports = router;
```

### app.js 등록

```javascript
//app.js
const main = require('./src/router/main');

app.use('/', main);

```