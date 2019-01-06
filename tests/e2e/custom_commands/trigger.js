exports.command = function(selector, event, key) {
  return this.execute(function(selector, event, key) {
    let e = document.createEvent('HTMLEvents')
    e.initEvent(event, true, true)
    if (key) {
      e.key = key
    }
    document.querySelector(selector).dispatchEvent(e)
  }, [selector, event, key])
}