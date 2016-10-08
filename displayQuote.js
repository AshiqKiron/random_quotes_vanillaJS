(function IIFE () {
  var GLOBALDATA = window.GLOBALDATA = window.GLOBALDATA || {}

  GLOBALDATA.displayQuote = function ({ quote, author }) {
    var quoteContainer = document.getElementById('quote-container')
    var quoteAuthor = document.getElementById('quote-author')

    quoteContainer.innerHTML = quote
    quoteAuthor.innerText = author

    GLOBALDATA.setTweetButtonHref({ quote: quoteContainer.innerText, author })
  }
})()
