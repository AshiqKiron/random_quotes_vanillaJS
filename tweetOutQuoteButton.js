(function IIFE () {
  var GLOBALDATA = window.GLOBALDATA = window.GLOBALDATA || {}

  var script = document.createElement('script')
  script.src = 'http://platform.twitter.com/widgets.js'
  document.getElementsByTagName('head')[0].appendChild(script)

  var tweetButton = document.createElement('a')
  tweetButton.innerText = 'Tweet'
  tweetButton.className = 'twitter-share-button'
  tweetButton.href = 'https://twitter.com/share'
  document.getElementById('twitter-button-container').appendChild(tweetButton)
})()
