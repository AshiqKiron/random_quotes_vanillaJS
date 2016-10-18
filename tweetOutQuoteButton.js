(function IIFE () {
  var GLOBALDATA = window.GLOBALDATA = window.GLOBALDATA || {}

  // var script = document.createElement('script')
  // script.src = 'http://platform.twitter.com/widgets.js'
  // document.getElementsByTagName('head')[0].appendChild(script)
  function createTwitterButton(quote, author) {
    var script = document.createElement('script')
    script.src = 'http://platform.twitter.com/widgets.js'
    var headTag = document.getElementsByTagName('head')[0]
    headTag.appendChild(script)
    headTag.removeChild(script)

    var tweetButton = document.createElement('a')
    tweetButton.innerText = 'Tweet'
    tweetButton.id = 'tweet-button'
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " -" + author
    console.log(tweetButton.id)
    tweetButton.className = 'twitter-share-button'
    document.getElementById('twitter-button-container').appendChild(tweetButton)
  }

  // aparently you can't just update the default text so we are destroying
  // the whole button yay..... <.<
  function removeTwitterButton() {
    var iframes = document.getElementsByTagName('iframe')
    console.log(iframes.length)
    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i]
      iframe.parentNode.removeChild(iframe)
    }
  }



  GLOBALDATA.setTweetButtonHref = function ({ quote, author }) {
    removeTwitterButton()
    createTwitterButton(quote, author)
  }
})()
