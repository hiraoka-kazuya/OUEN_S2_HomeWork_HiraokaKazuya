const STOCK_KEY = 'stock'
let stock = localStorage.getItem(STOCK_KEY)



function setStock() {
  let list = getItemData()
  const stockStatus = []
  // オブジェクトに在庫項目追加
  list.map((item) => {
    stockStatus.push({...item,stock:3})
  })
  localStorage.setItem(STOCK_KEY, JSON.stringify(stockStatus))
}

function getStock(id) {
  const nowStock = localStorage.getItem(STOCK_KEY)
  const item2 = nowStock.find((e) => e.id === id)
  return item2
}