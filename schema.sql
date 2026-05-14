-- =============================================
--  Dwitter Database Schema
-- =============================================

CREATE DATABASE IF NOT EXISTS dwitter
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE dwitter;
SELECT DATABASE();
SHOW TABLES;

CREATE TABLE IF NOT EXISTS users (
  id         INT          AUTO_INCREMENT PRIMARY KEY,
  username   VARCHAR(50)  NOT NULL UNIQUE,
  password   VARCHAR(255) NOT NULL,
  avatar_url VARCHAR(255) DEFAULT NULL,
  created_at DATETIME     DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS tweets (
  id         INT  AUTO_INCREMENT PRIMARY KEY,
  user_id    INT  NOT NULL,
  content    TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 샘플 유저 (비밀번호: 123456)
INSERT INTO users (username, password) VALUES
  ('user1', '$2b$10$9QQow6NADoFIDAjW6pSBl.yax1EgJBVbJX0Avz9EjyH5QKYrPA8gi'),
  ('user2', '$2b$10$9QQow6NADoFIDAjW6pSBl.yax1EgJBVbJX0Avz9EjyH5QKYrPA8gi'),
  ('user3', '$2b$10$9QQow6NADoFIDAjW6pSBl.yax1EgJBVbJX0Avz9EjyH5QKYrPA8gi');

-- 샘플 트윗
INSERT INTO tweets (user_id, `content`) VALUES
  (2, '프론트로 리액트 공부 중..'),
  (1, '그대 오직 그대만이 내 첫사랑'),
  (3, '이별은 시간을 멈추게 하니까'),
  (2, '하늘과 바다, 그리고 자유'),
  (1, '뮤지컬 공연을 봤는데, 너무 감명깊었어'),
  (3, '백엔드에서 가장 중요한게 무엇일까?');

select * from users;
select * from tweets;
SELECT * FROM users WHERE username = 'user1';
SELECT count(username) as count FROM users WHERE username = 'user1';
-- 46줄 보다는 47줄이 더 나음.  --
select count(username) as count, password from users
	where username = 'user1';

-- 로그인
-- SELECT * FROM users WHERE username = 'user1';
select count(username) as count,
		(select id from users where username='user1') as id, 
        (select username from users where username='user1') as username, 
        (select password from users where username='user1') as password, 
        (select avatar_url from users where username='user1') as avatar_url
	from users where username='user1';

select * from users;

SELECT
    t.id,
    t.content,
    t.created_at,
    u.id       AS user_id,
    u.username,
    u.avatar_url
  FROM tweets t
  inner JOIN users u ON t.user_id = u.id
  WHERE t.user_id = 2 ORDER BY t.created_at DESC;
  
select * from tweets where id = 5;
select * from tweets;

-- 
select * from information_schema.views
	where table_schema = 'dwitter';
-- 이렇게 vscode 에서 사용할 백틱으로 묶은 sql 을 아래처럼 나타내고 93번째 줄을 복사하면 간단해짐.
create view tweets_view
as
SELECT
		t.id,
		t.content,
		t.created_at,
		u.id       AS user_id,
		u.username,
		u.avatar_url
	FROM tweets t
	inner JOIN users u ON t.user_id = u.id;
    
select * from tweets_view
	order by created_at desc;