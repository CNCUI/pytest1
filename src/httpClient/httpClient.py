import urllib.parse
import urllib.request
data = bytes(urllib.parse.urlencode({'codeid': '9fd309c7-06ef-11e8-a9e4-00ff68cba7bd','username':'yyjs','password':'111111','code':'qxzk'}), encoding='utf8')  
response = urllib.request.urlopen('http://127.0.0.1/login_submit.json', data=data)
print(response.read().strip())