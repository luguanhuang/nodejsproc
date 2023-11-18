import requests
import json

content = '{"field1":"","field2":"","field3":""}'        #准备传递给rundeck作业的参数
payload = json.loads(content)
payload["field1"] = "192.168.8.8"                        #参数1         
payload["field2"] = "\"ls /tmp >> /tmp/testssss.txt\""   #参数2
payload["field3"] = "root"                               #参数3
headers = { 'Content-Type': 'application/json',}

url="http://47.107.78.77:2020/webhook"
content = requests.request("POST", url, headers=headers, data = json.dumps(payload)).content;
print("content=", content);