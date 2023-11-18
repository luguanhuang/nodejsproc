const request = require('request');
// 定义要 POST 的数据对象
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const postData = {

  username: 'yourUsername',
  
  password: 'yourPassword'
  
  };
  
  
  // 配置 POST 请求的选项
  
  const options = {
  
  url: 'http://47.107.78.77:2020/testdata',
  
  method: 'POST',
  
  headers: {
  
  'Content-Type': 'application/json'
  
  },
  
  json: true,
  
  body: postData
  
  };
  
  
  // 发送 POST 请求并处理响应
  
  request(options, function(error, response, body) {
    console.log(response)
  if (!error && response.statusCode === 200) {
  
  console.log(body);
  
  } else {
  
  console.error(error);
  
  }
  
  });