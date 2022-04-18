var express = require('express')
var router = express.Router();

var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var pool = mysql.createPool(dbconfig);


var mybatisMapper = require('mybatis-mapper')

mybatisMapper.createMapper(['./mapper/introduceSQL.xml'])
var format = { language : 'sql', indent : '  '}


//주소창에 담긴 변수를 읽기
router.use(express.urlencoded({ extended : true }))
router.use(express.json())


router.post('/',(req, res) => {
    var type = req.query.type;
    var params = req.body; 
    //object -> router.use(express.json())
    // console.log('온거', typeof params.body ); //string
    // console.log('온거', JSON.parse(params.body) ); //object
    var paramsobj = JSON.parse(params.body);
    var query = mybatisMapper.getStatement(
        paramsobj.mapper, paramsobj.mapperid, paramsobj, format );
        //sql문 추출해서 query에 담기 
        console.log("쿼리문 :", query);
        pool.getConnection(function(err, connection) {

            if(err) console.log(" DB접속불가 config.js가 틀렸데  : " + err);

            connection.query(
                query, // 여기는 반드시 sql문이 들어와야 에러가 안남
                (error, result) => {
                    if(error) throw "여기 "+error + req.body; // result를 받지 못하는 상황

                    if(req.body.crud == 'select'){
                        res.send(result); // react한테 res.data를 주라.
                        // sql 전송결과 보냄
                    }else{
                        res.send("succ"); // react한테 succ라는 문자를 주라.
                    }
                })       
            connection.release(); 
        }) 
        res.send("succ");    
})

module.exports = router;