let total = 0
let n = 0

function sumItems(array) {
  total = 0
  for (var item of array) {
    if (Array.isArray(item)){
      total += sumItems(item)
    } else {
      total += item
    }
  }
  return total
}


module.exports = sumItems;