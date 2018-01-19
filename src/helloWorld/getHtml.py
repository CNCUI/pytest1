import urllib.request
def getHtml(url):
    page = urllib.request.urlopen(url, data = None, timeout = 10)
    html = page.read().decode('utf-8')
    return html
html = getHtml("http://localhost/index.t#findCmsWebsite")
print(html)
