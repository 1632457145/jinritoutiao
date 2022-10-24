  var date1 = function (date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  month = month >= 10? month : '0' + month
  var day = date.getDate()
  day = day >= 10? day : '0' + day
  // var result = year + '-' + month + '-' + day
  return year + '-' + month + '-' + day
}
var date = new Date()

export {date1}