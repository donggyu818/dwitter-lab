use shoppy;
select database();
show tables;
select * from information_schema.views where table_schema = 'shoppy';
select * from member;
select * from product;
desc product;

-- 전체 상품 조회
select  pid,
        concat('images/', image) as image
from product;        

-- product + product_detailinfo 테이블 조인
select  p.pid,
            p.name,
            p.price,
            p.info,
            p.rate,
            concat('/images/', p.image) as image,
            p.img_list as imgList,
            json_object(
				"title_en", p_d.title_en,	-- "detailInfo": {"title_en":title_en, ...} 형식으로 나옴
				"title_ko", p_d.title_ko,
				"list", p_d.list
			) as detailInfo
        from product p, product_detailinfo p_d
        where p.pid = p_d.pid and p.pid = 1;

show tables;
select * from product_detailinfo;

--
select qid, title, content, is_complete as isComplete, is_lock as isLock, id, pid, cdate from product_qna where pid = 1;

select is_complete as isComplete from product_qna where pid = 1;

-- 
desc product_return;
select 	rid,
		title,
        description,
        list
	from product_return;
    
--
select * from member;
desc member;