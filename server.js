var app = require('express')();
app.set('port', '8080')

app.get('/',(req, res) => {
    res.send('localhose:8080/ 요청시 보내주는 글자임');
})

var reactapi = require('./api/dbconnect')

app.use('/api',reactapi)

var time = Date.now();

app.listen(app.get('port'), () => {
    console.log(time , ' 이글자가 콘솔창에 보이면 서버구동완료')
})

// localhose:8080 서버루트 포트설정 및 라우팅설정 