const express = require('express');
const cors = require("cors");
const multer  = require('multer');
const fs  = require('fs');
const fetch = require("node-fetch"); //latest version is not available now.
const FormData = require("form-data");
const { exec, execSync } = require('child_process');
const { emit } = require('nodemon');
var sqlite3 = require('sqlite3').verbose();
const https = require('https')
require('dotenv').config();
var sillyDateTime = require("silly-datetime");
// app.engine('.ejs', ejs.__express);app.set('views',__dirname+'/views');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true }));
const ejs = require('ejs'); 
app.use(express.json());
app.set('view engine', 'ejs'); 
app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
);

var arrAllSocket = [];
var arruploadinfo = [];

var obj = 
{
  id : 0,
  socket:0,
  type:"",
  sayHi : function()
  {
    console.log('Hi~');
  }      
} 


var server = require('http').Server(app);
var io = require('socket.io')(server);

let jwt = ''
let requestID = ''
let fbxURL = ''
let test = true
let timeoutId;

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/dist/index.html');
// });


io.on('connection', function (socket) {  
  // socketinfo = {}
  // socketinfo[socket.id] = socket;
  console.log("connection id="+socket.id)
  socket.on('uploadcredit', function (data) 
  {
    console.log("uploadcredit data="+data)
    var sql="SELECT * FROM userinfo where username='modeler'"
    db.all(sql,function(err,row){
      // console.log(row[0]);
      //  console.log('查询结果是： ', row)
          // console.log('转成JSON后的结果是：',JSON.stringify(row));
          var objectBook=JSON.parse(JSON.stringify(row));
          if(objectBook.length > 0)
          {
            
            var total = objectBook[0].credit+2;
            console.log("total="+total)
            db.run('update userinfo set credit='+ total+' where username="modeler"')
            if (objectBook[0].usertype == 1)
            { 
              // res.render('mainpage.ejs', {username: objectBook[0].username, credit: objectBook[0].credit, assetnum: objectBook[0].asset}); 
              // res.render('mainpage.ejs', {title: "11"}));
            }
            else if (objectBook[0].usertype == 2)
            {
              // console.log("user type 111");
              // res.render('mainpage1.ejs', {username: objectBook[0].username, credit: objectBook[0].credit, assetnum: objectBook[0].asset}); 
              // res.render('mainpage1.ejs', {username: "lu1", credit: "112", assetnum: "2241"});
            }
            
          }
            
      })
});


  socket.on('getasset', function (data) {
      console.log("getasset data="+data)
      console.log("getasset id="+socket.id)

      var kongyoo = new Object();
      kongyoo.id = socket.id;
      kongyoo.socket = socket;
      kongyoo.type = data;
      arrAllSocket.push(kongyoo);

      // io.sockets.send('111')
      // for (var i=0; i<arrAllSocket.length; i++)
      // {
      //   if (arrAllSocket[i].type == "user")
      //   {
      //     arrAllSocket[i].socket.send('22222')
      //   }
        
      // }
      // socketinfo[socket.id].send('message');
      // if (io.sockets.connected[socket.id]) 
      // {
      //   io.sockets.connected[socket.id].send('message');
      // }

      //io.sockets.emit('message', data.message);给大家发
      // io.to(socket.id).emit('message', '亲 这边已经收到您发送的消息：'+data.message);//只给这个发
  });

//   socket.on('download', function (data) {
//     console.log("download data="+data)
//     console.log("download id="+socket.id)
//     io.sockets.send('aaa3bb')
// });

  socket.on('tes', function (data) {//eventName the same as client
      console.log(data)
      //io.sockets.emit('message', data.message);
  }); 
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/login.html');
});

app.get('/admin',function(req,res,next)
　{ 
  
   var pageNum=req.query.page;
   var start,end;
   var size = 10;
    if(pageNum==undefined)
    {
      pageNum=1;
      start=0;
      end=size;
   }
   else
   {
    start=(pageNum-1)*size;
 
    end=pageNum*size;
   }

  var totalsize = 5;
  db.all('select *,(select Count(*) from useropinfo) as Count from useropinfo',function(err,data)
  {
    if(err)
    {
      console.log(err);
    }else
    {
      // console.log("len="+data.length);
      totalsize = data.length;
      // console.log('转成JSON后的结果是11：',JSON.stringify(row));
      // res.render('mainpage2.ejs', {page:pageNum, total:2, size:2, alldata: data}); 
      // res.render('department_list.ejs',{departList:data,pageNum:pageNum})
    }
  });

  db.all('select *,(select Count(*) from useropinfo) as Count from useropinfo order by uploadtime desc limit ?,?',[start,end],function(err,data)
  {
    if(err)
    {
      console.log(err);
    }else
    {
      console.log("totalsize="+totalsize);
      
      
      var cntinfo = Math.ceil((totalsize/size))

      // console.log("Count="+data[0].Count)
      console.log("cntinfo="+cntinfo)
      // console.log('转成JSON后的结果是11：',JSON.stringify(row));
      res.render('mainpage2.ejs', {page:pageNum, total:cntinfo, size:size, alldata: data}); 
      // res.render('department_list.ejs',{departList:data,pageNum:pageNum})
    }
  });
});

app.get('/login', function (req, res) 
{
  const id = req.query.id;
  console.log("login id=" + id)
  if (id == "1")
  {
    username = req.query.username
    password = req.query.password
    console.log("username=" + username)
    console.log("password=" + password)
    var sql="SELECT * FROM userinfo where username='"+username+"' and passwd='"+password+"'"
    db.all(sql,function(err,row){
     
          var objectBook=JSON.parse(JSON.stringify(row));
          if(objectBook.length > 0)
          {
            if (objectBook[0].usertype == 1)
            {
              res.render('mainpage.ejs', {username: objectBook[0].username, credit: objectBook[0].credit, assetnum: objectBook[0].asset}); 
            }
            else if (objectBook[0].usertype == 2)
            {
              res.render('mainpage1.ejs', {username: objectBook[0].username, credit: objectBook[0].credit, assetnum: objectBook[0].asset}); 
            }
            else if (objectBook[0].usertype == 3)
            {
              // var username = "user";
              // sql="SELECT * FROM useropinfo where username='"+username+"' order by "
              // db.all(sql,function(err,row)
              // {

              // })
              // db.all("SELECT * FROM useropinfo order by uploadtime desc limit 0,2",function(err,row){
              //   // console.log(row[0]);
              //   //  console.log('查询结果是： ', row[0].username)
              //       console.log('转成JSON后的结果是11：',JSON.stringify(row));
              //       res.render('mainpage2.ejs', {username: objectBook[0].username, page:1, total:2, size:2, credit: objectBook[0].credit, assetnum: objectBook[0].asset, alldata: row}); 
              //   })

              var totalsize = 5;
              db.all('select *,(select Count(*) from useropinfo) as Count from useropinfo',function(err,data)
              {
                if(err)
                {
                  console.log(err);
                }else
                {
                  // console.log("len="+data.length);
                  totalsize = data.length;
                  // console.log('转成JSON后的结果是11：',JSON.stringify(row));
                  // res.render('mainpage2.ejs', {page:pageNum, total:2, size:2, alldata: data}); 
                  // res.render('department_list.ejs',{departList:data,pageNum:pageNum})
                }
              });

              var size=10;
              start=0;
 
              end=size;
              db.all('select *,(select Count(*) from useropinfo) as Count from useropinfo order by uploadtime desc limit ?,?',[start,end],function(err,data)
              {
                if(err)
                {
                  console.log(err);
                }else
                {
                  console.log("totalsize="+totalsize);
                  
                  
                  var cntinfo = Math.ceil((totalsize/size))

                  // console.log("Count="+data[0].Count)
                  console.log("cntinfo="+cntinfo)
                  // console.log('转成JSON后的结果是11：',JSON.stringify(row));
                  res.render('mainpage2.ejs', {page:1, total:cntinfo, size:size, alldata: data}); 
                  // res.render('department_list.ejs',{departList:data,pageNum:pageNum})
                }
              });
              
            }
            
          }
            
      })
  }
    

});

app.get('/downconsultantfile', function (req, res) {
  console.log("i get data yet")
  console.log("process begin22")
  for (var i=0; i<arrAllSocket.length; i++)
  {
   if (arrAllSocket[i].type == "consultant")
    {
      // console.log("i can find it")
      // arrAllSocket[i].socket.send('22222')
      // filename = '/gaminggpt_username_asset.fbx'
      

      filename = req.query.downfileinfo
      
      filepath= __dirname  + "/"+filename

      // filepath= __dirname  + filename
      // filepath="/root/server/test.log"
      console.log(" fulepath="+filepath)
     
      res.download(filepath, function(err){
        if (err) {
            console.log("have error")
          // res.sendStatus(404);
        }
        else
        {
          console.log("succeed ok")
        }
      res.end();
    }); 

      // res.download(filepath);
    }
    
  }

  return
});


app.get('/downmodelerfile', function (req, res) {
  console.log("i get data yet")
  console.log("process begin22")
  for (var i=0; i<arrAllSocket.length; i++)
  {
    // filename = req.query.downfileinfo
      
    // filepath= __dirname  + "/"+filename

    // // filepath= __dirname  + filename
    // console.log(" fulepath="+filepath)
    
    // console.log("idinfo="+req.query.idinfo)
    if (arrAllSocket[i].type == "modeler")
    {
      // console.log("i can find it")
      // arrAllSocket[i].socket.send('22222')
      // filename = '/gaminggpt_username_asset.fbx'
      

      filename = req.query.downfileinfo
      
      filepath= __dirname  + "/"+filename

      // filepath= __dirname  + filename
      
      // var file = fs.readFileSync(filepath, 'binary');
      // res.setHeader('Content-Length', file.length);
      // filepath = "/root/server/gaminggpt_username_asset_1699600797.fbx"
      console.log(" fulepath="+filepath)
      res.download(filepath);
    }
  }

  return
});

app.get('/downuserfile', function (req, res) {
  
  console.log("downfilename="+req.query.downfilename)
  for (var i=0; i<arrAllSocket.length; i++)
  {
    if (arrAllSocket[i].type == "user")
    {
      var sql="SELECT * FROM userinfo where username='user'"
      db.all(sql,function(err,row){
        var objectBook=JSON.parse(JSON.stringify(row));
        if(objectBook.length > 0)
        {
          
          var total = objectBook[0].credit-2;
          console.log("total="+total)
          db.run('update userinfo set credit='+ total+' where username="user"')
          if (objectBook[0].usertype == 1)
          { 
            // res.render('mainpage.ejs', {username: objectBook[0].username, credit: objectBook[0].credit, assetnum: objectBook[0].asset}); 
            // res.render('mainpage.ejs', {title: "11"}));
          }
          else if (objectBook[0].usertype == 2)
          {
            // console.log("user type 111");
            // res.render('mainpage1.ejs', {username: objectBook[0].username, credit: objectBook[0].credit, assetnum: objectBook[0].asset}); 
            // res.render('mainpage1.ejs', {username: "lu1", credit: "112", assetnum: "2241"});
          }
          
        }
      });

      filename = req.query.downfilename
      
      filepath= __dirname  + "/"+filename
      console.log("downuserfile fulepath="+filepath)
      res.download(filepath);    
    }
  }

  return
});

// app.post('/uploadcredit', function (req, res) {
//   console.log("uploadcredit="+)
  
//   for (var i=0; i<arrAllSocket.length; i++)
//   {
//     if (arrAllSocket[i].type == "modeler")
//     {
//       // console.log("i can find it")
//       // arrAllSocket[i].socket.send('22222')
//       filename = '/test.fbx'
      
//       filepath= __dirname  + filename
//       console.log(" fulepath="+filepath)
//       // var file = fs.readFileSync(filepath, 'binary');
//       // res.setHeader('Content-Length', file.length);
//       res.download(filepath);
//       // res.end();
//       //  dir = os.path.join(BASE_PATH, 'upload')
//       // dir = os.path.join(BASE_PATH, 'upload')
//       // print('dir1111='+BASE_PATH)
//       // return send_from_directory(BASE_PATH, filename, as_attachment=True)
//     }
    
//   }

//   return
// });

app.post('/downloadinfo', function (req, res) {
  console.log("i get data yet")
  console.log("process begin111")
  for (var i=0; i<arrAllSocket.length; i++)
  {
    if (arrAllSocket[i].type == "user")
    {
      // console.log("i can find it")
      // arrAllSocket[i].socket.send('22222')
      filename = '/gaminggpt_username_asset.fbx'
      
      filepath= __dirname  + filename
      console.log(" fulepath="+filepath)
      // var file = fs.readFileSync(filepath, 'binary');
      // res.setHeader('Content-Length', file.length);
      res.download(filepath);
      // res.end();
      //  dir = os.path.join(BASE_PATH, 'upload')
      // dir = os.path.join(BASE_PATH, 'upload')
      // print('dir1111='+BASE_PATH)
      // return send_from_directory(BASE_PATH, filename, as_attachment=True)
    }
    
  }

  return
});


function getNowSceond()
{
	return Math.floor(Date.now() / 1000);
}

// 处理下载文件的请求
app.post('/file/downmodeler', function (request, response) {
  console.log("test="+request.body.filename + " __dirname="+__dirname)
  var path = __dirname + "/image/" + request.body.filename;// 待下载文件的路径，指定为当前项目目录下的hello.txt文件
  console.log("downmodeler test="+path)
  if (fs.existsSync(path)) 
  {
    // console.log('文件存在');
  } 
  else 
  {
    console.log('文件不存在');
    response.writeHead(200, 
      {
      'Content-Type': 'application/force-download',
      'Content-Disposition': 'attachment; filename=' + request.body.filename+" not exist"
      });

    return;
  }
  var f = fs.createReadStream(path);
  response.writeHead(200, {
      'Content-Type': 'application/force-download',
      'Content-Disposition': 'attachment; filename=' + request.body.filename
  });
  f.pipe(response);
});

app.post('/file/downuser', function (request, response) {
  

  var path = __dirname + "/image/" + request.body.filename;// 待下载文件的路径，指定为当前项目目录下的hello.txt文件
  console.log("downuser test="+path)
  // const path = 'somefile.txt';
  if (fs.existsSync(path)) 
  {
    // console.log('文件存在');
  } 
  else 
  {
    console.log('文件不存在');
    response.writeHead(200, 
      {
      'Content-Type': 'application/force-download',
      'Content-Disposition': 'attachment; filename=' + request.body.filename+" not exist"
      });

    return;
  }


  var f = fs.createReadStream(path);
  response.writeHead(200, {
      'Content-Type': 'application/force-download',
      'Content-Disposition': 'attachment; filename=' + request.body.filename
  });
  f.pipe(response);
});


app.post('/file/downconsultant', function (request, response) {
  console.log("test="+request.body.filename)
  var path = __dirname + "/image/" + request.body.filename;// 待下载文件的路径，指定为当前项目目录下的hello.txt文件
  console.log("downconsultant test="+path)
  if (fs.existsSync(path)) 
  {
    // console.log('文件存在');
  } 
  else 
  {
    console.log('文件不存在');
    response.writeHead(200, 
      {
      'Content-Type': 'application/force-download',
      'Content-Disposition': 'attachment; filename=' + request.body.filename+" not exist"
      });

    return;
  }

  var f = fs.createReadStream(path);
  response.writeHead(200, {
      'Content-Type': 'application/force-download',
      'Content-Disposition': 'attachment; filename=' + request.body.filename
  });
  f.pipe(response);
});

app.post('/webhook', function (req, res) {
  console.info("post webhook have data="+req.body.results.status)
  var result = req.body.results;
  if ('completed' == req.body.results.status)
  {
    fbxinfo = result.completedModels.fbx
    // console.info("fbx="+result.completedModels.fbx)
    // console.info("glb="+result.completedModels.glb)
    // console.info("obj="+result.completedModels.obj)
    console.info("fbxinfo="+fbxinfo)
    
    var curTimeStamps = getNowSceond();
    var strname = 'image/gaminggpt_username_asset_'+curTimeStamps+".fbx";
    var strnamesql = 'gaminggpt_username_asset_'+curTimeStamps+".fbx";
      // let url = 'http://www.tucao.one/api.php?op=checkcode&code_len=4&font_size=14&width=446&height=40&font_color=&background='
// 用http的get方法来发送请求
    https.get(fbxinfo, (response) => {
      //data 存储图片数据，是二进制流 
      var data = "";
      
      // 一定要设置encode，否则即使在pic/downImg/中有1.jpg,也是无法显示的
      response.setEncoding("binary")
      // 当数据到达时会触发data事件
      response.on('data', function (chunk) {
        data += chunk;
      });
      // 当数据接收完毕之后，会触发end事件
      response.on("end", function () {
        //写入文件
       
        // fs.writeFile('./gaminggpt_username_asset.fbx', data, 'binary', (err) => {
        fs.writeFile(strname, data, 'binary', (err) => {
          if (err) {
            console.log('写入文件错误')
          } else {
            console.log('写入文件成功')
          }
        })
      });
    }).on("error", function () {
      console.log('读取错误')
    });
    // await sleep(1500)
    // socketio.send('111')
    // io.sockets.send('111')


    // execSync('sleep 7');

    console.log("length="+arruploadinfo.length);
    if (arruploadinfo.length > 0)
    {
      curidx = arruploadinfo.length-1;
      console.log("time="+arruploadinfo[curidx].uploadtime
                +" user="+arruploadinfo[curidx].username);

      var username = arruploadinfo[curidx].username;
      var uploadtime = arruploadinfo[curidx].uploadtime;

      strsql = "INSERT INTO useropinfo(username, modelername, asseturl, uploadtime, downloadtime, Score, isscore) VALUES('"+username+"', 'modeler','"+strnamesql+"','"+uploadtime+"', '', 0, 0)"
      console.log("strsql="+strsql);
      db.run(strsql)

      console.log("username="+username+" uploadtime="+uploadtime);
      // db.run()
    }

    for (var i=0; i<arrAllSocket.length; i++)
    {
        if (arrAllSocket[i].type == "modeler")
        {
          console.log("will send message")
            arrAllSocket[i].socket.send(strnamesql)
        }
      
    }
    // return;
    //r = requests.get(fbxinfo)
  }
 
  //JSON.parse(jsonData); 

});

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        if (!fs.existsSync(process.env.UPLOAD_PATH)){  
            fs.mkdirSync(process.env.UPLOAD_PATH);
        }
        callback(null, process.env.UPLOAD_PATH);
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
        const originalName = file.originalname;
        const extension = originalName.substring(originalName.lastIndexOf('.') + 1);
        const fullName = uniqueSuffix + '.' + extension;
        callback(null, fullName);
    }
});

var upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }
})

app.post('/upload', upload.array('uploaded_file'), async (req, res, next) => {
    try {
        console.log("tt333");
        const body = {
          devID: process.env.devID,
          destination: process.env.destination,
        };
        const results = await fetch(
          process.env.registerHook,
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
              "X-API-Key": process.env.APIKey,
            },
          }
        );
        const data = await results.json();
        jwt = data.jwt
        res.status(200).json(data);
        next();
      } catch (e) {
        next(e);
      }
})
// upload images to Kaedim
const apiUpload = multer({ storage: multer.memoryStorage(), preservePath: true });
async function sendRequest() {
  const url = `https://api.kaedim3d.com/api/v1/fetchRequest/?devID=${process.env.devID}&requestID=${requestID}`;
  try {
    const res1 = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': process.env.APIKey,
        'authorization': jwt
      },
    });
    const data = await res1.json();
    console.log(data.asset.iterations[0].status);
    if (data.asset.iterations[0].status === 'completed') {
      fbxURL = data.asset.iterations[0].results.fbx;
      // fbxURL = "---------------testURL------------"
      console.log("->", fbxURL)
      if(test) {
        test = false 
        clearTimeout(timeoutId) 
        return fbxURL;
      }
    }
  } catch (error) {
    console.error(error);
  }
  timeoutId = setTimeout(sendRequest, 2000);
}

app.post("/uploadinfo", apiUpload.any("uploaded_file"), async (req, res, next) => {
  try {
    if (req.files) {
      req.files.forEach((image, index) => {
        console.log("name="+image.originalname)
        fs.writeFile(image.originalname, image.buffer,err => 
        {
          if(err) return console.log(err);
        })
       
      for (var i=0; i<arrAllSocket.length; i++)
      {
        if (arrAllSocket[i].type == "user")
        {
          arrAllSocket[i].socket.send(image.originalname)
        }
      }
      });

      
    } 
    else 
    {
      console.log("uploadinfo begin 22")
    }
  } 
  catch (e) {
    next(e);
  }
});

app.post("/process", apiUpload.any("uploaded_file"), async (req, res, next) => {
  try {
    console.log("process begin")
    //   for (var i=0; i<arrAllSocket.length; i++)
    //   {
    //     if (arrAllSocket[i].type == "modeler")
    //     {
    //       arrAllSocket[i].socket.send('22222')
    //     }
        
    //   }
    // return;

    let formData = new FormData();
    formData.append("devID", process.env.devID);
    formData.append("highDetail", "false");
    // formData.append("test", "false");
     formData.append("test", "true");
    formData.append('polycount', 20000);
    formData.append('height', 200);
    formData.append("LoQ", "high");

    if (req.files && req.files[0]) {
      req.files.forEach((image, index) => {
        formData.append(`image-${index}`, image.buffer, {
          filename: image.originalname,
        });
        
       
      });
    } else {
      formData.append("image", req.file.buffer, {
        filename: req.file.originalname,
      });
    }

    var kongyoo = new Object();
    kongyoo.uploadtime = sillyDateTime.format(new Date(),"YYYY-MM-DD HH:mm:ss");
    kongyoo.username = "user";
    arruploadinfo.push(kongyoo)
   
    var urldata = "https://api.kaedim3d.com/api/v1/process"
    fetch(urldata, 
      {
          method: "POST",
          headers: {
            "x-api-key": process.env.APIKey,
            "authorization": jwt,
          },
          body:formData,
      }).then((async(res) => 
      {
        console.log(res)
          if ('status' in res) 
          {
            console.log("status="+res['status'].toString())
            if (res['status'].toString() == "201")
            {
             
              // const time = datetime.format(new Date(), 'YYYY-MM-DD HH:mm');
              // console.log(time);
              console.log(sillyDateTime.format(new Date(),"YYYY-MM-DD HH:mm:ss"))
                console.log("succeed upload")
            }

            fs.writeFile('./test.log', res['status'].toString(),err => 
            {
              if(err) return console.log(err);
            })
          }
      }));

   
  } 
  catch (e) {
    next(e);
  }
});

app.get('/addscore', (req, res) => {
  res.render('addscore.ejs');
 });

app.get("/fetchAll", async (req, res, next) => {
  urldata = `https://api.kaedim3d.com/api/v1/fetchAll/?devID=${process.env.devID}`;
  headers = {
    "X-API-Key": process.env.APIKey,
    "Authorization":  jwt
    }
  
    try {
      fetch(urldata, {
        method: "GET",
        headers,
        timeout: 100000,
        // body: JSON.stringify(body1),
      }).then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      });
    } catch (e) {}
})

//  /api/v1/pets/:id--删除信息
app.put('/:id', (req, res) => 
{
  // const pets = JSON.parse(fs.readFileSync('./db/pets.json').toString());
  // const index = pets.findIndex(item => item.id == req.params.id);
  // pets.splice(index, 1);
  // fs.writeFileSync('./db/pets.json', JSON.stringify(pets));
  // res.json({
  //     code: 1,
  //     msg: '信息删除成功'
  // });

  var idinfo = req.params.id.split(':');
  console.log("id0="+idinfo[0]+" id1="+idinfo[1]);

  strsql = "update useropinfo set Score='"+idinfo[1]+"', isscore='1' where id="+idinfo[0]
      console.log("strsql="+strsql);
  db.run(strsql)
  res.json({
      code: 1,
      msg: '打分成功'
  });
  // db.run('INSERT INTO userinfo(username, passwd, usertype, credit, asset) VALUES ("consultant", "consultant", 3, 100, 21222)')

});

app.post("/refreshJWT", async (req, res, next) => {
  try {
    const results = await fetch(process.env.refreshJWT, {
      method: "POST",
      body: JSON.stringify({
        devID: process.env.devID,
      }),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.APIKey,
        "refresh-token": process.env.refreshToken,
      },
    });
    const data = await results.json();
    jwt = data.jwt
    data.APIKey = process.env.APIKey
    res.status(200).json(data);
    next();
  } catch (e) {
    next(e);
  }
});
app.post("/registerHook", async (req, res, next) => {
  try {
    const body = {
      devID: process.env.devID,
      destination: process.env.destination,
    };
    const results = await fetch(
      "https://api.kaedim3d.com/api/v1/registerHook",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.APIKey,
        },
      }
    );
    const data = await results.json();
    res.status(200).json(data);

    next();
  } catch (e) {
    next(e);
  }
});


const path = `${process.cwd()}/kaeidm.db`;
console.log("path="+path)
var db = new sqlite3.Database(path);
db.serialize(() => {
  console.log("path11="+path)
  // db.prepare(`CREATE TABLE IF NOT EXISTS userinfo (username varchar(255),    passwd varchar(255),usertype integer,credit integer,asset integer)`).run().finalize();
  // db.prepare(`CREATE TABLE IF NOT EXISTS userinfo (username varchar(255),    passwd varchar(255),usertype integer,credit integer,asset integer)`).run().finalize();
  // db.run("  drop  TABLE useropinfo")
  // db.prepare(`CREATE TABLE IF NOT EXISTS useropinfo (username varchar(255), modelername varchar(255),
  //   imagenames varchar(255), asseturl varchar(255), uploadtime varchar(64),downloadtime varchar(64))`).run().finalize();

  db.prepare(`CREATE TABLE IF NOT EXISTS useropinfo ( id integer primary key autoincrement,
    username varchar(255), modelername varchar(255),
    asseturl varchar(255), uploadtime varchar(64),downloadtime varchar(64),Score double, isscore int)`).run().finalize();

  // db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`, 'useropinfo', (err, row) => {
  //     console.log(row)
  //   // // var sql="delete FROM userinfo where username='modeler'"
  //   // // db.run(sql)
  //   // db.all("SELECT * FROM userinfo",function(err,row){
  //   // // console.log(row[0]);
  //   //  console.log('查询结果是： ', row)
  //   //     console.log('转成JSON后的结果是：',JSON.stringify(row));
  //   // })
    
  //     // db.run('INSERT INTO userinfo(username, passwd, usertype, credit, asset) VALUES ("consultant", "consultant", 3, 100, 21222)')
  // });

  // db.close();
});

db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name=?`, 'useropinfo', (err, row) => {
  console.log(row)
// // var sql="delete FROM userinfo where username='modeler'"
// // db.run(sql)
db.all("SELECT * FROM useropinfo",function(err,row){
// console.log(row[0]);
 
 for (var i=0; i<row.length; i++)
 {
    console.log('查询结果是：username= ', row[i].username, " modelername=", row[i].modelername)
 }

 console.log('转成JSON后的结果是22：',JSON.stringify(row));
  
})

  // db.run('INSERT INTO userinfo(username, passwd, usertype, credit, asset) VALUES ("consultant", "consultant", 3, 100, 21222)')
})

// db.run('INSERT INTO userinfo(username, passwd, usertype, credit, asset) VALUES ("user", "user", 1, 100, 21222)')
// db.run('INSERT INTO userinfo(username, passwd, usertype, credit, asset) VALUES ("modeler", "modeler", 2, 100, 21222)')
// db.run('INSERT INTO userinfo(username, passwd, usertype, credit, asset) VALUES ("consultant", "consultant", 3, 100, 21222)')
server.listen(process.env.HOST,function () {
  console.log('已经启动 port '+process.env.HOST);
})


// app.listen(process.env.HOST, () => {
//   console.log(`Server started on port ${process.env.HOST}`);
// });
// db.each("select * from test where name='zhangsan'",function(err,row){
//   console.log(row);
// })

// var tbl="userinfo";
// db.get( 'SELECT name FROM sqlite_master WHERE type=table AND name=?', tbl, ( err, row ) => {
//   if ( err ) { console.error( err ); }
// } );

// var db = new sqlite3.Database(path,function() {
//   db.run("  CREATE TABLE userinfo (username varchar(255),    passwd varchar(255),usertype integer,credit integer,asset integer);",function(){
//     console.log("create table succeed")
//     // db.run("insert into test values('hello,world')",function(){
//     //   db.all("select * from test",function(err,res){
//     //     if(!err)
//     //       console.log(JSON.stringify(res));
//     //     else
//     //       console.log(err);
//     //   });
//     // })
//   });
// });

// var tblname="userinfo"
// var cnt=0
// db.each("SELECT name FROM sqlite_master WHERE type='table' AND name='userinfo'",function(err,row){
//   cnt=cnt+1;
//   console.log(row);
// })

// console.log("cnt="+cnt);
// if (0 == cnt)
// {
//   db.run("  CREATE TABLE {userinfo} (username varchar(255),    passwd varchar(255),usertype integer,credit integer,asset integer);")
//   cnt
// }
// const data = execSync(`python3 ${path}`);
// console.log(`同步调用python脚本：${data.toString()}`);

