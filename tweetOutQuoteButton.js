(function IIFE () {
  var GLOBALDATA = window.GLOBALDATA = window.GLOBALDATA || {}

  var script = document.createElement('script')
  script.src = 'http://platform.twitter.com/widgets.js'
  document.getElementsByTagName('head')[0].appendChild(script)

  var tweetButton = document.createElement('a')
  tweetButton.innerText = 'Tweet'
  tweetButton.id = 'tweet-button'
  console.log(tweetButton.id)
  tweetButton.className = 'twitter-share-button'
  document.getElementById('twitter-button-container').appendChild(tweetButton)

  GLOBALDATA.setTweetButtonHref = function ({ quote, author }) {
    tweetButton.href = "https://twitter.com/intent/tweet?text=Hello%20world"
    console.log(tweetButton.href)
  }
})()
