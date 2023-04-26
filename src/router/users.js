const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
router.get('/', (req, res) => {
  res.send('users');
});

module.exports = router;
