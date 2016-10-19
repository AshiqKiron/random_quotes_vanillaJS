(function IIFE () {
  var GLOBALDATA = window.GLOBALDATA = window.GLOBALDATA || {}
  var { jsonP, displayQuote } = GLOBALDATA

  var newQuoteButton = document.getElementById('new-quote-button')
  newQuoteButton.innerText = "New Quote"

  function getNewQuoteData() {
    var urlMinusCallBackName = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp='

    jsonP(urlMinusCallBackName, function (data) {
      var quoteObject = data[0]
      displayQuote({ quote: quoteObject.content, author: quoteObject.title })
    })
  }

  newQuoteButton.addEventListener('click', getNewQuoteData)
  getNewQuoteData()
})()
