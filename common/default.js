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


// ページリロード関数
function reloadPage() {
  location.reload();
}


// お客様情報を入れるローカルストレージを保存する関数
const CUSTOMER_KEY = 'customer'
let customer = localStorage.getItem(CUSTOMER_KEY)

function setCustomer(customerInfo) {
  let customerStatus = customer ? JSON.parse(customer) : []
  customerStatus.push(customerInfo)
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customerStatus))
}



// トップページ遷移アクション
function pageTransition() {
  location.href = `http://127.0.0.1:5500`
}


document.querySelector('#headerRogo')
  .addEventListener('click', pageTransition)

// headerのカートアイコンにカートに入れたアイテム個数を表示
const cartInfo = JSON.parse(localStorage.getItem(CART_KEY))
console.log(cartInfo)
console.log(cartInfo.length)
if (cartInfo.length > 0) {
  console.log('カート内個数if文内')
  const itemsNum = document.createElement('div')
  itemsNum.innerHTML = `
    <div id="quantityInCart">
      <div>${cartInfo.length}</div>
    </div>
  `

  document.querySelector('#shoppingCartButton').appendChild(itemsNum)
}