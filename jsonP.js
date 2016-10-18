(function IIFE () {
  var GLOBALDATA = window.GLOBALDATA = window.GLOBALDATA || {}

  GLOBALDATA.jsonP = function (url, callBack) {
    // if we were to use the same callback name we would get the same data
    // by providing a different callback name each time we get new data
    var headTag = document.getElementsByTagName('head')[0]
    var Id = Math.floor(Math.random() * 10000)
    var uniqFetchQuoteCallBack = 'fetchQuoteCallBack' + Id
     // callBack needs to be exposed globaly
    window[uniqFetchQuoteCallBack] = function (data) {
      window[uniqFetchQuoteCallBack] = undefined
      headTag.removeChild(script)
      if (callBack) {
        callBack(data)
      }
    }

    var script = document.createElement('script')
    script.src = url + uniqFetchQuoteCallBack
    headTag.appendChild(script)
  }
})()
