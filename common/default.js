// stockを持たせたローカルストレージ
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

// 「カートに入れる」ボタンを押したitemを保存するローカルストレージ
const CART_KEY = 'cart'
let cart = localStorage.getItem(CART_KEY)

function setCart(additionalItems) {

  // ローカルストレージから既存の配列を取得
  let cartStatus = cart ? JSON.parse(cart) : []
  cartStatus.push(additionalItems)
  localStorage.setItem(CART_KEY, JSON.stringify(cartStatus))
}

function getCart(id) {
  const nowCart = localStorage.getItem(CART_KEY)

  
  return nowCart
}

// ページリロード関数
function reloadPage() {
  location.reload();
}