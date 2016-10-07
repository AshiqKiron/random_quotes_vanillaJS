var root = document.getElementById('root')
function mycallback(data) {
  console.log(data)
  root.innerHTML = data[0].content
}

var script = document.createElement('script')
script.src = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback'

document.getElementsByTagName('head')[0].appendChild(script)
